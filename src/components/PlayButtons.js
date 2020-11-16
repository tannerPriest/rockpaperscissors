import React from 'react'
import { Button, Grid } from '@material-ui/core'
import { useStyles } from './styles'

const PlayButtons = (props) => {
    const classes = useStyles()
    const { play, roll } = props;
    return (
        <Grid container item xs={12} justify="space-evenly">
            <Grid item>
                <Button onClick={() => roll("rock")} disabled={play} size="large" className={classes.rockButton}>Rock</Button>
            </Grid>
            <Grid item>
                <Button onClick={() => roll("paper")} disabled={play} size="large" className={classes.paperButton}>Paper</Button>
            </Grid>
            <Grid item>
                <Button onClick={() => roll("scissors")} disabled={play} size="large" className={classes.scissorsButton}>Scissors</Button>
            </Grid>
        </Grid>
    );
};

export default PlayButtons;
