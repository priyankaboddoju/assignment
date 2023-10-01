import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import BrowserPage from './BrowserPage';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import banana from '../../src/images/bananaimage.png';
import strawberry from '../../src/images/strawberry.png';
import yogurt from '../../src/images/yogurt.png';
import blackberry from '../../src/images/blackberries.png';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const drawerWidth = 240;

export default function RowAndColumnSpacing(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const menuCategories = ["Produce", "Prepared foods", "Canned foods & Soups", "Produce", "Bakery", "Diary & Eggs", "Frozen Meat & Seafood", "Bakery", "Diary & Eggs", "Frozen Meat & Seafood"]

    const drawer = (
        <div >
            <Toolbar />

            <List>
                {menuCategories.map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ padding: 1, mt: 2 }}>
                        <ListItemButton>
                            <ListItemText secondary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            <BrowserPage />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, mt: 3 }}>
                <Grid item xs={2}>
                    <div>
                        <Box sx={{ display: 'flex' }}>
                            <Box
                                component="nav"
                                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                                aria-label="mailbox folders"
                            >
                                <Drawer
                                    variant="permanent"
                                    sx={{
                                        display: { xs: 'none', sm: 'block' },
                                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                                    }}
                                    open
                                >
                                    {drawer}
                                </Drawer>
                            </Box>

                        </Box>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <Box sx={{ width: '100%', mt: 15, ml: 1 }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, mt: 3 }}>
                            <Grid item xs={12}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Produce
                                    <ListItemIcon>
                                        <ArrowForwardIosIcon />
                                    </ListItemIcon>
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Card sx={{ maxWidth: 245, textAlign: 'center' }}>
                                    <CardMedia
                                        sx={{ height: 100, width: 100, alignContent: 'center', display: 'inline-flex' }}
                                        image={banana}
                                        title="banana image"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            $0.69
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Banana 1 ct
                                        </Typography>
                                        <Typography variant="body3" color="text.secondary">
                                            18 oz
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={2}>
                                <Card sx={{ maxWidth: 245, textAlign: 'center' }}>
                                    <CardMedia
                                        sx={{ height: 100, width: 100, alignContent: 'center', display: 'inline-flex' }}
                                        image={strawberry}
                                        title="strawberry"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            $0.69
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Strawberries
                                        </Typography>
                                        <Typography variant="body3" color="text.secondary">
                                            1 lb
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={2}>
                                <Card sx={{ maxWidth: 245, textAlign: 'center' }}>
                                    <CardMedia
                                        sx={{ height: 100, width: 100, alignContent: 'center', display: 'inline-flex' }}
                                        image={yogurt}
                                        title="yogurt"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            $0.69
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Yogurt
                                        </Typography>
                                        <Typography variant="body3" color="text.secondary">
                                            1 lb
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={2}>
                                <Card sx={{ maxWidth: 245, textAlign: 'center' }}>
                                    <CardMedia
                                        sx={{ height: 100, width: 100, alignContent: 'center', display: 'inline-flex' }}
                                        image={blackberry}
                                        title="blackberry"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            $0.69
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Blackberries
                                        </Typography>
                                        <Typography variant="body3" color="text.secondary">
                                            1 lb
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={2}>
                                <Card sx={{ maxWidth: 245, textAlign: 'center' }}>
                                    <CardMedia
                                        sx={{ height: 100, width: 100, alignContent: 'center', display: 'inline-flex' }}
                                        image={banana}
                                        title="banana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            $0.69
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Banana 1 ct
                                        </Typography>
                                        <Typography variant="body3" color="text.secondary">
                                            18 oz
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={2}>
                                <Card sx={{ maxWidth: 245, textAlign: 'center' }}>
                                    <CardMedia
                                        sx={{ height: 100, width: 100, alignContent: 'center', display: 'inline-flex' }}
                                        image={strawberry}
                                        title="strawberry"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            $0.69
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Strawberries
                                        </Typography>
                                        <Typography variant="body3" color="text.secondary">
                                            1 lb
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, mt: 3 }} sx={{ mt: 3 }}>
                            <Grid item xs={12}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Prepared foods
                                    <ListItemIcon>
                                        <ArrowForwardIosIcon />
                                    </ListItemIcon>
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Card sx={{ maxWidth: 245, textAlign: 'center' }}>
                                    <CardMedia
                                        sx={{ height: 100, width: 100, alignContent: 'center', display: 'inline-flex' }}
                                        image={banana}
                                        title="banana image"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            $0.69
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Banana 1 ct
                                        </Typography>
                                        <Typography variant="body3" color="text.secondary">
                                            18 oz
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={2}>
                                <Card sx={{ maxWidth: 245, textAlign: 'center' }}>
                                    <CardMedia
                                        sx={{ height: 100, width: 100, alignContent: 'center', display: 'inline-flex' }}
                                        image={strawberry}
                                        title="strawberry"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            $0.69
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Strawberries
                                        </Typography>
                                        <Typography variant="body3" color="text.secondary">
                                            1 lb
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={2}>
                                <Card sx={{ maxWidth: 245, textAlign: 'center' }}>
                                    <CardMedia
                                        sx={{ height: 100, width: 100, alignContent: 'center', display: 'inline-flex' }}
                                        image={yogurt}
                                        title="yogurt"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            $0.69
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Yogurt
                                        </Typography>
                                        <Typography variant="body3" color="text.secondary">
                                            1 lb
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={2}>
                                <Card sx={{ maxWidth: 245, textAlign: 'center' }}>
                                    <CardMedia
                                        sx={{ height: 100, width: 100, alignContent: 'center', display: 'inline-flex' }}
                                        image={blackberry}
                                        title="blackberry"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            $0.69
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Blackberries
                                        </Typography>
                                        <Typography variant="body3" color="text.secondary">
                                            1 lb
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={2}>
                                <Card sx={{ maxWidth: 245, textAlign: 'center' }}>
                                    <CardMedia
                                        sx={{ height: 100, width: 100, alignContent: 'center', display: 'inline-flex' }}
                                        image={banana}
                                        title="banana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            $0.69
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Banana 1 ct
                                        </Typography>
                                        <Typography variant="body3" color="text.secondary">
                                            18 oz
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={2}>
                                <Card sx={{ maxWidth: 245, textAlign: 'center' }}>
                                    <CardMedia
                                        sx={{ height: 100, width: 100, alignContent: 'center', display: 'inline-flex' }}
                                        image={strawberry}
                                        title="strawberry"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            $0.69
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Strawberries
                                        </Typography>
                                        <Typography variant="body3" color="text.secondary">
                                            1 lb
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, mt: 3 }} sx={{ mt: 3 }}>
                            <Grid item xs={12}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Canned foods & Soups
                                    <ListItemIcon>
                                        <ArrowForwardIosIcon />
                                    </ListItemIcon>
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Card sx={{ maxWidth: 245, textAlign: 'center' }}>
                                    <CardMedia
                                        sx={{ height: 100, width: 100, alignContent: 'center', display: 'inline-flex' }}
                                        image={banana}
                                        title="banana image"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            $0.69
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Banana 1 ct
                                        </Typography>
                                        <Typography variant="body3" color="text.secondary">
                                            18 oz
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={2}>
                                <Card sx={{ maxWidth: 245, textAlign: 'center' }}>
                                    <CardMedia
                                        sx={{ height: 100, width: 100, alignContent: 'center', display: 'inline-flex' }}
                                        image={strawberry}
                                        title="strawberry"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            $0.69
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Strawberries
                                        </Typography>
                                        <Typography variant="body3" color="text.secondary">
                                            1 lb
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={2}>
                                <Card sx={{ maxWidth: 245, textAlign: 'center' }}>
                                    <CardMedia
                                        sx={{ height: 100, width: 100, alignContent: 'center', display: 'inline-flex' }}
                                        image={yogurt}
                                        title="yogurt"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            $0.69
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Yogurt
                                        </Typography>
                                        <Typography variant="body3" color="text.secondary">
                                            1 lb
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={2}>
                                <Card sx={{ maxWidth: 245, textAlign: 'center' }}>
                                    <CardMedia
                                        sx={{ height: 100, width: 100, alignContent: 'center', display: 'inline-flex' }}
                                        image={blackberry}
                                        title="blackberry"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            $0.69
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Blackberries
                                        </Typography>
                                        <Typography variant="body3" color="text.secondary">
                                            1 lb
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={2}>
                                <Card sx={{ maxWidth: 245, textAlign: 'center' }}>
                                    <CardMedia
                                        sx={{ height: 100, width: 100, alignContent: 'center', display: 'inline-flex' }}
                                        image={banana}
                                        title="banana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            $0.69
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Banana 1 ct
                                        </Typography>
                                        <Typography variant="body3" color="text.secondary">
                                            18 oz
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={2}>
                                <Card sx={{ maxWidth: 245, textAlign: 'center' }}>
                                    <CardMedia
                                        sx={{ height: 100, width: 100, alignContent: 'center', display: 'inline-flex' }}
                                        image={strawberry}
                                        title="strawberry"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            $0.69
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Strawberries
                                        </Typography>
                                        <Typography variant="body3" color="text.secondary">
                                            1 lb
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>



        </div>
    );
}
