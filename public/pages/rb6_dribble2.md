## Redbull Racing RB6 with ThreeJS (Part II)

#### Written at Apr 15, 2023

![alt text](./images/rb6_dribble.gif)

Last part, we create the canvas and we also load an ambient light and have the Redbull model loaded on the screen. So far, one may have the issue for there might be some white edges going around the canvas. To fix it, we could add a simple CSS to fix it.

```
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

Then import your CSS file into your main.JS file.

```
import "./index.css";
```

The detail of the rest of the styling for the website can be found in the GitHub repo.

Then to continue where we left off with the main.js, we have an ambient light and the car model loaded on the canvas, now we could add two more point lights to rotate around the car, to have the exhibition effect.

```
const lightxz = new THREE.PointLight(0xffffff, 0.8);
lightxz.position.copy(camera.position);
scene.add(lightxz);
const lightxy = new THREE.PointLight(0xffffff, 0.4);
lightxz.position.copy(camera.position);
scene.add(lightxz);
```

To realize the light rotation we need to create an animation loop:

```
const clock = new THREE.Clock();
const loop = () => {
    lightxz.position.x = 5 + 50 * Math.sin(Date.now() / 480);
    lightxz.position.z = 3 + 50 * Math.cos(Date.now() / 480);
    lightxy.position.x = 5 + 60 * Math.sin(Date.now()+240 / 480);
    lightxy.position.y = 5 + 60 * Math.cos(Date.now()+240 / 480);
    if(mixer)
        mixer.update(clock.getDelta());
    control.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
}
loop();
```

Now you should see the light working, and in order to use the mouse to rotate or to drag objects to move left or right, we need to import the OrbitControl.

```
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
let control = new OrbitControls(camera, canvas);
control.enableDamping = true;
control.enablePan = false;
control.enableZoom = false;
control.autoRotate = true;
// control.autoRotate = false;
control.autoRotateSpeed = 1;
```

In the demo, I disable the mouse effect to drag the scene or zoom in and zoom out. Therefore, I set the enableDamping and enableZoom to be false, I add the autoRotate to be true, therefore the car can start to rotate automatically once the website is loaded. The autoRotateSpeed change the speed for rotation.

The last thing is to have a gray plane set beneath the car model, just add the following lines:

```
const planeGemometry = new THREE.PlaneGeometry(400, 12);
const planeMaterial  = new THREE.MeshStandardMaterial({color: 0xC6C6C6, side: THREE.DoubleSide});
const plane = new THREE.Mesh(planeGemometry, planeMaterial);
plane.rotation.x = Math.PI/2-0.05;
plane.position.z += 3;
plane.position.y += 0.5;
plane.receiveShadow = true;
scene.add(plane);
```

For the next part, we will be adding the components in the HTML.