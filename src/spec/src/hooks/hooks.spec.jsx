import { render, fireEvent, act, renderHook } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";

import { describe, vi, expect, it } from "vitest";
import * as THREE from "three";
import usePlayerControl from "../../../../hooks/usePlayerControl";
import usePlayerPosition from "../../../../hooks/usePlayerPosition";
import { setIsStageCleared } from "../../../redux/stageClearSlice";

vi.mock("react-redux", () => ({
  useSelector: vi.fn(),
  useDispatch: vi.fn(),
}));

vi.mock("three", () => ({
  Vector3: vi.fn(),
}));

describe("usePlayerPosition", () => {
  it("플레이어가 포탈에 닿았을 때 setIsStageCleared 함수가 실행되어야 한다.", () => {
    const mockDispatch = vi.fn();
    useDispatch.mockReturnValue(mockDispatch);

    useSelector.mockImplementation((selector) =>
      selector({
        stages: { stageLevel: 1 },
      }),
    );

    const mockControlsRef = {
      current: { unlock: vi.fn() },
    };

    const { result } = renderHook(() => usePlayerPosition(mockControlsRef));

    const mockPlayerPosition = { x: 50, y: 8, z: 2.5 };
    const mockDistanceToPortal = 0;

    THREE.Vector3.mockImplementation(() => ({
      distanceTo: vi.fn(() => mockDistanceToPortal),
    }));

    act(() => {
      result.current.handlePlayerPositionChange(mockPlayerPosition);
    });

    expect(mockDispatch).toHaveBeenCalledWith(setIsStageCleared(true));

    expect(mockControlsRef.current.unlock).toHaveBeenCalled();
  });
});

describe("usePlayerControl", () => {
  it("방향키를 누르고 땠을 때 올바른 방향으로 움직여야 한다.", () => {
    function Component() {
      const movement = usePlayerControl();
      return (
        <div>
          <div data-testid="forward">{movement.forward.toString()}</div>
          <div data-testid="backward">{movement.backward.toString()}</div>
          <div data-testid="left">{movement.left.toString()}</div>
          <div data-testid="right">{movement.right.toString()}</div>
          <div data-testid="jump">{movement.jump.toString()}</div>
        </div>
      );
    }

    const { getByTestId } = render(<Component />);

    fireEvent.keyDown(document, { code: "KeyW" });
    expect(getByTestId("forward").textContent).toBe("true");
    fireEvent.keyUp(document, { code: "KeyW" });
    expect(getByTestId("forward").textContent).toBe("false");

    fireEvent.keyDown(document, { code: "KeyS" });
    expect(getByTestId("backward").textContent).toBe("true");
    fireEvent.keyUp(document, { code: "KeyS" });
    expect(getByTestId("backward").textContent).toBe("false");

    fireEvent.keyDown(document, { code: "KeyA" });
    expect(getByTestId("left").textContent).toBe("true");
    fireEvent.keyUp(document, { code: "KeyA" });
    expect(getByTestId("left").textContent).toBe("false");

    fireEvent.keyDown(document, { code: "KeyD" });
    expect(getByTestId("right").textContent).toBe("true");
    fireEvent.keyUp(document, { code: "KeyD" });
    expect(getByTestId("right").textContent).toBe("false");

    fireEvent.keyDown(document, { code: "Space" });
    expect(getByTestId("jump").textContent).toBe("true");
    fireEvent.keyUp(document, { code: "Space" });
    expect(getByTestId("jump").textContent).toBe("false");
  });
});
