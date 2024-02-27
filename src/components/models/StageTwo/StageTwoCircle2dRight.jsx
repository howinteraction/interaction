import * as THREE from "three";

export default function StageTwoCircle2dRight() {
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(
    "assets/images/stage2-picture/circleright.png",
  );

  return (
    <mesh>
      <planeGeometry args={[1.2, 1.2]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
}
