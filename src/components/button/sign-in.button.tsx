import * as React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import { CircularProgress } from "@mui/material";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: "#3f46fb",
  },
  marginTop: "15px",
  width: "100%",
  borderRadius: "28px",
  height: "50px",
}));

type Props = {
  actionStatus: "success" | "error" | "loading" | "idle";
};

export const SignInButton = (props: Props) => {
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        width: "80%",
      }}
    >
      <ColorButton
        startIcon={
          props.actionStatus === "loading" ? (
            <CircularProgress
              size={20}
              style={{
                color: "white",
              }}
            />
          ) : null
        }
        variant="contained"
        size="medium"
        type="submit"
      >
        {props.actionStatus === "loading" ? null : "Sign In"}    
      </ColorButton>
    </Stack>
  );
};
