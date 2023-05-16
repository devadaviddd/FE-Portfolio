import React from 'react';

import { LeftLoginLayout, RightLoginLayout } from "../../layout/login";
import { Stack } from '@mui/material';

type Props = {};

export const SigninComponent = (props: Props) => {
  return (
    <Stack direction="row">
      <LeftLoginLayout></LeftLoginLayout>
      <RightLoginLayout></RightLoginLayout>
    </Stack>
  );
};
