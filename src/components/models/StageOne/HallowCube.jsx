import { useGLTF } from "@react-three/drei";

export default function HallowCube() {
  const gltf = useGLTF("/assets/glb/hallow-cube.glb");

  gltf.scene.traverse((child) => {
    child.castShadow = true;
    child.receiveShadow = true;
  });

  return (
    <mesh>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

useGLTF.preload("/assets/glb/hallow-cube.glb");
