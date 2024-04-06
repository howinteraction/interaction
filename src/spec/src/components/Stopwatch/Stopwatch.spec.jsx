import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { Provider, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import elapsedReducer from "../../../../redux/elapsedSlice";
import stageClearReducer from "../../../../redux/stageClearSlice";

import Stopwatch from "../../../../components/Stopwatch";

vi.mock("@react-three/drei", () => ({
  // eslint-disable-next-line react/prop-types
  Text: ({ children }) => <text>{children}</text>,
}));

vi.mock("react-redux", async (importOriginal) => {
  const original = await importOriginal();

  return {
    ...original,
    useSelector: vi.fn(),
    useDispatch: () => vi.fn(),
  };
});

describe("Stopwatch 컴포넌트", () => {
  const mockStore = configureStore({
    reducer: {
      elapsedTimer: elapsedReducer,
      stageClear: stageClearReducer,
    },
  });

  it("초기 렌더링 시 00:00 표시", () => {
    const position = [0, 0, 0];
    const rotation = [0, 0, 0];
    const color = "black";

    vi.mocked(useSelector).mockImplementation((selector) =>
      selector(mockStore.getState()),
    );

    const { getByText } = render(
      <Provider store={mockStore}>
        <Stopwatch position={position} rotation={rotation} color={color} />
      </Provider>,
    );

    expect(getByText("00:00")).toBeInTheDocument();
  });
});
