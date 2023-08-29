document.getElementById('CreateContext').innerHTML = `
import { createContext } from "react";

const CreateContext = createContext();

export default CreateContext
`;
document.getElementById("UseContext").innerHTML = `
import React from 'react'
import CreateContext from '../CreateContext'

const UseContext = (props) =&gt; {

  const a = {
    "a1": "World",
    "first": "John",
    "last": "Doe"
  }

  return (
    &lt;CreateContext.Provider value={a}&gt;
      {props.children}
    &lt;/CreateContext.Provider&gt;
  )
}

export default UseContext
`;
document.getElementById("AppJs").innerHTML=`
import React from 'react'
import UseContext from './Components/UseContext'
import Demo from './Components/Demo'

const App = () =&gt; {
  return (
    &lt;UseContext&gt;
      &lt;Demo /&gt;
    &lt;/UseContext&gt;
  )
}

export default App
`;
document.getElementById("DemoJs").innerHTML=`
import React, { useContext } from 'react'
import CreateContext from '../CreateContext'

const Demo = () =&gt; {
  const a = useContext(CreateContext)

  return (
    &lt;div&gt;
      &lt;h1&gt;Hello {a.a1}&lt;/h1&gt;
      &lt;p&gt;My Name is {a.first} {a.last}.&lt;/p&gt;
    &lt;/div&gt;
  )
}

export default Demo
`;

document.getElementById("useContextHeading").innerHTML = "Hello World"