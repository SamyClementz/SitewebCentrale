from flask import Flask, request, jsonify
import joblib
app = Flask(__name__)

@app.route('/api/predict', methods=['POST'])
def predict():
    X = request.get_json()
    X = [[float(X['sepalLength']), float(X['sepalWidth']), float(X['petalLength']), float(X['petalWidth'])]]

    clf = joblib.load('MachineLearning/modelLogisticRegression.joblib')
    prediction = clf.predict(X)

    return jsonify({'species': int(prediction[0])})