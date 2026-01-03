import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Navbar from '../components/Navbar';
import './LandingPage.css';

const LandingPage = () => {
    const threeContainerRef = useRef(null);
    const location = useLocation();

    // Handle hash scrolling
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    useEffect(() => {
        if (!threeContainerRef.current) return;

        const container = threeContainerRef.current;
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x2a2a2a);
        scene.fog = new THREE.Fog(0x2a2a2a, 10, 50);

        const camera = new THREE.PerspectiveCamera(
            45,
            container.clientWidth / container.clientHeight,
            0.1,
            100
        );

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        container.appendChild(renderer.domElement);

        // OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.screenSpacePanning = false;
        controls.minDistance = 5;
        controls.maxDistance = 50;
        controls.maxPolarAngle = Math.PI;

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
        dirLight.position.set(5, 10, 7);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.width = 1024;
        dirLight.shadow.mapSize.height = 1024;
        scene.add(dirLight);

        // Floor
        const gridHelper = new THREE.GridHelper(30, 30, 0x666666, 0x888888);
        gridHelper.material.opacity = 0.6;
        gridHelper.material.transparent = true;
        scene.add(gridHelper);

        const floorGeo = new THREE.PlaneGeometry(30, 30);
        const floorMat = new THREE.MeshStandardMaterial({
            color: 0x333333,
            roughness: 0.8,
            metalness: 0.2
        });
        const floorMesh = new THREE.Mesh(floorGeo, floorMat);
        floorMesh.rotation.x = -Math.PI / 2;
        floorMesh.position.y = -0.1;
        floorMesh.receiveShadow = true;
        scene.add(floorMesh);

        // Materials
        const metalMat = new THREE.MeshStandardMaterial({
            color: 0xcccccc,
            roughness: 0.1,
            metalness: 0.9
        });
        const jointMat = new THREE.MeshStandardMaterial({
            color: 0x999999,
            roughness: 0.2,
            metalness: 0.8
        });
        const highlightMat = new THREE.MeshStandardMaterial({
            color: 0xdddddd,
            roughness: 0.05,
            metalness: 0.95
        });

        // Dimensions
        const BASE_HEIGHT = 1;
        const ARM_L1 = 3.5;
        const ARM_L2 = 3.0;

        // Base
        const baseGeo = new THREE.CylinderGeometry(1, 1.2, BASE_HEIGHT, 32);
        const baseMesh = new THREE.Mesh(baseGeo, metalMat);
        baseMesh.position.y = BASE_HEIGHT / 2;
        baseMesh.castShadow = true;
        baseMesh.receiveShadow = true;
        scene.add(baseMesh);

        // Turret
        const turretPivot = new THREE.Group();
        turretPivot.position.y = BASE_HEIGHT;
        scene.add(turretPivot);

        const turretGeo = new THREE.BoxGeometry(1.5, 0.5, 1.5);
        const turretMesh = new THREE.Mesh(turretGeo, jointMat);
        turretMesh.position.y = 0.25;
        turretMesh.castShadow = true;
        turretMesh.receiveShadow = true;
        turretPivot.add(turretMesh);

        // Upper Arm
        const arm1Pivot = new THREE.Group();
        arm1Pivot.position.set(0, 0.5, 0);
        turretPivot.add(arm1Pivot);

        const arm1Geo = new THREE.BoxGeometry(0.6, ARM_L1, 0.6);
        const arm1Mesh = new THREE.Mesh(arm1Geo, metalMat);
        arm1Mesh.position.y = ARM_L1 / 2;
        arm1Mesh.castShadow = true;
        arm1Mesh.receiveShadow = true;
        arm1Pivot.add(arm1Mesh);

        const joint1Geo = new THREE.CylinderGeometry(0.4, 0.4, 1.8, 16);
        joint1Geo.rotateZ(Math.PI / 2);
        const joint1Mesh = new THREE.Mesh(joint1Geo, jointMat);
        arm1Pivot.add(joint1Mesh);

        // Forearm
        const arm2Pivot = new THREE.Group();
        arm2Pivot.position.y = ARM_L1;
        arm1Pivot.add(arm2Pivot);

        const arm2Geo = new THREE.BoxGeometry(0.5, ARM_L2, 0.5);
        const arm2Mesh = new THREE.Mesh(arm2Geo, metalMat);
        arm2Mesh.position.y = ARM_L2 / 2;
        arm2Mesh.castShadow = true;
        arm2Mesh.receiveShadow = true;
        arm2Pivot.add(arm2Mesh);

        const joint2Mesh = new THREE.Mesh(joint1Geo, jointMat);
        arm2Pivot.add(joint2Mesh);

        // Hand/Gripper
        const handPivot = new THREE.Group();
        handPivot.position.y = ARM_L2;
        arm2Pivot.add(handPivot);

        const wristMesh = new THREE.Mesh(
            new THREE.CylinderGeometry(0.3, 0.3, 0.8, 16).rotateZ(Math.PI / 2),
            jointMat
        );
        handPivot.add(wristMesh);

        // Claws
        const clawGeo = new THREE.BoxGeometry(0.08, 0.8, 0.4);
        const leftClaw = new THREE.Mesh(clawGeo, highlightMat);
        leftClaw.position.set(0.3, 0.4, 0);
        handPivot.add(leftClaw);

        const rightClaw = new THREE.Mesh(clawGeo, highlightMat);
        rightClaw.position.set(-0.3, 0.4, 0);
        handPivot.add(rightClaw);

        const middleClaw = new THREE.Mesh(clawGeo, highlightMat);
        middleClaw.position.set(0, 0.4, 0);
        handPivot.add(middleClaw);

        // Camera setup
        camera.position.set(15, 15, 15);
        camera.lookAt(0, 3, 0);

        // Animation
        let time = 0;
        function animate() {
            requestAnimationFrame(animate);
            time += 0.02;

            // Dance movements
            turretPivot.rotation.y = Math.sin(time * 0.8) * 0.3;
            arm1Pivot.rotation.y = Math.sin(time * 2.5) * 0.6;
            arm1Pivot.rotation.x = Math.sin(time * 1.5) * 0.2;
            arm2Pivot.rotation.y = Math.sin(time * 2.5 + Math.PI / 2) * 0.4;
            arm2Pivot.rotation.x = Math.cos(time * 3) * 0.3;
            handPivot.rotation.z = Math.sin(time * 4) * 0.3;
            handPivot.position.y = ARM_L2 + Math.sin(time * 3) * 0.1;

            // Claw movements
            const clawOffset = Math.sin(time * 5) * 0.1;
            leftClaw.position.x = 0.3 + clawOffset;
            rightClaw.position.x = -0.3 - clawOffset;
            middleClaw.position.x = 0 + Math.sin(time * 5 + Math.PI) * 0.05;
            leftClaw.position.z = Math.abs(clawOffset) * 0.5;
            rightClaw.position.z = -Math.abs(clawOffset) * 0.5;
            middleClaw.position.z = 0;

            controls.update();
            renderer.render(scene, camera);
        }
        animate();

        // Handle resize
        const handleResize = () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            container.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return (
        <div className="landing-page">
            <Navbar />
            {/* Hero Section */}
            <div className="container">
                <div className="content">
                    <h1>From Sparks to Silicon</h1>
                    <p className="description">
                        Learn electronics from scratch through immersive, interactive simulations.
                    </p>
                    <div className="buttons">
                        <a href="/theapplefalls/lessons/chapter1/Chapter1_Final/Franklin.html" className="btn btn-primary">Begin Journey</a>
                        <a href="#roadmap" className="btn btn-secondary">View Curriculum</a>
                    </div>
                </div>
                <div className="visual">
                    <div className="glow"></div>
                    <div className="threejs-container" ref={threeContainerRef}></div>
                </div>
            </div>

            {/* About Section */}
            <section id="about">
                <div className="about-container">
                    <h2 className="section-title">About</h2>
                    <div className="about-content">
                        <p>
                            Hi, I'm <strong>Jeevan</strong>. I built this platform to document my journey learning electronics from first principles.
                        </p>
                        <p>
                            One of the biggest hurdles in learning hardware is the need for physical components to experiment with. Unlike computer science where all you need is a laptop, electronics usually requires a lab.
                        </p>
                        <p>
                            My goal is to bridge that gap by building a sandbox where anyone can simulate and experiment with circuits realistically. These interactive lessons are the result of my own learning process.
                        </p>
                        <p className="contact">
                            Feel free to reach out: <a href="mailto:bettercalljeevan@gmail.com">bettercalljeevan@gmail.com</a>
                        </p>
                    </div>
                </div>
            </section>

            {/* Roadmap Section */}
            <section id="roadmap">
                <div className="roadmap-container">
                    <h2 className="section-title">Learning Path</h2>

                    {/* Chapter 1 */}
                    <div className="chapter">
                        <div className="chapter-header">
                            <span className="chapter-number">01</span>
                            <h3>The Spark</h3>
                        </div>
                        <div className="lesson-grid">
                            <a href="/theapplefalls/lessons/chapter1/Chapter1_Final/Franklin.html" className="lesson-card">
                                <span className="lesson-number">1.1</span>
                                <h4>Benjamin Franklin</h4>
                                <p>The invisible fluid theory.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter1/Chapter1_Final/Scene2_thales.html" className="lesson-card">
                                <span className="lesson-number">1.2</span>
                                <h4>Thales of Miletus</h4>
                                <p>Ancient origins of electricity.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter1/Chapter1_Final/Galvani.html" className="lesson-card">
                                <span className="lesson-number">1.3</span>
                                <h4>Luigi Galvani</h4>
                                <p>Animal electricity experiments.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter1/Chapter1_Final/MetalInduction.html" className="lesson-card">
                                <span className="lesson-number">1.4</span>
                                <h4>Induction in Metals</h4>
                                <p>Free-flowing electrons.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter1/Chapter1_Final/PolarizationInductors.html" className="lesson-card">
                                <span className="lesson-number">1.5</span>
                                <h4>Polarization</h4>
                                <p>Charge separation in insulators.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter1/Chapter1_Final/coulombs_law.html" className="lesson-card">
                                <span className="lesson-number">1.6</span>
                                <h4>Coulomb's Law</h4>
                                <p>Quantifying electric force.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter1/Chapter1_Final/triboelectric_effect_hair.html" className="lesson-card">
                                <span className="lesson-number">1.7</span>
                                <h4>Triboelectric Effect</h4>
                                <p>Charging by friction.</p>
                            </a>
                        </div>
                    </div>

                    {/* Chapter 2 */}
                    <div className="chapter">
                        <div className="chapter-header">
                            <span className="chapter-number">02</span>
                            <h3>The Field</h3>
                        </div>
                        <div className="lesson-grid">
                            <a href="/theapplefalls/lessons/chapter2/intro_to_electricfeld.html" className="lesson-card">
                                <span className="lesson-number">2.1</span>
                                <h4>Intro to Electric Fields</h4>
                                <p>Force without contact.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter2/2_vector.html" className="lesson-card">
                                <span className="lesson-number">2.2</span>
                                <h4>Vector Fields</h4>
                                <p>Direction and magnitude.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter2/vec_addition.html" className="lesson-card">
                                <span className="lesson-number">2.3</span>
                                <h4>Vector Addition</h4>
                                <p>Superposition principle.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter2/3_asymptotic_behaviorr.html" className="lesson-card">
                                <span className="lesson-number">2.4</span>
                                <h4>Asymptotic Behavior</h4>
                                <p>Far-field approximations.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter2/4_field_lines.html" className="lesson-card">
                                <span className="lesson-number">2.5</span>
                                <h4>Field Lines</h4>
                                <p>Visualizing field patterns.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter2/5_misconception.html" className="lesson-card">
                                <span className="lesson-number">2.6</span>
                                <h4>Misconceptions</h4>
                                <p>Common misunderstandings.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter2/6_dipole.html" className="lesson-card">
                                <span className="lesson-number">2.7</span>
                                <h4>Dipole</h4>
                                <p>Two opposite charges.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter2/7_creating_a_dipole(induction).html" className="lesson-card">
                                <span className="lesson-number">2.8</span>
                                <h4>Creating a Dipole</h4>
                                <p>Induced polarization.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter2/8_dipole_on_vandeGraff.html" className="lesson-card">
                                <span className="lesson-number">2.9</span>
                                <h4>Dipole on Van de Graaff</h4>
                                <p>Strong field effects.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter2/9_dipole_on_grassfield.html" className="lesson-card">
                                <span className="lesson-number">2.10</span>
                                <h4>Dipole on Grass Field</h4>
                                <p>Natural demonstrations.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter2/10_dipole.html" className="lesson-card">
                                <span className="lesson-number">2.11</span>
                                <h4>Dipole Water Stream</h4>
                                <p>Bending water with charge.</p>
                            </a>
                        </div>
                    </div>

                    {/* Chapter 3 */}
                    <div className="chapter">
                        <div className="chapter-header">
                            <span className="chapter-number">03</span>
                            <h3>Gauss's Law</h3>
                        </div>
                        <div className="lesson-grid">
                            <a href="/theapplefalls/lessons/chapter3/1_electric_flux.html" className="lesson-card">
                                <span className="lesson-number">3.1</span>
                                <h4>Electric Flux</h4>
                                <p>Field through surfaces.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter3/2_flux.html" className="lesson-card">
                                <span className="lesson-number">3.2</span>
                                <h4>Flux & Surface</h4>
                                <p>Orientation matters.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter3/3_flux_inside_sphere.html" className="lesson-card">
                                <span className="lesson-number">3.3</span>
                                <h4>Flux Inside Sphere</h4>
                                <p>Symmetry applications.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter3/4_gauss_law.html" className="lesson-card">
                                <span className="lesson-number">3.4</span>
                                <h4>Gauss's Law</h4>
                                <p>Relating flux to charge.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter3/5_infitnite_plane.html" className="lesson-card">
                                <span className="lesson-number">3.5</span>
                                <h4>Infinite Plane</h4>
                                <p>Uniform field from sheet.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter3/6_parralel_plates.html" className="lesson-card">
                                <span className="lesson-number">3.6</span>
                                <h4>Parallel Plates</h4>
                                <p>Capacitor fundamentals.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter3/7infinteplanevsspeherical.html" className="lesson-card">
                                <span className="lesson-number">3.7</span>
                                <h4>Plane vs Sphere</h4>
                                <p>Comparing geometries.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter3/hollow_sphere.html" className="lesson-card">
                                <span className="lesson-number">3.8</span>
                                <h4>Hollow Sphere</h4>
                                <p>Shielding effects.</p>
                            </a>
                        </div>
                    </div>

                    {/* Chapter 4 */}
                    <div className="chapter">
                        <div className="chapter-header">
                            <span className="chapter-number">04</span>
                            <h3>Work and Energy</h3>
                        </div>
                        <div className="lesson-grid">
                            <a href="/theapplefalls/lessons/chapter4/1.html" className="lesson-card">
                                <span className="lesson-number">4.1</span>
                                <h4>The Elastic Struggle</h4>
                                <p>Work against electric force.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter4/2.html" className="lesson-card">
                                <span className="lesson-number">4.2</span>
                                <h4>The Winding Path</h4>
                                <p>Path independence.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter4/3.html" className="lesson-card">
                                <span className="lesson-number">4.3</span>
                                <h4>Electric Potential</h4>
                                <p>Voltage fundamentals.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter4/4.html" className="lesson-card">
                                <span className="lesson-number">4.4</span>
                                <h4>Equipotential Surfaces</h4>
                                <p>Constant potential regions.</p>
                            </a>
                        </div>
                    </div>

                    {/* Chapter 5 */}
                    <div className="chapter">
                        <div className="chapter-header">
                            <span className="chapter-number">05</span>
                            <h3>Electric Potential</h3>
                        </div>
                        <div className="lesson-grid">
                            <a href="/theapplefalls/lessons/chapter5/1_conservative_forces.html" className="lesson-card">
                                <span className="lesson-number">5.1</span>
                                <h4>Conservative Forces</h4>
                                <p>Path independence of work.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter5/2_field_from_potential.html" className="lesson-card">
                                <span className="lesson-number">5.2</span>
                                <h4>Field from Potential</h4>
                                <p>Deriving E from V.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter5/3_equipotentials.html" className="lesson-card">
                                <span className="lesson-number">5.3</span>
                                <h4>Equipotentials</h4>
                                <p>Constant potential surfaces.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter5/4_gradient.html" className="lesson-card">
                                <span className="lesson-number">5.4</span>
                                <h4>Gradient</h4>
                                <p>Vector calculus of potential.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter5/5_parallel_plates.html" className="lesson-card">
                                <span className="lesson-number">5.5</span>
                                <h4>Parallel Plates</h4>
                                <p>Uniform electric field.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter5/6_conductors.html" className="lesson-card">
                                <span className="lesson-number">5.6</span>
                                <h4>Conductors</h4>
                                <p>Equipotential objects.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter5/7_hollow_conductor.html" className="lesson-card">
                                <span className="lesson-number">5.7</span>
                                <h4>Hollow Conductor</h4>
                                <p>Zero internal field.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter5/8_farady_cage.html" className="lesson-card">
                                <span className="lesson-number">5.8</span>
                                <h4>Faraday Cage</h4>
                                <p>Electrostatic shielding.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter5/9_shielding_appplications.html" className="lesson-card">
                                <span className="lesson-number">5.9</span>
                                <h4>Shielding Applications</h4>
                                <p>Real-world protection.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter5/10_charge_dist_non_spherical.html" className="lesson-card">
                                <span className="lesson-number">5.10</span>
                                <h4>Non-Spherical Charge</h4>
                                <p>Complex geometries.</p>
                            </a>
                        </div>
                    </div>

                    {/* Chapter 6 */}
                    <div className="chapter">
                        <div className="chapter-header">
                            <span className="chapter-number">06</span>
                            <h3>Capacitance</h3>
                        </div>
                        <div className="lesson-grid">
                            <a href="/theapplefalls/lessons/chapter6/1_field_energy.html" className="lesson-card">
                                <span className="lesson-number">6.1</span>
                                <h4>Field Energy</h4>
                                <p>Energy stored in fields.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter6/2_Energy_Density.html" className="lesson-card">
                                <span className="lesson-number">6.2</span>
                                <h4>Energy Density</h4>
                                <p>Energy per unit volume.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter6/3_Capacitance.html" className="lesson-card">
                                <span className="lesson-number">6.3</span>
                                <h4>Capacitance</h4>
                                <p>Charge storage ability.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter6/4_capacitance_revised.html" className="lesson-card">
                                <span className="lesson-number">6.4</span>
                                <h4>Capacitance Revised</h4>
                                <p>Deeper understanding.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter6/5_parrallel_plate.html" className="lesson-card">
                                <span className="lesson-number">6.5</span>
                                <h4>Parallel Plate</h4>
                                <p>Standard capacitor design.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter6/6_energy_in_cap.html" className="lesson-card">
                                <span className="lesson-number">6.6</span>
                                <h4>Energy in Capacitor</h4>
                                <p>Stored energy calculations.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter6/7_cylindrical_cap.html" className="lesson-card">
                                <span className="lesson-number">6.7</span>
                                <h4>Cylindrical Capacitor</h4>
                                <p>Alternative geometry.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter6/8_flash.html" className="lesson-card">
                                <span className="lesson-number">6.8</span>
                                <h4>Camera Flash</h4>
                                <p>Rapid energy release.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter6/combined.html" className="lesson-card">
                                <span className="lesson-number">6.9</span>
                                <h4>Combined Capacitors</h4>
                                <p>Series and parallel.</p>
                            </a>
                        </div>
                    </div>

                    {/* Chapter 7 */}
                    <div className="chapter">
                        <div className="chapter-header">
                            <span className="chapter-number">07</span>
                            <h3>Dielectrics</h3>
                        </div>
                        <div className="lesson-grid">
                            <a href="/theapplefalls/lessons/chapter7/1_polarization_in_insulators.html" className="lesson-card">
                                <span className="lesson-number">7.1</span>
                                <h4>Polarization in Insulators</h4>
                                <p>Molecular alignment.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter7/2_dielectric_constant.html" className="lesson-card">
                                <span className="lesson-number">7.2</span>
                                <h4>Dielectric Constant</h4>
                                <p>Material property.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter7/3_gauss_law_dielectrics.html" className="lesson-card">
                                <span className="lesson-number">7.3</span>
                                <h4>Gauss's Law with Dielectrics</h4>
                                <p>Modified field equations.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter7/4_experiments_disconnected.html" className="lesson-card">
                                <span className="lesson-number">7.4</span>
                                <h4>Disconnected Experiment</h4>
                                <p>Isolated capacitor test.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter7/5_experiments_connected.html" className="lesson-card">
                                <span className="lesson-number">7.5</span>
                                <h4>Connected Experiment</h4>
                                <p>Battery-connected test.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter7/6_dielectric_breakdown.html" className="lesson-card">
                                <span className="lesson-number">7.6</span>
                                <h4>Dielectric Breakdown</h4>
                                <p>Material failure limits.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter7/7_energy_storage_mystery.html" className="lesson-card">
                                <span className="lesson-number">7.7</span>
                                <h4>Energy Storage Mystery</h4>
                                <p>Where does energy go?</p>
                            </a>
                        </div>
                    </div>

                    {/* Chapter 8 */}
                    <div className="chapter">
                        <div className="chapter-header">
                            <span className="chapter-number">08</span>
                            <h3>Current & Resistance</h3>
                        </div>
                        <div className="lesson-grid">
                            <a href="/theapplefalls/lessons/chapter8/1_current_convention.html" className="lesson-card">
                                <span className="lesson-number">8.1</span>
                                <h4>Current Convention</h4>
                                <p>Positive vs electron flow.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter8/2_drift_velocity_snail.html" className="lesson-card">
                                <span className="lesson-number">8.2</span>
                                <h4>Drift Velocity</h4>
                                <p>Slow electron movement.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter8/3_microscopic_ohms_law.html" className="lesson-card">
                                <span className="lesson-number">8.3</span>
                                <h4>Microscopic Ohm's Law</h4>
                                <p>J = σE relationship.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter8/4_geometry_of_resistance.html" className="lesson-card">
                                <span className="lesson-number">8.4</span>
                                <h4>Geometry of Resistance</h4>
                                <p>Length and area effects.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter8/5_materials_spectrum.html" className="lesson-card">
                                <span className="lesson-number">8.5</span>
                                <h4>Materials Spectrum</h4>
                                <p>Conductors to insulators.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter8/6_the_birth_of_ohms_law.html" className="lesson-card">
                                <span className="lesson-number">8.6</span>
                                <h4>Birth of Ohm's Law</h4>
                                <p>Deriving V = IR.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter8/7_light_bulb_breakdown.html" className="lesson-card">
                                <span className="lesson-number">8.7</span>
                                <h4>Light Bulb Breakdown</h4>
                                <p>Non-linear resistance.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter8/8_thermal_chaos.html" className="lesson-card">
                                <span className="lesson-number">8.8</span>
                                <h4>Thermal Chaos</h4>
                                <p>Lattice vibrations.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter8/9_series_parallel.html" className="lesson-card">
                                <span className="lesson-number">8.9</span>
                                <h4>Series & Parallel</h4>
                                <p>Combining resistors.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter8/10_electric_power.html" className="lesson-card">
                                <span className="lesson-number">8.10</span>
                                <h4>Electric Power</h4>
                                <p>Energy dissipation rate.</p>
                            </a>
                        </div>
                    </div>

                    {/* Chapter 9 */}
                    <div className="chapter">
                        <div className="chapter-header">
                            <span className="chapter-number">09</span>
                            <h3>EMF & Circuits</h3>
                        </div>
                        <div className="lesson-grid">
                            <a href="/theapplefalls/lessons/chapter9/1_electric_pump.html" className="lesson-card">
                                <span className="lesson-number">9.1</span>
                                <h4>The Electric Pump</h4>
                                <p>Electromotive force concept.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter9/2_chemical_battery.html" className="lesson-card">
                                <span className="lesson-number">9.2</span>
                                <h4>The Chemical Battery</h4>
                                <p>Zinc-copper cell.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter9/3_internal_resistance.html" className="lesson-card">
                                <span className="lesson-number">9.3</span>
                                <h4>Internal Resistance</h4>
                                <p>Real battery limitations.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter9/4_maximum_power.html" className="lesson-card">
                                <span className="lesson-number">9.4</span>
                                <h4>Maximum Power Transfer</h4>
                                <p>Impedance matching.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter9/5_loop_rule.html" className="lesson-card">
                                <span className="lesson-number">9.5</span>
                                <h4>Kirchhoff's Loop Rule</h4>
                                <p>Voltage conservation.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter9/6_junction_rule.html" className="lesson-card">
                                <span className="lesson-number">9.6</span>
                                <h4>Kirchhoff's Junction Rule</h4>
                                <p>Current conservation.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter9/7_measuring_circuits.html" className="lesson-card">
                                <span className="lesson-number">9.7</span>
                                <h4>Measuring Circuits</h4>
                                <p>Voltmeters and ammeters.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter9/8_household_power.html" className="lesson-card">
                                <span className="lesson-number">9.8</span>
                                <h4>Household Power</h4>
                                <p>Real-world applications.</p>
                            </a>
                            <a href="/theapplefalls/lessons/chapter9/9_kelvin_dropper.html" className="lesson-card">
                                <span className="lesson-number">9.9</span>
                                <h4>Kelvin Water Dropper</h4>
                                <p>Electrostatic generator.</p>
                            </a>
                        </div>
                    </div>

                    <div className="tbc-section">
                        <h3>To Be Continued...</h3>
                        <p>More interactive lessons are currently being developed.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
