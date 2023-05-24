import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useGlobalContext } from "../Context/globalContext";

function MainPage() {
  const { authGlobal } = useGlobalContext();
  return (
    <Box
      sx={{
        position: "relative",
        left: "0",
        right: "0",
        bottom: "0",
        top: "0",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#3488D8",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {authGlobal.isLogin ? (
            <Typography
              sx={{
                fontSize: "50px",
                fontWeight: "600",
                width: "70%",
                textAlign: "center",
                color: "white",
              }}
            >
              Welcome Back {authGlobal.name}!
            </Typography>
          ) : (
            <></>
          )}
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "600",
              width: "70%",
              textAlign: "center",
              color: "white",
            }}
          >
            Landing Page Gilang, This landing page to ganarate dad jokes
          </Typography>{" "}
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "500",
              width: "70%",
              textAlign: "center",
              color: "white",
              fontFamily: "Metal Mania",
            }}
          >
            {" "}
            if you not happy{" "}
          </Typography>{" "}
          <Box
            sx={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <Button
              sx={{
                fontSize: "20px",
                backgroundColor: "white",
                borderRadius: "10px",
                textDecoration: "unset",
              }}
            >
              {" "}
              click HERE
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MainPage;
