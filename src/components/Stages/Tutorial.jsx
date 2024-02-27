import { useState, useEffect, useRef, Suspense } from "react";
import { useSelector } from "react-redux";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";

import * as THREE from "three";
import { Aim } from "../Styles";

import CameraMotion from "../CameraMotion";
import GameStart from "../GameStart";
import PointerLock from "../PointerLock";
import Player from "../Player";
import Loading from "../Loading";

import Logo from "../models/Tutorial/Logo";
import TutorialBackground from "../models/Tutorial/TutorialBackground";
import TutorialTitle from "../models/Tutorial/TutorialTitle";
import TutorialPortal from "../models/Tutorial/TutorialPortal";

import usePlayerPosition from "../../../hooks/usePlayerPosition";

export default function Tutorial() {
  const isStageCleared = useSelector(
    (state) => state.stageClear.isStageCleared,
  );
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);
  const controlsRef = useRef();
  const audioRef = useRef(null);

  const { handlePlayerPositionChange } = usePlayerPosition(controlsRef);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoadingComplete(true);
    }, 10000);

    const handleUserGesture = () => {
      setAudioStarted(true);
      document.removeEventListener("keydown", handleUserGesture);
      document.removeEventListener("click", handleUserGesture);
    };

    if (loadingComplete) {
      document.addEventListener("keydown", handleUserGesture);
      document.addEventListener("click", handleUserGesture);
    }

    return () => {
      clearTimeout(loadingTimeout);
      document.removeEventListener("keydown", handleUserGesture);
      document.removeEventListener("click", handleUserGesture);
    };
  }, [loadingComplete]);

  useEffect(() => {
    if (audioRef.current && audioStarted) {
      audioRef.current.play();
    }
  }, [audioStarted]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.stop();
    }

    const audioLoader = new THREE.AudioLoader();
    const listener = new THREE.AudioListener();
    const newAudio = new THREE.Audio(listener);
    audioRef.current = newAudio;

    const tutorialBGM = "/assets/audio/tutorial.mp3";

    audioLoader.load(tutorialBGM, (buffer) => {
      if (newAudio && audioStarted) {
        newAudio.setBuffer(buffer);
        newAudio.setLoop(true);
        newAudio.setVolume(0.15);
        newAudio.play();
      }
    });

    return () => {
      if (newAudio) {
        newAudio.stop();
      }
    };
  }, [audioStarted]);

  return (
    <>
      {!isStageCleared && <Aim />}
      {!loadingComplete ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>
          <Canvas>
            <ambientLight intensity={2} />
            <Physics>
              <TutorialBackground />
              <TutorialTitle />
              <TutorialPortal />
              {!isStageCleared && (
                <>
                  <PointerLock controlsRef={controlsRef} />
                  <Player
                    onPositionChange={handlePlayerPositionChange}
                    position={[0, 0, 10]}
                  />
                </>
              )}
            </Physics>
            {isStageCleared && (
              <>
                <CameraMotion
                  targetPosition={[60, 10, 0]}
                  lerpFactor={0.01}
                  targetDirection={[0, 15, 0]}
                />
                <Logo
                  position={[35, 24, 0]}
                  scale={[20, 10, 0]}
                  rotation={[0.33, 1.5, -0.35]}
                />
              </>
            )}
          </Canvas>
          {isStageCleared && <GameStart />}
        </Suspense>
      )}
    </>
  );
}
