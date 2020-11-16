import React, { useEffect, useState } from 'react'
import { Card, CardMedia, Grid } from '@material-ui/core'
import { useStyles } from './styles'
import { rock, paper, scissors } from "./Hands";

const playerStyle = {
    transform: "rotateY(180deg)",
};

const PlayerHand = (props) => {
    const [hand, setHand] = useState(rock)
    const classes = useStyles();
    const { playerHand } = props
    useEffect(() => {
        switch (playerHand) {
            case "rock":
                setHand(rock);
                return;
            case "paper":
                setHand(paper);
                return
            case "scissors":
                setHand(scissors);
                return
            default:
                break;
        };
    }, [playerHand])
    return (
        <Grid container item xs={4} justify="center">
            <Grid item>
                <Card className={classes.handBox} raised={false} >
                    <CardMedia className={classes.media} style={playerStyle} component="img" src={hand} />
                </Card>
            </Grid>
        </Grid>
    );
};

export default PlayerHand
