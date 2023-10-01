import React, { useState } from 'react';
import { AppBar } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Sidebar } from 'primereact/sidebar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Content from '../Browser/Content';

export default function TemporaryDrawer() {


    const [visible, setVisible] = React.useState(true);

    const menuCategories = ["Produce", "Prepared foods", "Canned foods & Soups", "Produce", "Bakery", "Diary & Eggs", "Frozen Meat & Seafood", "Bakery", "Diary & Eggs", "Frozen Meat & Seafood"]



    return (
        <div>
            <AppBar>
                <Typography variant="h2" component="div" sx={{ flexGrow: 1, backgroundColor: '#FFE475', color: '#100E3A', fontFamily: 'Mortise', lineHeight: '42px', fontWeight: '700', padding: '25px' }}>
                    E - Commerce
                </Typography>
            </AppBar>
        </div>
    );
}