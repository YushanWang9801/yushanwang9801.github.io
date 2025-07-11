## Redbull Racing RB6 with ThreeJS (Part III)

#### Written at Apr 16, 2023

![RB6 Animation](./images/rb6_dribble.gif)

Welcome to the final part of the template, now we just need to add a few HTML elements then our website will be ready to go. I used the Optima font for this template, the font.ttf file could be located under the public directory.

Back in 2019, Redbull Racing's title Sponsor is Aston Martin and I always find the font for AMR quite appealing. The Optima font is quite close to the Aston Martin font:

![ASTON MARTIN LOGO for font demo](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*rL7e8T9JOIg6Mdvm.png)

### Creating the Header

```html
<nav class="header">
      <a href="https://yushanwang9801.github.io/"><h1 id="yushan">YushanWang9801</h1></a>
      <ul>
        <li>Drivers</li>
        <li>Mechanics</li>
        <li>Races</li>
        <li><img class="redbull-icon" src="icon1.png" alt="redbull racing logo"></li>
        <li>Story</li>
        <li>Team</li>
        <li>Designer</li>
      </ul>
      <ul>
        <li><span>Newsletter</span></li>
      </ul>
</nav>
```

Feel free to link to your own portfolio and change the Name Icon to your own by changing the text in <a> element.

### CSS Styling for Header

```css
@font-face {
    font-family: Optima;
    src: url("./OPTIMA.TTF");
}
body,
html {
    overflow: hidden;
    font-family: Optima, sans-serif;
}
.webcanvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}
nav {
    color: #C0BFBF;
    z-index: 2;
    position: relative;
    padding: 4rem 8rem;
    display: flex;
    justify-content: space-between;
}
nav .redbull-icon {
    width: 6rem;
    height: 8rem;
    margin-top: -3.2rem;
}
nav a {
    text-decoration: none;
    color: #C0BFBF;
    font-weight: bold;
}
nav ul {
    list-style: none;
    text-transform: uppercase;
    display: flex;
    gap: 2rem;
    font-size: 1rem;
    font-weight: bold;
}
nav ul span {
    background: #E21B4D;
    padding: 10px 25px;
    border-radius: 30px;
    font-weight: bold;
    color: #FFF;
    font-family: "Courier New";
}
```

### Adding a Title

```html
<h1 class="title">Red Bull RB6</h1>
```

```css
.title {
    color: #fff;
    z-index: 2;
    position: absolute;
    font-size: 5rem;
    opacity: 0.8;
    left: 50%;
    top: 50%;
    text-transform: uppercase;
    transform: translate(-50%, -25%);
}
```

### Video Bar with YouTube Embed

```html
<iframe src="https://www.youtube.com/embed/-t6cxIeCIjE"
        frameborder="0" allowfullscreen></iframe>
```

```css
iframe {
    width: 17.6rem;
    height: 9.9rem;
    box-shadow: 5px 5px 10px darkred;
}
```

### Complete Video Bar Section

```html
<div class="videobar">
      <iframe
            src="https://www.youtube.com/embed/-t6cxIeCIjE"
            frameborder="0" allowfullscreen></iframe>
      <div class="intro">
        <h3>The Rhythm of the Factory - RB9</h3>
        <h3>Presented by </h3>
        <h3>Oracle Red Bull Racing</h3>
      </div>
      <div class="rb6-intro">
          <div>
            <h2>CTO</h2>
            <h1>Adrian Newey</h1>
          </div>
          <div>
            <h2>Driver</h2>
            <h1>Sebestian Vettel</h1>
          </div>
          <div>
            <h2>Power</h2>
            <h1>18,000 rpm</h1>
          </div>
      </div>
    </div>
```

```css
.videobar {
    display: flex;
    position: absolute;
    left: 4rem;
    bottom: 4rem;
    z-index: 2;
}
iframe {
    width: 17.6rem;
    height: 9.9rem;
    box-shadow: 5px 5px 10px darkred;
}
.intro {
    background: #E21B4D;
    color: #fff;
    width: 17.6rem;
    height: 9.9rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Optima, sans-serif;
    line-height: 1.5;
    box-shadow: 5px 5px 10px darkred;
}
.intro h2 h3 {
    text-align: left;
}
.rb6-intro {
    background: #fff;
    width: 30rem;
    height: 7.8rem;
    margin-top: 1rem;
    z-index: 0;
    box-shadow: 5px 5px 10px darkred;
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
}
.rb6-intro h1{
    font-size: 1.5rem;
    padding-top: 0.5rem;
    font-family: Optima, sans-serif;
}
.rb6-intro h2{
    font-size: 0.8rem;
    font-family: "Courier New";
}
```

### Adding a Description Text

```html
<div class="short">
      <span> RB6 set the fastest time in 15 out of the 19 rounds in Qualifying.</span>
      <span>"probably the car with the most downforce in the history of F1"</span>
      <span id="adrian">-- Adrian Newey</span>
   </div>
```

```css
.short {
    position: absolute;
    right: 5rem;
    bottom: 4rem;
    z-index: 1;

    width: 30rem;
    height: 8.8rem;
    font-size: 1.2rem;
    color: #FFF;

    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: left;
}
#adrian {
    text-align: right;
}
```

Now you should have a Formula One Redbull Racing Header working.

![Final Result](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*P9t9sFeiStvdf3i3_REoEg.png)