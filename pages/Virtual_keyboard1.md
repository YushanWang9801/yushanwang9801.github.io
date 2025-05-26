
## OpenCV: Virtual Keyboard Project (Part I)

#### Written at Feb 9, 2023

Introduction
============

![captionless image](https://miro.medium.com/v2/resize:fit:1200/format:webp/1*uwrR8gQmZ51qBjf5NiHJ8w.gif)

Welcome everyone, this is Wang33. Today, we are going to use OpenCV to build this amazing Virtual Keyboard Project. Before we get started, this project requires a basic understanding of python programming and image processing. However, do not feel stressed, we are going to walk you step by step.

Also, the complete code can be found in the below Github link:
--------------------------------------------------------------

[https://github.com/YushanWang9801/opencv-virtual-keyboard](https://github.com/YushanWang9801/opencv-virtual-keyboard)

Now let us start coding. For this project, we need to install python3 and have a webcam on your PC or laptop. We would need the following packages and if you do not have these do not worry just run the following command in your terminal for installation.

```
pip install opencv-python
pip install numpy
pip install pynput
pip install numba
pip install cvzone
```

Implementation
==============

Well done. After you install all the packages. Let us import them:

```
import numpy as np
import cv2
from cvzone.HandTrackingModule import HandDetector
import Key
from pynput.keyboard import Controller
from time import sleep
from numba import jit, cuda
```

We will be using the HandDetector to track the hands when we use our hands to interact with the keyboard shown on the webcam image output. The pynput.keyboard is for us to make the virtual keyboard actually work.

Nice, now let us use python to open our webcam and let us see what is going on with the webcam image.

```
WIDTH, HEIGHT = 1280, 720
cap = cv2.VideoCapture(0)  # This will open the webcam
cap.set(3, WIDTH)
cap.set(4, HEIGHT)
while True:
    success, img = cap.read()
    cv2.imshow("Image", img)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
```

Now if your screen looks reversed or flipped, you can turn your screen image by adding the below code.

```
while True:
    success, img = cap.read()
    img = cv2.flip(img, 1)   # Add this to flip the image to correct side.
    cv2.imshow("Image", img)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
```

Now we want to first draw our keyboard on our screen, but let us build from little components. How about allowing us to build the “Q” key first? It might seem tricky but it is to draw a rectangle and write the letter Q on the screen.

```
cv2.rectangle(img, [250, 50], [310, 110], (255,255,255), cv2.FILLED)
cv2.putText(img, "Q", [270, 90], cv2.FONT_ITALIC, 1.0, (0,0,0), 2)
```

Now you should see one white rectangle with a Q in it. A quick explanation of the two lines [250,50], [310,110] represent the x and y coordinates of the top-left and bottom-right corners of the rectangle, and the [270, 90] represent the bottom-left corner of the text. Urhh, I know these corners are very hard to remember which is which.

Once we draw one, we can create thousands of keys by using classes and dictionaries. I do not want to make this article extremely long. Thus, below is the code for our Key class:

```
class Key():
    def __init__(self, text, pos, size=[60,60], text_pos=None):
        self.pos = pos
        self.text = text
        self.size = size
        self.rect_size = [size[0]+pos[0], size[1]+pos[1]]
        if text_pos:
            self.text_pos = text_pos
        else: 
            self.text_pos = [self.pos[0]+20, self.rect_size[1]-20]
    def draw(self, img):
        cv2.rectangle(img, self.pos, self.rect_size, (255,255,255), cv2.FILLED)
        cv2.putText(img, self.text, self.text_pos, 
                    cv2.FONT_ITALIC, 1.0, (0,0,0), 2)
        return img
```

After we have the “Key” class, we can map our keyboard to each Letter. The “draw” function will be called each time when we draw the key on the screen. For the GAP below I set 75 as the distance between each key.

```
upper_letters = {'first_row': ['Q','W','E','R','T','Y','U','I','O','P'],
                    'second_row': ['A','S','D','F','G','H','J','K','L',],
                    'third_row': ['Z','X','C','V','B','N','M',]}
upper_letter_keys = [ [Key(l, [250+GAP*i, 50]) for i, l in enumerate(upper_letters['first_row'])], 
                   [Key(l, [275+GAP*i, 50+GAP*1]) for i, l in enumerate(upper_letters['second_row'])],
                   [Key(l, [350+GAP*i, 50+GAP*2]) for i, l in enumerate(upper_letters['third_row'])]]
```

Now let’s make our keyboard fancier by adding the following function keys: CAPS, NUMS, SPACE, DEL, and CLEAR. I attached the code below. We will implement their functionalities later.

```
cap_key = Key('CAP', [250, 50+GAP*2], [85, 60], [260, 90+GAP*2])
del_key = Key('DEL', [200+GAP*9, 50+GAP*2], [85, 60], [GAP*9+210, 90+GAP*2])
num_key = Key('123',   [250,       50+GAP*3], [85, 60], [260, 90+GAP*3])
spc_key = Key('SPACE', [275+GAP,   50+GAP*3], [450, 60], [525, 90+GAP*3])
clr_key = Key('CLEAR', [225+GAP*8, 50+GAP*3], [130, 60], [235+GAP*8, 90+GAP*3])
func_keys = [del_key, spc_key, clr_key, cap_key, num_key]
```

Let us define a function to draw all the keys on the screen and call this function in the loop we wrote at the beginning.

```
def draw_all_Keys(img):
  for row in upper_letter_keys:
    for letter in row:
      img = letter.draw(img)
  for key in func_keys:
    img = key.draw(img)
  return img
while True:
  success, img = cap.read()
  img = cv2.flip(img, 1)
  # cv2.rectangle(img, [250, 50], [310, 110], (255,255,255), cv2.FILLED)
  # cv2.putText(img, "Q", [270, 90], cv2.FONT_ITALIC, 1.0, (0,0,0), 2)  
  
  img = draw_all_Keys(img)
  cv2.imshow("Image", img)
  if cv2.waitKey(1) & 0xFF == ord('q'):
        break
```

Now running your program, you should see a keyboard drawn on your webcam screen that looks similar to below. We roughly clone the iPhone Keyboard layout in this tutorial. Please feel free to change the color theme.

![Virtual Keyboard Layout](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*oV6TI6gvkT-eH0uGvIHljg.jpeg)

Well Done. In the next part of this tutorial, we will implement the functionality about how our screen going to interact with our hands and finish this project together.