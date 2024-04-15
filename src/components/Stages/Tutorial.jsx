import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { useMediaQuery } from "react-responsive";

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
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
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

  if (isMobile) {
    return (
      <>
        <div>
          <p>본 어플리케이션은 PC 환경에 최적화 되어 있습니다.</p>
          <p>모바일 환경에서는 원활한 사용이 어려우니 PC로 접속 바랍니다.</p>
        </div>
        <div>
          <a href="https://github.com/howinteraction/interaction">
            리드미 읽으러 가기
          </a>
        </div>
      </>
    );
  }

  return (
    <>
      {!isStageCleared && <Aim />}
      {!loadingComplete ? (
        <Loading />
      ) : (
        <>
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
        </>
      )}
    </>
  );
}
