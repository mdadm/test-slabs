import React from "react";
import styled from "styled-components";

type NoDataProps = {
  message: string,
  description?: string
}

const ErrorMessageStyled = styled.div`
    color: brown;
    text-align: center;
`;

export const ErrorMessage = ({ message, description }: NoDataProps): JSX.Element => {
  return (
    <ErrorMessageStyled>
      <p><b>{message}</b></p>
      <p>{description}</p>
    </ErrorMessageStyled>
  )
}
