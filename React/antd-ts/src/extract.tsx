import React, { useState } from 'react';
import logo from './logo.svg';
import './extract.css';


const Extract = () => {
  const [data, setData] = useState(null)

  function getVedioID(str = '') {

    const params = str.split('?')[1]!

    const paramPairs = params.split('&')

    if (paramPairs) {
      let ret = null
      paramPairs.forEach(param => {
        let temp = param.split("=")
        if (temp[0] === "v") {
          console.log(temp[1])
          ret = temp[1]
        }
      })
      return ret
    }
  }

  const tryPost = () => {

    fetch('http://127.0.0.1:5000/test', {
      method: "post",
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "http://127.0.0.1:5000/test"
      },
      body: JSON.stringify({
        id: getVedioID("https://www.youtube.com/watch?v=Oz4XfhktPBI")
      })
    }).then(res => res.json()).then(data => (
      console.log(data)
    ))
  }
  return (
    <div className="App">
      <button onClick={tryPost}>post请求</button>
    </div>
  );
}



export default Extract;
