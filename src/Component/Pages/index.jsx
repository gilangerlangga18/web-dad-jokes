import React from "react";
import Navbar from "../Navbar";
import MainPage from "../MainPage";
import FooterPage from "../Footer";
import BasicModal from "../Login";
import ModalRegister from "../Register";
import ModalLogin from "../Login";

function Pages() {
  return (
    <>
      <Navbar />
      <MainPage />
      <FooterPage />
    </>
  );
}

export default Pages;
