import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';
import React from "react";

export const CreateProductButton = (isPressed: boolean): JSX.Element => {
  return (
    isPressed ? <CancelIcon fontSize="large"/> : <AddIcon fontSize="large"/>
  )
}

