#Imports
import os
import cv2
import pytesseract 
import numpy as np

dir_path = "./sample/"
file_out = open(os.path.join(dir_path, "output.txt"), "w")  
extn = [".bmp", ".jpg", ".jpeg", ".png"]

# List of Memes
files = os.listdir(dir_path)
files.sort()


for image_path in files:
	image_path = os.path.join(dir_path, image_path)

	# If Image
	if(image_path[-4:] in extn):

		img = cv2.imread(image_path)
		gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
		thresh = cv2.threshold(gray, 50, 200, cv2.THRESH_OTSU)[1]

		text = pytesseract.image_to_string(img, lang = 'tam')
		file_out.write(image_path+'\n'+str(text)+'\n\n') 

		text = pytesseract.image_to_string(gray, lang = 'tam')
		file_out.write(image_path+'\n'+str(text)+'\n\n') 

		text = pytesseract.image_to_string(thresh, lang = 'tam')
		file_out.write(image_path+'\n'+str(text)+'\n\n') 

		cv2.imshow("Image", thresh)
		cv2.waitKey(0)

file_out.close()
