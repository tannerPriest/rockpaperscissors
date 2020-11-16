import { Grid } from '@material-ui/core';
import React from 'react'
import ComputerScore from './ComputerScore';
import PlayerHand from './PlayerHand';
import ComputerHand from './ComputerHand';
import PlayerScore from './PlayerScore';
import { useStyles } from './styles'
import PlayButtons from './PlayButtons';
import MessageBoard from "./MessageBoard";

const Body = (props) => {
    const classes = useStyles();
    return (
        <Grid container alignItems="center" className={classes.body} spacing={3}>
            <Grid container item xs={12} justify="space-between" className={classes.scoreBoard}>
                <PlayerScore {...props} />
                <ComputerScore {...props} />
            </Grid>
            <Grid container item xs={12} justify="space-between" className={classes.handsBoard}>
                <PlayerHand {...props} />
                <ComputerHand {...props} />
            </Grid>
            <Grid container item xs={12} justify="space-between" className={classes.messageBoard}>
                <MessageBoard {...props} />
            </Grid>
            <Grid container item xs={12} justify="space-between" className={classes.buttonBoard}>
                <PlayButtons {...props} />
            </Grid>
        </Grid>
    );
};

export default Body
