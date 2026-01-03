import React, { useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
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
                        <Link to="/lesson/franklin" className="btn btn-primary">Begin Journey</Link>
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
                            <Link to="/lesson/franklin" className="lesson-card">
                                <span className="lesson-number">1.1</span>
                                <h4>Benjamin Franklin</h4>
                                <p>The invisible fluid theory.</p>
                            </Link>
                            <Link to="/lesson/scene2_thales" className="lesson-card">
                                <span className="lesson-number">1.2</span>
                                <h4>Thales of Miletus</h4>
                                <p>Ancient origins of electricity.</p>
                            </Link>
                            <Link to="/lesson/galvani" className="lesson-card">
                                <span className="lesson-number">1.3</span>
                                <h4>Luigi Galvani</h4>
                                <p>Animal electricity experiments.</p>
                            </Link>
                            <Link to="/lesson/metalinduction" className="lesson-card">
                                <span className="lesson-number">1.4</span>
                                <h4>Induction in Metals</h4>
                                <p>Free-flowing electrons.</p>
                            </Link>
                            <Link to="/lesson/polarizationinductors" className="lesson-card">
                                <span className="lesson-number">1.5</span>
                                <h4>Polarization</h4>
                                <p>Charge separation in insulators.</p>
                            </Link>
                            <Link to="/lesson/coulombs_law" className="lesson-card">
                                <span className="lesson-number">1.6</span>
                                <h4>Coulomb's Law</h4>
                                <p>Quantifying electric force.</p>
                            </Link>
                            <Link to="/lesson/triboelectric_effect_hair" className="lesson-card">
                                <span className="lesson-number">1.7</span>
                                <h4>Triboelectric Effect</h4>
                                <p>Charging by friction.</p>
                            </Link>
                        </div>
                    </div>

                    {/* Chapter 2 */}
                    <div className="chapter">
                        <div className="chapter-header">
                            <span className="chapter-number">02</span>
                            <h3>The Field</h3>
                        </div>
                        <div className="lesson-grid">
                            <Link to="/lesson/intro_to_electricfeld" className="lesson-card">
                                <span className="lesson-number">2.1</span>
                                <h4>Intro to Electric Fields</h4>
                                <p>Force without contact.</p>
                            </Link>
                            <Link to="/lesson/2_vector" className="lesson-card">
                                <span className="lesson-number">2.2</span>
                                <h4>Vector Fields</h4>
                                <p>Direction and magnitude.</p>
                            </Link>
                            <Link to="/lesson/vec_addition" className="lesson-card">
                                <span className="lesson-number">2.3</span>
                                <h4>Vector Addition</h4>
                                <p>Superposition principle.</p>
                            </Link>
                            <Link to="/lesson/3_asymptotic_behaviorr" className="lesson-card">
                                <span className="lesson-number">2.4</span>
                                <h4>Asymptotic Behavior</h4>
                                <p>Far-field approximations.</p>
                            </Link>
                            <Link to="/lesson/4_field_lines" className="lesson-card">
                                <span className="lesson-number">2.5</span>
                                <h4>Field Lines</h4>
                                <p>Visualizing field patterns.</p>
                            </Link>
                            <Link to="/lesson/5_misconception" className="lesson-card">
                                <span className="lesson-number">2.6</span>
                                <h4>Misconceptions</h4>
                                <p>Common misunderstandings.</p>
                            </Link>
                            <Link to="/lesson/6_dipole" className="lesson-card">
                                <span className="lesson-number">2.7</span>
                                <h4>Dipole</h4>
                                <p>Two opposite charges.</p>
                            </Link>
                            <Link to="/lesson/7_creating_a_dipole(induction)" className="lesson-card">
                                <span className="lesson-number">2.8</span>
                                <h4>Creating a Dipole</h4>
                                <p>Induced polarization.</p>
                            </Link>
                            <Link to="/lesson/8_dipole_on_vandegraff" className="lesson-card">
                                <span className="lesson-number">2.9</span>
                                <h4>Dipole on Van de Graaff</h4>
                                <p>Strong field effects.</p>
                            </Link>
                            <Link to="/lesson/9_dipole_on_grassfield" className="lesson-card">
                                <span className="lesson-number">2.10</span>
                                <h4>Dipole on Grass Field</h4>
                                <p>Natural demonstrations.</p>
                            </Link>
                            <Link to="/lesson/10_dipole" className="lesson-card">
                                <span className="lesson-number">2.11</span>
                                <h4>Dipole Water Stream</h4>
                                <p>Bending water with charge.</p>
                            </Link>
                        </div>
                    </div>

                    {/* Chapter 3 */}
                    <div className="chapter">
                        <div className="chapter-header">
                            <span className="chapter-number">03</span>
                            <h3>Gauss's Law</h3>
                        </div>
                        <div className="lesson-grid">
                            <Link to="/lesson/1_electric_flux" className="lesson-card">
                                <span className="lesson-number">3.1</span>
                                <h4>Electric Flux</h4>
                                <p>Field through surfaces.</p>
                            </Link>
                            <Link to="/lesson/2_flux" className="lesson-card">
                                <span className="lesson-number">3.2</span>
                                <h4>Flux & Surface</h4>
                                <p>Orientation matters.</p>
                            </Link>
                            <Link to="/lesson/3_flux_inside_sphere" className="lesson-card">
                                <span className="lesson-number">3.3</span>
                                <h4>Flux Inside Sphere</h4>
                                <p>Symmetry applications.</p>
                            </Link>
                            <Link to="/lesson/4_gauss_law" className="lesson-card">
                                <span className="lesson-number">3.4</span>
                                <h4>Gauss's Law</h4>
                                <p>Relating flux to charge.</p>
                            </Link>
                            <Link to="/lesson/5_infitnite_plane" className="lesson-card">
                                <span className="lesson-number">3.5</span>
                                <h4>Infinite Plane</h4>
                                <p>Uniform field from sheet.</p>
                            </Link>
                            <Link to="/lesson/6_parralel_plates" className="lesson-card">
                                <span className="lesson-number">3.6</span>
                                <h4>Parallel Plates</h4>
                                <p>Capacitor fundamentals.</p>
                            </Link>
                            <Link to="/lesson/7infinteplanevsspeherical" className="lesson-card">
                                <span className="lesson-number">3.7</span>
                                <h4>Plane vs Sphere</h4>
                                <p>Comparing geometries.</p>
                            </Link>
                            <Link to="/lesson/hollow_sphere" className="lesson-card">
                                <span className="lesson-number">3.8</span>
                                <h4>Hollow Sphere</h4>
                                <p>Shielding effects.</p>
                            </Link>
                        </div>
                    </div>

                    {/* Chapter 4 */}
                    <div className="chapter">
                        <div className="chapter-header">
                            <span className="chapter-number">04</span>
                            <h3>Work and Energy</h3>
                        </div>
                        <div className="lesson-grid">
                            <Link to="/lesson/chapter4/1" className="lesson-card">
                                <span className="lesson-number">4.1</span>
                                <h4>The Elastic Struggle</h4>
                                <p>Work against electric force.</p>
                            </Link>
                            <Link to="/lesson/chapter4/2" className="lesson-card">
                                <span className="lesson-number">4.2</span>
                                <h4>The Winding Path</h4>
                                <p>Path independence.</p>
                            </Link>
                            <Link to="/lesson/chapter4/3" className="lesson-card">
                                <span className="lesson-number">4.3</span>
                                <h4>Electric Potential</h4>
                                <p>Voltage fundamentals.</p>
                            </Link>
                            <Link to="/lesson/chapter4/4" className="lesson-card">
                                <span className="lesson-number">4.4</span>
                                <h4>Equipotential Surfaces</h4>
                                <p>Constant potential regions.</p>
                            </Link>
                        </div>
                    </div>

                    {/* Chapter 5 */}
                    <div className="chapter">
                        <div className="chapter-header">
                            <span className="chapter-number">05</span>
                            <h3>Electric Potential</h3>
                        </div>
                        <div className="lesson-grid">
                            <Link to="/lesson/1_conservative_forces" className="lesson-card">
                                <span className="lesson-number">5.1</span>
                                <h4>Conservative Forces</h4>
                                <p>Path independence of work.</p>
                            </Link>
                            <Link to="/lesson/2_field_from_potential" className="lesson-card">
                                <span className="lesson-number">5.2</span>
                                <h4>Field from Potential</h4>
                                <p>Deriving E from V.</p>
                            </Link>
                            <Link to="/lesson/3_equipotentials" className="lesson-card">
                                <span className="lesson-number">5.3</span>
                                <h4>Equipotentials</h4>
                                <p>Constant potential surfaces.</p>
                            </Link>
                            <Link to="/lesson/4_gradient" className="lesson-card">
                                <span className="lesson-number">5.4</span>
                                <h4>Gradient</h4>
                                <p>Vector calculus of potential.</p>
                            </Link>
                            <Link to="/lesson/5_parallel_plates" className="lesson-card">
                                <span className="lesson-number">5.5</span>
                                <h4>Parallel Plates</h4>
                                <p>Uniform electric field.</p>
                            </Link>
                            <Link to="/lesson/6_conductors" className="lesson-card">
                                <span className="lesson-number">5.6</span>
                                <h4>Conductors</h4>
                                <p>Equipotential objects.</p>
                            </Link>
                            <Link to="/lesson/7_hollow_conductor" className="lesson-card">
                                <span className="lesson-number">5.7</span>
                                <h4>Hollow Conductor</h4>
                                <p>Zero internal field.</p>
                            </Link>
                            <Link to="/lesson/8_farady_cage" className="lesson-card">
                                <span className="lesson-number">5.8</span>
                                <h4>Faraday Cage</h4>
                                <p>Electrostatic shielding.</p>
                            </Link>
                            <Link to="/lesson/9_shielding_appplications" className="lesson-card">
                                <span className="lesson-number">5.9</span>
                                <h4>Shielding Applications</h4>
                                <p>Real-world protection.</p>
                            </Link>
                            <Link to="/lesson/10_charge_dist_non_spherical" className="lesson-card">
                                <span className="lesson-number">5.10</span>
                                <h4>Non-Spherical Charge</h4>
                                <p>Complex geometries.</p>
                            </Link>
                        </div>
                    </div>

                    {/* Chapter 6 */}
                    <div className="chapter">
                        <div className="chapter-header">
                            <span className="chapter-number">06</span>
                            <h3>Capacitance</h3>
                        </div>
                        <div className="lesson-grid">
                            <Link to="/lesson/1_field_energy" className="lesson-card">
                                <span className="lesson-number">6.1</span>
                                <h4>Field Energy</h4>
                                <p>Energy stored in fields.</p>
                            </Link>
                            <Link to="/lesson/2_energy_density" className="lesson-card">
                                <span className="lesson-number">6.2</span>
                                <h4>Energy Density</h4>
                                <p>Energy per unit volume.</p>
                            </Link>
                            <Link to="/lesson/3_capacitance" className="lesson-card">
                                <span className="lesson-number">6.3</span>
                                <h4>Capacitance</h4>
                                <p>Charge storage ability.</p>
                            </Link>
                            <Link to="/lesson/4_capacitance_revised" className="lesson-card">
                                <span className="lesson-number">6.4</span>
                                <h4>Capacitance Revised</h4>
                                <p>Deeper understanding.</p>
                            </Link>
                            <Link to="/lesson/5_parrallel_plate" className="lesson-card">
                                <span className="lesson-number">6.5</span>
                                <h4>Parallel Plate</h4>
                                <p>Standard capacitor design.</p>
                            </Link>
                            <Link to="/lesson/6_energy_in_cap" className="lesson-card">
                                <span className="lesson-number">6.6</span>
                                <h4>Energy in Capacitor</h4>
                                <p>Stored energy calculations.</p>
                            </Link>
                            <Link to="/lesson/7_cylindrical_cap" className="lesson-card">
                                <span className="lesson-number">6.7</span>
                                <h4>Cylindrical Capacitor</h4>
                                <p>Alternative geometry.</p>
                            </Link>
                            <Link to="/lesson/8_flash" className="lesson-card">
                                <span className="lesson-number">6.8</span>
                                <h4>Camera Flash</h4>
                                <p>Rapid energy release.</p>
                            </Link>
                            <Link to="/lesson/chapter6/combined" className="lesson-card">
                                <span className="lesson-number">6.9</span>
                                <h4>Combined Capacitors</h4>
                                <p>Series and parallel.</p>
                            </Link>
                        </div>
                    </div>

                    {/* Chapter 7 */}
                    <div className="chapter">
                        <div className="chapter-header">
                            <span className="chapter-number">07</span>
                            <h3>Dielectrics</h3>
                        </div>
                        <div className="lesson-grid">
                            <Link to="/lesson/1_polarization_in_insulators" className="lesson-card">
                                <span className="lesson-number">7.1</span>
                                <h4>Polarization in Insulators</h4>
                                <p>Molecular alignment.</p>
                            </Link>
                            <Link to="/lesson/2_dielectric_constant" className="lesson-card">
                                <span className="lesson-number">7.2</span>
                                <h4>Dielectric Constant</h4>
                                <p>Material property.</p>
                            </Link>
                            <Link to="/lesson/3_gauss_law_dielectrics" className="lesson-card">
                                <span className="lesson-number">7.3</span>
                                <h4>Gauss's Law with Dielectrics</h4>
                                <p>Modified field equations.</p>
                            </Link>
                            <Link to="/lesson/4_experiments_disconnected" className="lesson-card">
                                <span className="lesson-number">7.4</span>
                                <h4>Disconnected Experiment</h4>
                                <p>Isolated capacitor test.</p>
                            </Link>
                            <Link to="/lesson/5_experiments_connected" className="lesson-card">
                                <span className="lesson-number">7.5</span>
                                <h4>Connected Experiment</h4>
                                <p>Battery-connected test.</p>
                            </Link>
                            <Link to="/lesson/6_dielectric_breakdown" className="lesson-card">
                                <span className="lesson-number">7.6</span>
                                <h4>Dielectric Breakdown</h4>
                                <p>Material failure limits.</p>
                            </Link>
                            <Link to="/lesson/7_energy_storage_mystery" className="lesson-card">
                                <span className="lesson-number">7.7</span>
                                <h4>Energy Storage Mystery</h4>
                                <p>Where does energy go?</p>
                            </Link>
                        </div>
                    </div>

                    {/* Chapter 8 */}
                    <div className="chapter">
                        <div className="chapter-header">
                            <span className="chapter-number">08</span>
                            <h3>Current & Resistance</h3>
                        </div>
                        <div className="lesson-grid">
                            <Link to="/lesson/1_current_convention" className="lesson-card">
                                <span className="lesson-number">8.1</span>
                                <h4>Current Convention</h4>
                                <p>Positive vs electron flow.</p>
                            </Link>
                            <Link to="/lesson/2_drift_velocity_snail" className="lesson-card">
                                <span className="lesson-number">8.2</span>
                                <h4>Drift Velocity</h4>
                                <p>Slow electron movement.</p>
                            </Link>
                            <Link to="/lesson/3_microscopic_ohms_law" className="lesson-card">
                                <span className="lesson-number">8.3</span>
                                <h4>Microscopic Ohm's Law</h4>
                                <p>J = σE relationship.</p>
                            </Link>
                            <Link to="/lesson/4_geometry_of_resistance" className="lesson-card">
                                <span className="lesson-number">8.4</span>
                                <h4>Geometry of Resistance</h4>
                                <p>Length and area effects.</p>
                            </Link>
                            <Link to="/lesson/5_materials_spectrum" className="lesson-card">
                                <span className="lesson-number">8.5</span>
                                <h4>Materials Spectrum</h4>
                                <p>Conductors to insulators.</p>
                            </Link>
                            <Link to="/lesson/6_the_birth_of_ohms_law" className="lesson-card">
                                <span className="lesson-number">8.6</span>
                                <h4>Birth of Ohm's Law</h4>
                                <p>Deriving V = IR.</p>
                            </Link>
                            <Link to="/lesson/7_light_bulb_breakdown" className="lesson-card">
                                <span className="lesson-number">8.7</span>
                                <h4>Light Bulb Breakdown</h4>
                                <p>Non-linear resistance.</p>
                            </Link>
                            <Link to="/lesson/8_thermal_chaos" className="lesson-card">
                                <span className="lesson-number">8.8</span>
                                <h4>Thermal Chaos</h4>
                                <p>Lattice vibrations.</p>
                            </Link>
                            <Link to="/lesson/9_series_parallel" className="lesson-card">
                                <span className="lesson-number">8.9</span>
                                <h4>Series & Parallel</h4>
                                <p>Combining resistors.</p>
                            </Link>
                            <Link to="/lesson/10_electric_power" className="lesson-card">
                                <span className="lesson-number">8.10</span>
                                <h4>Electric Power</h4>
                                <p>Energy dissipation rate.</p>
                            </Link>
                        </div>
                    </div>

                    {/* Chapter 9 */}
                    <div className="chapter">
                        <div className="chapter-header">
                            <span className="chapter-number">09</span>
                            <h3>EMF & Circuits</h3>
                        </div>
                        <div className="lesson-grid">
                            <Link to="/lesson/1_electric_pump" className="lesson-card">
                                <span className="lesson-number">9.1</span>
                                <h4>The Electric Pump</h4>
                                <p>Electromotive force concept.</p>
                            </Link>
                            <Link to="/lesson/2_chemical_battery" className="lesson-card">
                                <span className="lesson-number">9.2</span>
                                <h4>The Chemical Battery</h4>
                                <p>Zinc-copper cell.</p>
                            </Link>
                            <Link to="/lesson/3_internal_resistance" className="lesson-card">
                                <span className="lesson-number">9.3</span>
                                <h4>Internal Resistance</h4>
                                <p>Real battery limitations.</p>
                            </Link>
                            <Link to="/lesson/4_maximum_power" className="lesson-card">
                                <span className="lesson-number">9.4</span>
                                <h4>Maximum Power Transfer</h4>
                                <p>Impedance matching.</p>
                            </Link>
                            <Link to="/lesson/5_loop_rule" className="lesson-card">
                                <span className="lesson-number">9.5</span>
                                <h4>Kirchhoff's Loop Rule</h4>
                                <p>Voltage conservation.</p>
                            </Link>
                            <Link to="/lesson/6_junction_rule" className="lesson-card">
                                <span className="lesson-number">9.6</span>
                                <h4>Kirchhoff's Junction Rule</h4>
                                <p>Current conservation.</p>
                            </Link>
                            <Link to="/lesson/7_measuring_circuits" className="lesson-card">
                                <span className="lesson-number">9.7</span>
                                <h4>Measuring Circuits</h4>
                                <p>Voltmeters and ammeters.</p>
                            </Link>
                            <Link to="/lesson/8_household_power" className="lesson-card">
                                <span className="lesson-number">9.8</span>
                                <h4>Household Power</h4>
                                <p>Real-world applications.</p>
                            </Link>
                            <Link to="/lesson/9_kelvin_dropper" className="lesson-card">
                                <span className="lesson-number">9.9</span>
                                <h4>Kelvin Water Dropper</h4>
                                <p>Electrostatic generator.</p>
                            </Link>
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
