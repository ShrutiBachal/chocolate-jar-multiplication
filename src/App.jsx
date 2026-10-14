import React, { useState } from 'react';

const levels = [{groups:3,each:2},{groups:2,each:3},{groups:4,each:2},{groups:3,each:4},{groups:5,each:2}];
function Chocolate({onClick, collected=false, delay=0}) {
  return <button type="button" className={`chocolate ${collected?'collected':''}`} onClick={onClick} style={{animationDelay:`${delay}ms`}} aria-label="Collect chocolate"><span className="shine"/><span className="square"/></button>;
}
function Pointer(){return <span className="pointer" aria-hidden="true">👆</span>}
export default function App(){
  const [level,setLevel]=useState(0);
  const [opened,setOpened]=useState(0);
  const [picked,setPicked]=useState([]);
  const [showAnswer,setShowAnswer]=useState(false);
  const {groups,each}=levels[level];
  const total=groups*each;
  const released=opened*each;
  const complete=picked.length===total;
  function reset(next=level){setLevel(next);setOpened(0);setPicked([]);setShowAnswer(false)}
  function collect(id){if(!picked.includes(id))setPicked(prev=>[...prev,id]);}
  function openNext(){if(opened<groups){setOpened(v=>v+1);setShowAnswer(false)}}
  return <main className="app">
    <header><div className="brand"><span className="brand-icon">🍫</span><div><h1>Chocolate Jar</h1><p>Discover multiplication by playing</p></div></div><div className="level">Level {level+1} / {levels.length}</div></header>
    <section className="playboard" aria-label="Multiplication activity">
      <div className="sky"><span>✦</span><span>✧</span><span>✦</span></div>
      <div className="instructions"><div className="step-dot">1</div><span>{opened<groups?'Tap the big jar to open a chocolate group':picked.length<released?'Tap each chocolate to collect it':complete?'You collected them all!':'All groups are open!'}</span></div>
      <div className="big-jar-area"><button className={`big-jar ${opened<groups?'can-open':''}`} onClick={openNext} disabled={opened===groups} aria-label={`Open next chocolate group, ${opened} of ${groups} opened`}><span className="jar-lid"/><span className="jar-glass"><span className="jar-label">🍫</span><span className="jar-inside">{Array.from({length:Math.min(6,Math.max(0,groups-opened)*each)},(_,i)=><i key={i}/>)}</span></span></button>{opened<groups&&<Pointer/>}<div className="jar-count">{opened} / {groups} groups opened</div></div>
      <div className="group-grid">{Array.from({length:groups},(_,g)=><div className={`group-card ${g<opened?'visible':'waiting'}`} key={g}><div className="group-number">Group {g+1}</div><div className="group-chocolates">{g<opened?Array.from({length:each},(_,j)=>{const id=g*each+j;return picked.includes(id)?<span key={id} className="empty-slot">✓</span>:<Chocolate key={id} onClick={()=>collect(id)} delay={j*90}/>;}):<div className="question">?</div>}</div></div>)}</div>
      <div className="collection"><div className="collection-head"><div className="step-dot">2</div><strong>My chocolate basket</strong><span className="counter">{picked.length} / {total}</span></div><div className="basket">{picked.length?picked.map((id,i)=><Chocolate key={id} collected delay={i*40} onClick={()=>{}}/>):<span className="basket-hint">🍬 <span>Collected chocolates appear here</span></span>}</div></div>
      <div className="result-area">{complete?<><button className="answer-btn" onClick={()=>setShowAnswer(true)} disabled={showAnswer}>{showAnswer?'✨ Wonderful! ✨':'✨ Discover the total!'}</button>{showAnswer&&<div className="equation"><span>{groups} groups of {each}</span><strong>{Array.from({length:groups},()=>each).join(' + ')} = {total}</strong><strong className="multiplication">{groups} × {each} = {total}</strong></div>}</>:<div className="progress-hint">{opened===0?'👆 Start with the big jar':picked.length<released?'👆 Collect the chocolates above':opened<groups?'👆 Open the next group':'👆 Collect the remaining chocolates'}</div>}</div>
    </section>
    <footer><button className="secondary" onClick={()=>reset()}>↻ Try again</button><button className="next" onClick={()=>reset((level+1)%levels.length)}>{showAnswer?'Next level →':'Skip level →'}</button></footer>
  </main>;
}
