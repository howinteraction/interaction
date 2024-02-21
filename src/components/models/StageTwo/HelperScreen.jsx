import { useGLTF } from "@react-three/drei";

export default function HelperScreen() {
  const gltf = useGLTF("/assets/glb/helper-screen.glb");

  gltf.scene.traverse((child) => {
    child.castShadow = true;
  });

  return <primitive object={gltf.scene} />;
}

useGLTF.preload("/assets/glb/helper-screen.glb");
