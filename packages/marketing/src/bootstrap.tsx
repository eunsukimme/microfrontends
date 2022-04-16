import React from 'react'
import ReactDOM from 'react-dom'

const mount = (el: Element) => {
  ReactDOM.render(<h1>Hi there!</h1>, el) 
}

if(process.env.NODE_ENV === 'development') {
  const container = document.querySelector('#_marketing-dev-root')
  if(container){
    mount(container)
  }
}