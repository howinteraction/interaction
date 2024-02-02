function Sphere() {
  return (
    <mesh position={[8, 3, -7]}>
      <sphereGeometry args={[3]} />
      <meshStandardMaterial attach="material" color="red" />
    </mesh>
  );
}

export default Sphere;
