# NodeJswebapi

Folder Structure Conventions
============================

> Folder structure options and naming conventions for software projects

### A typical top-level directory layout

    .
    ├── sever.js -- used  as the entry point to app              
    ├── controller 
        myappcontroller.js  
           
    ├── data                  
        ├── data.json
    ├──routes
        ├── myapprouter.js  
    ├──test  Test files (alternatively `spec` or `tests`)
    ├──util --conts wiil be kept
    ├──views                 
          pages
          ├── about.ejs
          └── index.ejs
          partials
          ├── footer.ejs
          └── head.ejs
          └── header.ejs
          

The node.js example app teaches the very basics of how to work with Contentful:

consume content from the Contentful Delivery and Preview APIs
model content
edit content through the Contentful web app


Common setup
Clone the repo and install the dependencies.

git clone https://github.com/darshanVishnu/NodeJswebapi/
cd NodeJswebapi
npm install
Steps for read-only access
To start the express server, run the following

npm run start
Open http://localhost:8000 and take a look around.
    
        .

