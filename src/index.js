import React from 'react'
import ReactDOM from 'react-dom/client'

const divID = 'div'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div id={`${divID}1`}>
    <h1>Hello!</h1>
    <div id={divID + '2'}>
      <span>Hello world</span>
      <button onClick={() => alert('Caramba!!')}>ClickMe</button>
    </div>
  </div>
)
