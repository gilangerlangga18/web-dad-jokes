// import * as React from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import { Input } from "@mui/material";
// import { useGlobalContext } from "../Context/globalContext";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
//   borderRadius: "20px",
// };

// export default function ModalRegister({ isOpen, close, openLogin }) {
//   const initialValue = {
//     name: "",
//     email: "",
//     password: "",
//   };
//   const [registerData, setRegisterData] = React.useState(initialValue);
//   const { registerUser } = useGlobalContext();

//   const changeHandler = (e) =>
//     setRegisterData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   const handleRegister = async () => {
//     try {
//       await registerUser(
//         registerData.name,
//         registerData.email,
//         registerData.password
//       );
//       openLogin();
//     } catch (error) {
//       alert("failed to register!");
//     }
//   };
//   return (
//     <Modal
//       open={isOpen}
//       onClose={close}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//     >
//       <Box sx={style}>
//         <Box
//           sx={{
//             width: "400px",
//             height: "450px",
//             backgroundColor: "white",
//             borderRadius: "20px",
//             display: "flex",
//             flexDirection: "column",
//             gap: "40px",
//             justifyContent: "space-evenly",
//             alignItems: "center",
//           }}
//         >
//           <Typography>Register</Typography>
//           <Input
//             placeholder="User Name"
//             variant="outlined"
//             type="text"
//             name="name"
//             onChange={changeHandler}
//           />

//           <Input
//             placeholder="Email"
//             variant="outlined"
//             type="email"
//             name="email"
//             onChange={changeHandler}
//           />
//           <Input
//             placeholder="Password"
//             variant="outlined"
//             type="password"
//             name="password"
//             onChange={changeHandler}
//           />

//           <Button
//             onClick={handleRegister}
//             sx={{
//               width: "150px",
//               backgroundColor: "blue",
//               color: "black",
//             }}
//           >
//             Register
//           </Button>
//           <Typography onClick={openLogin} sx={{ cursor: "pointer" }}>
//             Click here to login
//           </Typography>
//         </Box>
//       </Box>
//     </Modal>
//   );
// }
