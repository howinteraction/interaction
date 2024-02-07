import { useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

export default function WesternTown() {
  const gltf = useGLTF("/assets/glb/garage.glb");

  return (
    <RigidBody type="fixed" colliders={false}>
      <primitive object={gltf.scene} />
      <CuboidCollider args={[100, 0.01, 100]} position={[0, 0, 0]} />
    </RigidBody>
  );
}
