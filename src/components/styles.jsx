import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    header: {
        width: "100%",
        textAlign: "center",
        padding: theme.spacing(2)
    },
    body: {
        // border: "1px black solid",
    },
    scoreBoard: {
        // border: "1px yellow solid",
    },
    handsBoard: {
        // border: "1px orange solid",
    },
    handBox: {
        // height: 400,
        // width: 400,
        backgroundColor: "aqua",
        boxShadow: "none"
    },
    media: {
        height: 200,
        width: 200,
        // paddingTop: '56.25%', // 16:9
    },
    shakeCompHands: {
        height: 200,
        width: 200,
    },

    buttonBoard: {
        marginTop: theme.spacing(3)
    },
    rockButton: {
        backgroundColor: "blue",
        color: "white",
        "&:hover": {
            backgroundColor: "blue",
        }
    },
    paperButton: {
        backgroundColor: "white",
        color: "blue",
        "&:hover": {
            backgroundColor: "white",
        }
    },
    scissorsButton: {
        backgroundColor: "grey",
        color: "white",
        "&:hover": {
            backgroundColor: "grey",
        },
    },
}))