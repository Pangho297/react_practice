import { Box } from "@mui/material";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Organization() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.name !== "pangho") {
      navigate(-1);
    }
  }, []);

  return <Box>{location.state?.name ?? "none"}</Box>;
}
