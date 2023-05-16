import React from 'react';

import { Stack } from '@mui/material';
import { LeftRegisterLayout, RightRegisterLayout } from '../../layout';

type Props = {};

export const SignUpComponent = (props: Props) => {
  return (
    <Stack direction="row">
      <LeftRegisterLayout></LeftRegisterLayout>
      <RightRegisterLayout></RightRegisterLayout>
    </Stack>
  );
};
