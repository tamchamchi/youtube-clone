import { RouterProvider } from "react-router-dom";
import router from "./routers";
import { Box } from "@mui/material";
import { NavBar, SideBar } from "./components";
import { useState } from "react";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <Box component='main'>
      <NavBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <Box display='flex' mt={2} >
        <SideBar open={isCollapsed} />
        <RouterProvider router={router} />
      </Box>
    </Box>
  );
}

export default App;
