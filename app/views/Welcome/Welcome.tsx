import * as React from 'react'
import 'css-loader!./styles.css'

export interface WelcomeProps {
    compiler: string
    framework: string
}

export const WelcomeComponent = (props: WelcomeProps): JSX.Element => {
    return (
        <div className="sectionContainer welcomeContainer">
            <p>Hello from {props.compiler} and {props.framework}!</p>
        </div>
    )
}