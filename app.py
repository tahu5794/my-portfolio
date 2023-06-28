from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://username:password@server/db'

@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/homepage')
def home():
   return render_template('homepage.html')


if __name__ == "__main__":

    app.run(debug=False, port=8000)