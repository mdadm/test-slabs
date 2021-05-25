import ArrowLeft from "@material-ui/icons/ArrowLeft";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import React from "react";

export const ExpandButton = (key: number, activeProductIndex: number) => {
  if (key === activeProductIndex) {
    return (
      <ArrowDropDown fontSize="large"/>
    )
  }

  return (
    <ArrowLeft fontSize="large"/>
  )
}

