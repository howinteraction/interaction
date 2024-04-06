import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import stageReducer, { setStage } from "../../../../redux/stageSlice";
import stageClearReducer, { setIsStageCleared } from "../../../../redux/stageClearSlice";

import StageClearModal from "../../../../components/StageClearModal";

vi.mock("react-redux", async (importOriginal) => {
  const original = await importOriginal();

  return {
    ...original,
    useDispatch: vi.fn(),
  };
});

describe("StageClearModal 컴포넌트", () => {
  it("컴포넌트가 올바르게 렌더링되고, 버튼 클릭 시 액션이 디스패치된다", () => {
    const mockDispatch = vi.fn();

    vi.mocked(useDispatch).mockReturnValue(mockDispatch);

    const mockStore = configureStore({
      reducer: {
        stage: stageReducer,
        stageClear: stageClearReducer,
      },
    });

    const { getByText } = render(
      <Provider store={mockStore}>
        <StageClearModal nextStage={2} />
      </Provider>,
    );

    expect(getByText("Congratulations!")).toBeInTheDocument();
    expect(
      getByText(
        "You have cleared the stage. Would you like to play next stage?",
      ),
    ).toBeInTheDocument();

    const nextStageButton = getByText("Next Stage");

    fireEvent.click(nextStageButton);

    expect(mockDispatch).toHaveBeenCalledWith(setIsStageCleared(false));
    expect(mockDispatch).toHaveBeenCalledWith(setStage(2));
  });
});
