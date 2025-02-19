import React, { useState } from "react";
import axios from "axios";
// import "./styles.css";

function MentalHealthForm() {
  const [formData, setFormData] = useState({
    post_frequency: "",
    avg_post_length: "",
    sentiment_score: "",
    use_of_negative_words: "",
    heart_rate: "",
    sleep_duration: "",
    physical_activity: "",
    calorie_burn: "",
    speech_speed: "",
    pause_duration: "",
    voice_pitch: "",
    num_friends: "",
    likes_received: "",
    comments_received: "",
    shares_received: "",
    time_spent_social_media: "",
    diet_quality: "",
    stress_level: "",
  });

  const [prediction, setPrediction] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert input values to float
    const features = Object.values(formData).map(Number);

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", {
        features: features,
      });

      setPrediction(response.data.mental_health_condition);
    } catch (error) {
      console.error("Error predicting:", error);
    }
  };

  return (
    <div className="container">
      <h1>Mental Health Prediction</h1>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label>{key.replace(/_/g, " ")}:</label>
            <input
              type="number"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit">Predict</button>
      </form>
      {prediction !== null && (
        <h2>Predicted Mental Health Condition: {prediction}</h2>
      )}
    </div>
  );
}

export default MentalHealthForm;
