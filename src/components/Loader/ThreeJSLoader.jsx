"use client";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const ThreeJSLoader = () => {
  const meshRef = useRef();
  const ringRef1 = useRef();
  const ringRef2 = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (meshRef.current) {
      meshRef.current.rotation.z = time * 2;
    }
    
    if (ringRef1.current) {
      ringRef1.current.rotation.z = time * 1.5;
      ringRef1.current.scale.setScalar(1 + Math.sin(time * 3) * 0.1);
    }
    
    if (ringRef2.current) {
      ringRef2.current.rotation.z = -time * 1.8;
      ringRef2.current.scale.setScalar(1.2 + Math.cos(time * 2.5) * 0.1);
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Main spinning ring */}
      <mesh ref={meshRef}>
        <torusGeometry args={[1, 0.1, 16, 32]} />
        <meshBasicMaterial color="#FEFE5B" />
      </mesh>
      
      {/* Inner pulsing ring */}
      <mesh ref={ringRef1}>
        <torusGeometry args={[0.6, 0.05, 16, 32]} />
        <meshBasicMaterial color="#FEFE5B" transparent opacity={0.6} />
      </mesh>
      
      {/* Outer pulsing ring */}
      <mesh ref={ringRef2}>
        <torusGeometry args={[1.4, 0.03, 16, 32]} />
        <meshBasicMaterial color="#FEFE5B" transparent opacity={0.4} />
      </mesh>
      
      {/* Center dot */}
      <mesh>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="#FEFE5B" />
      </mesh>
    </group>
  );
};

export default ThreeJSLoader;
