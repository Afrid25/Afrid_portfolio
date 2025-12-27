// Three.js 3D Scene Setup
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';

let scene, camera, renderer, cube, torus, particles;

function initThreeJS() {
    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);

    // Camera setup
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('hero-3d').appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x00ff41, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Create 3D objects
    createObjects();

    // Handle window resize
    window.addEventListener('resize', onWindowResize, false);

    // Start animation loop
    animate();
}

function createObjects() {
    // Cube
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff41, wireframe: true });
    cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = -2;
    scene.add(cube);

    // Torus
    const torusGeometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
    const torusMaterial = new THREE.MeshPhongMaterial({ color: 0xff073a });
    torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.x = 2;
    scene.add(torus);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.02 });
    particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
}

function animate() {
    requestAnimationFrame(animate);

    // Rotate objects
    if (cube) cube.rotation.x += 0.01;
    if (cube) cube.rotation.y += 0.01;

    if (torus) torus.rotation.x += 0.005;
    if (torus) torus.rotation.z += 0.01;

    if (particles) particles.rotation.y += 0.001;

    // Subtle camera movement
    camera.position.x = Math.sin(Date.now() * 0.0005) * 0.5;
    camera.position.y = Math.cos(Date.now() * 0.0003) * 0.3;

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Initialize Three.js when DOM is loaded
document.addEventListener('DOMContentLoaded', initThreeJS);
