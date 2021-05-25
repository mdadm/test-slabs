import React from "react";

type NoDataProps = {
  message: string,
  description?: string
}

export const ErrorMessage = ({ message, description }: NoDataProps): JSX.Element => {
  return (
    <div className="error-message">
      <p><b>{message}</b></p>
      <p>{description}</p>
    </div>
  )
}
