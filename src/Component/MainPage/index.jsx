import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useGlobalContext } from "../Context/globalContext";

function MainPage() {
  const { authGlobal, getJokes, jokes } = useGlobalContext();
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
            height: "50vh",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
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
                fontSize: { xs: "22px", md: "30px" },
                fontWeight: "600",
                width: "70%",
                textAlign: "center",
                color: "white",
              }}
            >
              This landing page to ganarate dad jokes
            </Typography>{" "}
            <Typography
              sx={{
                fontSize: { xs: "18px", md: "30px" },
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
                onClick={getJokes}
              >
                {" "}
                click HERE
              </Button>
            </Box>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "18px", md: "30px" },
              fontWeight: "600",
              width: "70%",
              textAlign: "center",
              color: "black",
              backgroundColor: "whitesmoke",
              // position: "absolute",
            }}
          >
            {jokes.title}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default MainPage;
