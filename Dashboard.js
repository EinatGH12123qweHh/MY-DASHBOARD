import React from 'react';

function Dashboard() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Welcome Einat 🌸</h1>
      <h2>Today's Plan</h2>
      <ul>
        <li>Maya - Training 17:00-20:30</li>
        <li>Noa - Playdate with Tevel</li>
        <li>Zoom meeting with Listaa 14:30</li>
        <li>Call Savta after doctor's appointment</li>
      </ul>
      <h2>Coming Up</h2>
      <ul>
        <li>Remembrance Race Wednesday 17:00</li>
        <li>Maya - Friday training 13:30-17:00</li>
        <li>Friday night: Sleepover at Ofri & Lior</li>
        <li>Yuval Ninja Thursday 16:30</li>
      </ul>
    </div>
  );
}

export default Dashboard;
