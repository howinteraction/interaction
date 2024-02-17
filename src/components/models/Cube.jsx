import { useGLTF } from "@react-three/drei";

function Cube() {
  const gltf = useGLTF("/assets/glb/cube.glb");

  return (
    <mesh>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export default Cube;
