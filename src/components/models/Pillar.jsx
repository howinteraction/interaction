import { useGLTF } from "@react-three/drei";
// import { RigidBody } from "@react-three/rapier";

function Pillar() {
  const gltf = useGLTF("/assets/glb/pillar.glb");

  return (
    <mesh>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export default Pillar;
