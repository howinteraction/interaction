import { useEffect } from "react";
import { PointerLockControls } from "@react-three/drei";

import PropTypes from "prop-types";

export default function PointerLock({ controlsRef }) {
  useEffect(() => {
    controlsRef.current.lock();
  }, []);

  return <PointerLockControls ref={controlsRef} />;
}

PointerLock.propTypes = {
  controlsRef: PropTypes.instanceOf(Object).isRequired,
};
