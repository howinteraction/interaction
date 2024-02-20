import { useRef } from "react";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import PropTypes from "prop-types";

import TriangleLight from "./TriangleLight";
import StageTwoPortal from "./StageTwoPortal";

export default function StageTwoGoal({ isCollided, setIsCollided }) {
  const colliderRef = useRef();

  const handleCollisionEnter = ({ other }) => {
    if (
      other.rigidBodyObject &&
      other.rigidBodyObject.name === "TetrahedronCube"
    ) {
      setIsCollided(true);
    }
  };

  return (
    <>
      {!isCollided && (
        <>
          <RigidBody>
            <CuboidCollider
              type="fixed"
              args={[0.8, 10, 6]}
              position={[50.2, 4, 0]}
            />
          </RigidBody>
          <RigidBody
            type="fixed"
            position={[47, 0, 2]}
            scale={2}
            colliders={false}
            rotation={[0, (Math.PI / 2) * 3, 0]}
            ref={colliderRef}
            onCollisionEnter={handleCollisionEnter}
          >
            <CuboidCollider
              args={[0.25, 0.8, 0.05]}
              position={[-0.05, 0, -0.1]}
            />
            <TriangleLight />
          </RigidBody>
        </>
      )}
      <RigidBody
        type="fixed"
        position={[51, 4, 2]}
        scale={2}
        colliders={false}
        rotation={[0.53, 0, 1.65]}
      >
        <StageTwoPortal isCollided={isCollided} />
      </RigidBody>
    </>
  );
}

StageTwoGoal.propTypes = {
  isCollided: PropTypes.bool.isRequired,
  setIsCollided: PropTypes.func.isRequired,
};
