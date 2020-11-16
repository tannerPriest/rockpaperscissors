import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const MessageBoard = (props) => {
    return (
        <Grid item container justify="center">
            <Typography variant="h3" align="center">{props.message}</Typography>
        </Grid>
    );
};

export default MessageBoard;
