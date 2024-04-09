import { render, fireEvent } from "@testing-library/react";

import * as THREE from "three";
import { describe, it, vi, beforeEach } from "vitest";
import { Provider } from "react-redux";
import DragControl from "../../../../components/DragControl";
import store from "../../../../redux/store";

describe("DragControl", () => {
  beforeEach(() => {
    vi.mock("@react-three/fiber", () => ({
      useFrame: vi.fn().mockImplementation((callback) => {
        global.frameCallback = callback;
      }),
      useThree: vi.fn(() => ({
        camera: new THREE.PerspectiveCamera(),
      })),
    }));

    vi.mock("@react-three/drei", () => ({
      PointerLockControls: vi.fn(() => null),
    }));

    vi.mock("@react-three/rapier", () => ({
      useRapier: vi.fn(() => ({
        world: {
          castRay: vi.fn(() => ({
            collider: { parent: vi.fn(() => ({ handle: 1 })) },
          })),
          getRigidBody: vi.fn(() => ({
            userData: { isDraggable: true },
            setBodyType: vi.fn(),
            setTranslation: vi.fn(),
            collider: vi.fn(),
          })),
        },
      })),
    }));
  });

  const controlsRef = {
    current: {
      lock: vi.fn(),
    },
  };

  it("DragControl 훅이 렌더링 되어야 한다.", () => {
    render(
      <Provider store={store}>
        <DragControl
          minX={-10}
          maxX={10}
          maxY={10}
          minZ={-10}
          maxZ={10}
          controlsRef={controlsRef}
        />
      </Provider>,
    );
  });
});
