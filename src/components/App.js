import React from 'react'
import '../styles/App.css';
const App = () => {
  let currentTime = new Date().toLocaleString();
  const [time, setTime] = React.useState(currentTime);
  setInterval(refreshTime, 1000);
  
    function refreshTime() {
    const newTime = new Date().toLocaleString();
    setTime(newTime);
  }
  
  return (
    <div id="main">
      <div className="date-time">{time}</div>
    </div>
  )
}


export default App;
