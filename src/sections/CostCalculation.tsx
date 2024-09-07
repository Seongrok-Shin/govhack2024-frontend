import { useEffect, useRef } from "react";
import * as Three from "three";
import { CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
const CostCalculation: React.FC = () => {
  const rendererRef = useRef<HTMLDivElement | null>(null); // Reference to the container div
  const sunObjectRef = useRef<Three.Object3D | null>(null); // Reference to the sun object

  useEffect(() => {
    const scene = new Three.Scene();
    const renderer = new Three.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    if (rendererRef.current) {
      rendererRef.current.appendChild(renderer.domElement);
    }

    // Size of the renderer
    const width = 600;
    const height = 600;
    renderer.setSize(width, height);

    const camera = new Three.PerspectiveCamera(
      45,
      width / height,
      0.1,
      100
    );
    camera.position.z = 20;

    const labelRenderer = new CSS3DRenderer();
    labelRenderer.setSize(width, height);
    labelRenderer.domElement.style.top = "0px";
    labelRenderer.domElement.style.position = "absolute";
    document.body.appendChild(labelRenderer.domElement);

    const orbitControls = new OrbitControls(camera, labelRenderer.domElement);
    orbitControls.enableDamping = true;
    orbitControls.enablePan = false;
    orbitControls.enableZoom = true;

    function Init() {
      // Clear existing objects
      scene.clear();

      scene.background = new Three.Color("black");

      const fbxLoader = new FBXLoader();
      fbxLoader.load(
        "model/fbx/sun.fbx",
        (object: Three.Object3D) => {
          sunObjectRef.current = object;
          scene.add(object);
          object.position.set(0, 6, 0);
          object.scale.set(0.01, 0.01, 0.01);
          object.rotateY(0);
          object.rotateZ(-0.12);
        },
        undefined,
        (error: any) => {
          console.error(error);
        }
      );

      fbxLoader.load(
        "model/fbx/fullHouse.fbx",
        (object: Three.Group) => {
          scene.add(object);
          object.position.set(0, -3, 0);
          object.scale.set(0.01, 0.01, 0.01);
          object.rotateY(-1.9);
          object.rotateZ(-0.12);
        },
        undefined,
        (error: any) => {
          console.error(error);
        }
      );

      // Setting up the lights
      const light = new Three.AmbientLight(0xffffff, 0.1);
      light.position.set(0, 10, 0);
      light.intensity = 3;
      scene.add(light);

      const pointLightOne = new Three.PointLight(0xffffff, 30, 1000);
      pointLightOne.position.set(1, 4, 2);
      scene.add(pointLightOne);
    }

    function animate() {
      orbitControls.update();
      if (sunObjectRef.current) sunObjectRef.current.rotateZ(0.002);
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    }

    Init();

    renderer.setAnimationLoop(animate);

    return () => {
      if (rendererRef.current) {
        rendererRef.current.removeChild(renderer.domElement);
      }
      document.body.removeChild(labelRenderer.domElement);
    };
  }, []);

  return (
    <>
    <div style={{backgroundColor: 'black', position: 'absolute', width: "100%", height: "100%" ,zIndex : -1, display:"flex"}}>
    <div
      ref={rendererRef}
      style={{                width: '600px',
        height: '600px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginLeft: '50px',
        marginTop: '100px',
        flex: 1
        }}
    ></div>
    <div style={{color: "white",flex:1, height: '600px', width:'600px', marginTop:'100px', marginRight:'50px'}}>
        <h3>ORDER SOLARCAST</h3>
        <br></br>
        <p>123 Maple Street, Auckland Central,  6011, New Zealand</p>
        <p>It is available in your address</p>
        <br></br>
        <h3>Value of Solar Power Generated</h3>
        <h2>$1,154 - $1,924/year</h2>
        <br></br>
        <p>Home Solar Potential</p>
        <br></br>
        <h3>Excellence</h3>
        <br></br>
        <p>Can save NZ$1200/year and NZ$20000 for Installation.</p>

    </div>
    </div>
    </>
  );
};

export default CostCalculation;
