import { CuboidCollider, RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export default function StageThreeMetalColumnLong2d() {
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(
    "assets/images/stage3-picture/metal-column-long-2d.png",
  );

  return (
    <RigidBody
        position={[14.9, 16, -23]}
        rotation={[0, 0, 0]}
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
