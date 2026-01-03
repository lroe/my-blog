import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LessonWrapper from './pages/LessonWrapper';

function App() {
  return (
    <Router basename="/theapplefalls">
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/lesson/10_charge_dist_non_spherical" element={<LessonWrapper src="/theapplefalls/lessons/chapter5/10_charge_dist_non_spherical.html" />} />
        <Route path="/lesson/10_dipole" element={<LessonWrapper src="/theapplefalls/lessons/chapter2/10_dipole.html" />} />
        <Route path="/lesson/10_electric_power" element={<LessonWrapper src="/theapplefalls/lessons/chapter8/10_electric_power.html" />} />
        <Route path="/lesson/1_conservative_forces" element={<LessonWrapper src="/theapplefalls/lessons/chapter5/1_conservative_forces.html" />} />
        <Route path="/lesson/1_current_convention" element={<LessonWrapper src="/theapplefalls/lessons/chapter8/1_current_convention.html" />} />
        <Route path="/lesson/1_electric_flux" element={<LessonWrapper src="/theapplefalls/lessons/chapter3/1_electric_flux.html" />} />
        <Route path="/lesson/1_electric_pump" element={<LessonWrapper src="/theapplefalls/lessons/chapter9/1_electric_pump.html" />} />
        <Route path="/lesson/1_field_energy" element={<LessonWrapper src="/theapplefalls/lessons/chapter6/1_field_energy.html" />} />
        <Route path="/lesson/1_polarization_in_insulators" element={<LessonWrapper src="/theapplefalls/lessons/chapter7/1_polarization_in_insulators.html" />} />
        <Route path="/lesson/2_chemical_battery" element={<LessonWrapper src="/theapplefalls/lessons/chapter9/2_chemical_battery.html" />} />
        <Route path="/lesson/2_dielectric_constant" element={<LessonWrapper src="/theapplefalls/lessons/chapter7/2_dielectric_constant.html" />} />
        <Route path="/lesson/2_drift_velocity_snail" element={<LessonWrapper src="/theapplefalls/lessons/chapter8/2_drift_velocity_snail.html" />} />
        <Route path="/lesson/2_energy_density" element={<LessonWrapper src="/theapplefalls/lessons/chapter6/2_Energy_Density.html" />} />
        <Route path="/lesson/2_field_from_potential" element={<LessonWrapper src="/theapplefalls/lessons/chapter5/2_field_from_potential.html" />} />
        <Route path="/lesson/2_flux" element={<LessonWrapper src="/theapplefalls/lessons/chapter3/2_flux.html" />} />
        <Route path="/lesson/2_vector" element={<LessonWrapper src="/theapplefalls/lessons/chapter2/2_vector.html" />} />
        <Route path="/lesson/3_asymptotic_behaviorr" element={<LessonWrapper src="/theapplefalls/lessons/chapter2/3_asymptotic_behaviorr.html" />} />
        <Route path="/lesson/3_capacitance" element={<LessonWrapper src="/theapplefalls/lessons/chapter6/3_Capacitance.html" />} />
        <Route path="/lesson/3_equipotentials" element={<LessonWrapper src="/theapplefalls/lessons/chapter5/3_equipotentials.html" />} />
        <Route path="/lesson/3_flux_inside_sphere" element={<LessonWrapper src="/theapplefalls/lessons/chapter3/3_flux_inside_sphere.html" />} />
        <Route path="/lesson/3_gauss_law_dielectrics" element={<LessonWrapper src="/theapplefalls/lessons/chapter7/3_gauss_law_dielectrics.html" />} />
        <Route path="/lesson/3_internal_resistance" element={<LessonWrapper src="/theapplefalls/lessons/chapter9/3_internal_resistance.html" />} />
        <Route path="/lesson/3_microscopic_ohms_law" element={<LessonWrapper src="/theapplefalls/lessons/chapter8/3_microscopic_ohms_law.html" />} />
        <Route path="/lesson/4_capacitance_revised" element={<LessonWrapper src="/theapplefalls/lessons/chapter6/4_capacitance_revised.html" />} />
        <Route path="/lesson/4_experiments_disconnected" element={<LessonWrapper src="/theapplefalls/lessons/chapter7/4_experiments_disconnected.html" />} />
        <Route path="/lesson/4_field_lines" element={<LessonWrapper src="/theapplefalls/lessons/chapter2/4_field_lines.html" />} />
        <Route path="/lesson/4_gauss_law" element={<LessonWrapper src="/theapplefalls/lessons/chapter3/4_gauss_law.html" />} />
        <Route path="/lesson/4_geometry_of_resistance" element={<LessonWrapper src="/theapplefalls/lessons/chapter8/4_geometry_of_resistance.html" />} />
        <Route path="/lesson/4_gradient" element={<LessonWrapper src="/theapplefalls/lessons/chapter5/4_gradient.html" />} />
        <Route path="/lesson/4_maximum_power" element={<LessonWrapper src="/theapplefalls/lessons/chapter9/4_maximum_power.html" />} />
        <Route path="/lesson/5_experiments_connected" element={<LessonWrapper src="/theapplefalls/lessons/chapter7/5_experiments_connected.html" />} />
        <Route path="/lesson/5_infitnite_plane" element={<LessonWrapper src="/theapplefalls/lessons/chapter3/5_infitnite_plane.html" />} />
        <Route path="/lesson/5_loop_rule" element={<LessonWrapper src="/theapplefalls/lessons/chapter9/5_loop_rule.html" />} />
        <Route path="/lesson/5_materials_spectrum" element={<LessonWrapper src="/theapplefalls/lessons/chapter8/5_materials_spectrum.html" />} />
        <Route path="/lesson/5_misconception" element={<LessonWrapper src="/theapplefalls/lessons/chapter2/5_misconception.html" />} />
        <Route path="/lesson/5_parallel_plates" element={<LessonWrapper src="/theapplefalls/lessons/chapter5/5_parallel_plates.html" />} />
        <Route path="/lesson/5_parrallel_plate" element={<LessonWrapper src="/theapplefalls/lessons/chapter6/5_parrallel_plate.html" />} />
        <Route path="/lesson/6_conductors" element={<LessonWrapper src="/theapplefalls/lessons/chapter5/6_conductors.html" />} />
        <Route path="/lesson/6_dielectric_breakdown" element={<LessonWrapper src="/theapplefalls/lessons/chapter7/6_dielectric_breakdown.html" />} />
        <Route path="/lesson/6_dipole" element={<LessonWrapper src="/theapplefalls/lessons/chapter2/6_dipole.html" />} />
        <Route path="/lesson/6_energy_in_cap" element={<LessonWrapper src="/theapplefalls/lessons/chapter6/6_energy_in_cap.html" />} />
        <Route path="/lesson/6_junction_rule" element={<LessonWrapper src="/theapplefalls/lessons/chapter9/6_junction_rule.html" />} />
        <Route path="/lesson/6_parralel_plates" element={<LessonWrapper src="/theapplefalls/lessons/chapter3/6_parralel_plates.html" />} />
        <Route path="/lesson/6_the_birth_of_ohms_law" element={<LessonWrapper src="/theapplefalls/lessons/chapter8/6_the_birth_of_ohms_law.html" />} />
        <Route path="/lesson/7_creating_a_dipole(induction)" element={<LessonWrapper src="/theapplefalls/lessons/chapter2/7_creating_a_dipole(induction).html" />} />
        <Route path="/lesson/7_cylindrical_cap" element={<LessonWrapper src="/theapplefalls/lessons/chapter6/7_cylindrical_cap.html" />} />
        <Route path="/lesson/7_energy_storage_mystery" element={<LessonWrapper src="/theapplefalls/lessons/chapter7/7_energy_storage_mystery.html" />} />
        <Route path="/lesson/7_hollow_conductor" element={<LessonWrapper src="/theapplefalls/lessons/chapter5/7_hollow_conductor.html" />} />
        <Route path="/lesson/7_light_bulb_breakdown" element={<LessonWrapper src="/theapplefalls/lessons/chapter8/7_light_bulb_breakdown.html" />} />
        <Route path="/lesson/7_measuring_circuits" element={<LessonWrapper src="/theapplefalls/lessons/chapter9/7_measuring_circuits.html" />} />
        <Route path="/lesson/7infinteplanevsspeherical" element={<LessonWrapper src="/theapplefalls/lessons/chapter3/7infinteplanevsspeherical.html" />} />
        <Route path="/lesson/8_dipole_on_vandegraff" element={<LessonWrapper src="/theapplefalls/lessons/chapter2/8_dipole_on_vandeGraff.html" />} />
        <Route path="/lesson/8_farady_cage" element={<LessonWrapper src="/theapplefalls/lessons/chapter5/8_farady_cage.html" />} />
        <Route path="/lesson/8_flash" element={<LessonWrapper src="/theapplefalls/lessons/chapter6/8_flash.html" />} />
        <Route path="/lesson/8_household_power" element={<LessonWrapper src="/theapplefalls/lessons/chapter9/8_household_power.html" />} />
        <Route path="/lesson/8_thermal_chaos" element={<LessonWrapper src="/theapplefalls/lessons/chapter8/8_thermal_chaos.html" />} />
        <Route path="/lesson/9_dipole_on_grassfield" element={<LessonWrapper src="/theapplefalls/lessons/chapter2/9_dipole_on_grassfield.html" />} />
        <Route path="/lesson/9_kelvin_dropper" element={<LessonWrapper src="/theapplefalls/lessons/chapter9/9_kelvin_dropper.html" />} />
        <Route path="/lesson/9_series_parallel" element={<LessonWrapper src="/theapplefalls/lessons/chapter8/9_series_parallel.html" />} />
        <Route path="/lesson/9_shielding_appplications" element={<LessonWrapper src="/theapplefalls/lessons/chapter5/9_shielding_appplications.html" />} />
        <Route path="/lesson/chapter4/1" element={<LessonWrapper src="/theapplefalls/lessons/chapter4/1.html" />} />
        <Route path="/lesson/chapter4/2" element={<LessonWrapper src="/theapplefalls/lessons/chapter4/2.html" />} />
        <Route path="/lesson/chapter4/3" element={<LessonWrapper src="/theapplefalls/lessons/chapter4/3.html" />} />
        <Route path="/lesson/chapter4/4" element={<LessonWrapper src="/theapplefalls/lessons/chapter4/4.html" />} />
        <Route path="/lesson/chapter6/combined" element={<LessonWrapper src="/theapplefalls/lessons/chapter6/combined.html" />} />
        <Route path="/lesson/chapter8/combined" element={<LessonWrapper src="/theapplefalls/lessons/chapter8/combined.html" />} />
        <Route path="/lesson/coulombs_law" element={<LessonWrapper src="/theapplefalls/lessons/chapter1/Chapter1_Final/coulombs_law.html" />} />
        <Route path="/lesson/franklin" element={<LessonWrapper src="/theapplefalls/lessons/chapter1/Chapter1_Final/Franklin.html" />} />
        <Route path="/lesson/galaxy_landing" element={<LessonWrapper src="/theapplefalls/lessons/chapter2/galaxy_landing.html" />} />
        <Route path="/lesson/galvani" element={<LessonWrapper src="/theapplefalls/lessons/chapter1/Chapter1_Final/Galvani.html" />} />
        <Route path="/lesson/hollow_sphere" element={<LessonWrapper src="/theapplefalls/lessons/chapter3/hollow_sphere.html" />} />
        <Route path="/lesson/intro_to_electricfeld" element={<LessonWrapper src="/theapplefalls/lessons/chapter2/intro_to_electricfeld.html" />} />
        <Route path="/lesson/landing_page" element={<LessonWrapper src="/theapplefalls/lessons/landing_page/landing_page.html" />} />
        <Route path="/lesson/metalinduction" element={<LessonWrapper src="/theapplefalls/lessons/chapter1/Chapter1_Final/MetalInduction.html" />} />
        <Route path="/lesson/polarizationinductors" element={<LessonWrapper src="/theapplefalls/lessons/chapter1/Chapter1_Final/PolarizationInductors.html" />} />
        <Route path="/lesson/scene2_thales" element={<LessonWrapper src="/theapplefalls/lessons/chapter1/Chapter1_Final/Scene2_thales.html" />} />
        <Route path="/lesson/triboelectric_effect_hair" element={<LessonWrapper src="/theapplefalls/lessons/chapter1/Chapter1_Final/triboelectric_effect_hair.html" />} />
        <Route path="/lesson/vec_addition" element={<LessonWrapper src="/theapplefalls/lessons/chapter2/vec_addition.html" />} />
        <Route path="/sandbox" element={<LessonWrapper src="/theapplefalls/lessons/sandbox/circuit_simulator.html" />} />
      </Routes>
    </Router>
  );
}

export default App;
