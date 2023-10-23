import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

export default function App() {
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    setNumber((prev) => prev + 1);
  }, []);

  console.log(number);

  return <RouterProvider router={router} />;
}
