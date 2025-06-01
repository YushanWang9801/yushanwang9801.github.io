## Redbull Racing RB6 with ThreeJS (Part I)

#### Written at Apr 13, 2023

![RB6 Animation](./images/rb6_dribble.gif)

Today, we will explore how to create captivating 3D websites with just a few lines of code using Three.js, a library built on top of WebGL. This beginner's guide will start from the very basics of Three.js, allowing even those with no prior experience to follow along. This tutorial series will not only delve deeper into Three.js but also teach how to model with Blender, making it a comprehensive learning resource for those interested in 3D web development.

The design inspiration comes from the Scuderia Ferrari Web Header by [Reynaldi Fachriza](https://dribbble.com/reyfachriza) on Dribble. While I'm a huge Ferrari fan, given their recent Formula 1 performance, I decided to create a website featuring one of the best motorsport designs in Formula One history — the Red Bull RB6.

### Project Resources
- **Full code**: [GitHub Repository](https://github.com/YushanWang9801/rb6_dribble)
- **Live Demo**: [Personal Website](https://yushanwang9801.github.io/rb6_dribble/)

### Getting Started

#### Prerequisites
1. Install Node.js on your local environment
2. Create an empty directory and run:

```bash
npm create vite@latest
npm install three
```

Alternatively, to run my code directly from GitHub:

```bash
npm install
npm run dev
```

### Setting Up the Three.js Environment

Create a JavaScript file (`main.js`) to handle the Three.js canvas. The essential elements for any 3D environment are:

1. **Scene** - The container for all 3D objects
2. **Camera** - Determines what appears on screen
3. **Renderer** - Draws everything to the screen

```javascript
import * as THREE from 'three';

// Initialize scene with dark background
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

// Set up camera
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};
const camera = new THREE.PerspectiveCamera(45, sizes.width/sizes.height, 1, 1000);
camera.rotation.y = 45/180*Math.PI;
camera.position.set(20, 20, 30);

// Configure renderer
const canvas = document.querySelector(".webcanvas");
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(2);
```

### HTML Setup

Add this to your `index.html`:

```html
<body>
    <canvas class="webcanvas"></canvas>
    <script type="module" src="/src/main.js"></script>
</body>
```

### Adding Lighting

Currently, your screen will be dark. Let's add ambient lighting:

```javascript
const ambient_light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(ambient_light);
```

### Loading the RB6 Model

We'll use the GLTFLoader to import our Red Bull car model. The `rb6.glb` file should be in your public directory.

```javascript
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const assetLoader = new GLTFLoader();
let mixer, model;

assetLoader.load(
    '/rb6.glb',
    function(gltf) {
        model = gltf.scene.children[0];
        mixer = new THREE.AnimationMixer(model);

        // Play all animations
        gltf.animations.forEach(clip => {
            mixer.clipAction(clip).play();
        });

        // Configure model position and rotation
        model.position.set(5, 3.5, 3);
        model.rotation.set(
            Math.PI/2 - 0.05,
            0,
            -Math.PI/2
        );

        scene.add(model);
    },
    undefined,
    (error) => console.error(error)
);
```

### Next Steps

In Part II, we'll:
1. Animate the RB6 model
2. Add interactive controls
3. Enhance the scene with additional elements
4. Implement responsive design for different screen sizes

Stay tuned for the next installment where we'll bring this 3D experience to life!