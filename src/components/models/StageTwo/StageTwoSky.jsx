import { useGLTF } from "@react-three/drei";

export default function StageTwoSky() {
  const gltf = useGLTF("/assets/glb/stage2-sky.glb");

  return (
    <mesh>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

useGLTF.preload("/assets/glb/stage2-sky.glb");
