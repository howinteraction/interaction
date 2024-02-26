import * as THREE from "three";

export default function StageTwoSquare2dLeft() {
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(
    "assets/images/stage2-picture/leftsquare.png",
  );

  return (
    <mesh>
        <planeGeometry args={[1.3, 1.3]} />
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>
  );
}
