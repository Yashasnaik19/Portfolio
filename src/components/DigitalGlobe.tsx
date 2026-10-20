import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface DigitalGlobeProps {
  onLoaded?: () => void;
}

export const DigitalGlobe: React.FC<DigitalGlobeProps> = ({ onLoaded }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webGLFailed, setWebGLFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(15);
  const [statusMessage, setStatusMessage] = useState('Allocating WebGL Buffer...');

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect mobile viewport and touch capabilities
    const isMobile =
      typeof window !== 'undefined' &&
      (window.innerWidth < 768 || window.matchMedia('(max-width: 768px)').matches);

    // 1. WebGL Capability Detection
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        throw new Error('WebGL hardware acceleration unavailable');
      }
    } catch {
      setWebGLFailed(true);
      setIsLoading(false);
      onLoaded?.();
      return;
    }

    // Staged progress milestones
    setLoadingProgress(35);
    setStatusMessage('Configuring Camera & Scene Matrix...');

    // 2. Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 240;

    // Cap DPR at 2 (and 1.5 on mobile) to conserve GPU and battery
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: !isMobile, // Disable MSAA on mobile for optimal fill-rate
        powerPreference: 'high-performance',
      });
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;
      renderer.setPixelRatio(dpr);
      renderer.setSize(width, height);
      container.appendChild(renderer.domElement);
    } catch {
      setWebGLFailed(true);
      setIsLoading(false);
      onLoaded?.();
      return;
    }

    setLoadingProgress(60);
    setStatusMessage(isMobile ? 'Building Mobile Low-Poly Geometries...' : 'Building High-Density 3D Wireframe...');

    // 3. Polygon and Vertex Optimization:
    // On desktop: 32x32 sphere segments (2,048 triangles), 135 constellation nodes, 64 ring segments
    // On mobile: 12x12 sphere segments (288 triangles, ~86% polygon reduction), 45 constellation nodes (~67% vertex reduction), 24 ring segments
    const sphereSegments = isMobile ? 12 : 32;
    const nodeCount = isMobile ? 45 : 135;
    const connectionThreshold = isMobile ? 26 : 33;
    const radius = 75;

    // Root Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 3a. Inner Wireframe Sphere
    const sphereGeo = new THREE.SphereGeometry(radius, sphereSegments, sphereSegments);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x15355a,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireframeSphere = new THREE.Mesh(sphereGeo, wireframeMat);
    globeGroup.add(wireframeSphere);

    // 3b. Network Constellation Points
    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeCoords: THREE.Vector3[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      nodePositions[i * 3] = x;
      nodePositions[i * 3 + 1] = y;
      nodePositions[i * 3 + 2] = z;
      nodeCoords.push(new THREE.Vector3(x, y, z));
    }

    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    const nodeMat = new THREE.PointsMaterial({
      color: 0x00e5ff,
      size: isMobile ? 2.5 : 2.8,
      transparent: true,
      opacity: 0.9,
    });
    const nodePoints = new THREE.Points(nodeGeo, nodeMat);
    globeGroup.add(nodePoints);

    setLoadingProgress(85);
    setStatusMessage('Tracing Telemetry Connection Arcs...');

    // 3c. Cyber Connection Lines
    const lineIndices: number[] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (nodeCoords[i].distanceTo(nodeCoords[j]) < connectionThreshold) {
          lineIndices.push(
            nodeCoords[i].x, nodeCoords[i].y, nodeCoords[i].z,
            nodeCoords[j].x, nodeCoords[j].y, nodeCoords[j].z
          );
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(lineIndices, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x4187ff,
      transparent: true,
      opacity: 0.28,
    });
    const networkLines = new THREE.LineSegments(lineGeo, lineMat);
    globeGroup.add(networkLines);

    // 3d. Atmosphere Ring
    const ringGeo = new THREE.RingGeometry(radius + 1, radius + 2.5, isMobile ? 24 : 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.16,
    });
    const atmosphereRing = new THREE.Mesh(ringGeo, ringMat);
    atmosphereRing.rotation.x = Math.PI / 2.3;
    globeGroup.add(atmosphereRing);

    // 4. Pointer Interaction and Motion Reduction
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let targetRotationX = 0.2;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x * 0.45;
      mouseY = y * 0.45;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // 5. Responsive Resize Handler
    const handleResize = () => {
      if (!container || !renderer) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // 6. Pause Rendering when Tab is Hidden or Off-screen
    let isVisible = true;
    let isTabActive = !document.hidden;

    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisible = entry ? entry.isIntersecting : true;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 7. Animation Loop with Visibility Gating
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Halt rendering calculations when hidden
      if (!isVisible || !isTabActive) {
        return;
      }

      if (!prefersReducedMotion) {
        targetRotationY += 0.0028;
        globeGroup.rotation.y += (targetRotationY + mouseX - globeGroup.rotation.y) * 0.05;
        globeGroup.rotation.x += (targetRotationX - mouseY - globeGroup.rotation.x) * 0.05;
      } else {
        globeGroup.rotation.y = 0.4;
        globeGroup.rotation.x = 0.2;
      }

      renderer.render(scene, camera);
    };

    // Complete loading milestone
    setLoadingProgress(100);
    setStatusMessage('Constellation Synchronized');
    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoaded?.();
    }, 280);

    animate();

    // 8. Robust Memory Disposal on Unmount (Zero Leaks)
    return () => {
      clearTimeout(timer);
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);

      // Recursive scene disposal
      globeGroup.traverse((object) => {
        const obj = object as THREE.Mesh | THREE.LineSegments | THREE.Points;
        if (obj.geometry) {
          obj.geometry.dispose();
        }
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach((mat) => mat.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });

      sphereGeo.dispose();
      wireframeMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();

      renderer.dispose();
      renderer.forceContextLoss();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [onLoaded]);

  // Clean 2D fallback if WebGL is unavailable or fails
  if (webGLFailed) {
    return (
      <div
        className="relative w-full h-[340px] sm:h-[400px] flex items-center justify-center rounded-2xl border border-slate-800 bg-[#0B1220]/70 p-6 text-center"
        role="img"
        aria-label="2D static visualization of cybersecurity network"
      >
        <div className="space-y-3 max-w-xs">
          <div className="w-16 h-16 mx-auto rounded-full border-2 border-dashed border-cyan-400 flex items-center justify-center bg-cyan-400/5">
            <div className="w-8 h-8 rounded-full bg-cyan-400/20 border border-cyan-400/50"></div>
          </div>
          <h3 className="font-heading font-semibold text-sm text-[#F4F7FB]">
            Network Defense Node
          </h3>
          <p className="font-mono text-xs text-slate-400">
            Hardware 3D acceleration inactive. High-contrast 2D view enabled.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[340px] sm:h-[400px] lg:h-[460px] flex items-center justify-center">
      {/* Clean Loading Indicator with Progress */}
      {isLoading && (
        <div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3.5 bg-[#070B14]/80 backdrop-blur-md rounded-2xl p-6 transition-opacity duration-300"
          role="status"
          aria-live="polite"
        >
          {/* Cyber Circular Spinner */}
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-2 border-cyan-400/20 border-t-cyan-400 animate-spin"></div>
            <span className="absolute font-mono text-[10px] text-cyan-300 font-bold">
              {loadingProgress}%
            </span>
          </div>

          {/* Progress Bar & Status Text */}
          <div className="w-full max-w-xs space-y-1.5 text-center">
            <div className="flex justify-between items-center text-[11px] font-mono text-slate-300">
              <span className="truncate">{statusMessage}</span>
              <span className="text-cyan-400 font-bold">{loadingProgress}%</span>
            </div>
            <div className="w-full h-1.5 bg-[#101A2B] border border-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-200"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Three.js Canvas Container (touch-action pan-y ensures mobile page scroll is fluid) */}
      <div
        ref={mountRef}
        className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing touch-pan-y"
        aria-label="Interactive 3D Cybersecurity Network Globe"
        role="region"
      />
    </div>
  );
};
