import "./App.css";
import { Box } from "@mui/material";

import Pages from "./Component/Pages";
import Login from "./Component/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pages />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
