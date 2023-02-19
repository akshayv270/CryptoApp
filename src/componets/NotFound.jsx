import React from 'react'
import { motion } from "framer-motion";
import { Box,  Text } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
    <motion.div
      style={{
        height: "50vh",
      }}
      animate={{
        translateY: "20px",
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      
    </motion.div>

    <Text
      fontSize={"6xl"}
      textAlign={"center"}
      fontWeight={"thin"}
      color={"whiteAlpha.700"}
      mt={"-20"}
    >
      404 Not Found
    </Text>
  </Box>
  )
}

export default NotFound