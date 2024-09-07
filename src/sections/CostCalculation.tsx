// Home three js.
import { useEffect } from "react";
import * as Three from "three";
//fbx loader
import { CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
const CostCalculation = () => {
  let sunObject = new Three.Object3D();
  const scene = new Three.Scene();
  const renderer = new Three.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  const fbxLoader = new FBXLoader();
  const rendererDomElement = document.getElementById("renderer");
  if (rendererDomElement != null) {
    rendererDomElement.appendChild(renderer.domElement);
  }
  function GetWidth():number {
    if (rendererDomElement == null) return 0;
    return parseInt(window.getComputedStyle(rendererDomElement).width);
  }
  function GetHeight():number {
    if (rendererDomElement == null) return 0;
    return parseInt(window.getComputedStyle(rendererDomElement).height);
  }
  const screen: any = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  //othgraphic view in three js.
  //color code
  const c_white = 0xffffff;
  const camera = new Three.PerspectiveCamera(
    45,
    GetWidth() / GetHeight(),
    0.1,
    100
  );
  const labelRenderer = new CSS3DRenderer();
  labelRenderer.setSize(window.innerWidth, window.innerHeight);
  labelRenderer.domElement.style.top = "0px";
  labelRenderer.domElement.style.position = "absolute";
  document.body.appendChild(labelRenderer.domElement);
  const orbitControls = new OrbitControls(camera, labelRenderer.domElement);
  const Init = () => {
    if (scene != null) {
      for (var i = scene.children.length - 1; i >= 0; i--) {
        let obj = scene.children[i];
        scene.remove(obj);
      }
    }
    scene.background = new Three.Color("black");
    renderer.setSize(window.innerWidth, window.innerHeight);
   
    //camera
    camera.position.z = 20;
    scene.add(camera);

    fbxLoader.load(
      "model/fbx/sun.fbx",
      function OnLoad(object: any) {
        sunObject = object;
        scene.add(object);
        object.position.set(0, 5, 0);
        object.scale.set(0.005, 0.005, 0.005);
        object.rotateY(0);
        object.rotateZ(-0.12);
      },
      undefined,
      function OnError(error: any) {
        console.error(error);
      }
    );
    // fbx loading the model
    fbxLoader.load(
      "model/fbx/fullHouse.fbx",
      function OnLoad(object: Three.Group<Three.Object3DEventMap>) {
        scene.add(object);
        object.position.set(0, 0, 0);
        object.scale.set(0.005, 0.005, 0.005);
        object.rotateY(-1.9);
        object.rotateZ(-0.12);
      },
      undefined,
      function OnError(error: any) {
        console.error(error);
      }
    );
    //Setting up the lights
    const light = new Three.AmbientLight(c_white, 0.1);
    light.position.set(0, 10, 0);
    light.intensity = 3;
    scene.add(light);

    //point lights
    const pointLight = new Three.PointLight(c_white, 1, 1000);
    pointLight.position.set(0, 5, 0);
    pointLight.intensity = 30;
    scene.add(pointLight);
    orbitControls.enableDamping = true;
    orbitControls.enablePan = false;
    orbitControls.enableZoom = true;
  };

  function animate() {
    orbitControls.update();
    sunObject.rotateZ(0.005);
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
  }
  useEffect(() => {
    Init();
  }, [scene, camera]);
  renderer.setAnimationLoop(animate);
  return (
    <>
      <div id="renderer"> </div>
    </>
  );
};

export default CostCalculation;