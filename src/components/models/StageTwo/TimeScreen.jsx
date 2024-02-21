import { useGLTF } from "@react-three/drei";

export default function TimeScreen() {
  const gltf = useGLTF("/assets/glb/time-screen.glb");

  gltf.scene.traverse((child) => {
    child.castShadow = true;
  });

  return <primitive object={gltf.scene} />;
}

useGLTF.preload("/assets/glb/time-screen.glb");
