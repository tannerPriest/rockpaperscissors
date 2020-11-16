import React from 'react'
import { useStyles } from './styles'

const Header = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.header}>
            <h1>Rock Paper Scissors</h1>
        </div>
    )
};

export default Header
