from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for React frontend

# Load trained model & scaler
model = joblib.load(r"C:\Users\MAYUR\Desktop\mental_health_prediction\mental_random_forest.pkl")  # Ensure correct path
scaler = joblib.load(r"C:\Users\MAYUR\Desktop\mental_health_prediction\scaler.pkl")

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get JSON data from request
        data = request.json
        features = np.array(data["features"]).reshape(1, -1)  # Convert input to numpy array
        
        # Scale features
        features_scaled = scaler.transform(features)

        # Predict mental health condition
        prediction = model.predict(features_scaled)[0]

        # Return prediction result
        return jsonify({"mental_health_condition": int(prediction)})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
