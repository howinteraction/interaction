import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

import { setIsAttached } from "../../../redux/twoIllusionSlice";

import TriangleLight from "./TriangleLight";
import StageTwoPortal from "./StageTwoPortal";

export default function StageTwoGoal() {
  const colliderRef = useRef();
  const dispatch = useDispatch();
  const isAttached = useSelector((state) => state.twoIllusion.isAttached);

  const handleCollisionEnter = ({ other }) => {
    if (
      other.rigidBodyObject &&
      other.rigidBodyObject.name === "TetrahedronCube"
    ) {
      dispatch(setIsAttached(true));
    }
  };

  return (
    <>
      {!isAttached && (
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
        <StageTwoPortal />
      </RigidBody>
    </>
  );
}
