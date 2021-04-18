import styled from "styled-components";
import Box from "../Box/Box";
import Input from "../Input/Input";
import { BalanceInputProps } from "./types";

export const StyledBalanceInput = styled(Box)<{ isWarning: BalanceInputProps["isWarning"] }>`
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-radius: 10px;
  padding: 8px 16px;
  background-color: #f00;
`;

export const StyledInput = styled(Input)`
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  padding-left: 0;
  padding-right: 0;
  text-align: right;

  ::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }

  &:focus:not(:disabled) {
    box-shadow: none;
  }
`;
