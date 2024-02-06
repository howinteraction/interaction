import { useState, useEffect } from "react";
import { Text } from "@react-three/drei";
import PropTypes from "prop-types";

export default function Subtitle({ position, rotation, subtitle }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Text
      position={position}
      color="blue"
      fontSize={2.3}
      lineHeight={0.05}
      textAlign="center"
      rotation={rotation}
    >
      {isVisible && subtitle}
    </Text>
  );
}

Subtitle.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  rotation: PropTypes.arrayOf(PropTypes.number).isRequired,
  subtitle: PropTypes.string.isRequired,
};
