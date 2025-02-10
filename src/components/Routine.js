import React, { useState } from "react";
import routines from "../data/routines";

function Routine() {
  const [selectedPersonality, setSelectedPersonality] = useState("Paul Graham");

  return (
    <div className="routine-container">
      <h1>Daily Routine of {selectedPersonality}</h1>

      <select onChange={(e) => setSelectedPersonality(e.target.value)}>
        {Object.keys(routines).map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>

      <div className="routine-card">
        <p>
          <strong>Wake Up:</strong> {routines[selectedPersonality].wakeUp}
        </p>
        <p>
          <strong>Morning:</strong> {routines[selectedPersonality].morning}
        </p>
        <p>
          <strong>Afternoon:</strong> {routines[selectedPersonality].afternoon}
        </p>
        <p>
          <strong>Evening:</strong> {routines[selectedPersonality].evening}
        </p>
        <p>
          <strong>Sleep:</strong> {routines[selectedPersonality].sleep}
        </p>
      </div>
    </div>
  );
}

export default Routine;
