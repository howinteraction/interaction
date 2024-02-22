import { CuboidCollider, RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export default function StageThreeMetalColumn2d() {
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(
    "assets/images/stage3-picture/metal-column-2d.png",
  );

  return (
    <RigidBody
        position={[18, 20, -30.9]}
        rotation={[0, 1.5, 0]}
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
