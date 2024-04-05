import { describe, it, expect, vi } from "vitest";
import { act, render } from "@testing-library/react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

import CameraMotion from "../../../../components/CameraMotion";

vi.mock("@react-three/fiber", () => ({
  useThree: vi.fn(),
  useFrame: vi.fn().mockImplementation((callback) => {
    global.frameCallback = callback;
  }),
}));

describe("CameraMotion 컴포넌트 테스트", () => {
  it("카메라의 위치와 방향이 업데이트됨", () => {
    const targetPosition = [1, 2, 3];
    const lerpFactor = 0.1;
    const targetDirection = [4, 5, 6];

    const mockCamera = {
      position: {
        lerp: vi.fn(),
      },
      lookAt: vi.fn(),
    };

    vi.mocked(useThree).mockReturnValue({ camera: mockCamera });

    render(
      <CameraMotion
        targetPosition={targetPosition}
        lerpFactor={lerpFactor}
        targetDirection={targetDirection}
      />,
    );

    act(() => {
      global.frameCallback();
    });

    expect(useFrame).toHaveBeenCalled();
    expect(mockCamera.position.lerp).toHaveBeenCalledWith(
      expect.objectContaining(new THREE.Vector3(...targetPosition)),
      lerpFactor,
    );
    expect(mockCamera.lookAt).toHaveBeenCalledWith(
      expect.objectContaining(new THREE.Vector3(...targetDirection)),
    );
  });
});
