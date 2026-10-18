"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeSignalScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 8.4);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const root = new THREE.Group();
    scene.add(root);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.12, 2),
      new THREE.MeshBasicMaterial({ color: 0xd8f76b, wireframe: true, transparent: true, opacity: 0.74 }),
    );
    root.add(core);

    const inner = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.72, 1),
      new THREE.MeshBasicMaterial({ color: 0xb7a9ff, wireframe: true, transparent: true, opacity: 0.5 }),
    );
    root.add(inner);

    const particleCount = 180;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const palette = [new THREE.Color(0xd8f76b), new THREE.Color(0xb7a9ff), new THREE.Color(0x8ee5dc), new THREE.Color(0xff8b5b)];
    for (let index = 0; index < particleCount; index += 1) {
      const radius = 1.6 + Math.random() * 2.35;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const offset = index * 3;
      positions[offset] = radius * Math.sin(phi) * Math.cos(theta);
      positions[offset + 1] = radius * Math.cos(phi);
      positions[offset + 2] = radius * Math.sin(phi) * Math.sin(theta);
      const color = palette[index % palette.length];
      colors[offset] = color.r;
      colors[offset + 1] = color.g;
      colors[offset + 2] = color.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({ size: 0.045, vertexColors: true, transparent: true, opacity: 0.86, sizeAttenuation: true }),
    );
    root.add(particles);

    const ringMaterial = new THREE.LineBasicMaterial({ color: 0x8ee5dc, transparent: true, opacity: 0.26 });
    const ringA = new THREE.LineLoop(new THREE.TorusGeometry(2.05, 0.006, 8, 96), ringMaterial);
    ringA.rotation.set(0.55, 0.3, 0.15);
    root.add(ringA);
    const ringB = new THREE.LineLoop(new THREE.TorusGeometry(2.62, 0.004, 8, 96), new THREE.LineBasicMaterial({ color: 0xb7a9ff, transparent: true, opacity: 0.2 }));
    ringB.rotation.set(-0.35, 0.8, -0.3);
    root.add(ringB);

    const pointer = { x: 0, y: 0 };
    let frame = 0;
    let destroyed = false;

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const resize = () => {
      const width = mount.clientWidth || 500;
      const height = mount.clientHeight || 520;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const animate = (time: number) => {
      if (destroyed) return;
      frame = window.requestAnimationFrame(animate);
      const elapsed = time * 0.00035;
      root.rotation.y = elapsed * 0.95 + pointer.x * 0.05;
      root.rotation.x = Math.sin(elapsed * 0.8) * 0.13 + pointer.y * 0.035;
      core.rotation.z = elapsed * 0.5;
      inner.rotation.y = -elapsed * 0.9;
      particles.rotation.y = -elapsed * 0.28;
      ringA.rotation.z = elapsed * 0.75;
      ringB.rotation.x = elapsed * 0.5;
      camera.position.x += (pointer.x * 0.22 - camera.position.x) * 0.025;
      camera.position.y += (-pointer.y * 0.15 - camera.position.y) * 0.025;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    frame = window.requestAnimationFrame(animate);

    return () => {
      destroyed = true;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      particleGeometry.dispose();
      (particles.material as THREE.Material).dispose();
      core.geometry.dispose();
      (core.material as THREE.Material).dispose();
      inner.geometry.dispose();
      (inner.material as THREE.Material).dispose();
      ringA.geometry.dispose();
      ringA.material.dispose();
      ringB.geometry.dispose();
      ringB.material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div className="three-scene" ref={mountRef} aria-label="Animated network of connected signals" role="img" />;
}
