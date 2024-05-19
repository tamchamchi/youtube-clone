import { MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

const RenderInfoSideBar = ({ data, open }) => {
     return (
          <>
               {data.map((item, index) => (
                    <MenuItem
                         sx={{
                              padding: 2,
                         }}
                         key={item.name + index}
                    >
                         <ListItemIcon>{item.icon}</ListItemIcon>
                         {!open && <ListItemText>{item.name}</ListItemText>}
                    </MenuItem>
               ))}
          </>
     );
};

export default RenderInfoSideBar;
