import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Welcome } from "./views/Welcome"
import { Blog } from './views/Blog'
import 'css-loader!./common/styles/app.css'

class App extends React.Component {
    render () {
        return (
            <Welcome compiler="foo" framework="bar" />
        )
    }
}
export default App