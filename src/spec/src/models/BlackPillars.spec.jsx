import { describe, it, expect, vi, beforeEach } from "vitest";
import ReactThreeTestRenderer from "@react-three/test-renderer";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import * as THREE from "three";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import BlackPillar from "../../../components/models/StageTwo/BlackPillar";
import BlackPillar2 from "../../../components/models/StageTwo/BlackPillar2";
import twoIllusionSlice from "../../../redux/twoIllusionSlice";

vi.mock("@react-three/fiber");

vi.mock("@react-three/drei", () => {
  const mockUseGLTF = vi.fn(() => ({
    scene: new THREE.Scene(),
    nodes: { Object_2: { geometry: new THREE.BoxGeometry() } },
    materials: { initialShadingGroup: new THREE.MeshStandardMaterial() },
  }));

  mockUseGLTF.preload = vi.fn();

  return {
    useGLTF: mockUseGLTF,
    useTexture: vi.fn().mockReturnValue(new THREE.Texture()),
    Decal: vi.fn(),
  };
});

vi.mock("react-redux", async (importOriginal) => {
  const original = await importOriginal();

  return {
    ...original,
    useSelector: vi.fn(),
  };
});

describe("BlackPillar 컴포넌트", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("isCombined가 false일 때 Decal을 렌더링한다", async () => {
    const store = configureStore({
      reducer: {
        twoIllusion: twoIllusionSlice,
      },
      preloadedState: {
        twoIllusion: {
          isCombined: false,
        },
      },
    });

    await ReactThreeTestRenderer.act(async () => {
      await ReactThreeTestRenderer.create(
        <Provider store={store}>
          <BlackPillar />
        </Provider>,
      );
    });

    expect(vi.mocked(useGLTF).mock.calls.length).toBeGreaterThan(0);
    expect(vi.mocked(useTexture).mock.calls.length).toBeGreaterThan(0);
    expect(Decal).toHaveBeenCalled();
  });
});

describe("BlackPillar2 컴포넌트", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("isCombined가 false일 때 Decal을 렌더링한다", async () => {
    const store = configureStore({
      reducer: {
        twoIllusion: twoIllusionSlice,
      },
      preloadedState: {
        twoIllusion: {
          isCombined: false,
        },
      },
    });

    await ReactThreeTestRenderer.act(async () => {
      await ReactThreeTestRenderer.create(
        <Provider store={store}>
          <BlackPillar2 />
        </Provider>,
      );
    });

    expect(vi.mocked(useGLTF).mock.calls.length).toBeGreaterThan(0);
    expect(vi.mocked(useTexture).mock.calls.length).toBeGreaterThan(0);
    expect(Decal).toHaveBeenCalled();
  });
});
