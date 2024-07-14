import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import sakura from "../assets/sakura.mp3";
import planeSound from "../assets/plane.mp3";
import { soundoff, soundon } from "../assets/icons";
import { Loader } from "@/shared/components/Loader";
import { Bird, Plane, Island, Sky, ProfileInfo } from "@/models";
import { adujustIslandScreen, adujustPlaneScreen } from "@/shared/utils/Common";
import { useAppDispatch, useAppSelector } from "@/store";
import { setIsPlayingMusic } from "@/store/slices/folioSlice";

export const Home = () => {
  const { currentStage, isRotating, isPlayingMusic, theme } = useAppSelector(
    (state) => state.folioDetail
  );
  const dispatch = useAppDispatch();
  const audioRef = useRef(
    isRotating ? new Audio(planeSound) : new Audio(sakura)
  );
  audioRef.current.volume = 0.9;
  audioRef.current.loop = true;

  useEffect(() => {
    // setIconVisible(false)
    if (audioRef.current) {
      audioRef.current.pause();
    }

    audioRef.current = new Audio(isRotating ? planeSound : sakura);
    audioRef.current.volume = 0.9;
    audioRef.current.loop = true;

    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [isRotating, isPlayingMusic]);

  const [biplaneScale, biplanePosition] = adujustPlaneScreen();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <ProfileInfo />}
      </div>
      <Canvas
        className={`w-full h-screen  ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        } ${theme == "dark-theme" ? "bg-[#333] " : "bg-transparent"}`}
        camera={{ near: 0.1, far: 1000 }}
        frameloop="always"
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            color="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Bird />
          {theme === "light-theme" && <Sky />}
          <Island />
          <Plane
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => {
            dispatch(setIsPlayingMusic(!isPlayingMusic));
          }}
          className="w-10 h-10 cursor-pointer object-contain"
        />
      </div>
    </section>
  );
};
