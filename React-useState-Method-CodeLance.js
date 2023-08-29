document.getElementById("toggleUseRef").innerHTML = `
import React, { useState } from "react";

function Theme() {
  const [theme, setTheme] = useState(false);
  const changeTheme = () =&gt; {
    setTheme(!theme);
  };
  return (
    &lt;&gt;
      &lt;h1 style={{ color: theme ? "green" : "blue" }}&gt;This is a Heading&lt;/h1&gt;
      &lt;p style={{color: theme ? "black" : "white" , backgroundColor: theme ? "white" : "black"}}&gt;
        This is a paragraph.
      &lt;/p&gt;
      &lt;button onClick={changeTheme}&gt;Click!&lt;/button&gt;
    &lt;/&gt;
  );
}

export default Theme;
      
      `;
document.getElementById("useStateValue").innerHTML = `
import React, { useState } from "react";

function AddValue() {
  const [val, setVal] = useState(0);
  const incrementBtn = () =&gt; {
    setVal(val + 1);
  };
  const decrementBtn = () =&gt; {
    setVal(val - 1);
  };
  return (
    &lt;&gt;
      &lt;h2&gt;{val} : Added Value&lt;/h2&gt;
      &lt;button onClick={incrementBtn} style={{ margin: "0 .5em" }}&gt;
        Add Value!
      &lt;/button&gt;
      &lt;button onClick={decrementBtn} style={{ margin: "0 .5em" }}&gt;
        Less Value!
      &lt;/button&gt;
    &lt;/&gt;
  );
}

export default AddValue;

`;
document.getElementById("DropDown").innerHTML = `
import React, { useState } from "react";

function DropDown() {
  const [drop, setDrop] = useState(false);
  return (
    &lt;&gt;
      &lt;button onClick={() =&gt; setDrop(!drop)}&gt;Click!&lt;/button&gt;

      &lt;div style={{ display: drop ? "block" : "none" }}&gt;
        &lt;button onClick={() =&gt; setDrop(false)}&gt;Close&lt;/button&gt;
        &lt;ul&gt;
          &lt;li&gt;Home&lt;/li&gt;
          &lt;li&gt;Service&lt;/li&gt;
          &lt;li&gt;About&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
    &lt;/&gt;
  );
}

export default DropDown;

`;
document.getElementById("DropDownWithClassNameJs").innerHTML = `
import React, { useState } from "react";
import "./DropDown.css";

const DropDown = () =&gt; {
  const [dropDown, setDropDown] = useState(false);
  return (
    &lt;section className="DropDown"&gt;
      &lt;div&gt; className="Drop" onClick={() =&gt; setDropDown(!dropDown)}&gt;
        Menu
      &lt;/div&gt;
      &lt;div className={dropDown ? "DownActive" : "Down"}&gt;
        &lt;div className="cancelBtn" onClick={() =&gt; setDropDown(false)}&gt;
          &lt;i&gt; className="fas fa-xmark"&gt;&lt;/i&gt;
        &lt;/div&gt;
        &lt;ul&gt;
          &lt;li&gt;Home&lt;/li&gt;
          &lt;li&gt;Service&lt;/li&gt;
          &lt;li&gt;About&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  );
};

export default DropDown;

`;
document.getElementById("DropDownWithClassNameCss").innerHTML = `
* {
     padding: 0;
     margin: 0;
     box-sizing: border-box;
 }
 
 body {
     padding: 1em 2em;
 }
 
 .DropDow {
     position: relative;
 }
 
 .Drop {
     background-color: lightgray;
     width: fit-content;
     padding: .3em .4em;
     margin: .3em 0;
     box-shadow: 1px 1px 2px black;
     cursor: pointer;
     font-family: Arial, Helvetica, sans-serif;
     font-weight: 600;
     border-radius: 3px;
     -webkit-border-radius: 3px;
     -moz-border-radius: 3px;
     -ms-border-radius: 3px;
     -o-border-radius: 3px;
 }
 
 .Down {
     position: absolute;
     left: -1000px;
     transition: .3s;
     -webkit-transition: .3s;
     -moz-transition: .3s;
     -ms-transition: .3s;
     -o-transition: .3s;
 }
 
 .DownActive {
     left: 0;
     position: relative;
     width: fit-content;
     box-shadow: 1px 2px 3px black;
     margin: .5em 0;
     padding: 1em 2em;
     transition: .3s;
     -webkit-transition: .3s;
     -moz-transition: .3s;
     -ms-transition: .3s;
     -o-transition: .3s;
 }
 
 .cancelBtn {
     position: absolute;
     right: 0;
     top: 0;
     padding: .5em;
     cursor: pointer;
     font-size: 20px;
 }
 
 .cancelBtn:active {
     scale: 1.4;
 }
 
 .Drop:hover {
     scale: .95;
     transition: .3s;
     -webkit-transition: .3s;
     -moz-transition: .3s;
     -ms-transition: .3s;
     -o-transition: .3s;
 }
 
 .Drop:active {
     scale: .95;
 }
`;
document.getElementById("formReact").innerHTML = `
import React, { useState } from 'react'
import "../Components/Form.css"

const Form = () =&gt; {
  const [UserName, setUserName] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const Register = (e) =&gt; {
    e.preventDefault()
    alert("Submitted")
  }

  return (
    &lt;section className='Form'&gt;
      &lt;form onSubmit={Register}&gt;
        &lt;input type="text" placeholder='UserName' value={UserName} onChange={(e) =&gt; setUserName(e.target.value)} /&gt;
        &lt;input type="email" name="Email" placeholder='Email' value={Email} onChange={(e) =&gt; setEmail(e.target.value)} /&gt;
        &lt;input type="password" name="Password" placeholder='Password' value={Password} onChange={(e) =&gt; setPassword(e.target.value)} /&gt;
        &lt;input type="submit" value="Submit" className='submitBtn' /&gt;
      &lt;/form&gt;

      &lt;div className="formOutput"&gt;
        &lt;p&gt;&lt;span&gt;UserName :&lt;/span&gt; {UserName}&lt;/p&gt;
        &lt;p&gt;&lt;span&gt;Email :&lt;/span&gt; {Email}&lt;/p&gt;
        &lt;p&gt;&lt;span&gt;Password :&lt;/span&gt; {Password}&lt;/p&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  )
}

export default Form
`;