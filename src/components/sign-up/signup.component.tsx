import React from "react";

import { Stack } from "@mui/material";
import { LeftRegisterLayout, RightLayOutResponsive, RightRegisterLayout } from "../../layout";

type Props = {};

export const SignUpComponent = (props: Props) => {
  return (
    <RightLayOutResponsive direction="row">
      <LeftRegisterLayout></LeftRegisterLayout>
      <div id='rightLayout'>
        <RightRegisterLayout></RightRegisterLayout>
      </div>
    </RightLayOutResponsive>
  );
};
