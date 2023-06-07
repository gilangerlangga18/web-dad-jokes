// import axios from "axios";
// import { createContext, useContext, useState } from "react";

// const GlobalContext = createContext({});

// export const useGlobalContext = () => useContext(GlobalContext);

// export default function GlobalContextProvider({ children }) {
//   const initialValues = {
//     id: "",
//     isLogin: false,
//     name: "",
//     email: "",
//   };
//   const [authGlobal, setAuthGLobal] = useState(initialValues);

//   const loginUser = async (email, password) => {
//     // try {
//     //   const results = await axios.post(
//     //     "https://staging-vas-app.indofungames.com/1.0/login/users",
//     //     {
//     //       email,
//     //       password,
//     //     }
//     //   );
//     //   if (results.data.is_success === 0) {
//     //     throw new Error(results.data.data.m);
//     //   }
//     //   const { userId, name } = results.data.data;
//     //   setAuthGLobal((prev) => ({
//     //     ...prev,
//     //     id: userId,
//     //     name,
//     //     email,
//     //     isLogin: true,
//     //   }));
//     // } catch (error) {
//     //   throw error;
//     // }
//   };

//   const registerUser = async (nama, email, password) => {
//     // try {
//     //   await axios.post(
//     //     "https://staging-vas-app.indofungames.com/1.0/register/users/registermain",
//     //     {
//     //       name: nama,
//     //       email: email,
//     //       password: password,
//     //     }
//     //   );
//     // } catch (error) {
//     //   throw error;
//     // }
//   };

//   // const logout = () => {
//   //   setAuthGLobal(initialValues);
//   // };
//   const [jokes, setJokes] = useState({ title: "" });
//   const getJokes = async () => {
//     const res = await axios.get("https://candaan-api.vercel.app/api/text");
//     const datas = res.data.data;
//     // console.log(datas.length);
//     const randomIndex = Math.floor(Math.random() * (datas.length - 1));
//     const jokesa = datas.find((item, index) => {
//       return index == randomIndex;
//     });

//     setJokes({
//       title: jokesa,
//     });
//     // console.log(jokes);
//   };
//   // console.log(jokes);

//   return (
//     <GlobalContext.Provider value={{ authGlobal, getJokes, jokes }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// }
