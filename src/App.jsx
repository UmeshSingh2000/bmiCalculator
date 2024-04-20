import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [state, setState] = useState("");

  useEffect(() => {
    const calculateBmi = () => {
      if (height > 0) {
        const heightInMeters = height * 0.0254; // converting inches to meters
        const val = weight / (heightInMeters * heightInMeters);
        setBmi(Number(val.toFixed(2))); // round to 2 decimal places
      } else {
        setBmi(0); // set BMI to 0 if height is 0
      }
    };

    calculateBmi();
  }, [weight, height]);

  useEffect(() => {
    if (bmi >= 18.5 && bmi <= 24.9) {
      setState("Shi hai")
    }
    else if (bmi >= 25 && bmi <= 29.9) {
      setState("Mote")
    }
    else if (bmi >= 30 && bmi <= 39.9) {
      setState("Mote ho tum")
    }
    else if (bmi > 40) {
      setState("Motapa Charan Seema pe")
    }
  }, [bmi])

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="weight">Weight (kg): {weight}</label>
        <input
          type="range"
          min={0}
          max={200}
          step={0.1}
          id="weight"
          onChange={(e) => setWeight(Number(e.target.value))}
          value={weight}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="height">Height (inches): {height}</label>
        <input
          type="range"
          min={0}
          max={100}
          step={0.1}
          id="height"
          onChange={(e) => setHeight(Number(e.target.value))}
          value={height}
        />
      </div>
      <center>
        <p>Your BMI is: {bmi}</p>
        <p>Motapa:{state}</p>
      </center>
    </div>
  );
}

export default App;
