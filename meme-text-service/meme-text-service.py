from flask import Flask
from flask import request
from flask_cors import CORS
from pytesseract import image_to_string
from PIL import Image

app = Flask(__name__)
CORS(app)


def meme_to_test(image_file_path):
    image_file = Image.open(image_file_path)
    return image_to_string(image_file, lang = 'tam')


@app.route('/')
def home():
    return "Welcome to meme to text service"

@app.route('/upload', methods=['POST'])
def upload():
    image_file_path = request.files['file']
    meme_text = meme_to_test(image_file_path)
    return meme_text

# Todo : Use WYSWYG server
if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3001)