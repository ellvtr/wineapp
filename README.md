# Wine List

This application is the result of  a code test for a job 
application as fronted developer. 
* Video about it: https://youtu.be/wlhlANpXfdU
* Blog post about it: http://blog.awesomemap.tools/wine-app/

## Quick start
Requires [NodeJs](https://nodejs.org/), install if you don't have it. 
The build files are included in `./www/dist/` so you can start 
the solution quickly like this with minimum dependencies:
```bash
npm install --production
npm run serve
```
That will serve the solution at http://localhost:8080

## Build Setup

``` bash
# install all dependencies
npm install

# serve with hot reload at localhost:8080 
# (run build very first time after installation)
npm run build
npm run dev

# build for production with minification
npm run build

# lint all *.js and *.vue files
npm run lint
```

## Known issues

The module 'sort-array' fails in the build. To fix it, 
replace `let` with `var` in 
`node_modules/sort-array/lib/sort-array.js`.

## About
This small app was a code test for a job as frontend developer. 
The test was as follows:

Build a web app for a client's wine collection. There must be:
- A list of bottles
- Detail view for each wine
- Option to add wines to the list

Optional features:
- Sort wine list, e.g. by name, vineyard, year etc.
- Add user comments to each wine.
- ...

