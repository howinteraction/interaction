import { CuboidCollider } from "@react-three/rapier";
import * as THREE from "three";

export default function StageThreePicture3() {
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load("assets/images/stage3-picture/cube.png");

  return (
    <mesh>
      <planeGeometry args={[2.5, 2.7]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
      <CuboidCollider args={[1, 1, 0.05]} />
    </mesh>
  );
}
