import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { navbarSx as sx } from "./styles";
import ModalLogin from "../Login";
import ModalRegister from "../Register";
import { useGlobalContext } from "../Context/globalContext";

function Navbar() {
  const { authGlobal, logout } = useGlobalContext();
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const closeModal = () => {
    setLoginOpen(false);
    setRegisterOpen(false);
  };

  const openLogin = () => {
    setLoginOpen(true);
    setRegisterOpen(false);
  };
  const openRegister = () => {
    setLoginOpen(false);
    setRegisterOpen(true);
  };

  return (
    <>
      <ModalRegister
        isOpen={registerOpen}
        close={closeModal}
        openLogin={openLogin}
      />
      <ModalLogin
        isOpen={loginOpen}
        close={closeModal}
        openRegister={openRegister}
      />
      <Box
        sx={{
          position: "relative",
          left: "0",
          right: "0",
          bottom: "0",
          top: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "#3488D8",
        }}
      >
        <Box
          sx={{
            height: "90px",
            width: "90%",
            //   backgroundColor: "blue",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: "700",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                color: "white",
              }}
            >
              {" "}
              Gilang Web
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
            }}
          >
            {authGlobal.isLogin ? (
              <>
                <Typography sx={{ color: "white" }}>
                  Hi {authGlobal.name}!
                </Typography>
                <Button
                  onClick={logout}
                  sx={{
                    textDecoration: "unset",
                    color: "black",
                    fontSize: "18px",
                    fontWeight: "500",
                    backgroundColor: "white",
                    borderRadius: "20px",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={openLogin}
                  sx={{
                    textDecoration: "unset",
                    color: "black",
                    fontSize: "18px",
                    fontWeight: "500",
                    backgroundColor: "white",
                    borderRadius: "20px",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                  }}
                >
                  {" "}
                  Login
                </Button>
                <Button
                  onClick={openRegister}
                  sx={{
                    textDecoration: "unset",
                    color: "black",
                    fontSize: "18px",
                    fontWeight: "500",
                    backgroundColor: "white",
                    borderRadius: "20px",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                  }}
                >
                  Register
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
