import { Button, ButtonProps } from "@mui/material";
import { ReactNode } from "react";

type StyledButtonProps = {
  children: ReactNode;
};

export default function CustomButton({
  children,
  ...props
}: StyledButtonProps & ButtonProps) {
  return (
    <Button
      {...props}
      sx={{
        backgroundColor: "red",
        "&:hover": {
          backgroundColor: "red",
        },
        ...props.sx,
      }}
    >
      {children}
    </Button>
  );
}
