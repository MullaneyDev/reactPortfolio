import React from "react";
import "./keyCodestyle.css"

const KeyCodeGen = () => {
  const keyCode = document.getElementById("keyCode");
  const keyName = document.getElementById("item4");
  const keyCode2 = document.getElementById("item5");
  const keyCode3 = document.getElementById("item6");
  const grid = document.getElementsByClassName("gridContainer");

  document.addEventListener("keyup", (event) => {
    let name = event.key;
    let code = event.code;
    let keycode = event.keyCode;
    // keyCode.innerText = `Key pressed ${name}\n Key code value :${code}\n key code value :${keycode}`; - used when testing
    keyName.innerText = `${name}`;
    keyCode2.innerText = `${code}`;
    keyCode3.innerText = `${keycode}`;
  });

  return (
    <div className="App">
      <h1>Key Code Generator</h1>
      <h3>Press any key to display its Key Code information</h3>
      <p id="keyCode"></p>

      <div class="gridContainer">
        <div id="item1">Key pressed</div>
        <div id="item2">Key code</div>
        <div id="item3">Key code</div>
        <div id="item4"></div>
        <div id="item5"></div>
        <div id="item6"></div>
      </div>
      <input class="input" type="text" />

      <button class="homeButton">
        <a href="../JSDOM.html">Back to games</a>
      </button>
    </div>
  );
};

export default KeyCodeGen;
