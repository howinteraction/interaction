import { useSelector } from "react-redux";

import { CuboidCollider, RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export default function StageThreeBridge2dReal() {
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(
    "assets/images/stage3-picture/bridge-real-2d.png",
  );
  const isBridgeIllusion = useSelector(
    (state) => state.threeIllusion.is3DBridge,
  );

  if (!isBridgeIllusion) {
    return (
      <RigidBody
        position={[41.3, 35, -42]}
        rotation={[0, 2, 0]}
        userData={{ isDraggable: true, is2DBridge: true }}
        lockRotations
      >
        <mesh>
          <planeGeometry args={[3, 3]} />
          <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
          <CuboidCollider args={[1.5, 1.5, 0.05]} />
        </mesh>
      </RigidBody>
    );
  }

  return null;
}
