from rembg import remove
from PIL import Image

input_path = 'assets/sample2.jpg'
output_path = 'assets/output_sample2.png'

input = Image.open(input_path)
output = remove(input)
output.save(output_path)