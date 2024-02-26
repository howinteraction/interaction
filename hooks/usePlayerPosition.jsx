import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as THREE from "three";
import { setIsStageCleared } from "../src/redux/stageClearSlice";

const usePlayerPosition = (controlsRef) => {
  const playerPositionRef = useRef();
  const dispatch = useDispatch();
  const currentStage = useSelector((state) => state.stages.stageLevel);

  const clearCondition = {
    stage0: {
      portalPosition: new THREE.Vector3(-1, 0, -2),
      portalRadius: 3,
    },
    stage1: {
      portalPosition: new THREE.Vector3(50, 8, 2.5),
      portalRadius: 6,
    },
    stage2: {
      portalPosition: new THREE.Vector3(67, 1.5, 0.3),
      portalRadius: 2,
    },
    stage3: {
      portalPosition: new THREE.Vector3(92, 43, -18),
      portalRadius: 3,
    },
  };

  const checkClearCondition = (position) => {
    const { portalPosition, portalRadius } =
      clearCondition[`stage${currentStage}`];
    const playerPosition = new THREE.Vector3(
      position.x,
      position.y,
      position.z,
    );
    const distanceToPortal = playerPosition.distanceTo(portalPosition);

    if (distanceToPortal < portalRadius) {
      dispatch(setIsStageCleared(true));
      if (controlsRef && controlsRef.current) {
        controlsRef.current.unlock();
      }
    }
  };

  const handlePlayerPositionChange = (position) => {
    playerPositionRef.current = position;
    checkClearCondition(playerPositionRef.current);
  };

  return { handlePlayerPositionChange };
};

export default usePlayerPosition;
