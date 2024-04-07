import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import GameStart from "../../../../components/GameStart";

vi.mock("react-redux", async (importOriginal) => {
  const original = await importOriginal();

  return {
    ...original,
    useDispatch: () => vi.fn(),
  };
});

describe("GameStart 컴포넌트", () => {
  beforeEach(() => {
    vi.spyOn(Storage.prototype, "setItem");
    vi.spyOn(Storage.prototype, "getItem");
  });

  it("초기 렌더링 시 모달이 표시된다", () => {
    const { getByPlaceholderText } = render(
      <Provider store={configureStore({ reducer: {} })}>
        <GameStart />
      </Provider>,
    );

    expect(getByPlaceholderText("이름을 입력하세요")).toBeInTheDocument();
  });

  it("잘못된 사용자 입력 시 에러 메시지가 표시된다", () => {
    render(
      <Provider store={configureStore({ reducer: {} })}>
        <GameStart />
      </Provider>,
    );

    fireEvent.change(screen.getByPlaceholderText("이름을 입력하세요"), {
      target: { value: "!" },
    });
    fireEvent.click(screen.getByText("game start"));

    expect(
      screen.getByText(
        "이름은 한글, 영어, 숫자 혼용 2글자 이상 10글자 이하여야 합니다.",
      ),
    ).toBeInTheDocument();
  });

  it("올바른 사용자 입력 시 로컬 스토리지에 저장된다", () => {
    render(
      <Provider store={configureStore({ reducer: {} })}>
        <GameStart />
      </Provider>,
    );

    fireEvent.change(screen.getByPlaceholderText("이름을 입력하세요"), {
      target: { value: "Player1" },
    });
    fireEvent.click(screen.getByText("game start"));

    expect(localStorage.setItem).toHaveBeenCalled();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });
});
