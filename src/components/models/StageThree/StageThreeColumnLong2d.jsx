import { CuboidCollider, RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export default function StageThreeColumnLong2d() {
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(
    "assets/images/stage3-picture/column-long-2d.png",
  );

  return (
    <RigidBody
        position={[28.4, 1.5, -14.5]}
        rotation={[0, 0.2, 0]}
        userData={{ isDraggable: true }}
        lockRotations
      >
        <mesh>
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
          <CuboidCollider args={[0.5, 0.5, 0.05]} />
        </mesh>
      </RigidBody>
  );
}
