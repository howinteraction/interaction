import { useState, useEffect } from "react";
import { Text } from "@react-three/drei";

export default function Subtitle() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Text
      position={[-0.0006, 3, 19]}
      color="blue"
      fontSize={0.7}
      lineHeight={0.02}
      textAlign="center"
    >
      {isVisible && "Drop the object from top to bottom"}
    </Text>
  );
}
