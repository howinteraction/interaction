import { useGLTF } from "@react-three/drei";

export default function TutorialPortal() {
  const { scene } = useGLTF("/assets/glb/tutorial-portal.glb");

  return (
    <mesh position={[-1, 0.01, -2]} scale={3}>
      <primitive object={scene} />
    </mesh>
  );
}

useGLTF.preload("/assets/glb/tutorial-portal.glb");
