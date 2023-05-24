<Box
  sx={{
    width: "400px",
    height: "450px",
    backgroundColor: "white",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    justifyContent: "space-evenly",
    alignItems: "center",
  }}
>
  <Typography>Login</Typography>
  <Input placeholder="Email" variant="outlined" type="email" />
  <Input placeholder="Password" variant="outlined" type="password" />
  <Button
    sx={{
      width: "150px",
      backgroundColor: "blue",
      color: "black",
    }}
  >
    Login
  </Button>
</Box>;
