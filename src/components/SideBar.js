import { Box, Divider, ListItemIcon, ListItemText, MenuItem, MenuList, } from "@mui/material";
import { categories, profiles, settings, subscriptions } from "../utils/constants";

const SideBar = (props) => {
  const { open } = props
  return (
    <Box sx=
      {{
        width: open ? '60px' : '200px',
        height: '90vh',
        overflowY: 'auto',
        transition: 'width 0.2s ease',
      }}
    >
      <MenuList >
        {/* Categories */}
        {categories.map(category => (
          <MenuItem
            sx={{
              padding: 2
            }}
            key={category.name}
            onClick={() => console.log(category)}
          >
            <ListItemIcon>{category.icon}</ListItemIcon>
            {!open && <ListItemText>{category.name}</ListItemText>}
          </MenuItem>
        ))}
        <Divider />
        {/* Profiles */}
        {profiles.map(info => (
          <MenuItem
            sx={{
              padding: 2
            }}
            key={info.name}
            onClick={() => console.log(info)}
          >
            <ListItemIcon>{info.icon}</ListItemIcon>
            {!open && <ListItemText>{info.name}</ListItemText>}
          </MenuItem>
        ))}
        <Divider />
        {/* Subscriptions */}
        {subscriptions.map(subscription => (
          <MenuItem
            sx={{
              padding: 2
            }}
            key={subscription.name}
            onClick={() => console.log(subscription)}
          >
            <ListItemIcon>{subscription.icon}</ListItemIcon>
            {!open && <ListItemText>{subscription.name}</ListItemText>}
          </MenuItem>
        ))}
        <Divider />
        {/* Setting */}
        {settings.map(setting => (
          <MenuItem
            sx={{
              padding: 2
            }}
            key={setting.name}
            onClick={() => console.log(setting)}
          >
            <ListItemIcon>{setting.icon}</ListItemIcon>
            {!open && <ListItemText>{setting.name}</ListItemText>}
          </MenuItem>
        ))}
      </MenuList>
    </Box >
  )
};

export default SideBar;
