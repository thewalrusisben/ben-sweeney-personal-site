import * as express from 'express'
import * as path from 'path'
import { readFileSync } from 'fs'
import { StaticRouter } from 'react-router-dom'
import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import * as Webapp from './app'
import * as _ from 'lodash'

const templateString = _.template(readFileSync('./index.html', 'utf-8'))
const app = express()

app.use(express.static('dist'))

app.all('/api', (req, res, next)=> {
    res.send({body: 'yo'})
})

app.get('/app', (req, res, next) => {
    let context = {}
    const body = ReactDOMServer.renderToString(React.createElement('StaticRouter', {location: req.url, context}, Webapp))
    res.send(templateString({body: body}))
})

app.listen(9000, () => {
    console.log(`App running at http://localhost:9000`)
})