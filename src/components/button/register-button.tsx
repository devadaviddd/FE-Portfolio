import * as React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: "#3f46fb",
  },
  marginTop: "6px",
  width: "100%",
  borderRadius: "28px",
  height: "50px",
}));

type Props = {
  textArea: string;
};

export const RegisterButton = (props: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup");
  };

  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        width: "80%",
      }}
    >
      <ColorButton variant="contained" size="medium" onClick={handleClick}>
        {props.textArea}
      </ColorButton>
    </Stack>
  );
};
