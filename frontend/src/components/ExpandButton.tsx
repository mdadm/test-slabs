import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import React from "react";

export const ExpandButton = (key: number, activeProductIndex: number): JSX.Element => {
  if (key === activeProductIndex) {
    return (
      <ArrowDropDown fontSize="large"/>
    )
  }

  return (
    <ArrowLeft fontSize="large"/>
  )
}

