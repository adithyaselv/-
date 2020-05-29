from flask import Flask
from flask import request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


def meme_to_test(image_file):
    return "வாமா மின்னல்"


@app.route('/')
def home():
    return "Welcome to meme to text service"

@app.route('/upload', methods=['POST'])
def upload():
    image_file = request.files['file']
    meme_text = meme_to_test(image_file)
    return meme_text

# Todo : Use WYSWYG server
if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3001)