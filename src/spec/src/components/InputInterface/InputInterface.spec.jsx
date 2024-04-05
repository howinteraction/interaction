import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";

import InputInterface from "../../../../components/InputInterface";

vi.mock("@react-three/drei", () => ({
  Html: vi.fn(({ children }) => <div>{children}</div>),
}));

describe("InputInterface 컴포넌트", () => {
  it("입력 필드와 에러 메시지를 올바르게 렌더링해야 한다", () => {
    const errorMessage = "Invalid input";
    const { getByPlaceholderText, queryByText } = render(
      <InputInterface
        position={[0, 0, 0]}
        width="200px"
        height="40px"
        rotation={[0, 0, 0]}
        fontSize="16px"
        errorMessage={errorMessage}
        onChange={() => {}}
      />,
    );

    expect(getByPlaceholderText("player name")).toBeInTheDocument();
    expect(queryByText(errorMessage)).toBeInTheDocument();
  });

  it("사용자 입력에 대해 onChange 이벤트 핸들러를 호출해야 한다", () => {
    const onChangeMock = vi.fn();
    const { getByPlaceholderText } = render(
      <InputInterface
        position={[0, 0, 0]}
        width="200px"
        height="40px"
        rotation={[0, 0, 0]}
        fontSize="16px"
        errorMessage=""
        onChange={onChangeMock}
      />,
    );

    const inputElement = getByPlaceholderText("player name");

    fireEvent.change(inputElement, { target: { value: "New Player" } });

    expect(onChangeMock).toHaveBeenCalledWith("New Player");
  });
});
