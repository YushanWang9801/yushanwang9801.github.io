## Redbull Racing RB6 with ThreeJS (Part I)

#### Written at Apr 13, 2023

![alt text](./images/rb6_dribble.gif)

Today, we will explore how to create captivating 3D websites with just a few lines of code using Three.js, a library built on top of WebGL. This beginner’s guide will start from the very basics of Three.js, allowing even those with no prior experience to follow along. This tutorial series will not only delve deeper into Three.js but also teach how to model with Blender, making it a comprehensive learning resource for those interested in 3D web development.

The idea of the design is generated from the Scuderia Ferrari Web Header

Made from @[Reynaldi Fachriza](https://dribbble.com/reyfachriza) in Dribble. Even though I am a huge Ferrari fan, yet we both know How Ferrari performs in these recent years in Formula1, so Instead of creating a website for Ferrari, I switch my design to one of the best motorsport designs in Formula One history — RB6.

The full code could be found on Github:

https://github.com/YushanWang9801/rb6_dribble

The Demo of this project could be found on my personal website:

https://yushanwang9801.github.io/rb6_dribble/

To get started, You need to have NodeJs installed on your local environment. I created my website with Vite, so make an empty directory, pop up a terminal, and type the following commands:

```
 npm create vite@latest
 npm install three
```

We will be mainly using threeJS for our website. Or if one would like to directly run my code from GitHub, after installation of the packages, one could just type:

```
npm run dev
```

After, the installation let us start writing some code. We will create a JavaScript file (main.js) to handle the three webcanvas. Firstly, there are a few key elements for 3D environments.

We need a scene, camera, and renderer.

```
import * as THREE from 'three';
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);
const camera = new THREE.PerspectiveCamera( 45, sizes.width/sizes.height, 1, 1000 );
camera.rotation.y = 45/180*Math.PI;
camera.position.x = 20;
camera.position.y = 20;
camera.position.z = 30;
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};
const canvas = document.querySelector(".webcanvas");
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(2);
```

We set the renderer to have the size of the window’s inner width and window inner height.

After that, the code might not work, because still we need to add a web canvas on the index.html, the <body> content.

```
<canvas class="webcanvas"></canvas>
<script type="module" src="/src/main.js"></script>
```

Now, your screen will look totally dark. That is because we have not added light or any objects inside the canvas. Now let us add light and load the Redbull car to the canvas.

```
const ambient_light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( ambient_light );
```

This will create an ambient line to the canvas. Then to add a working RedBull car model to the canvas, we need to import the GLTFLoader and make sure you have the rb6.glb file added to your public directory. The RB6.glb model file can be found in my public dir in my GitHub repo. I pre-rendered the surface, therefore you would not be needing the surface materials. Then the below code will load the model

```
const assetLoader = new GLTFLoader();
let mixer, model;
assetLoader.load(FILEPATH, function ( gltf ) {
    model = gltf.scene.children[0];
    mixer = new THREE.AnimationMixer( model );
    const animations = gltf.animations;
    animations.forEach( function (clip) {
        const action = mixer.clipAction(clip);
        action.play();
    });
    const skeleton = new THREE.SkeletonHelper( model );
    skeleton.visible = false;
    scene.add( skeleton );
    scene.add(model);
    model.position.y += 3.5;
    model.position.x += 5;
    model.position.z += 3;
    model.rotation.x = Math.PI/2-0.05 ;
    model.rotation.y = 0;
    model.rotation.z -= Math.PI/2;
} ,
    undefined,
    (error) => {
    console.error(error);
    }
);
```

Now you should have an RB6 loaded on the screen. In the next part, we will have the RB6 rotating on the screen, and we will be adding the rest elements in the next article.