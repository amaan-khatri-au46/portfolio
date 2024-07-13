import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import planeScene from "../assets/3d/plane.glb";
import { useAppSelector } from "@/store";

export function Plane({ ...props }: any) {
  const ref = useRef();
  const { isRotating } = useAppSelector((state) => state.folioDetail);
  const { scene, animations } = useGLTF(planeScene);
  const { actions }: any = useAnimations(animations, ref);
  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
}
