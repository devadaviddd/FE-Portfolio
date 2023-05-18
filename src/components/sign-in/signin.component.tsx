import { Stack } from "@mui/material";
import { CVLayout, SignInLayout, SkillsLayout } from "../../layout/Signin";

export const SignInComponent = () => {
  return (
    <Stack direction={"column"}>
      <SignInLayout />
      <SkillsLayout />
      <CVLayout />
    </Stack>
  );
};
