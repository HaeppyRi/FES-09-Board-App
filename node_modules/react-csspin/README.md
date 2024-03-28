# react-csspin
Spinner UI Component for React 18.x.
This project is an wrapper of [CSSPIN](https://www.npmjs.com/package/csspin)

[![npm](https://img.shields.io/npm/v/react-csspin.svg )](https://www.npmjs.com/package/react-csspin)
[![npm](https://img.shields.io/npm/dm/react-csspin.svg)](https://www.npmjs.com/package/react-csspin)
[![GitHub stars](https://img.shields.io/github/stars/stepanowon/react-csspin.svg?style=social&label=Stars&style=for-the-badge)](https://github.com/stepanowon/react-csspin/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/stepanowon/react-csspin.svg?style=social&label=Fork&style=for-the-badge)](https://github.com/stepanowon/react-csspin/network)
[![Build Status](https://travis-ci.org/stepanowon/react-csspin.svg?branch=master)](https://travis-ci.org/stepanowon/react-csspin)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

------------

> Author : Stephen Won(원형섭), OpenSG Inc.        
> Online Demo : https://react-csspin.vercel.app/

## License
MIT 
## Usage  


#### install & usage
~~~
npm install react-csspin

//import
import { ReactCsspin } from "react-csspin";
import 'react-csspin/dist/style.css';

//usage 
<ReactCsspin 
  message={message} spinStyle={spinStyle}
  color={color} opacity={Number(opacity)} />
~~~


#### NPM - example
~~~
import React, { useState } from "react";
import { ReactCsspin } from "react-csspin";
import 'react-csspin/dist/style.css';

const App = () => {
  const [message, setMessage] = useState<string>("Loading");
  const [spinStyle, setSpinStyle] = useState<string>("cp-round");
  const [opacity, setOpacity] = useState<string>("0.7");
  const [color, setColor] = useState<string>("white");
  const [visible, setVisible] = useState<boolean>(false);

  const viewReactCsspin = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  };

  return (
    <div>
      <h2>ReactCsspin Test</h2>
      <hr />
      Loading Message :{" "}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      Spinner Style : &nbsp;
      <select onChange={(e) => setSpinStyle(e.target.value)} value={spinStyle}>
        <option>cp-round</option>
        <option>cp-pinwheel</option>
        <option>cp-balls</option>
        <option>cp-bubble</option>
        <option>cp-flip</option>
        <option>cp-hue</option>
        <option>cp-skeleton</option>
        <option>cp-eclipse</option>
        <option>cp-boxes</option>
        <option>cp-morph</option>
        <option>cp-heart</option>
        <option>cp-meter</option>
      </select>
      <br />
      opacity(0 &lt; x &lt; 1) :{" "}
      <input
        type="text"
        value={opacity}
        onChange={(e) => setOpacity(e.target.value)}
      />
      <br />
      background-color :
      <select onChange={(e) => setColor(e.target.value)} value={color}>
        <option>black</option>
        <option>white</option>
        <option>red</option>
        <option>yellow</option>
        <option>blue</option>
        <option>aqua</option>
        <option>green</option>
        <option>orange</option>
        <option>brown</option>
        <option>salmon</option>
        <option>chocolate</option>
        <option>bisque</option>
      </select>
      <br />
      <button onClick={viewReactCsspin}>Test Spinner</button>
      {visible ? (
        <ReactCsspin
          message={message}
          spinStyle={spinStyle}
          color={color}
          opacity={Number(opacity)}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
~~~
##
#### Props
   * message
      - type : String
      - Loading Message
      - Default : "Loading" 
   * spinStyle 
     - type : String
     - Spinner Style
     - default : "cp-round"
     - available value : "cp-round", "cp-pinwheel", "cp-bubble", "cp-flip", "cp-hue", "cp-skeleton", "cp-eclipse", "cp-boxes", "cp-morph", "cp-heart", "cp-meter"
     - about more detail style ---> https://webkul.github.io/csspin/
   * color
     - type : String
     - default : "white"
   * opacity
     - type : number(0 < x < 1)
     - default : 0.7