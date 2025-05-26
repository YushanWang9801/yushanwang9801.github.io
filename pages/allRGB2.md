## ALLRGB Image with Streamlit

#### Written at May 29, 2023

![screenshot of the website](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*UpjzM60N4XR522GB3H_80A.png)


In this article, I create an ALLRGB image generator with Python.

[https://yushanwang9801.github.io/#/blog/AllRGB-image-generator](https://yushanwang9801.github.io/#/blog/AllRGB-image-generator)


Today, I will be making a website that performs similar functionalities, the code for this project can be found:

[https://yushanwang9801-allrgb-streamlit-streamlit-allrgb-bdugc1.streamlit.app/](https://yushanwang9801-allrgb-streamlit-streamlit-allrgb-bdugc1.streamlit.app/)

and the deliverable website can be accessed here:

[https://github.com/YushanWang9801/ALLRGB_streamlit](https://github.com/YushanWang9801/ALLRGB_streamlit)

Here is a screenshot of this website:

For this project, if you wish to build on your local environment, you will need to install streamlit first. The installation documentation for streamlit could be found at this link:

[https://docs.streamlit.io/get-started/installation](https://docs.streamlit.io/get-started/installation)

The code of this project is quite simple:

```
import streamlit as st
def main():
  st.title("Upload image to transfer to ALLRGB images")
  st.subheader('A simple app that one may upload single image get a copy'+
                 'get allRGB image files.')
if __name__ == "__main__":
    main()
```

Then you should see the title and subtitle on the website. To run the program type the following in your terminal:

```
streamlit run .\streamlit_allrgb.py
```

and you should access the link in the local environment with the address shown in the terminal, which normally should be [http://localhost:8501](http://localhost:8501).

For the paragraph which is completely optional for the webpage and also you could replace the demo image on the cover page by replacing the file path for the first argument of st.image()

```
    st.write("This is a demo of what you could expect: ")
    st.image('output_image2.jpg', use_column_width=True)
```

Then to enable users to use upload and download features, adding the file_uploader and download button to the main function:

```
def main():
    st.title('Upload image to transfer to ALLRGB images')
    st.subheader('A simple app that one may upload single image get a copy'+
                 'get allRGB image files.')
  
    st.write("This is a demo of what you could expect: ")
    st.image('output_image2.jpg', use_column_width=True)
    st.write("Now upload your own photo and start creating ... ")
    st.write('The process might be slow, since there are 4096 x4096 number'+
                 'pixels need to be assigned to different colors')
    uploaded_file = st.file_uploader("Choose a image to uplaoad: ", 
                                        accept_multiple_files=False,
                                        type=['jpg','png','jpeg'])
    st.download_button(
            label="Download image",
            data=image,
            file_name="allRGB.png",
            mime="image/png"
          )
```

As you could see inside the file_uploader, we limit the valid file type to be jpg, png and jpeg.

With all the buttons setup, all is left is to process the image with a progress bar:

```
def main():
    st.title('Upload image to transfer to ALLRGB images')
    st.subheader('A simple app that one may upload single image get a copy'+
                 'get allRGB image files.')
  
    st.write("This is a demo of what you could expect: ")
    st.image('output_image2.jpg', use_column_width=True)
    st.write("Now upload your own photo and start creating ... ")
    st.write('The process might be slow, since there are 4096 x4096 number'+
                 'pixels need to be assigned to different colors')
    uploaded_file = st.file_uploader("Choose a image to uplaoad: ", 
                                        accept_multiple_files=False,
                                        type=['jpg','png','jpeg'])
    indexes = load_indexes()
    tree = octree.Octree()
    if uploaded_file is not None:
        image = Image.open(uploaded_file)
        Blue, Green, Red = load_image(image)
        colors = [(0, 0, 0)] * (4096 * 4096)
        my_bar = st.progress(0)
        print("Start Processing, it would take a while ...")
        for i, index in enumerate(indexes):
            if i % (65536) == 0:
                percent_complete = i / (4096*4096)
                my_bar.progress(percent_complete)
            colors[index] = tree.pop(int(Red[index]), int(Green[index]), int(Blue[index]))
        
        data = np.array(colors).reshape((4096, 4096,3))
        im = Image.fromarray(data.astype(np.uint8), 'RGB')
        st.write("Here is your ALLRGB image: ")
        st.image(im, use_column_width=True)
        buf = io.BytesIO()
        image.save(buf, format='JPEG')
        image = buf.getvalue()
    st.download_button(
            label="Download image",
            data=image,
            file_name="allRGB.png",
            mime="image/png"
          )
```

The webpage should look something like this:

![UPLOAD INTERFACE AND PROCESSING](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*JMGQGhXxkFhctpVtfddMIw.png)

After coding the webpage, we could deploy the web with streamlit. on the top right of your webpage there is icon-burger button, and you should see a **deploy this app** option.

![Deploy this app button](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ZpmdsmNEx5WWwStipL4vlQ.png)

This button will direct you a page with streamlit, and you need to make sure you push your project to github as a repo, and specify the repo, branch and Main file path

![deploy your app with streamlit](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*aJbM-z_LrUGFRvA-FEbsig.png)

Then you should see your website running on streamlit with own HTML.