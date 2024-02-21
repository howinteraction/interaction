import { useGLTF } from "@react-three/drei";

export default function HallowCube() {
  const { scene } = useGLTF("/assets/glb/hallow-cube.glb");

  scene.traverse((child) => {
    child.castShadow = true;
    child.receiveShadow = true;
  });

  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  );
}

useGLTF.preload("/assets/glb/hallow-cube.glb");
