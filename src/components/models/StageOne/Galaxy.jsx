import { useGLTF } from "@react-three/drei";

export default function Galaxy() {
  const { scene } = useGLTF("/assets/glb/galaxy.glb");

  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  );
}

useGLTF.preload("/assets/glb/galaxy.glb");
