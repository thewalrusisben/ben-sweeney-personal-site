### What is this?
This is the Readme for Ben Sweeney's portfolio website, a React application that interacts with a NodeJS API to retrieve data pertaining to the components of this website which are regularly updating, like the blog.  This application is very simple, and principally utilizes the following tools:

+ React for the view library + component magic.
+ React-Router v4 for route handling and URL parameters. 
+ Request for 3rd party HTTP request handling.
+ Material design Icons for communicative icons in SVG format.
+ CSS3 animations + transition effects for a bit of flair.

### How is this codebase organized?
The codebase is organized with two primary elements: views & components.

Views, in this application, reflect in general the ways that each of the three primary pages are constituted by use of their components. The views are dumb, and don't handle any substantive application logic, they're just there to keep some semblance of order together amongst all of the various otherwise isolated components.  As a result, I chose to exemplify their lack of logical requirements by writing them as Stateless Functional Components, _loosely_ following Dan Abramov's distinction between [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0). 

Wherever possible, I attempted to abstract pieces away into their own components so they would be either: 

a. Reusable.
b. Easy to manipulate in the view.

The "DRY" maxim that led to option 'a' is best exemplified with the 'ButtonBox' component, which can take one of four forms depending on the context.  Abstracting this piece into a component allowed me to easily extend the visual / functional grouping to more and more purposes without duplicating application logic or CSS. 

### I want to dig into the code, how do I run the app?
Easily:

1. Clone/download the repo
2. `npm install` (or `yarn`)
3. `npm start`

