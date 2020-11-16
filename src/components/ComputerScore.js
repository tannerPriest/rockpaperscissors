import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const ComputerScore = (props) => {

    return (
        <Grid item xs={4}>
            <Typography variant="h4">Computer Score: {props.computerScore}</Typography>
        </Grid>
    )
}

export default ComputerScore
