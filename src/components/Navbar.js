import React from 'react'
import { AppBar, Toolbar, Button, Box, Grid } from '@material-ui/core'
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from '../utils/consts';
import { useContent } from '../contexts/Context'


export default function Navbar() {

    const { currentUser, signOut } = useContent()

    const handleSignOut = async () => {
        await signOut();
    }

    return (
        <Box mb={'30px'}>
            <AppBar position="static" >
                <Toolbar>
                    <Grid container justify="flex-end">
                        {currentUser ?
                            <Button variant="outlined" color="inherit" onClick={handleSignOut}>Sign Out</Button>
                            :
                            <NavLink to={LOGIN_ROUTE} style={{color: "white", textDecoration: "unset"}}>
                                <Button variant="outlined" color="inherit">Sign In</Button>
                            </NavLink>
                        }
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
