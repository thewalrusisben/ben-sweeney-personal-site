import * as React from "react"
import { WelcomeComponent, WelcomeProps } from './Welcome'

export class Welcome extends React.Component<WelcomeProps, {}> {
    render () {
        return <WelcomeComponent compiler={this.props.compiler} framework={this.props.framework} />
    }
}