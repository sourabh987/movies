// Libraries

import React from "react"; // creation logic

import ReactDOM from "react-dom"; // render logic
import App from "./App";
//App is a component we have imported



ReactDOM.render(
               // ek component
                <div>
               <App/>  
                
                </div>,
                 document.querySelector("#root") // aur ek jagah jha us component ko dikhana hai
                 );