import { CuboidCollider, RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export default function StageThreeColumn2d() {
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(
    "assets/images/stage3-picture/column-2d.png",
  );

  return (
    <RigidBody
        position={[-35.8, -10, -20.6]}
        rotation={[0, 11.5, 0]}
        userData={{ isDraggable: true }}
        lockRotations
      >
        <mesh>
          <planeGeometry args={[3.5, 3.5]} />
          <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
          <CuboidCollider args={[1.8, 1.8, 0.05]} />
        </mesh>
      </RigidBody>
  );
}
