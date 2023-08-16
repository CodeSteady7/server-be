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
  tbl_jam,
} = require("../../models");

const temp_ = async (queryDate) => {
  const dt_clock = await tbl_jam.findAll();
  let temp = [];
  for (let i = 0; i < dt_clock.length; i++) {
    let get_field = await Field.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });
    let get_loadamp = await loadAmp.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });
    let get_loadmw = await loadMW.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });
    let get_mvar = await Mvar.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });
    let get_powerfactor = await powerFactor.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });
    let get_voltAfterTrafo = await voltAfterTrafo.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });
    let get_voltBeforeTrafo = await voltBeforeTrafo.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });
    let get_kw_hours = await kw_hours.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });
    let get_genTrafo = await genTrafo.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });
    let get_rect_trafo_liquid_temp = await rect_trafo_liquid_temp.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });
    let get_visual_check = await visual_check.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });

    //
    let get_tbl_dsp = await tbl_dsp.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });
    let get_tbl_gasflow = await tbl_gasflow.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });
    let get_tbl_lube_oil_temp = await tbl_lube_oil_temp.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });
    let get_tbl_turbinspeed = await tbl_turbinspeed.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });
    let get_tbl_vce = await tbl_vce.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });
    let get_tbl_lubeoil_bearingtemperature =
      await tbl_lubeoil_bearingtemperature.findAll({
        where: {
          createdAt: `${queryDate}`,
          kode_jam: `${dt_clock[i].nilai_jam}`,
        },
      });
    let get_tbl_hvdoil_press = await tbl_hvdoil_press.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });
    let get_tbl_hvdtrip_circuitpress = await tbl_hvdtrip_circuitpress.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });
    let get_tbl_lubeoil_press = await tbl_lubeoil_press.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });
    let get_tbl_lubeoil_tanktemp = await tbl_lubeoil_tanktemp.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });
    let get_tbl_firststage_wheelspace = await tbl_firststage_wheelspace.findAll(
      {
        where: {
          createdAt: `${queryDate}`,
          kode_jam: `${dt_clock[i].nilai_jam}`,
        },
      }
    );
    let get_tbl_second_wheelspace = await tbl_second_wheelspace.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });
    let get_tbl_comp_temp = await tbl_comp_temp.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });
    let get_tbl_fuel_temp = await tbl_fuel_temp.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });
    let get_tbl_exhaust_flue_gas_temperature =
      await tbl_exhaust_flue_gas_temperature.findAll({
        where: {
          createdAt: `${queryDate}`,
          kode_jam: `${dt_clock[i].nilai_jam}`,
        },
      });
    let get_tbl_exhaust_temp = await tbl_exhaust_temp.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });
    let get_tbl_fuelgas_press = await tbl_fuelgas_press.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });
    let get_tbl_compdisch_airpress = await tbl_compdisch_airpress.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });
    let get_tbl_diffpress = await tbl_diffpress.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });
    let get_tbl_cooling_water = await tbl_cooling_water.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });
    let get_tbl_bently_vibr_unfilter = await tbl_bently_vibr_unfilter.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });
    let get_tbl_seismic_vibration = await tbl_seismic_vibration.findAll({
      where: {
        createdAt: `${queryDate}`,
        kode_jam: `${dt_clock[i].nilai_jam}`,
      },
    });

    temp.push({
      clock: dt_clock[i].nilai_jam,
      value: {
        get_field,
        get_loadamp,
        get_loadmw,
        get_mvar,
        get_powerfactor,
        get_voltAfterTrafo,
        get_voltBeforeTrafo,
        get_kw_hours,
        get_genTrafo,
        get_rect_trafo_liquid_temp,
        get_visual_check,
        get_tbl_dsp,
        get_tbl_gasflow,
        get_tbl_lube_oil_temp,
        get_tbl_turbinspeed,
        get_tbl_vce,
        get_tbl_lubeoil_bearingtemperature,
        get_tbl_hvdoil_press,
        get_tbl_hvdtrip_circuitpress,
        get_tbl_lubeoil_press,
        get_tbl_lubeoil_tanktemp,
        get_tbl_firststage_wheelspace,
        get_tbl_second_wheelspace,
        get_tbl_comp_temp,
        get_tbl_fuel_temp,
        get_tbl_exhaust_flue_gas_temperature,
        get_tbl_exhaust_temp,
        get_tbl_fuelgas_press,
        get_tbl_compdisch_airpress,
        get_tbl_diffpress,
        get_tbl_cooling_water,
        get_tbl_bently_vibr_unfilter,
        get_tbl_seismic_vibration,
      },
    });
  }
  // console.log("object => ", temp);
  return temp;
};

module.exports = { temp_ };
