import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LessonWrapper from './pages/LessonWrapper';

function App() {
  return (
    <Router basename="/theapplefalls">
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* Chapter 1 Lessons */}
        <Route path="/lesson/franklin" element={<LessonWrapper src="/lessons/chapter1/Chapter1_Final/Franklin.html" />} />
        <Route path="/lesson/thales" element={<LessonWrapper src="/lessons/chapter1/Chapter1_Final/Scene2_thales.html" />} />
        <Route path="/lesson/galvani" element={<LessonWrapper src="/lessons/chapter1/Chapter1_Final/Galvani.html" />} />
        <Route path="/lesson/metal_induction" element={<LessonWrapper src="/lessons/chapter1/Chapter1_Final/MetalInduction.html" />} />
        <Route path="/lesson/polarization" element={<LessonWrapper src="/lessons/chapter1/Chapter1_Final/PolarizationInductors.html" />} />
        <Route path="/lesson/coulomb" element={<LessonWrapper src="/lessons/chapter1/Chapter1_Final/coulombs_law.html" />} />
        <Route path="/lesson/triboelectric" element={<LessonWrapper src="/lessons/chapter1/Chapter1_Final/triboelectric_effect_hair.html" />} />

        {/* Chapter 2 Lessons */}
        <Route path="/lesson/intro_field" element={<LessonWrapper src="/lessons/chapter2/intro_to_electricfeld.html" />} />
        <Route path="/lesson/vector" element={<LessonWrapper src="/lessons/chapter2/2_vector.html" />} />
        <Route path="/lesson/vec_addition" element={<LessonWrapper src="/lessons/chapter2/vec_addition.html" />} />
        <Route path="/lesson/asymptotic" element={<LessonWrapper src="/lessons/chapter2/3_asymptotic_behaviorr.html" />} />
        <Route path="/lesson/field_lines" element={<LessonWrapper src="/lessons/chapter2/4_field_lines.html" />} />
        <Route path="/lesson/misconception" element={<LessonWrapper src="/lessons/chapter2/5_misconception.html" />} />
        <Route path="/lesson/dipole" element={<LessonWrapper src="/lessons/chapter2/6_dipole.html" />} />
        <Route path="/lesson/dipole_induction" element={<LessonWrapper src="/lessons/chapter2/7_creating_a_dipole(induction).html" />} />
        <Route path="/lesson/dipole_vandegraaff" element={<LessonWrapper src="/lessons/chapter2/8_dipole_on_vandeGraff.html" />} />
        <Route path="/lesson/dipole_grassfield" element={<LessonWrapper src="/lessons/chapter2/9_dipole_on_grassfield.html" />} />
        <Route path="/lesson/dipole_water" element={<LessonWrapper src="/lessons/chapter2/10_dipole.html" />} />

        {/* Chapter 3 Lessons */}
        <Route path="/lesson/flux" element={<LessonWrapper src="/lessons/chapter3/1_electric_flux.html" />} />
        <Route path="/lesson/flux_surface" element={<LessonWrapper src="/lessons/chapter3/2_flux.html" />} />
        <Route path="/lesson/flux_sphere" element={<LessonWrapper src="/lessons/chapter3/3_flux_inside_sphere.html" />} />
        <Route path="/lesson/gauss_law" element={<LessonWrapper src="/lessons/chapter3/4_gauss_law.html" />} />
        <Route path="/lesson/infinite_plane" element={<LessonWrapper src="/lessons/chapter3/5_infitnite_plane.html" />} />
        <Route path="/lesson/parallel_plates" element={<LessonWrapper src="/lessons/chapter3/6_parralel_plates.html" />} />
        <Route path="/lesson/plane_vs_sphere" element={<LessonWrapper src="/lessons/chapter3/7infinteplanevsspeherical.html" />} />
        <Route path="/lesson/hollow_sphere" element={<LessonWrapper src="/lessons/chapter3/hollow_sphere.html" />} />

        {/* Chapter 4 Lessons */}
        <Route path="/lesson/chapter4/1" element={<LessonWrapper src="/lessons/chapter4/1.html" />} />
        <Route path="/lesson/chapter4/2" element={<LessonWrapper src="/lessons/chapter4/2.html" />} />
        <Route path="/lesson/chapter4/3" element={<LessonWrapper src="/lessons/chapter4/3.html" />} />
        <Route path="/lesson/chapter4/4" element={<LessonWrapper src="/lessons/chapter4/4.html" />} />

        {/* Chapter 5 Lessons */}
        <Route path="/lesson/chapter5/conservative_forces" element={<LessonWrapper src="/lessons/chapter5/1_conservative_forces.html" />} />
        <Route path="/lesson/chapter5/field_from_potential" element={<LessonWrapper src="/lessons/chapter5/2_field_from_potential.html" />} />
        <Route path="/lesson/chapter5/equipotentials" element={<LessonWrapper src="/lessons/chapter5/3_equipotentials.html" />} />
        <Route path="/lesson/chapter5/gradient" element={<LessonWrapper src="/lessons/chapter5/4_gradient.html" />} />
        <Route path="/lesson/chapter5/parallel_plates" element={<LessonWrapper src="/lessons/chapter5/5_parallel_plates.html" />} />
        <Route path="/lesson/chapter5/conductors" element={<LessonWrapper src="/lessons/chapter5/6_conductors.html" />} />
        <Route path="/lesson/chapter5/hollow_conductor" element={<LessonWrapper src="/lessons/chapter5/7_hollow_conductor.html" />} />
        <Route path="/lesson/chapter5/faraday_cage" element={<LessonWrapper src="/lessons/chapter5/8_farady_cage.html" />} />
        <Route path="/lesson/chapter5/shielding" element={<LessonWrapper src="/lessons/chapter5/9_shielding_appplications.html" />} />
        <Route path="/lesson/chapter5/non_spherical" element={<LessonWrapper src="/lessons/chapter5/10_charge_dist_non_spherical.html" />} />

        {/* Chapter 6 Lessons */}
        <Route path="/lesson/chapter6/field_energy" element={<LessonWrapper src="/lessons/chapter6/1_field_energy.html" />} />
        <Route path="/lesson/chapter6/energy_density" element={<LessonWrapper src="/lessons/chapter6/2_Energy_Density.html" />} />
        <Route path="/lesson/chapter6/capacitance" element={<LessonWrapper src="/lessons/chapter6/3_Capacitance.html" />} />
        <Route path="/lesson/chapter6/capacitance_revised" element={<LessonWrapper src="/lessons/chapter6/4_capacitance_revised.html" />} />
        <Route path="/lesson/chapter6/parallel_plate" element={<LessonWrapper src="/lessons/chapter6/5_parrallel_plate.html" />} />
        <Route path="/lesson/chapter6/energy_in_cap" element={<LessonWrapper src="/lessons/chapter6/6_energy_in_cap.html" />} />
        <Route path="/lesson/chapter6/cylindrical_cap" element={<LessonWrapper src="/lessons/chapter6/7_cylindrical_cap.html" />} />
        <Route path="/lesson/chapter6/flash" element={<LessonWrapper src="/lessons/chapter6/8_flash.html" />} />
        <Route path="/lesson/chapter6/combined" element={<LessonWrapper src="/lessons/chapter6/combined.html" />} />

        {/* Chapter 7 Lessons */}
        <Route path="/lesson/chapter7/polarization_insulators" element={<LessonWrapper src="/lessons/chapter7/1_polarization_in_insulators.html" />} />
        <Route path="/lesson/chapter7/dielectric_constant" element={<LessonWrapper src="/lessons/chapter7/2_dielectric_constant.html" />} />
        <Route path="/lesson/chapter7/gauss_law_dielectrics" element={<LessonWrapper src="/lessons/chapter7/3_gauss_law_dielectrics.html" />} />
        <Route path="/lesson/chapter7/experiment_disconnected" element={<LessonWrapper src="/lessons/chapter7/4_experiments_disconnected.html" />} />
        <Route path="/lesson/chapter7/experiment_connected" element={<LessonWrapper src="/lessons/chapter7/5_experiments_connected.html" />} />
        <Route path="/lesson/chapter7/dielectric_breakdown" element={<LessonWrapper src="/lessons/chapter7/6_dielectric_breakdown.html" />} />
        <Route path="/lesson/chapter7/energy_storage_mystery" element={<LessonWrapper src="/lessons/chapter7/7_energy_storage_mystery.html" />} />

        {/* Chapter 8 Lessons */}
        <Route path="/lesson/chapter8/current_convention" element={<LessonWrapper src="/lessons/chapter8/1_current_convention.html" />} />
        <Route path="/lesson/chapter8/drift_velocity" element={<LessonWrapper src="/lessons/chapter8/2_drift_velocity_snail.html" />} />
        <Route path="/lesson/chapter8/microscopic_ohms_law" element={<LessonWrapper src="/lessons/chapter8/3_microscopic_ohms_law.html" />} />
        <Route path="/lesson/chapter8/geometry_resistance" element={<LessonWrapper src="/lessons/chapter8/4_geometry_of_resistance.html" />} />
        <Route path="/lesson/chapter8/materials_spectrum" element={<LessonWrapper src="/lessons/chapter8/5_materials_spectrum.html" />} />
        <Route path="/lesson/chapter8/birth_of_ohms_law" element={<LessonWrapper src="/lessons/chapter8/6_the_birth_of_ohms_law.html" />} />
        <Route path="/lesson/chapter8/light_bulb" element={<LessonWrapper src="/lessons/chapter8/7_light_bulb_breakdown.html" />} />
        <Route path="/lesson/chapter8/thermal_chaos" element={<LessonWrapper src="/lessons/chapter8/8_thermal_chaos.html" />} />
        <Route path="/lesson/chapter8/series_parallel" element={<LessonWrapper src="/lessons/chapter8/9_series_parallel.html" />} />
        <Route path="/lesson/chapter8/electric_power" element={<LessonWrapper src="/lessons/chapter8/10_electric_power.html" />} />

        {/* Chapter 9 Lessons */}
        <Route path="/lesson/chapter9/electric_pump" element={<LessonWrapper src="/lessons/chapter9/1_electric_pump.html" />} />
        <Route path="/lesson/chapter9/chemical_battery" element={<LessonWrapper src="/lessons/chapter9/2_chemical_battery.html" />} />
        <Route path="/lesson/chapter9/internal_resistance" element={<LessonWrapper src="/lessons/chapter9/3_internal_resistance.html" />} />
        <Route path="/lesson/chapter9/maximum_power" element={<LessonWrapper src="/lessons/chapter9/4_maximum_power.html" />} />
        <Route path="/lesson/chapter9/loop_rule" element={<LessonWrapper src="/lessons/chapter9/5_loop_rule.html" />} />
        <Route path="/lesson/chapter9/junction_rule" element={<LessonWrapper src="/lessons/chapter9/6_junction_rule.html" />} />
        <Route path="/lesson/chapter9/measuring_circuits" element={<LessonWrapper src="/lessons/chapter9/7_measuring_circuits.html" />} />
        <Route path="/lesson/chapter9/household_power" element={<LessonWrapper src="/lessons/chapter9/8_household_power.html" />} />
        <Route path="/lesson/chapter9/kelvin_dropper" element={<LessonWrapper src="/lessons/chapter9/9_kelvin_dropper.html" />} />

        {/* Sandbox */}
        <Route path="/sandbox" element={<LessonWrapper src="/lessons/sandbox/circuit_simulator.html" />} />
      </Routes>
    </Router>
  );
}

export default App;
