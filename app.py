
from flask import Flask, request, jsonify
# from sklearn.externals import joblib  # For model persistence (you may want to use joblib instead of pickle)
from sklearn.feature_extraction.text import TfidfVectorizer
from flask_cors import CORS
# vectorizer = TfidfVectorizer()
# import pickle
import numpy as np
import pandas as pd
# from sklearn import joblib
#aab
import joblib

app = Flask(__name__)
CORS(app)
# Load your trained machine learning model
# model = pickle.load(open('newmodel.pkl','rb'))
model = joblib.load('models/tm.pkl')
df=pd.read_csv('models/symtoms.csv')



@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    symptoms = data['symptoms']
    x=df['symptoms']
    cv=TfidfVectorizer(max_features=200,ngram_range=(2,20))

    # Preprocess the input data as needed
    # ...
    # vectorizer = TfidfVectorizer()
    # vectorizer.fit(symptoms)

    # Make predictions using the loaded model
    
    # vect = cv.fit_transform(symptoms)
    
    # prediction = model.predict(np.array(symptoms))
    x=cv.fit_transform(x).toarray()
    prediction = model.predict(cv.transform(symptoms).toarray())
    prediction = prediction.tolist()[0]
    # print(prediction)
    # print(type(symptoms))
    # print(np.array(symptoms))
    # Return the prediction as JSON
    return jsonify({'prediction': prediction})
    # return jsonify({'prediction': symptoms})

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)