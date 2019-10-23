import React from 'react';
import { Form, FormControl, Navbar, Nav, Button} from 'react-bootstrap'
import * as THREE from 'three';

class Home extends React.Component {
    constructor(props) {
        super(props);
        //this.state = { favoritecolor: "red" };
    }

    /*
    shouldComponentUpdate() { //method you can return a Boolean value that specifies whether React should continue with the rendering or not.
        return false;
    }

    componentDidMount() { // method is called after the component is rendered.
        setTimeout(() => {
            this.setState({ favoritecolor: "yellow" })
        }, 1000)
    }

    getDerivedStateFromProps(props, state) { //method is called right before the render method:
        return { favoritecolor: props.favcol };
    }

    getSnapshotBeforeUpdate(prevProps, prevState) { //method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.
        //method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.
        document.getElementById("div1").innerHTML =
            "Before the update, the favorite was " + prevState.favoritecolor;
    }

    componentDidUpdate() { // method is called after the component is updated in the DOM.
        document.getElementById("div2").innerHTML =
            "The updated favorite is " + this.state.favoritecolor;
    }

    componentWillUnmount() { //method is called when the component is removed from the DOM.
        alert("The component named Header is about to be unmounted.");
    }
    */
    componentDidMount() {
        /*
        // === THREE.JS CODE START ===
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, 500);
        //document.body.appendChild(renderer.domElement);
        document.getElementById("canvas").appendChild(renderer.domElement);
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        //var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        var material = new THREE.MeshPhongMaterial({
            color: 0x156289,
            emissive: 0x072534,
            side: THREE.DoubleSide,
            flatShading: true
        });

        var lights = [];
        lights[0] = new THREE.PointLight(0xffffff, 1, 0);
        lights[1] = new THREE.PointLight(0xffffff, 1, 0);
        lights[2] = new THREE.PointLight(0xffffff, 1, 0);

        lights[0].position.set(0, 200, 0);
        lights[1].position.set(100, 200, 100);
        lights[2].position.set(- 100, - 200, - 100);

        scene.add(lights[0]);
        scene.add(lights[1]);
        scene.add(lights[2]);

        var texture = THREE.ImageUtils.loadTexture('../assets/dragon.jpeg');
        var backgroundMesh = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 2, 0),
            new THREE.MeshBasicMaterial({
                map: texture
            }));

        backgroundMesh.material.depthTest = false;
        backgroundMesh.material.depthWrite = false;

        // Create your background scene
        var backgroundScene = new THREE.Scene();
        var backgroundCamera = new THREE.Camera();
        backgroundScene.add(backgroundCamera);
        backgroundScene.add(backgroundMesh);


        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.position.z = 5;
        var animate = function () {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(backgroundScene, backgroundCamera);
            renderer.render(scene, camera);
        };
        animate();
        // === THREE.JS EXAMPLE CODE END ===
        */


        var color = 0x000000;

        // Create your main scene
        var scene = new THREE.Scene();

        // Create your main camera
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);

        // Create lights
        var light = new THREE.PointLight(0xEEEEEE);
        light.position.set(20, 0, 20);
        scene.add(light);

        var lightAmb = new THREE.AmbientLight(0x777777);
        scene.add(lightAmb);

        // Create your renderer
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, 500);
        document.getElementById("canvas").appendChild(renderer.domElement);

        // Create a cube
        //var geometry = new THREE.BoxGeometry(1, 1, 1);
        
        var geometry = new THREE.SphereGeometry(5, 32, 32);
        var material = new THREE.MeshLambertMaterial({
            color: 0xff00ff,
            ambient: 0x121212,
            emissive: 0x121212
        });

        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
/*
        var geometry = new THREE.SphereGeometry(5, 32, 32);
        var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        var sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);
*/
        // Set up the main camera
        camera.position.z = 20;

        // Load the background texture
        var texture = THREE.ImageUtils.loadTexture(require('../assets/dragon.jpeg'));
        var backgroundMesh = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 2, 0),
            new THREE.MeshBasicMaterial({
                map: texture
            }));

        backgroundMesh.material.depthTest = false;
        backgroundMesh.material.depthWrite = false;

        // Create your background scene
        var backgroundScene = new THREE.Scene();
        var backgroundCamera = new THREE.Camera();
        backgroundScene.add(backgroundCamera);
        backgroundScene.add(backgroundMesh);

        // Rendering function
        var render = function () {
            requestAnimationFrame(render);

            // Update the color to set
            if (color < 0xdddddd) color += 0x0000ff;
            
            // Update the cube color
            cube.material.color.setHex(color);

            // Update the cube rotations
            cube.rotation.x += 0.05;
            cube.rotation.y += 0.02;

            renderer.autoClear = false;
            renderer.clear();
            renderer.render(backgroundScene, backgroundCamera);
            renderer.render(scene, camera);
        };

        render();
    }

    render() { //method is required, and is the method that actual outputs HTML to the DOM.
        const bodyStyle = {
            textAlign: "center",
            borderStyle: "solid",
            borderWidth: "5px",
        };
        const footerStyle = {
            width: "100%",
            height: "50px",
            backgroundColor: "gray",
        };
        const borderStyle = {
            borderStyle: "solid",
            borderWidth: "5px",
        }
        return (
            //<h1>My Favorite Color is {this.state.favoritecolor}</h1>
            
            <div className="Home">
                <div className="Home-container">
                    <div id="canvas" />
                </div>
                <div style={bodyStyle}>
                    <img src={require('../assets/introduction.png')} />
                </div>
                <div style={footerStyle}>  
                </div>
            </div>
                );
            }
        }
        export default Home;
        
        /*
        
        getDerivedStateFromProps: Invoked right before calling render() and is invoked on every render. This exists for rare use cases where you need derived state. Worth reading if you need derived state.
        componentDidMount: Executed after first rendering and here all AJAX requests, DOM or state updates, and set up event listeners should occur.
        shouldComponentUpdate: Determines if the component will be updated or not. By default it returns true. If you are sure that the component doesn't need to render after state or props are updated, you can return false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives new prop.
        getSnapshotBeforeUpdate: Executed right before rendered output is committed to the DOM. Any value returned by this will be passed into componentDidUpdate(). This is useful to capture information from the DOM i.e. scroll position.
        componentDidUpdate: Mostly it is used to update the DOM in response to prop or state changes. This will not fire if shouldComponentUpdate() returns false.
        componentWillUnmount It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.
        
        */
        
        /*
function Home() {
                    constructor(props) {
                    super(props);
        
        
            };
    componentDidMount() {

                };
    componentWillUnmount() {

                };
                return (
        <div className="Home">

                </div>
                );
            }
            
            export default Home;
*/