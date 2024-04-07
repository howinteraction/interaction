import { describe, it, expect, vi, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { useFrame } from "@react-three/fiber";

import stageSlice from "../../../../redux/stageSlice";
import Player from "../../../../components/Player";

vi.mock("@react-three/fiber", () => ({
  useFrame: vi.fn((callback) =>
    callback({
      camera: { position: { set: vi.fn() }, lookAt: vi.fn() },
      clock: { getElapsedTime: () => 1 },
    }),
  ),
  useThree: vi.fn(() => ({ scene: {}, gl: { domElement: {} } })),
}));

vi.mock("@react-three/rapier", () => ({
  useRapier: vi.fn(),
  RigidBody: vi.fn(() => null),
  CapsuleCollider: vi.fn(() => null),
}));

vi.mock("../../../../../hooks/usePlayerControl", () => ({
  default: () => ({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
  }),
}));

const store = configureStore({
  reducer: {
    stages: stageSlice,
  },
});

describe("Player 컴포넌트", () => {
  it("플레이어의 초기 위치와 상태를 설정하고 렌더링한다", () => {
    const onPositionChange = vi.fn();
    const position = [0, 0, 0];

    render(
      <Provider store={store}>
        <Player onPositionChange={onPositionChange} position={position} />
      </Provider>,
    );

    expect(useFrame).toHaveBeenCalled();
  });
});
