import { useGLTF } from "@react-three/drei";

export default function Galaxy() {
  const gltf = useGLTF("/assets/glb/galaxy.glb");

  return (
    <mesh>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

useGLTF.preload("/assets/glb/galaxy.glb");
