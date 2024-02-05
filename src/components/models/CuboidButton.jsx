import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

import PropTypes from "prop-types";

export default function CuboidButton({
  args,
  position,
  rotation,
  onClick,
  color,
  text,
}) {
  const meshRef = useRef();
  const textProps = {
    fontSize: 1,
    color: "white",
    anchorX: "center",
    anchorY: "middle",
  };

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x -= 0.01;
    }
  });

  return (
    <group position={position} rotation={rotation}>
      <mesh
        ref={meshRef}
        onClick={onClick}
        onPointerOver={e => {
          e.stopPropagation();
          meshRef.current.scale.x = 1.2;
          meshRef.current.scale.y = 1.2;
        }}
        onPointerOut={() => {
          meshRef.current.scale.x = 1;
          meshRef.current.scale.y = 1;
        }}
      >
        <boxGeometry args={args} />
        <meshStandardMaterial color={color} />
        <Text
          {...textProps}
          position={[0, 1.55, 0]}
          rotation={[Math.PI / 2, Math.PI, 0]}
        >
          {text}
        </Text>
        <Text
          {...textProps}
          position={[0, -1.55, 0]}
          rotation={[-Math.PI / 2, Math.PI, 0]}
        >
          {text}
        </Text>
        <Text
          {...textProps}
          position={[0, 0, 1.55]}
          rotation={[Math.PI, Math.PI, 0]}
        >
          {text}
        </Text>
        <Text
          {...textProps}
          position={[0, 0, -1.55]}
          rotation={[0, Math.PI, 0]}
        >
          {text}
        </Text>
      </mesh>
    </group>
  );
}

CuboidButton.propTypes = {
  args: PropTypes.arrayOf(PropTypes.number).isRequired,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  rotation: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
