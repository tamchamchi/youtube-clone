import { Box, Divider, MenuList, } from "@mui/material";
import { categories, profiles, settings, subscriptions } from "../utils/constants";
import RenderInfoSideBar from "./RenderInfoSideBar";

const SideBar = (props) => {
  const { open } = props
  return (
    <Box sx=
      {{
        width: open ? '60px' : '250px',
        height: '90vh',
        overflowY: 'auto',
        transition: 'width 0.2s ease',
      }}
    >
      <MenuList >
        {/* Categories */}
        <RenderInfoSideBar data={categories} open={open} />
        <Divider />
        {/* Profiles */}
        <RenderInfoSideBar data={profiles} open={open} />
        <Divider />
        {/* Subscriptions */}
        <RenderInfoSideBar data={subscriptions} open={open} />
        <Divider />
        {/* Setting */}
        <RenderInfoSideBar data={settings} open={open} />
      </MenuList>
    </Box >
  )
};

export default SideBar;
