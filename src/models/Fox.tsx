import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Group } from "three";

interface FoxProps {
  currentAnimation: string;
  position: any;
  rotation: any;
  scale: any;
}

import scene from "../assets/3d/fox.glb";

export const Fox: React.FC<FoxProps> = ({ currentAnimation, ...props }) => {
  const group = useRef<Group>(null);
  const { nodes, materials, animations }: any = useGLTF(scene);
  const { actions }: any = useAnimations(animations, group.current!);

  useEffect(() => {
    Object.values(actions).forEach((action: any) => action?.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes?.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes?.Object_7?.geometry}
          material={materials?.PaletteMaterial001}
          skeleton={nodes?.Object_7?.skeleton}
        />
        <skinnedMesh
          name="Object_8"
          geometry={nodes?.Object_8?.geometry}
          material={materials?.PaletteMaterial001}
          skeleton={nodes?.Object_8?.skeleton}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes?.Object_9?.geometry}
          material={materials?.PaletteMaterial001}
          skeleton={nodes?.Object_9?.skeleton}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes?.Object_10?.geometry}
          material={materials?.PaletteMaterial001}
          skeleton={nodes?.Object_10?.skeleton}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes?.Object_11?.geometry}
          material={materials?.PaletteMaterial001}
          skeleton={nodes?.Object_11?.skeleton}
        />
      </group>
    </group>
  );
};
