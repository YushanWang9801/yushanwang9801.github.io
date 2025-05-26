## AllRGB Image Generator

#### Written at Mar 27, 2023

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*kepHWcmOPukR9ioUHkkeQw.jpeg)

for color in digital format, there are 256 x 256 x256 = 16,777,216 the number of colors. The ALLRGB image is to generate an image that uses all 16,777,216 colors and exactly once. For more details of the concept, one could visit [allrgb.com](http://allrgb.com/) for some creative works.

Below is one of my demo ALLRGB work:

Again, my work and complete code could be found in the below Github link:

[https://github.com/YushanWang9801/ALLRGB_streamlit](https://github.com/YushanWang9801/ALLRGB_streamlit)

This work is inspired by [Michael Fogleman](https://www.michaelfogleman.com/). [https://www.michaelfogleman.com/projects/allrgb/](https://www.michaelfogleman.com/projects/allrgb/)

Our target is to transform any input image into an ALLRGB image. For efficiency, Michael required the input image must have the size of 4096 x 4096 (Since 4096 x 4096 = 16,777,216).

What is different than the previous project is we allow images to enter any size. Firstly, we did the resize and fit it into a square size of 4096 x 4096 with black pixels.

```
def load_image(file_path=""):
    test_image = Image.open(file_path)
    width,height = test_image.size
    if width >= height:
        width, height = 4096, int(height/width*4096)
    else:
        width, height = int(width/height*4096), 4096
    new_image = test_image.resize((width, height))
    resized_image = np.array(new_image)
    output_image = np.zeros((4096, 4096, 3))
    if resized_image.shape[1] == 4096:
        start_row = (4096-resized_image.shape[0])//2
        output_image[start_row: start_row+resized_image.shape[0], :] = resized_image[:,:,:]
    else:
        start_col = (4096-resized_image.shape[1])//2
        output_image[:, start_col:start_col+resized_image.shape[1]] = resized_image[:,:,:]
    Blue, Green, Red = output_image[:,:,2].reshape(-1), \
                       output_image[:,:,1].reshape(-1), \
                       output_image[:,:,0].reshape(-1)
    return Blue, Green, Red
```

For the rest, I followed Michael’s algorithm by building an “octree” to represent the RGB colors. The complete octree is stored in a flat array, with a depth of only 9 levels from the root to the leaf, inclusive. Each node in the octree maintains a count of the number of colors that are still available for use in its respective subtree. The code could be found in the octree.py file.

To locate a color within the octree, follow a process that involves creating a 3-bit number by using a single bit from each of R (red), G (green), and B (blue) to identify the next child node to be visited. This process is then repeated from the most significant bit to the least significant bit.

From the load_image function, we extract the RGB layers. Then after we initialize the indices and the tree, we can start finding every possible color:

```
Blue, Green, Red = load_image(file_path)
indexes = load_indexes()
tree = octree.Octree()
colors = [(0, 0, 0)] * (4096 * 4096)
for i, index in enumerate(indexes):
  if i % (65536*32) == 0:
      pct = 100.0 * i / (4096*4096)
      print ('{:2.2f} percent complete'.format(pct))
  colors[index] = tree.pop(int(Red[index]), int(Green[index]), int(Blue[index]))
```

The whole process could take a few minutes since there are a significant number of pixels that need to be written the new image.

Now, for the last step, all we need to do is to get the input image file path and output image file path.

```
file_path = input("Please enter your input image file path:")
output_path = input("Please enter your output image file path:")
Blue, Green, Red = load_image(file_path)
indexes = load_indexes()
tree = octree.Octree()
colors = [(0, 0, 0)] * (4096 * 4096)
for i, index in enumerate(indexes):
  if i % (65536*32) == 0:
      pct = 100.0 * i / (4096*4096)
      print ('{:2.2f} percent complete'.format(pct))
  colors[index] = tree.pop(int(Red[index]), int(Green[index]), int(Blue[index]))
data = np.array(colors).reshape((4096, 4096,3))
im = Image.fromarray(data.astype(np.uint8), 'RGB')
im.save(output_path)
```

Then your program should be running like the below in the terminal:

```
Please enter your input image file path:
input_image.jpg
Please enter your output image file path:
output_image.jpg
```

Thank you so much for reading, and later I will be posting how to use Streamlit to generate one ALLRGB image website that has a better User interface to handle the input and output.

