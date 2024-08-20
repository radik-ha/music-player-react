import { useState, useRef, useEffect } from "react";
import MusicMeta from "./meta.json";
import "./styles.css";

function MusicApp() {
  const [currentState, setCurrentState] = useState("⏹");
  const [index, setIndex] = useState(0);
  const audio = useRef(new Audio(MusicMeta[index].muslink));

  useEffect(() => {
    audio.current.pause();
    audio.current = new Audio(MusicMeta[index].muslink);
  }, [index]);

  useEffect(() => {
    currentState === "❚❚" ? audio.current.play() : audio.current.pause();
  }, [currentState]);

  const moveLeft = () => {
    if (index !== 0) {
      setIndex(index - 1);
      setCurrentState("⏹");
    }
  };

  const moveRight = () => {
    if (index !== MusicMeta.length - 1) {
      setIndex(index + 1);
      setCurrentState("⏹");
    } else{
    	setIndex(0);
    }
  };

  const pauseOrPlay = () => {
    setCurrentState(currentState === "⏹" ? "❚❚" : "⏹");
  };

  return (
    <div id="player">
      <img src={MusicMeta[index].imglink} alt="" />
      <h1 id="title">{MusicMeta[index].title}</h1>
      <div id="controls">
        <button onClick={moveLeft}>◀</button>
        <button onClick={pauseOrPlay}>{currentState}</button>
        <button onClick={moveRight}>▶</button>
      </div>
    </div>
  );
}

export default MusicApp;
