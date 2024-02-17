import { useGLTF } from "@react-three/drei";

function BlackColumn() {
  const gltf = useGLTF("/assets/glb/black-column.glb");

  return <primitive object={gltf.scene} />;
}

export default BlackColumn;
