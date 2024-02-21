import { useState, useEffect } from "react";
import { Text } from "@react-three/drei";
import PropTypes from "prop-types";

import { SUBTITLE_TIME } from "../../utils/constants";

export default function Subtitle({ position, rotation, subtitle }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, SUBTITLE_TIME);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Text
      position={position}
      color="rgb(239,243,20)"
      fontSize={3}
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
