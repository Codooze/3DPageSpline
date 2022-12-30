import Content from "./Content";
import './App.css';
import React, { useState, useEffect } from "react";


export default function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <>
      <Content />
      {!(windowSize.innerWidth <= 680) && <div className="spline">
      <iframe  src='https://my.spline.design/untitled-2b64e02628f981a1798e2697c3042e90/' frameborder='0' width='100%' height='100%'></iframe>
      </div>}
    </>
  );
}


function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}