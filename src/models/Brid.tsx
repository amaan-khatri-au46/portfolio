import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import birdScene from "../assets/3d/bird.glb";
import { useFrame } from "@react-three/fiber";
import { useAppSelector } from "@/store";

export const Bird = () => {
  
  const { birdPostion, birdScale } = useAppSelector(
    (state) => state.folioDetail
  );

  const birdRef: any = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"]?.play();
  }, [actions]);

  useFrame(({ clock, camera }) => {
    const bird: any = birdRef.current;
    if (bird) {
      bird.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

      if (bird.position.x > camera.position.x + 10) {
        bird.rotation.y = Math.PI;
      } else if (bird.position.x < camera.position.x - 10) {
        bird.rotation.y = 0;
      }

      if (bird.rotation.y === 0) {
        bird.position.x += 0.01;
        bird.position.z -= 0.01;
      } else {
        bird.position.x -= 0.01;
        bird.position.z += 0.01;
      }
    }
  });

  return (
    <mesh ref={birdRef} position={birdPostion} scale={birdScale}>
      <primitive object={scene} />
    </mesh>
  );
};
