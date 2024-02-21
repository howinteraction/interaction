import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { CuboidCollider } from "@react-three/rapier";
import PropTypes from "prop-types";

import * as THREE from "three";

export default function StageTwoBackground({ isCollided }) {
  const { scene, animations } = useGLTF("/assets/glb/stage2-background.glb");
  const mixerRef = useRef();
  const backgroundRef = useRef();

  scene.traverse((child) => {
    child.receiveShadow = true;
  });

  useEffect(() => {
    if (isCollided) {
      mixerRef.current = new THREE.AnimationMixer(scene);

      animations.forEach((clip) => {
        const action = mixerRef.current.clipAction(clip);

        action.startAt(-15);
        action.setEffectiveTimeScale(1.5);
        action.setLoop(THREE.LoopOnce);
        action.clampWhenFinished = true;
        action.play();
      });
    }
  }, [animations, scene, isCollided]);

  useFrame((state, delta) => {
    mixerRef.current?.update(delta);
  });

  return (
    <>
      <primitive object={scene} ref={backgroundRef} />
      <CuboidCollider args={[100, 1, 100]} position={[0, -1, 0]} />
      <CuboidCollider args={[100, 1, 100]} position={[0, 30, 0]} />
      <CuboidCollider args={[0.55, 0.5, 1.1]} position={[26.75, 2.5, 1.1]} />
      <CuboidCollider args={[1, 50, 50]} position={[-36, 10, 0]} />
      <CuboidCollider args={[1, 50, 50]} position={[35, 10, 0]} />
      <CuboidCollider args={[0.1, 5, 5]} position={[27.3, 5, -5]} />
      <CuboidCollider args={[0.1, 5, 5]} position={[27.3, 5, 7.25]} />
      <CuboidCollider args={[0.1, 2, 2]} position={[27.3, 4.3, 1.1]} />
      <CuboidCollider args={[0.1, 5, 5]} position={[33.6, 5, -5.25]} />
      <CuboidCollider args={[0.1, 5, 5]} position={[33.6, 5, 5.7]} />
      <CuboidCollider args={[0.1, 5, 5]} position={[33.6, 6.75, 2]} />
      <CuboidCollider args={[70, 60, 1]} position={[-36, 10, -3.5]} />
      <CuboidCollider args={[70, 60, 1]} position={[-36, 10, 4]} />
    </>
  );
}

useGLTF.preload("/assets/glb/stage2-background.glb");

StageTwoBackground.propTypes = {
  isCollided: PropTypes.bool.isRequired,
};
