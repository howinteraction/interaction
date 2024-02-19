import { useSelector, useDispatch } from "react-redux";
import { useFrame, useThree } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

import { setIsCombined } from "../redux/combinationSlice";

import TetrahedronCube from "./models/TetrahedronCube";
import {
  MAX_CAMERA_POSITION_X,
  MAX_CAMERA_POSITION_Y,
  MAX_CAMERA_POSITION_Z,
  MAX_CAMERA_ROTATION_X,
  MAX_CAMERA_ROTATION_Y,
  MAX_CAMERA_ROTATION_Z,
  MIN_CAMERA_POSITION_X,
  MIN_CAMERA_POSITION_Y,
  MIN_CAMERA_POSITION_Z,
  MIN_CAMERA_ROTATION_X,
  MIN_CAMERA_ROTATION_Y,
  MIN_CAMERA_ROTATION_Z,
} from "../utils/constants";

export default function VisualIllusion() {
  const dispatch = useDispatch();
  const { camera } = useThree();
  const isCombined = useSelector((state) => state.imageCombination.isCombined);

  function checkCameraRange() {
    const isInRange =
      camera.position.x > MIN_CAMERA_POSITION_X &&
      camera.position.x < MAX_CAMERA_POSITION_X &&
      camera.position.y > MIN_CAMERA_POSITION_Y &&
      camera.position.y < MAX_CAMERA_POSITION_Y &&
      camera.position.z > MIN_CAMERA_POSITION_Z &&
      camera.position.z < MAX_CAMERA_POSITION_Z &&
      camera.rotation.x > MIN_CAMERA_ROTATION_X &&
      camera.rotation.x < MAX_CAMERA_ROTATION_X &&
      camera.rotation.y > MIN_CAMERA_ROTATION_Y &&
      camera.rotation.y < MAX_CAMERA_ROTATION_Y &&
      camera.rotation.z > MIN_CAMERA_ROTATION_Z &&
      camera.rotation.z < MAX_CAMERA_ROTATION_Z;

    if (isInRange) {
      dispatch(setIsCombined(true));
    }
  }

  useFrame(() => {
    if (!isCombined) {
      checkCameraRange();
    }
  });

  return (
    isCombined && (
      <RigidBody
        scale={1.5}
        position={[-5, 2.5, -2.5]}
        lockRotations
        userData={{ isDraggable: true }}
        name="TetrahedronCube"
        colliders={false}
      >
        <CuboidCollider position={[0.065, 0.35, 0]} args={[0.35, 0.35, 0.35]} />
        <TetrahedronCube />
      </RigidBody>
    )
  );
}
