import { CuboidCollider, RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export default function StageThreeBridge2d() {
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(
    "assets/images/stage3-picture/bridge-2d.png",
  );

  return (
    <RigidBody
      position={[44.5, 35, -33]}
      rotation={[0.3, 2, 0]}
      userData={{ isDraggable: true }}
      lockRotations
    >
      <mesh>
        <planeGeometry args={[3, 3]} />
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
        <CuboidCollider args={[1.5, 1.5, 0.07]} />
      </mesh>
    </RigidBody>
  );
}
