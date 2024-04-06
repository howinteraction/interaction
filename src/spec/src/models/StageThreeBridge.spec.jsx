import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import * as THREE from "three";

import { useGLTF } from "@react-three/drei";
import threeIllusionSlice, {
  setIsBridgeIllusion,
} from "../../../redux/threeIllusionSlice";
import StageThreeBridge from "../../../components/models/StageThree/StageThreeBridge";

vi.mock("@react-three/drei", () => ({
  useGLTF: vi.fn().mockReturnValue({
    scene: new THREE.Scene(),
  }),
}));

vi.mock("@react-three/rapier", () => ({
  RigidBody: vi.fn(({ children }) => <div>{children}</div>),
}));

const store = configureStore({
  reducer: {
    threeIllusion: threeIllusionSlice,
  },
});

describe("StageThreeBridge 컴포넌트", () => {
  it("isBridgeIllusion 상태가 true일 때 StageThreeBridge 컴포넌트를 렌더링한다", () => {
    store.dispatch(setIsBridgeIllusion(true));

    const { container } = render(
      <Provider store={store}>
        <StageThreeBridge />
      </Provider>,
    );

    expect(container.querySelector("div")).not.toBeNull();
  });

  it("isBridgeIllusion 상태가 false일 때 StageThreeBridge 컴포넌트를 렌더링하지 않는다", () => {
    store.dispatch(setIsBridgeIllusion(false));

    const { container } = render(
      <Provider store={store}>
        <StageThreeBridge />
      </Provider>,
    );

    expect(container.querySelector("div")).toBeNull();
  });

  it("useGLTF가 올바른 경로의 모델을 불러온다", () => {
    render(
      <Provider store={store}>
        <StageThreeBridge />
      </Provider>,
    );

    expect(vi.mocked(useGLTF).mock.calls[0][0]).toBe(
      "/assets/glb/stage3-bridge.glb",
    );
  });
});
