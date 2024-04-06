import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import elapsedReducer, { setElapsedTime } from "../../../../redux/elapsedSlice";

import StageClearScore from "../../../../components/StageClearScore";

vi.mock("react-redux", async (importOriginal) => {
  const original = await importOriginal();

  return {
    ...original,
    useSelector: vi.fn(),
    useDispatch: vi.fn(),
  };
});

const mockElapsedTime = 0;

global.localStorage = {
  getItem: vi.fn().mockReturnValue(
    JSON.stringify([
      {
        endTime: null,
        totalSeconds: mockElapsedTime,
      },
    ]),
  ),
  setItem: vi.fn(),
};

describe("StageClearScore 컴포넌트", () => {
  it("초기 렌더링과 상태 업데이트가 올바르게 작동한다", async () => {
    const mockDispatch = vi.fn();
    vi.mocked(useDispatch).mockReturnValue(mockDispatch);

    const store = configureStore({
      reducer: {
        elapsedTimer: elapsedReducer,
      },
    });

    vi.mocked(useSelector).mockImplementation((selector) =>
      selector({
        elapsedTimer: { elapsedTime: mockElapsedTime },
      }),
    );

    const { getByText } = render(
      <Provider store={store}>
        <StageClearScore />
      </Provider>,
    );

    expect(getByText(/playtime:/)).toBeInTheDocument();

    fireEvent.click(getByText("show records"));

    expect(mockDispatch).toHaveBeenCalledWith(setElapsedTime(0));
  });
});
