import { Box, Button, Grid } from '@material-ui/core'
import React from 'react'
import { useContent } from '../contexts/Context'

export default function Login() {

    const { signIn, currentUser } = useContent()

    const handleSignIn = async () => {
        await signIn();
        console.log(currentUser)
    }

    return (
        <>
            <Grid container alignItems="center" justify="center" style={{ height: window.innerHeight - 50 }}>
                <Grid container alignItems="center" justify="center" style={{ width: 400, background: 'lightgray' }}>
                    <Box p={5}>
                        <Button onClick={handleSignIn} variant="outlined">Sign in with Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
