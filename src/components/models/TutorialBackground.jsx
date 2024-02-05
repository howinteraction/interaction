import { useGLTF } from "@react-three/drei";

function TutorialBackground() {
  const gltf = useGLTF("/assets/glb/tutorialBackground.glb");

  return <primitive object={gltf.scene} />;
}

export default TutorialBackground;
