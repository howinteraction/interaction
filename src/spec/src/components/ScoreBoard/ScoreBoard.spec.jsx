import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import ScoreBoard from "../../../../components/ScoreBoard";

vi.mock("react-redux", async (importOriginal) => {
  const original = await importOriginal();

  return {
    ...original,
    useDispatch: () => vi.fn(),
  };
});

describe("ScoreBoard 컴포넌트", () => {
  beforeEach(() => {
    const mockLocalStorage = {
      getItem: vi.fn((key) => JSON.stringify([
          {
            playerName: "TestPlayer",
            startTime: "2021-01-01T00:00:00.000Z",
            endTime: "2021-01-01T00:01:00.000Z",
            totalSeconds: 60,
          },
        ])),
      setItem: vi.fn(),
      clear: vi.fn(),
    };

    global.localStorage = mockLocalStorage;
  });

  it("초기 로드 시 게임 기록이 표시된다", () => {
    render(
      <Provider store={configureStore({ reducer: {} })}>
        <ScoreBoard />
      </Provider>,
    );

    expect(screen.getByText("Player: TestPlayer")).toBeInTheDocument();
    expect(screen.getByText("Play time: 01:00")).toBeInTheDocument();
  });

  it("New Player 버튼 클릭 시 모달이 숨겨진다", () => {
    render(
      <Provider store={configureStore({ reducer: {} })}>
        <ScoreBoard />
      </Provider>,
    );

    fireEvent.click(screen.getByText("new player"));
  });

  it("Play Again 버튼 클릭 시 새 세션 저장 검증", () => {
    render(
      <Provider store={configureStore({ reducer: {} })}>
        <ScoreBoard />
      </Provider>,
    );

    fireEvent.click(screen.getByText("play again"));
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });
});
