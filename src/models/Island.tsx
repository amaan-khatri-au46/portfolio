import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a } from "@react-spring/three";
import * as THREE from "three";
import islandScene from "../assets/3d/island.glb";
import { useFrame, useThree } from "@react-three/fiber";
import { useAppDispatch, useAppSelector } from "@/store";
import { setCurrentStage, setsetIsRotating } from "@/store/slices/folioSlice";
import { adujustIslandScreen } from "@/shared/utils/Common";

export const Island = () => {
  const islandRef: any = useRef();
  const [islandScale, islandPosition]: any = adujustIslandScreen();
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene);
  const { isRotating } = useAppSelector((state) => state.folioDetail);
  const dispacth = useAppDispatch();
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
    dispacth(setsetIsRotating(true));
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    lastX.current = clientX;
  };

  const handlePointerUp = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
    dispacth(setsetIsRotating(false));
  };

  const handlePointerMove = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotating) {
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;

      const delta = (clientX - lastX.current) / viewport.width;

      islandRef.current.rotation.y += delta * 0.01 * Math.PI;

      lastX.current = clientX;

      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) dispacth(setsetIsRotating(true));

      islandRef.current.rotation.y += 0.005 * Math.PI;
      rotationSpeed.current = 0.007;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) dispacth(setsetIsRotating(true));

      islandRef.current.rotation.y -= 0.005 * Math.PI;
      rotationSpeed.current = -0.007;
    }
  };

  const handleKeyUp = (event: any) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      dispacth(setsetIsRotating(false));
    }
  };

  const handleTouchStart = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    dispacth(setsetIsRotating(true));

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };

  const handleTouchEnd = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    dispacth(setsetIsRotating(false));
  };

  const handleTouchMove = (e: any) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;

      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchend", handleTouchEnd);
    canvas.addEventListener("touchmove", handleTouchMove);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = islandRef.current.rotation.y;
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          dispacth(setCurrentStage(4));
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          dispacth(setCurrentStage(3));
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          dispacth(setCurrentStage(2));
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          dispacth(setCurrentStage(1));
          break;
        default:
          dispacth(setCurrentStage(null));
      }
    }
  });

  return (
    <a.group
      ref={islandRef}
      position={islandPosition}
      scale={islandScale}
      rotation={[0.1, 4.7077, 0]}
    >
      <mesh
        geometry={(nodes.polySurface944_tree_body_0 as THREE.Mesh).geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={(nodes.polySurface945_tree1_0 as THREE.Mesh).geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={(nodes.polySurface946_tree2_0 as THREE.Mesh).geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={(nodes.polySurface947_tree1_0 as THREE.Mesh).geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={(nodes.polySurface948_tree_body_0 as THREE.Mesh).geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={(nodes.polySurface949_tree_body_0 as THREE.Mesh).geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={(nodes.pCube11_rocks1_0 as THREE.Mesh).geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
};

useGLTF.preload(islandScene);
