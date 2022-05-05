var renderer;
var scene;
var camera;
var loader;
var controls;
/**
 * Entry Point of the application
 *
 */
function init(){
    scene = new THREE.Scene();
    console.log('Scene OBJ Created');
    createRenderer();
    console.log('Renderer OBJ Created');
    createCamera();
	console.log('Camera OBJ Created');
	createEnvironment();
	console.log('Enviroment Created');
	createBackgroundMusic();
	console.log('Background Music Created')
    if(localStorage.getItem('car')){
        loadObject();
        console.log('3D OBJ loaded');
        createLight();
        console.log('Light Created');
		document.getElementById('content').appendChild(renderer.domElement);
		createOBJSound();
	    render();	
    }
}
/**
 * Create Renderer
 *
 */
function createRenderer(){
	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(0x000000, 1.0);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMap.enabled = true;
}
/**
 * Create Camera
 *
 */
function createCamera(){
	camera = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight, 0.1, 1000);
	camera.position.x = 40;
	camera.position.y = 10;
	camera.position.z = 22;
	camera.lookAt(scene.position);
	cameraControl = new THREE.OrbitControls(camera);
	cameraControl.maxPolarAngle = Math.PI / 2;
}
/**
 * Load OBJ
 *
 */
function loadObject(){
    //LoadTextures
    var textureLoader = new THREE.TextureLoader();
    var map, nMap, sMap;
    switch (localStorage.getItem('car')){
        case '1':
            map = textureLoader.load('./../assets/volkswagen.png');
	        nMap = textureLoader.load('./../assets/IDR_low_NormalIDR.png');
	        sMap = textureLoader.load('./../assets/IDR_low_AOIDR.png');
            break;
        case '2':
            map = textureLoader.load('./../assets/car2.jpeg');
	        nMap = textureLoader.load('./../assets/IDR_low_NormalIDR.png');
	        sMap = textureLoader.load('./../assets/IDR_low_AOIDR.png');
			break;
		case '3':
			map = textureLoader.load('./../assets/porsche/skin0'+localStorage.getItem('shiftCar')+'/0000.BMP');
			break;
		case '4':
			map = textureLoader.load('./../assets/formula1_DefaultMaterial_Diffuse.png');
	        nMap = textureLoader.load('./../assets/formula1_DefaultMaterial_Normal.png');
			sMap = textureLoader.load('./../assets/formula1_DefaultMaterial_Specular.png');
			break;
    }
    var cotxe = new THREE.MeshPhongMaterial({map: map, normalMap: nMap, specularMap: sMap});
    console.log(cotxe);
    loader = new THREE.OBJLoader();
    loader.load('./../assets/car'+localStorage.getItem('car')+'.obj', function(object) {
		//asignar material a cada malla en el archivo
		object.traverse(function(child){
			if(child instanceof THREE.Mesh){
			
				child.material = cotxe;
				child.receiveShadow = true;
				child.castShadow = true;
				child.visible = true;
			}
		});

		if(localStorage.getItem('car') == 4){
			object.scale.x = 0.05;
			object.scale.y = 0.05;
			object.scale.z = 0.05;
			object.position.y = -1.65;
		}
		object.name = "car" + localStorage.getItem('car');
		//añadir todo a la escena
		scene.add(object);
	});
}
/**
 * Creates Lights
 *
 */
function createLight(){
    var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
	directionalLight.position.set(10,10,-10);
	directionalLight.name = "directional";
	scene.add(directionalLight);
	
	var ambientLight = new THREE.AmbientLight(0x111111);
	scene.add(ambientLight);

	var hemisphereLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
	scene.add( hemisphereLight  );
	
}
/**
 * Render Scene
 *
 */
function render(){
    cameraControl.update();
	
	renderer.render(scene, camera);	
	
    requestAnimationFrame(render);
    if(scene.getObjectByName('car'+localStorage.getItem('car')) !== undefined){
		scene.getObjectByName('car'+localStorage.getItem('car')).rotateY(0.002);
		scene.getObjectByName('floor').rotateZ(0.002);
		scene.getObjectByName('galaxy').rotateY(0.002);

    }
    
}
/**
 * Creates Environment
 *
 */
function createEnvironment(){

	var envGeometry = new THREE.SphereGeometry(100,32,32);
	var envMaterial = new THREE.MeshBasicMaterial();
	envMaterial.map = THREE.ImageUtils.loadTexture("./../assets/env.jpg");
	envMaterial.side = THREE.BackSide;
	
	var envMesh = new THREE.Mesh(envGeometry, envMaterial);
	envMesh.name = "galaxy";
	scene.add(envMesh);
	var loader = new THREE.TextureLoader();

	var groundTexture = loader.load( './../assets/floor.png' );
	groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
	groundTexture.repeat.set( 5, 5 );
	groundTexture.anisotropy = 16;
	groundTexture.encoding = THREE.sRGBEncoding;

	var groundMaterial = new THREE.MeshLambertMaterial( { map: groundTexture } );

	var mesh = new THREE.Mesh( new THREE.CircleGeometry( 100, 150 ), groundMaterial );
	mesh.position.y = - Math.PI / 2;
	mesh.rotation.x = - Math.PI / 2;
	mesh.receiveShadow = true;
	mesh.name = "floor";
	scene.add( mesh );
}
/**
 * Creates Background Music
 *
 */
function createBackgroundMusic(){
	// create an AudioListener and add it to the camera
	var listener = new THREE.AudioListener();
	camera.add( listener );

	// create a global audio source
	var sound = new THREE.Audio( listener );

	// load a sound and set it as the Audio object's buffer
	var audioLoader = new THREE.AudioLoader();
	audioLoader.load( './../assets/ambient.mp3', function( buffer ) {
		sound.setBuffer( buffer );
		sound.setLoop( true );
		sound.setVolume( 0.5 );
		sound.play();
	});
}
/**
 * Creates music for the OBJ instance
 *
 */
function createOBJSound(){
	// create an AudioListener and add it to the camera
	var listener = new THREE.AudioListener();
	camera.add( listener );

	// create a global audio source
	var sound = new THREE.Audio( listener );

	// load a sound and set it as the Audio object's buffer
	var audioLoader = new THREE.AudioLoader();
	audioLoader.load( './../assets/car'+localStorage.getItem('car')+'.mp3', function( buffer ) {
		sound.setBuffer( buffer );
		sound.setLoop( false );
		sound.setVolume( 1 );
		sound.play();
	});
}

