import { Clone, useGLTF } from "@react-three/drei";

export default function StageThreeBackground() {
  const { scene } = useGLTF("/assets/glb/stage3-cloud.glb");

  scene.traverse((child) => {
    child.receiveShadow = true;
    child.castShadow = true;
  });

  return <Clone object={scene} />;
}

useGLTF.preload("/assets/glb/stage3-ground8.glb");
