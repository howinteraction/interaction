import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as THREE from "three";
import { setIsStageCleared } from "../src/redux/stageClearSlice";

const usePlayerPosition = (controlsRef) => {
  const playerPositionRef = useRef();
  const dispatch = useDispatch();
  const currentStage = useSelector((state) => state.stages.stageLevel);

  const clearCondition = {
    stage1: {
      portalPosition: new THREE.Vector3(-19.5, 6, 0),
      portalRadius: 5,
    },
    stage2: {
      portalPosition: new THREE.Vector3(67, 1.5, 0.3),
      portalRadius: 2,
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
