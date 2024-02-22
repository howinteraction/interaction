import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function StageThreeShip() {
  const { scene } = useGLTF("/assets/glb/stage3-ship.glb");

  scene.traverse((child) => {
    child.receiveShadow = true;
    child.castShadow = true;
  });

  return (
    <RigidBody type="fixed" scale={0.2} position={[87.7, -1, -10]}>
        <primitive object={scene} />
      </RigidBody>
  );
}

useGLTF.preload("/assets/glb/stage3-ship.glb");
