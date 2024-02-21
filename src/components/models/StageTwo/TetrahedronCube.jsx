import { useGLTF } from "@react-three/drei";

export default function TetrahedronCube() {
  const gltf = useGLTF("/assets/glb/tetrahedron.glb");

  return (
    <mesh>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

useGLTF.preload("/assets/glb/tetrahedron.glb");
