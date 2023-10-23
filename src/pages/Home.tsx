import { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { To, useNavigate } from "react-router-dom";

export default function Home() {
  const [number, setNumber] = useState<number>(0);
  const [value, setValue] = useState<string>("");
  const navigate = useNavigate();

  //value

  return (
    <>
      <CustomButton
        variant="contained"
        sx={{ borderRadius: 24 }}
        onClick={() =>
          navigate("/organization" as To, {
            replace: false,
            state: {
              name: "pangho",
            },
          })
        }
      >
        {number}
      </CustomButton>
      <CustomButton variant="contained" sx={{ backgroundColor: "yellow" }}>
        {number}
      </CustomButton>
      <CustomButton variant="contained">{number}</CustomButton>
      <CustomInput value={value} onChange={(e) => setValue(e.target.value)} />
    </>
  );
}
