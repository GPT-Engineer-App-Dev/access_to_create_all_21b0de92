import React, { useState } from "react";
import { Box, VStack, Button, Icon, IconButton } from "@chakra-ui/react";
import { FaHome, FaClipboardList, FaCoffee, FaUtensils, FaPlus, FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const CollapsibleSidebar = () => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Box pos="relative">
      <IconButton icon={<FaBars />} onClick={() => setIsCollapsed(!isCollapsed)} bg="gray.400" color="white" position="absolute" top="5" left={isCollapsed ? "10px" : "200px"} zIndex={2} />
      <Box w={isCollapsed ? "0" : "200px"} bg="gray.400" color="white" p={4} transition="width 0.5s" overflow="hidden">
        <VStack align="stretch" spacing={4}>
          {}
        </VStack>
      </Box>
    </Box>
  );
};

export default CollapsibleSidebar;
