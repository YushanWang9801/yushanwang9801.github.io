
## OpenCV: Virtual Keyboard Project (Part II)

#### Written at Feb 11, 2023

![captionless image](https://miro.medium.com/v2/resize:fit:1200/format:webp/1*uwrR8gQmZ51qBjf5NiHJ8w.gif)\


Congratulations! You finished part I of this project. Now let us do something to enable the screen to work with our hands. It will be divided into the following two steps:

1.  Let the screen detect hands.
2.  Set a finger to click on the screen and set a specific motion to enable our program to detect if there is a valid clicking.

Now let us work on the hand detection with some extra help from the cvzone package. We will use the HandDetector that we imported in the previous part I.

```
detector = HandDetector(detectionCon=0.85)
while True:
    success, img = cap.read()
    img = cv2.flip(img, 1)
    img = draw_all_Keys(img)
    img= detector.findHands(img)
    detectionList, bboxInfo = detector.findPosition(img)   # add hand detector
    cv2.imshow("Image", img)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
```

Now if you run your program, you will probably see your hand is detected by a green rectangle.

![Keyboard Layout with detected hand.](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*WiT4QgAMk2ATkR238XxypQ.jpeg)

Now we are going to decide which finger and what motion is going to trigger the clicking. Below is a hand landmark provided by CVZone. I picked index 8 (the Index Finger) as the clicking finger and if the distance between the index finger(8) and middle finger(12) is less than 30(screen distance) then we will consider the motion of that two fingers as a valid clicking.

![Hand Landmark from MediaPipe (https://google.github.io/mediapipe/solutions/hands.html)](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*fMBLvkdLbg0MEfv7KbJZjQ.png)

After we settle the function for determining the clicking, now we need the screen to show the clicking by slightly changing the color of our keys. Once the finger is in the Key area, we change the color, and if there is clicking then change to another different color.

```
def draw_key_on_touch(img, key, det_x, det_y):
    x,y = key.pos
    w,h = key.size
    if x < det_x < x+w and y < det_y < y+h:
        cv2.rectangle(img, (x,y), (x+w,y+h),
                        (200,200,200), cv2.FILLED)
        cv2.putText(img, key.text, key.text_pos, 
                cv2.FONT_ITALIC, 1.0, (0,0,0), 2)
        return img, True
    return img, False
```

The det_x and det_y are the coordinates of the index finger and if the x, and y coordinates lie in the key area we will change the text color and the background color of the key.

We can define a function to handle detection if detectionList from the detector.findHands is not None.

```
img= detector.findHands(img)
detectionList, bboxInfo = detector.findPosition(img)
if detectionList:
  img = handle_detection(detectionList, img)
      
def handle_detection(detectionList, img):
  global clickedText
  finger_close = True if detector.findDistance(8, 12, img)[0] < 30 else False
  for row in upper_letter_keys:
    for key in row:
      img, is_click = draw_key_on_touch(img, key, detectionList[8][0], detectionList[8][1])
      if is_click and finger_close:
        cv2.rectangle(img, key.pos,(key.pos[0]+key.size[0],
                  key.pos[1]+key.size[1]), (0,0,0), cv2.FILLED)
        cv2.putText(img, key.text, key.text_pos, cv2.FONT_ITALIC, 1.0, (255, 255, 255), 2)
        clickedText += key.text
        sleep(0.5)
        return img
```

Now you should see once your finger is on top of one of the letter key, the key should change its color. Now we just need to add one output box to show what is our clickedText on the screen.

```
img= detector.findHands(img)
detectionList, bboxInfo = detector.findPosition(img)
if detectionList:
  img = handle_detection(detectionList, img)py
cv2.rectangle(img, (250,350), (1000,415), (255, 255, 255), cv2.FILLED)
cv2.putText(img, clickedText, (260,405), 
            cv2.FONT_ITALIC, 1.0, (0, 0, 0), 2)
```

Now your program should output something like this:

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*QBDZjmKx6pvRKnKptRi2IQ.jpeg)

Wang33: I do not want to make this article extremely tedious, if you wish to implement the functionalities for the CAPS, 123, DEL key. Please go check my GitHub page. Also if you also want to have that cool black border line around the keyboard as I showed in part I please go to see my draw_border function in the Key.py file.

[https://github.com/yushan1089/opencv-virtual-keyboard](https://github.com/YushanWang9801/opencv-virtual-keyboard)

If you have read so far. Thank you so much. If you find this article might be slightly useful or interesting please follow and subscribe.