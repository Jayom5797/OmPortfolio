import React, { Suspense, useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useLoader, useThree, extend } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls as ThreeOrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
extend({ OrbitControls: ThreeOrbitControls });

// For TypeScript: allow <orbitControls /> as a JSX element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: any;
    }
  }
}


interface LogoWallpaper3DProps {
  theme: 'dark' | 'light';
}

const LogoModel: React.FC<{ theme: 'dark' | 'light' }> = ({ theme }) => {
  const axis = useMemo(() => new THREE.Vector3(0, 1, 0), []);
  const speed = 0.03;
  const obj = useLoader(OBJLoader, '/assets/portfolio/logo.obj');
  const meshRef = useRef<any>();
  const color = theme === 'dark' ? '#fff' : '#222'; // dark gray for light theme

  useEffect(() => {
    obj.traverse((child: any) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          color,
          metalness: theme === 'light' ? 0.7 : 0.2,
          roughness: theme === 'light' ? 0.4 : 0.7,
          emissive: theme === 'light' ? '#222' : '#333',
          emissiveIntensity: theme === 'light' ? 0.05 : 0.1,
        });
      }
    });
  }, [obj, color, theme]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotateOnAxis(axis, speed);
    }
  });

  return <primitive ref={meshRef} object={obj} scale={90} position={[0, 0, 0]} />;
};

const Controls = () => {
  const { camera, gl } = useThree();
  const controls = useRef<any>();
  useFrame(() => controls.current && controls.current.update());
  // @ts-ignore
  return (
    <orbitControls
      ref={controls}
      args={[camera, gl.domElement]}
      enablePan={false}
      enableZoom={false}
    />
  );
};

const LogoWallpaper3D: React.FC<LogoWallpaper3DProps> = ({ theme }) => {
  const bgColor = theme === 'dark' ? '#111' : '#fff';
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} style={{ width: '100vw', height: '100vh', background: bgColor }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} />
        <Suspense fallback={null}>
          <LogoModel theme={theme} />
        </Suspense>
        <Controls />
      </Canvas>
    </div>
  );
};

export default LogoWallpaper3D;
