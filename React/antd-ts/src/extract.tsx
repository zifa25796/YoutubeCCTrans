import React, { useState } from 'react';
import logo from './logo.svg';
import './extract.css';


const Extract = () => {
  const [data, setData] = useState(null)

  const tryPost = () => {
    fetch('http://127.0.0.1:5000/test', {
      method: "post",
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "http://127.0.0.1:5000/test"
      },
      body: JSON.stringify({
        msg: "testing in date 2023 11 22"
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
