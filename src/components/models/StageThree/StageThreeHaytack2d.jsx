import { useSelector } from "react-redux";

import { CuboidCollider, RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export default function StageThreeHaytack2d() {
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(
    "assets/images/stage3-picture/haystack.png",
  );
  const isThreeIllusion = useSelector(
    (state) => state.threeIllusion.is3DObject,
  );

  if (!isThreeIllusion) {
    return (
      <RigidBody
        position={[4.5, -12, -27.3]}
        userData={{ isDraggable: true, is2DCube: true }}
        lockRotations
      >
        <mesh>
          <planeGeometry args={[2, 2.5]} />
          <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
          <CuboidCollider args={[1, 1, 0.05]} />
        </mesh>
      </RigidBody>
    );
  }

  return null;
}
