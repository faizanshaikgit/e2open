import { Button, HStack, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import a from "../components/Assests/logo.jpg";
import clickSound from "../components/Assests/click.mp3";

const Header = () => {
  const playSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  return (
    <HStack
      p={"4"}
      // shadow={"base"}
      bgColor={"#ffb6c1"} // Baby pink background
    >
      <Button variant={"unstyled"} color={"white"} onClick={playSound}>
        <Link to="/" style={{ color: "white", fontWeight: "bold" }}>Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} onClick={playSound}>
        <Link to="/About" style={{ color: "white", fontWeight: "bold" }}>About</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} onClick={playSound}>
        <Link to="/Register" style={{ color: "white", fontWeight: "bold" }}>Register</Link>
      </Button>
      <Spacer />
      
      <Link to="/">
        <img
          style={{
            width: "95px",
            height: "85px",
            borderRadius: "8px", // Optional: Rounded corners for the image
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)", // Optional: Shadow for the image
          }}
          src={a}
          alt="Logo"
        />
      </Link>
    </HStack>
  );
};

export default Header;
