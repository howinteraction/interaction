import { useGLTF } from "@react-three/drei";

export default function TriangleLight() {
  const gltf = useGLTF("/assets/glb/triangle-light.glb");

  return (
    <mesh>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

useGLTF.preload("/assets/glb/triangle-light.glb");
