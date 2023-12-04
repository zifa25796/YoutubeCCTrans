import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [vid, setVid] = useState("")

  function getVedioID(str = "") {
    const params = str.split("?")[1]!
    const paramPairs = params.split("&")

    if (paramPairs) {
      paramPairs.forEach(param => {
        let temp = param.split("=")
        if (temp[0] === "v") {
          console.log(temp[1])
          setVid(temp[1])
        }
      })
    }
  }

  const tryPost = () => {
    getVedioID("https://www.youtube.com/watch?v=Oz4XfhktPBI")
    fetch('http://127.0.0.1:5000/test', {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: vid
      })
    }).then(res => res.json()).then(data => (
      console.log(data)
    ))
  }

  return (
    <div className='App'>
      <div>
        <head>
          <link rel="stylesheet" href="style.css" />
        </head>
        <body>

          <div id="header">
            <h1>YoutubeCCTrans</h1>
            <div></div>
          </div>

          <div id="navBar">
            <div>
              <div>
                <div>CC Grab</div>
                <div>Summary</div>
                <div>Other</div>
              </div>
            </div>
          </div>

          <div id="progressBar">
            <div>
              <h2>Grab CC</h2>
              <div className="timeinterval">
                <div>
                  <p>Strat Time</p>
                  <input type="text" />
                </div>
                <div>
                  <p>End Time</p>
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>
          <div id="translatePanel">
            <div className="lan-transfer">
              <select>
                <option>Current Language</option>
              </select>
              <select>
                <option>Translate Language</option>
              </select>
            </div>
            <div className="trans-detail">
              <div></div>
              <div></div>
            </div>

          </div>
          <div id="export">
            <input type="text" value="file name" />
            <button>Export</button>
          </div>


          <button id="test" onClick={tryPost}>click me</button>
          <script type="text/javascript" src="popup.js"></script>
        </body>
      </div>
    </div >
  )
}

export default App;
