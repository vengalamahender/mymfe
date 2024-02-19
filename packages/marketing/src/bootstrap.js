
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
const mount = (el) => {
    console.log('Hi from Marketing');
    ReactDom.render(<App />,el)
}

if(process.env.NODE_ENV === 'development'){
    const devRoot =  document.querySelector('#dev-marketing')
   if(devRoot){
        mount(devRoot)
   }
}

export {mount}