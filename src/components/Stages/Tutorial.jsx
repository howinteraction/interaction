import { useState, useEffect, useRef, Suspense } from "react";
import { useSelector } from "react-redux";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";

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
  const controlsRef = useRef();

  const { handlePlayerPositionChange } = usePlayerPosition(controlsRef);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoadingComplete(true);
    }, 10000);

    return () => clearTimeout(loadingTimeout);
  }, []);

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
