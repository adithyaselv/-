from PIL import Image
import pytesseract
from TamilSpellingAutoCorrect import TamilSpellingAutoCorrect

pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe' 
im = Image.open(r"C:\Users\sreen\OneDrive\Desktop\Tamil2.png") #Path to source image
text_file = open(r"C:\Users\sreen\OneDrive\Desktop\output.txt", "w", encoding='utf8') #Path to destination text file
test = pytesseract.image_to_string(im, lang = "tam") # Select languagw
text_file.write(test)
print ("done")
