import * as THREE from "three";

export default function StageTwoOctagon2dLeft() {
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(
    "assets/images/stage2-picture/octagonleft.png",
  );

  return (
    <mesh>
      <planeGeometry args={[1.48, 1.48]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
}
