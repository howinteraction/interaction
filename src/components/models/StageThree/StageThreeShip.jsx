import { useGLTF } from "@react-three/drei";

export default function StageThreeShip() {
  const { scene } = useGLTF("/assets/glb/stage3-ship.glb");

  scene.traverse((child) => {
    child.receiveShadow = true;
    child.castShadow = true;
  });

  return <primitive object={scene} />;
}

useGLTF.preload("/assets/glb/stage3-ship.glb");
