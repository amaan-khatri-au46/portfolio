import { useRef } from "react";
import skyScene from "../assets/3d/sky.glb";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useAppSelector } from "@/store";

export const Sky = () => {
  const { isRotating } = useAppSelector((state) => state.folioDetail);
  const { scene } = useGLTF(skyScene);
  const skyRef = useRef<any>(null);

  useFrame((_, delta) => {
    if (isRotating && skyRef.current) {
      skyRef.current.rotation.y += 0.25 * delta;
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={scene} />
    </mesh>
  );
};
