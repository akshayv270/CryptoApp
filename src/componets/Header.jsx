import { Button, HStack } from "@chakra-ui/react";
import React from "react";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <Button variant={"unstyled"} color={"white"}>
        {/* <Link to="/">Home</Link> */}
        <a href="/">Home</a>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        {/* <Link to="/exchanges">Exchanges</Link> */}
        <a href="/exchanges">Exchanges</a>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        {/* <Link to="/coins">Coins</Link> */}
        <a href="/coins">Coins</a>
      </Button>
    </HStack>
  );
};

export default Header;