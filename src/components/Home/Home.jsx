import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { json } from "react-router-dom";
//import dotenv from "dotenv";
//dotenv.config();

export default function App() {
  const [symptoms, setSymptoms] = useState([]);
  const [prediction, setPrediction] = useState("");

  const handlePredict = async () => {
    // Send a POST request to the Flask server
    const response = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ symptoms }), // Send symptoms as an array
    });

    const data = await response.json();
    setPrediction(data.prediction);
  };
  return (
    <>
      <div className="flex flex-col z-auto justify-center items-center bg-slate-200 h-[100vh] w-full">
        <div className="flex w-[75%]  flex-col items-center justify-center">
          <h1 className="text-center">Enter Symptoms</h1>
          <textarea
            placeholder="Enter symptoms here... (separated by commas)"
            value={symptoms.join("\n")}
            onChange={(e) => setSymptoms(e.target.value.split("\n"))}
          />
          <div className="m-5">
            <Button onClick={handlePredict}>Predict</Button>
          </div>
        </div>
        <div className="m-5">
          <h2 className="text-center">
            {prediction && <p>Prediction: You may have {prediction}</p>}
          </h2>
        </div>
        {/* <div className="flex w-[80%] flex-col items-center justify-center"></div> */}
      </div>
    </>
  );
}
