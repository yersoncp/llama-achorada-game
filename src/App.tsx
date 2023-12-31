import React, { useEffect, useRef } from 'react';
import './App.css';
import Scenario from './components/Scenario';

function App() {
  const llamaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let children = llamaRef.current?.children;
    let i = 0;
    const frameCount = children?.length || 0;
    const interval = setInterval(() => {
      children?.[i % frameCount].classList.remove("active");
      children?.[++i % frameCount].classList.add("active");
    }, 150);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div className="App">
      <Scenario>
        <div className="llama-container" ref={llamaRef}>
          <img className="llama-image" src="/assets/llama/sprite_0.png" alt=""/>
          <img className="llama-image" src="/assets/llama/sprite_1.png" alt=""/>
        </div>
      </Scenario>

    </div>
  );
}

export default App;
