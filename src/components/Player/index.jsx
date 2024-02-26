import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useFrame } from "@react-three/fiber";
import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier";
import PropTypes from "prop-types";

import * as RAPIER from "@dimforge/rapier3d-compat";
import * as THREE from "three";

import usePlayerControl from "../../../hooks/usePlayerControl";
import { MOVE_SPEED } from "../../utils/constants";

const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();

export default function Player({ onPositionChange, position }) {
  const playerRef = useRef();
  const [initialDirection, setInitialDirection] = useState(false);
  const currentStage = useSelector((state) => state.stages.stageLevel);
  const { forward, backward, left, right, jump } = usePlayerControl();

  const rapier = useRapier();

  const doJump = () => {
    playerRef.current.setLinvel({ x: 0, y: 6, z: 0 });
  };

  useFrame((state) => {
    if (!playerRef.current) {
      return;
    }

    if (currentStage === 2 && !initialDirection) {
      state.camera.lookAt(new THREE.Vector3(60, 12, 6.5));
      setInitialDirection(true);
    }

    const velocity = playerRef.current.linvel();

    frontVector.set(0, 0, backward - forward);
    sideVector.set(left - right, 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(MOVE_SPEED)
      .applyEuler(state.camera.rotation);

    playerRef.current.wakeUp();
    playerRef.current.setLinvel({
      x: direction.x,
      y: velocity.y,
      z: direction.z,
    });

    const { world } = rapier;
    const ray = world.castRay(
      new RAPIER.Ray(playerRef.current.translation(), { x: 0, y: -2, z: 0 }),
    );
    const grounded = ray && ray.collider && Math.abs(ray.toi) <= 3;

    if (jump && grounded) doJump();

    const { x, y, z } = playerRef.current.translation();

    if (onPositionChange) {
      onPositionChange({ x, y, z });
    }

    state.camera.position.set(x, y, z);
  });

  return (
    <RigidBody
      colliders={false}
      mass={1}
      ref={playerRef}
      lockRotations
      position={position}
    >
      <mesh>
        <capsuleGeometry args={[1, 1]} />
        <CapsuleCollider args={[1, 1]} />
      </mesh>
    </RigidBody>
  );
}

Player.propTypes = {
  onPositionChange: PropTypes.func.isRequired,
  position: PropTypes.arrayOf(PropTypes.number),
};

Player.defaultProps = {
  position: [0, 0, 0],
};
