## Redbull Racing RB6 with ThreeJS (Part II)

#### Written at Apr 15, 2023

![RB6 Animation](./images/rb6_dribble.gif)

Last part, we created the canvas and loaded an ambient light with the Redbull model on the screen. So far, one may have the issue of white edges around the canvas. To fix it, we could add simple CSS:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

Then import your CSS file into your main.js file:

```javascript
import "./index.css";
```

The detail of the rest of the styling for the website can be found in the GitHub repo.

### Adding Dynamic Lighting Effects

We'll add two point lights to rotate around the car for an exhibition effect:

```javascript
const lightxz = new THREE.PointLight(0xffffff, 0.8);
lightxz.position.copy(camera.position);
scene.add(lightxz);

const lightxy = new THREE.PointLight(0xffffff, 0.4);
lightxy.position.copy(camera.position);
scene.add(lightxy);
```

### Creating the Animation Loop

To animate the lights, we create a loop:

```javascript
const clock = new THREE.Clock();

const loop = () => {
    lightxz.position.x = 5 + 50 * Math.sin(Date.now() / 480);
    lightxz.position.z = 3 + 50 * Math.cos(Date.now() / 480);

    lightxy.position.x = 5 + 60 * Math.sin((Date.now()+240) / 480);
    lightxy.position.y = 5 + 60 * Math.cos((Date.now()+240) / 480);

    if(mixer) mixer.update(clock.getDelta());

    control.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
}

loop();
```

### Implementing Orbit Controls

For mouse interaction, we'll use OrbitControls:

```javascript
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

let control = new OrbitControls(camera, canvas);
control.enableDamping = true;
control.enablePan = false;
control.enableZoom = false;
control.autoRotate = true;
control.autoRotateSpeed = 1;
```

### Adding a Ground Plane

Finally, we'll add a gray plane beneath the car:

```javascript
const planeGeometry = new THREE.PlaneGeometry(400, 12);
const planeMaterial = new THREE.MeshStandardMaterial({
    color: 0xC6C6C6,
    side: THREE.DoubleSide
});

const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = Math.PI/2 - 0.05;
plane.position.set(0, 0.5, 3);
plane.receiveShadow = true;
scene.add(plane);
```

For the next part, we will be adding the HTML components to complete our interactive 3D showcase.