import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const PlayerScore = (props) => {
    
    return (
        <Grid item xs={4}>
           <Typography variant="h4">Player Score: {props.playerScore}</Typography>
        </Grid>
    )
}

export default PlayerScore
