const {
 Field,
 loadAmp,
 loadMW,
 Mvar,
 powerFactor,
 voltAfterTrafo,
 voltBeforeTrafo,
 kw_hours,
 genTrafo,
 rect_trafo_liquid_temp,
 visual_check,
 tbl_dsp,
 tbl_gasflow,
 tbl_lube_oil_temp,
 tbl_turbinspeed,
 tbl_vce,
 tbl_lubeoil_bearingtemperature,
 tbl_hvdoil_press,
 tbl_hvdtrip_circuitpress,
 tbl_lubeoil_press,
 tbl_lubeoil_tanktemp,
 tbl_firststage_wheelspace,
 tbl_second_wheelspace,
 tbl_comp_temp,
 tbl_fuel_temp,
 tbl_exhaust_flue_gas_temperature,
 tbl_exhaust_temp,
 tbl_fuelgas_press,
 tbl_compdisch_airpress,
 tbl_diffpress,
 tbl_cooling_water,
 tbl_bently_vibr_unfilter,
 tbl_seismic_vibration,
 tbl_form01,
 tbl_form02,
 tbl_form03,
 tbl_form04,
 tbl_form05,
 tbl_form06,
 tbl_form07,
 tbl_form08,
 tbl_signatureform,
 tbl_user_signature,
 tbl_report,
 tbl_historyDate,
 tbl_historyReport,
} = require("../../models");

module.exports = {
 index: async (req, res) => {
  try {
   await tbl_historyDate.destroy({
    truncate: true,
   });
   await tbl_historyReport.destroy({
    truncate: true,
   });
   await tbl_report.destroy({
    truncate: true,
   });
   await Field.destroy({
    truncate: true,
   });
   await loadAmp.destroy({
    truncate: true,
   });
   await loadMW.destroy({
    truncate: true,
   });
   await Mvar.destroy({
    truncate: true,
   });
   await powerFactor.destroy({
    truncate: true,
   });
   await voltAfterTrafo.destroy({
    truncate: true,
   });
   await voltBeforeTrafo.destroy({
    truncate: true,
   });
   await kw_hours.destroy({
    truncate: true,
   });
   await genTrafo.destroy({
    truncate: true,
   });
   await rect_trafo_liquid_temp.destroy({
    truncate: true,
   });
   await visual_check.destroy({
    truncate: true,
   });

   //
   await tbl_dsp.destroy({
    truncate: true,
   });
   await tbl_gasflow.destroy({
    truncate: true,
   });
   await tbl_lube_oil_temp.destroy({
    truncate: true,
   });
   await tbl_turbinspeed.destroy({
    truncate: true,
   });
   await tbl_vce.destroy({
    truncate: true,
   });

   await tbl_lubeoil_bearingtemperature.destroy({
    truncate: true,
   });
   await tbl_hvdoil_press.destroy({
    truncate: true,
   });
   await tbl_hvdtrip_circuitpress.destroy({
    truncate: true,
   });
   await tbl_lubeoil_press.destroy({
    truncate: true,
   });
   await tbl_lubeoil_tanktemp.destroy({
    truncate: true,
   });
   await tbl_firststage_wheelspace.destroy({
    truncate: true,
   });
   await tbl_second_wheelspace.destroy({
    truncate: true,
   });
   await tbl_comp_temp.destroy({
    truncate: true,
   });
   await tbl_fuel_temp.destroy({
    truncate: true,
   });

   await tbl_exhaust_flue_gas_temperature.destroy({
    truncate: true,
   });
   await tbl_exhaust_temp.destroy({
    truncate: true,
   });
   await tbl_fuelgas_press.destroy({
    truncate: true,
   });
   await tbl_compdisch_airpress.destroy({
    truncate: true,
   });
   await tbl_diffpress.destroy({
    truncate: true,
   });
   await tbl_cooling_water.destroy({
    truncate: true,
   });
   await tbl_bently_vibr_unfilter.destroy({
    truncate: true,
   });
   await tbl_seismic_vibration.destroy({
    truncate: true,
   });
   //
   await tbl_form01.destroy({
    truncate: true,
   });
   await tbl_form02.destroy({
    truncate: true,
   });
   await tbl_form03.destroy({
    truncate: true,
   });
   await tbl_form04.destroy({
    truncate: true,
   });
   await tbl_form05.destroy({
    truncate: true,
   });
   await tbl_form06.destroy({
    truncate: true,
   });
   await tbl_form07.destroy({
    truncate: true,
   });
   await tbl_form08.destroy({
    truncate: true,
   });
   await tbl_signatureform.destroy({
    truncate: true,
   });
   await tbl_user_signature.destroy({
    truncate: true,
   });

   res.status(200).json("success delete");
  } catch (error) {
   res.status(500).json({ msg: error.message });
  }
 },
};
