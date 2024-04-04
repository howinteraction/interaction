import { renderHook, act } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";

import { useThree } from "@react-three/fiber";

import { vi, describe, it, expect } from "vitest";
import VisualIllusion from "../../../../components/VisualIllusion";
import { setIsCombined } from "../../../../redux/twoIllusionSlice";

vi.mock("react-redux", () => ({
  useSelector: vi.fn(),
  useDispatch: vi.fn(),
}));

vi.mock("@react-three/fiber", () => ({
  useThree: vi.fn(),
  useFrame: vi.fn().mockImplementation((callback) => {
    global.frameCallback = callback;
  }),
}));

describe("VisualIllusion", () => {
  it("카메라의 position과 rotation이 유효범위에 들어오면 setIsCombined가 true로 바뀌어야 한다.", () => {
    const mockCamera = {
      position: { x: -6, y: 2, z: -2.75 },
      rotation: { x: 2.15, y: -1.25, z: 2.2 },
    };

    const mockDispatch = vi.fn();

    vi.mocked(useDispatch).mockReturnValue(mockDispatch);
    vi.mocked(useSelector).mockImplementation((selector) =>
      selector({
        twoIllusion: { isCombined: false },
      }),
    );

    vi.mocked(useThree).mockReturnValue({
      camera: mockCamera,
    });

    renderHook(() => VisualIllusion());

    act(() => {
      global.frameCallback();
    });

    expect(mockDispatch).toHaveBeenCalledWith(setIsCombined(true));
  });
});
