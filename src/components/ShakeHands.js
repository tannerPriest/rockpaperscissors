import React from 'react'
import { animated, Keyframes } from 'react-spring/renderprops'

const ShakeHands = (props) => {
    const { children, play } = props
    const Content = Keyframes.Spring(async next => {
        // None of this will cause React to render, the component renders only once :-)
        while (play) {
            await next({
                from: { marginTop: -40},
                to: { marginTop: 0},
            })
            await next({
                from: { marginTop: 0},
                to: { marginTop: -40},
            })
        }
        next({
            width: 200,
            height: 200,
        })
    })
    return (
        <Content config={{ duration: 200}}>
            {props => (
                <animated.div
                    style={{...props }}
                >
                    {children}
                </animated.div>
            )}
        </Content>
    )
}

export default ShakeHands
