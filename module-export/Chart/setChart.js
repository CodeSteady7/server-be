export function myFunction() {
  return "testing";
}

export const setChartBar = async (
  value,
  setClock,
  setLabel_1,
  setValue_1,
  setLabel_2,
  setValue_2,
  setLabel_3,
  setValue_3
) => {
  if (value == 1) {
    let chartBar = {
      labels: setClock,
      datasets: [
        {
          label: `${setLabel_1}`,
          backgroundColor: "rgba(121, 193, 115, 0.8)",
          borderColor: "rgba(121, 193, 115, 1)",
          pointRadius: false,
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(60,141,188,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(60,141,188,1)",
          data: setValue_1,
        },
      ],
    };
    return chartBar;
  } else if (value == 2) {
    let chartBar = {
      labels: setClock,
      datasets: [
        {
          label: `${setLabel_1}`,
          backgroundColor: "rgba(60,141,188,0.9)",
          borderColor: "rgba(60,141,188,0.8)",
          pointRadius: false,
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(60,141,188,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(60,141,188,1)",
          data: setValue_1,
        },
        {
          label: `${setLabel_2}`,
          backgroundColor: "rgba(210, 214, 222, 1)",
          borderColor: "rgba(210, 214, 222, 1)",
          pointRadius: false,
          pointColor: "rgba(210, 214, 222, 1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: setValue_2,
        },
      ],
    };
    return chartBar;
  } else if (value == 3) {
    let chartBar = {
      labels: setClock,
      datasets: [
        {
          label: `${setLabel_1}`,
          backgroundColor: "rgba(60,141,188,0.9)",
          borderColor: "rgba(60,141,188,0.8)",
          pointRadius: false,
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(60,141,188,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(60,141,188,1)",
          data: setValue_1,
        },
        {
          label: `${setLabel_2}`,
          backgroundColor: "rgba(210, 214, 222, 1)",
          borderColor: "rgba(210, 214, 222, 1)",
          pointRadius: false,
          pointColor: "rgba(210, 214, 222, 1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: setValue_2,
        },
        {
          label: `${setLabel_3}`,
          backgroundColor: "rgba(210, 214, 222, 1)",
          borderColor: "rgba(210, 214, 222, 1)",
          pointRadius: false,
          pointColor: "rgba(210, 214, 222, 1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: setValue_3,
        },
      ],
    };
    return chartBar;
  }
};

export const setChartLine = async (
  setClock,
  setLabel_1,
  setValue_1,
  setLabel_2,
  setValue_2,
  setLabel_3,
  setValue_3
) => {
  let chartLine = {
    labels: setClock,
    datasets: [
      {
        label: `${setLabel_1}`,
        backgroundColor: "rgba(60,141,188,0.9)",
        borderColor: "rgba(60,141,188,0.8)",
        pointRadius: false,
        pointColor: "#3b8bba",
        pointStrokeColor: "rgba(60,141,188,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(60,141,188,1)",
        data: setValue_1,
      },
      {
        label: `${setLabel_2}`,
        backgroundColor: "rgba(210, 214, 222, 1)",
        borderColor: "rgba(210, 214, 222, 1)",
        pointRadius: false,
        pointColor: "rgba(210, 214, 222, 1)",
        pointStrokeColor: "#c1c7d1",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: setValue_2,
      },
      {
        label: `${setLabel_3}`,
        backgroundColor: "rgba(121, 193, 115, 0.8)",
        borderColor: "rgba(121, 193, 115, 0.8)",
        pointRadius: false,
        pointColor: "rgba(121, 193, 115, 0.8)",
        pointStrokeColor: "#c1c7d1",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: setValue_3,
      },
    ],
  };
  return chartLine;
};

export const setChartMultiLine = async (
  value,
  setClock,
  setLabel_1,
  setValue_1,
  setLabel_2,
  setValue_2,
  setLabel_3,
  setValue_3,
  setLabel_4,
  setValue_4,
  setLabel_5,
  setValue_5,
  setLabel_6,
  setValue_6,
  setLabel_7,
  setValue_7,
  setLabel_8,
  setValue_8,
  setLabel_9,
  setValue_9,
  setLabel_10,
  setValue_10,
  setLabel_11,
  setValue_11,
  setLabel_12,
  setValue_12,
  setLabel_13,
  setValue_13,
  setLabel_14,
  setValue_14,
  setLabel_15,
  setValue_15,
  setLabel_16,
  setValue_16,
  setNumber
) => {
  if (value == 4) {
    let chartLine = {
      labels: setClock,
      datasets: [
        {
          label: `${setLabel_1}`,
          backgroundColor: "rgba(60,141,188,0.9)",
          borderColor: "rgba(60,141,188,0.8)",
          pointRadius: false,
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(60,141,188,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(60,141,188,1)",
          data: setValue_1,
        },
        {
          label: `${setLabel_2}`,
          backgroundColor: "rgba(210, 214, 222, 1)",
          borderColor: "rgba(210, 214, 222, 1)",
          pointRadius: false,
          pointColor: "rgba(210, 214, 222, 1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: setValue_2,
        },
        {
          label: `${setLabel_3}`,
          backgroundColor: "rgba(121, 193, 115, 0.8)",
          borderColor: "rgba(121, 193, 115, 0.8)",
          pointRadius: false,
          pointColor: "rgba(121, 193, 115, 0.8)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: setValue_3,
        },
        {
          label: `${setLabel_4}`,
          backgroundColor: "rgba(242, 231, 55,0.9)",
          borderColor: "rgba(242, 231, 55,0.8)",
          pointRadius: false,
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(242, 231, 55,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(242, 231, 55,1)",
          data: setValue_4,
        },
      ],
    };
    return chartLine;
  } else if (value == 10) {
    let chartLine = {
      labels: setClock,
      datasets: [
        {
          label: `${setLabel_1}`,
          backgroundColor: "rgba(60,141,188,0.9)",
          borderColor: "rgba(60,141,188,0.8)",
          pointRadius: false,
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(60,141,188,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(60,141,188,1)",
          data: setValue_1,
        },
        {
          label: `${setLabel_2}`,
          backgroundColor: "rgba(210, 214, 222, 1)",
          borderColor: "rgba(210, 214, 222, 1)",
          pointRadius: false,
          pointColor: "rgba(210, 214, 222, 1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: setValue_2,
        },
        {
          label: `${setLabel_3}`,
          backgroundColor: "rgba(121, 193, 115, 0.8)",
          borderColor: "rgba(121, 193, 115, 0.8)",
          pointRadius: false,
          pointColor: "rgba(121, 193, 115, 0.8)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: setValue_3,
        },
        {
          label: `${setLabel_4}`,
          backgroundColor: "rgba(242, 231, 55,0.9)",
          borderColor: "rgba(242, 231, 55,0.8)",
          pointRadius: false,
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(242, 231, 55,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(242, 231, 55,1)",
          data: setValue_4,
        },
        {
          label: `${setLabel_5}`,
          backgroundColor: "rgba(242, 91, 55, 1)",
          borderColor: "rgba(242, 91, 55, 1)",
          pointRadius: false,
          pointColor: "rgba(242, 91, 55, 1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: setValue_5,
        },
        {
          label: `${setLabel_6}`,
          backgroundColor: "rgba(242, 165, 55,  0.8)",
          borderColor: "rgba(242, 165, 55,  0.8)",
          pointRadius: false,
          pointColor: "rgba(242, 165, 55,  0.8)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(242, 165, 55,  0.8)",
          data: setValue_6,
        },
        {
          label: `${setLabel_7}`,
          backgroundColor: "rgba(53, 36, 102,0.9)",
          borderColor: "rgba(53, 36, 102,0.8)",
          pointRadius: false,
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(53, 36, 102,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(53, 36, 102,0.8)",
          data: setValue_7,
        },
        {
          label: `${setLabel_8}`,
          backgroundColor: "rgba(37, 35, 41,  1)",
          borderColor: "rgba(37, 35, 41,  1)",
          pointRadius: false,
          pointColor: "rgba(37, 35, 41,  1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(37, 35, 41,  1)",
          data: setValue_8,
        },
        {
          label: `${setLabel_9}`,
          backgroundColor: "rgba(92, 12, 23, 0.8)",
          borderColor: "rgba(92, 12, 23, 0.8)",
          pointRadius: false,
          pointColor: "rgba(92, 12, 23, 0.8)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(92, 12, 23, 0.8)",
          data: setValue_9,
        },
        {
          label: `${setLabel_10}`,
          backgroundColor: "rgba(121, 193, 115, 0.8)",
          borderColor: "rgba(121, 193, 115, 0.8)",
          pointRadius: false,
          pointColor: "rgba(121, 193, 115, 0.8)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(121, 193, 115, 0.8)",
          data: setValue_10,
        },
        {
          label: `${setLabel_11}`,
          backgroundColor: "rgba(121, 193, 115, 0.8)",
          borderColor: "rgba(121, 193, 115, 0.8)",
          pointRadius: false,
          pointColor: "rgba(121, 193, 115, 0.8)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(121, 193, 115, 0.8)",
          data: setValue_11,
        },
        {
          label: `${setLabel_12}`,
          backgroundColor: "rgba(121, 193, 115, 0.8)",
          borderColor: "rgba(121, 193, 115, 0.8)",
          pointRadius: false,
          pointColor: "rgba(121, 193, 115, 0.8)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(121, 193, 115, 0.8)",
          data: setValue_12,
        },
        {
          label: `${setLabel_13}`,
          backgroundColor: "rgba(121, 193, 115, 0.8)",
          borderColor: "rgba(121, 193, 115, 0.8)",
          pointRadius: false,
          pointColor: "rgba(121, 193, 115, 0.8)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(121, 193, 115, 0.8)",
          data: setValue_13,
        },
        {
          label: `${setLabel_14}`,
          backgroundColor: "rgba(121, 193, 115, 0.8)",
          borderColor: "rgba(121, 193, 115, 0.8)",
          pointRadius: false,
          pointColor: "rgba(121, 193, 115, 0.8)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(121, 193, 115, 0.8)",
          data: setValue_14,
        },
        {
          label: `${setLabel_15}`,
          backgroundColor: "rgba(121, 193, 115, 0.8)",
          borderColor: "rgba(121, 193, 115, 0.8)",
          pointRadius: false,
          pointColor: "rgba(121, 193, 115, 0.8)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(121, 193, 115, 0.8)",
          data: setValue_15,
        },
        {
          label: `${setLabel_16}`,
          backgroundColor: "rgba(121, 193, 115, 0.8)",
          borderColor: "rgba(121, 193, 115, 0.8)",
          pointRadius: false,
          pointColor: "rgba(121, 193, 115, 0.8)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(121, 193, 115, 0.8)",
          data: setValue_16,
        },
      ],
    };
    return chartLine;
  }
};

export const setAreaChartOptions = async () => {
  let areaChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: true,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
          },
        },
      ],
    },
  };

  return areaChartOptions;
};

export const setModalChart = async (
  fieldChartData,
  fieldChartOptions,
  voltBefTrafoChartData,
  voltBefTrafoChartOptions,
  voltafterChartData,
  voltafterChartOptions,
  loadampChartData,
  loadampChartOptions,
  powerfactorChartData,
  powerfactorChartOptions,
  loadmwChartData,
  loadmwChartOptions,
  mvarChartData,
  mvarChartOptions,
  genTrafo_ChartData,
  genTrafoChartOptions,
  rectTrafoTempChartData,
  rectTrafoTempChartOptions,
  kwHoursChartData,
  kwHoursChartOptions,
  visualCheck_ChartData,
  visualCheckChartOptions,
  turbineSpeedChartData,
  turbineSpeedChartOptions,
  VCEChartData,
  VCEChartOptions,
  DSPChartData,
  DSPChartOptions,
  gasFlowChartData,
  gasFlowChartOptions,
  lubeOilTemp_ChartData,
  lubeOilTempChartOptions,
  lubeoilTankTempChartData,
  lubeoilTankTempChartOptions,
  lubeoilBearingTempChartData,
  lubeoilBearingTempChartOptions,
  hydTripCircuitPressChartData,
  hydTripCircuitPressChartOptions,
  hydOilPressChartData,
  hydOilPressChartOptions,
  lubeOilPress_ChartData,
  lubeOilPressChartOptions,
  secondWheelspace_ChartData,
  secondWheelspaceChartOptions,
  exhaustTempChart_ChartData,
  exhaustTempChartOptions,
  compTempChart_Data,
  compTempChartOptions,
  exhaustFuelGasTempChart_ChartData,
  exhaustFuelGasTempChartOptions,
  fuelTempChartData,
  fuelTempChartOptions,
  fuelGasPressChart_ChartData,
  fuelGasPressChartOptions,
  compDisch_AipressChart_Data,
  compDisch_AipressChartOptions,
  diffPressChart_ChartData,
  diffPressChartOptions,
  coolingWaterChartData,
  coolingWaterChartOptions,
  bentlyVibraUnFilterChart_ChartData,
  bentlyVibraUnFilterChartOptions,
  seismicVibration_ChartData,
  seismicVibrationChartOptions
) => {
  // Detail

  let getChart = document.getElementsByClassName("chart_id");
  let textModal = document.getElementsByClassName("textModal");
  let setTextModal = document.getElementById("setTextModal");
  let setModal = document.getElementById("modal_id");

  let setTitle = (index) => {
    let dataSet = textModal[index];
    return dataSet;
  };

  //
  for (let i = 0; i < getChart.length; i++) {
    getChart[i].addEventListener("click", (event) => {
      //
      let title = setTitle(i).innerHTML;

      history.pushState(null, null, `/charts?${event.target.id}2`);
      console.log("getChart[i]", event.target.id + `2`);
      let sPageURL = window.location.search.substring(1);

      setTextModal.innerHTML = title;
      setModal.innerHTML = `<div class="card-body">
                      <div class="chart">
                        <canvas
                          id=${sPageURL}
                          class="setCheckChart"
                          style="
                            min-height: 250px;
                            height: 250px;
                            max-height: 250px;
                            max-width: 100%;
                          "></canvas>
                      </div>
                    </div>`;

      // Modal Field

      let fieldChartCanvas2 =
        document.getElementById("barChart2")?.getContext("2d") ?? false;

      fieldChartCanvas2 == false
        ? ""
        : new Chart(fieldChartCanvas2, {
            type: "bar",
            data: fieldChartData,
            options: fieldChartOptions,
          });
      // ---

      // Modal Volt Before Chart
      let voltBefTrafoChartCanvas2 =
        document.getElementById("voltBeforeTrafoChart2")?.getContext("2d") ??
        false;

      voltBefTrafoChartCanvas2 == false
        ? ""
        : new Chart(voltBefTrafoChartCanvas2, {
            type: "bar",
            data: voltBefTrafoChartData,
            options: voltBefTrafoChartOptions,
          });
      // ---

      // Modal Volt After Chart
      let voltafterChartCanvas2 =
        document.getElementById("voltAfterTrafoChart2")?.getContext("2d") ??
        false;

      voltafterChartCanvas2 == false
        ? ""
        : new Chart(voltafterChartCanvas2, {
            type: "line",
            data: voltafterChartData,
            options: voltafterChartOptions,
          });
      //

      // Modal Load Amp Chart

      let loadampChartCanvas2 =
        document.getElementById("loadAmpChart2")?.getContext("2d") ?? false;

      loadampChartCanvas2 == false
        ? ""
        : new Chart(loadampChartCanvas2, {
            type: "line",
            data: loadampChartData,
            options: loadampChartOptions,
          });
      // ----

      // Modal Power Factor Chart
      let powerfactorChartCanvas2 =
        document.getElementById("powerfactorChart2")?.getContext("2d") ?? false;

      powerfactorChartCanvas2 == false
        ? ""
        : new Chart(powerfactorChartCanvas2, {
            type: "bar",
            data: powerfactorChartData,
            options: powerfactorChartOptions,
          });

      // ---

      // Modal Load MW Chart

      let loadmwChartCanvas2 =
        document.getElementById("loadmwChart2")?.getContext("2d") ?? false;

      loadmwChartCanvas2 == false
        ? ""
        : new Chart(loadmwChartCanvas2, {
            type: "bar",
            data: loadmwChartData,
            options: loadmwChartOptions,
          });
      // ---

      // Modal MVar Chart
      let mvarChartCanvas2 =
        document.getElementById("mvarChart2")?.getContext("2d") ?? false;

      mvarChartCanvas2 == false
        ? ""
        : new Chart(mvarChartCanvas2, {
            type: "bar",
            data: mvarChartData,
            options: mvarChartOptions,
          });
      // ---

      // Modal Gen Trafo Chart
      let genTrafoChartCanvas2 =
        document.getElementById("genTrafoChart2")?.getContext("2d") ?? false;

      genTrafoChartCanvas2 == false
        ? ""
        : new Chart(genTrafoChartCanvas2, {
            type: "line",
            data: genTrafo_ChartData,
            options: genTrafoChartOptions,
          });
      // ---

      // Modal RECT. TRAFO LIQUID TEMP.-

      let rectTrafoTempChartCanvas2 =
        document.getElementById("rectTrafoTempChart2")?.getContext("2d") ??
        false;

      rectTrafoTempChartCanvas2 == false
        ? ""
        : new Chart(rectTrafoTempChartCanvas2, {
            type: "bar",
            data: rectTrafoTempChartData,
            options: rectTrafoTempChartOptions,
          });
      // ---

      // Modal KW Hours

      let kwHoursChartCanvas2 =
        document.getElementById("kwHoursChart2")?.getContext("2d") ?? false;

      kwHoursChartCanvas2 == false
        ? ""
        : new Chart(kwHoursChartCanvas2, {
            type: "bar",
            data: kwHoursChartData,
            options: kwHoursChartOptions,
          });
      // ---

      // Modal Visual Check
      let visualCheckChartCanvas2 =
        document.getElementById("visualCheckChart2")?.getContext("2d") ?? false;

      visualCheckChartCanvas2 == false
        ? ""
        : new Chart(visualCheckChartCanvas2, {
            type: "line",
            data: visualCheck_ChartData,
            options: visualCheckChartOptions,
          });
      // ----

      // Modal Visual Check
      let turbineSpeedChartCanvas2 =
        document.getElementById("turbineSpeedChart2")?.getContext("2d") ??
        false;

      turbineSpeedChartCanvas2 == false
        ? ""
        : new Chart(turbineSpeedChartCanvas2, {
            type: "bar",
            data: turbineSpeedChartData,
            options: turbineSpeedChartOptions,
          });
      // ----

      // Modal VCE
      let VCEChartCanvas2 =
        document.getElementById("VCEChart2")?.getContext("2d") ?? false;

      VCEChartCanvas2 == false
        ? ""
        : new Chart(VCEChartCanvas2, {
            type: "bar",
            data: VCEChartData,
            options: VCEChartOptions,
          });

      // Modal DSP
      let DSPChartCanvas2 =
        document.getElementById("DSPChart2")?.getContext("2d") ?? false;

      DSPChartCanvas2 == false
        ? ""
        : new Chart(DSPChartCanvas2, {
            type: "bar",
            data: DSPChartData,
            options: DSPChartOptions,
          });
      // ----

      // Modal Gas Flow
      let gasFlowChartCanvas2 =
        document.getElementById("gasFlowChart2")?.getContext("2d") ?? false;

      gasFlowChartCanvas2 == false
        ? ""
        : new Chart(gasFlowChartCanvas2, {
            type: "bar",
            data: gasFlowChartData,
            options: gasFlowChartOptions,
          });
      // ---

      // Modal Lube Oil Temperature
      let lubeOilTempChartCanvas2 =
        document.getElementById("lubeOilTempChart2")?.getContext("2d") ?? false;

      lubeOilTempChartCanvas2 == false
        ? ""
        : new Chart(lubeOilTempChartCanvas2, {
            type: "line",
            data: lubeOilTemp_ChartData,
            options: lubeOilTempChartOptions,
          });
      // ---

      // Modal Lube Oil Temperature
      let lubeoilTankTempChartCanvas2 =
        document.getElementById("lubeoilTankTempChart2")?.getContext("2d") ??
        false;

      lubeoilTankTempChartCanvas2 == false
        ? ""
        : new Chart(lubeoilTankTempChartCanvas2, {
            type: "bar",
            data: lubeoilTankTempChartData,
            options: lubeoilTankTempChartOptions,
          });
      // ---

      // Modal Lube Oil Bearing Temperature
      let lubeoilBearingTempChartCanvas2 =
        document.getElementById("lubeoilBearingTempChart2")?.getContext("2d") ??
        false;

      lubeoilBearingTempChartCanvas2 == false
        ? ""
        : new Chart(lubeoilBearingTempChartCanvas2, {
            type: "bar",
            data: lubeoilBearingTempChartData,
            options: lubeoilBearingTempChartOptions,
          });
      // ---

      // Modal Hyd Trip Circuit Press
      let hydTripCircuitPressChartCanvas2 =
        document
          .getElementById("hydTripCircuitPressChart2")
          ?.getContext("2d") ?? false;

      hydTripCircuitPressChartCanvas2 == false
        ? ""
        : new Chart(hydTripCircuitPressChartCanvas2, {
            type: "bar",
            data: hydTripCircuitPressChartData,
            options: hydTripCircuitPressChartOptions,
          });
      // ---

      // Modal Hyd Trip Circuit Press
      let hydOilPressChartCanvas2 =
        document.getElementById("hydOilPressChart2")?.getContext("2d") ?? false;

      hydOilPressChartCanvas2 == false
        ? ""
        : new Chart(hydOilPressChartCanvas2, {
            type: "bar",
            data: hydOilPressChartData,
            options: hydOilPressChartOptions,
          });
      // ---

      // Modal lubeOilPressChart
      let lubeOilPressChartCanvas2 =
        document.getElementById("lubeOilPressChart2")?.getContext("2d") ??
        false;

      lubeOilPressChartCanvas2 == false
        ? ""
        : new Chart(lubeOilPressChartCanvas2, {
            type: "line",
            data: lubeOilPress_ChartData,
            options: lubeOilPressChartOptions,
          });
      // ---

      // Modal secondWheelspace
      let secondWheelspaceChartCanvas2 =
        document.getElementById("secondWheelspaceChart2")?.getContext("2d") ??
        false;

      secondWheelspaceChartCanvas2 == false
        ? ""
        : new Chart(secondWheelspaceChartCanvas2, {
            type: "line",
            data: secondWheelspace_ChartData,
            options: secondWheelspaceChartOptions,
          });
      // ---

      // Modal exhaustTemp
      let exhaustTempChartCanvas2 =
        document.getElementById("exhaustTempChart2")?.getContext("2d") ?? false;

      exhaustTempChartCanvas2 == false
        ? ""
        : new Chart(exhaustTempChartCanvas2, {
            type: "line",
            data: exhaustTempChart_ChartData,
            options: exhaustTempChartOptions,
          });
      // ---

      // Modal Comp Temp
      let compTempChartCanvas2 =
        document.getElementById("compTempChart2")?.getContext("2d") ?? false;

      compTempChartCanvas2 == false
        ? ""
        : new Chart(compTempChartCanvas2, {
            type: "bar",
            data: compTempChart_Data,
            options: compTempChartOptions,
          });
      // ---

      // Modal exhaustFuelGasTempChart
      let exhaustFuelGasTempChartCanvas2 =
        document.getElementById("exhaustFuelGasTempChart2")?.getContext("2d") ??
        false;

      exhaustFuelGasTempChartCanvas2 == false
        ? ""
        : new Chart(exhaustFuelGasTempChartCanvas2, {
            type: "line",
            data: exhaustFuelGasTempChart_ChartData,
            options: exhaustFuelGasTempChartOptions,
          });
      // ---

      // Modal fuelTempChartCanvas
      let fuelTempChartCanvas2 =
        document.getElementById("fuelTempChart2")?.getContext("2d") ?? false;

      fuelTempChartCanvas2 == false
        ? ""
        : new Chart(fuelTempChartCanvas2, {
            type: "bar",
            data: fuelTempChartData,
            options: fuelTempChartOptions,
          });

      // Modal fuelGasPressChartCanvas
      let fuelGasPressChartCanvas2 =
        document.getElementById("fuelGasPressChart2")?.getContext("2d") ??
        false;

      fuelGasPressChartCanvas2 == false
        ? ""
        : new Chart(fuelGasPressChartCanvas2, {
            type: "line",
            data: fuelGasPressChart_ChartData,
            options: fuelGasPressChartOptions,
          });

      // Modal CHARTcompDisch_AipressChartCanvas
      let compDisch_AipressChartCanvas2 =
        document.getElementById("compDisch_AipressChart2")?.getContext("2d") ??
        false;

      compDisch_AipressChartCanvas2 == false
        ? ""
        : new Chart(compDisch_AipressChartCanvas2, {
            type: "bar",
            data: compDisch_AipressChart_Data,
            options: compDisch_AipressChartOptions,
          });

      // Modal diffPressChartCanvas
      let diffPressChartCanvas2 =
        document.getElementById("diffPressChart2")?.getContext("2d") ?? false;

      diffPressChartCanvas2 == false
        ? ""
        : new Chart(diffPressChartCanvas2, {
            type: "line",
            data: diffPressChart_ChartData,
            options: diffPressChartOptions,
          });

      // Modal coolingWaterChart
      let coolingWaterChartCanvas2 =
        document.getElementById("coolingWaterChart2")?.getContext("2d") ??
        false;

      coolingWaterChartCanvas2 == false
        ? ""
        : new Chart(coolingWaterChartCanvas2, {
            type: "bar",
            data: coolingWaterChartData,
            options: coolingWaterChartOptions,
          });

      // Modal bentlyVibraUnFilterChartCanvas

      let bentlyVibraUnFilterChartCanvas2 =
        document
          .getElementById("bentlyVibraUnFilterChart2")
          ?.getContext("2d") ?? false;

      bentlyVibraUnFilterChartCanvas2 == false
        ? ""
        : new Chart(bentlyVibraUnFilterChartCanvas2, {
            type: "line",
            data: bentlyVibraUnFilterChart_ChartData,
            options: bentlyVibraUnFilterChartOptions,
          });

      // Modal seismicVibrationChartCanvas
      let seismicVibrationChartCanvas2 =
        document.getElementById("seismicVibrationChart2")?.getContext("2d") ??
        false;

      seismicVibrationChartCanvas2 == false
        ? ""
        : new Chart(seismicVibrationChartCanvas2, {
            type: "line",
            data: seismicVibration_ChartData,
            options: seismicVibrationChartOptions,
          });
    });
  }
};

export const setGetValueChart = async (date) => {
  let api_date = `/charts/date?date=${date}`;
  let setData;
  let fetchData = await fetch(api_date, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      setData = data;
    });

  console.log("setData", setData.data.length);

  // -----------------------------------------------------
  let setClock = [];
  //-FIELD
  let setValueA_Field = [];
  let setValueV_Field = [];
  //-VOLTAGE BEFORE TRAFO
  let setValueV_VoltBeforeTrafo = [];
  //-VOLTAGE AFTER TRAFO
  let valueVolta1_2_VoltAfterTrafo = [];
  let valueVolta2_3_VoltAfterTrafo = [];
  let valueVolta3_1_VoltAfterTrafo = [];
  //-LOAD (AMP)
  let _1_LoadAmp = [];
  let _2_LoadAmp = [];
  let _3_LoadAmp = [];
  //-POWER FACTOR
  let _powerfactor = [];
  //-LOAD MW
  let meter_loadMW = [];
  let record_loadMW = [];
  //-M VAR
  let meter_Mvar = [];
  let record_Mvar = [];
  //-Gen Trafo
  let liquidLevel_gentrafo = [];
  let liquidTemp_gentrafo = [];
  let windTemp_gentrafo = [];
  // RECT. TRAFO LIQUID TEMP.
  let value_rectTrafoTemp = [];
  // KW HOURS
  let value_kwHours = [];
  // VISUAL CHECK
  let l_o_visualCheck = [];
  let temp_visualCheck = [];
  let sound_visualCheck = [];
  // TURBINE SPEED
  let rpm_turbineSpeed = [];
  // VCE
  let value_vce = [];
  // DSP
  let value_dsp = [];

  // GAS FLOW
  let valueM3HR_gasFlow = [];

  // lubeOilTempChart
  let value_oilcooler_inlet_lubeOilTempChart = [];
  let value_oilcooler_outlet_lubeOilTempChart = [];
  let value_journaland_thrustdrain_lubeOilTempChart = [];
  let value_no2_bearingdrain_lubeOilTempChart = [];
  let value_gearpinion_no1_lubeOilTempChart = [];
  let value_gearwheel_no2_lubeOilTempChart = [];
  let value_gearwheel_no3_lubeOilTempChart = [];
  let value_gearwheel_no4_lubeOilTempChart = [];
  let value_gearwheel_no5_lubeOilTempChart = [];
  let value_generator_drain_lubeOilTempChart = [];

  // lubeoilTankTemp
  let value_lubeoil_tanktemp_lubeoilTankTemp = [];

  // lubeoilTankTemp
  let value_lubeoil_bearingtemperature_lubeoilBearingTemp = [];

  // hydTripCircuitPress
  let value_hvdtrip_circuitpress_hydTripCircuitPress = [];

  // hydOilPress
  let value_hvdoil_press_hydOilPress = [];

  // lubeOilPress
  let value_main_oil_pump_lubeOilPress = [];
  let value_fwdfilter_lubeOilPress = [];
  let value_turbinebearing_header_lubeOilPress = [];
  let value_gen_bearingheader_lubeOilPress = [];

  // secondWheelspace
  let value_second_fwd2_secondWheelspace = [];
  let value_second_fwd3_secondWheelspace = [];
  let value_second_aft1_secondWheelspace = [];
  let value_second_aft2_secondWheelspace = [];

  // Exhaust Temp
  let value_1_exhaustTemp_exhaustTempChart = [];
  let value_2_exhaustTemp_exhaustTempChart = [];
  let value_3_exhaustTemp_exhaustTempChart = [];
  let value_4_exhaustTemp_exhaustTempChart = [];

  // Comp Temp
  let value_discharge_anulr_compTempChart = [];
  let value_inletair_compTempChart = [];

  // EXHAUST FUEL GAS TEMPERATURE °C
  let value_5_exhaustFluegas = [];
  let value_6_exhaustFluegas = [];
  let value_7_exhaustFluegas = [];
  let value_8_exhaustFluegas = [];
  let value_9_exhaustFluegas = [];
  let value_10_exhaustFluegas = [];
  let value_11_exhaustFluegas = [];
  let value_12_exhaustFluegas = [];
  let value_AVETX_exhaustFluegas = [];
  let value_T1_exhaustFluegas = [];
  let value_T2_exhaustFluegas = [];
  let value_T3_exhaustFluegas = [];
  let value_T4_exhaustFluegas = [];

  // FUEL TEMP
  let value_fuel_temp = [];

  // FUEL GAS PRESS
  let value_hpgas_before = [];
  let value_beforestop_value = [];
  let value_aftergas_stopvalue = [];
  let value_aftergas_controlvalue = [];

  // COMP. DISC. AIR PRESS
  let value_afterporous_filter = [];
  let value_for96cd = [];

  // DIFF. PRESS
  let value_inlethouse_filter = [];
  let value_lubeoil_filter = [];
  let value_controloil_filter = [];
  let value_hydoil_filter = [];

  // COOLING WATER
  let value_temperature = [];

  // BENTLY VIBRATION UN FILTER
  let valueClock_bentltVibraUnFilter = [];
  let value_thrustBrg_1_A = [];
  let value_thrustBrg_1_B = [];
  let value_No1Brg_rv101_V = [];
  let value_No1Brg_rv101_H = [];
  let value_No2Brg_rv102_V = [];
  let value_No2Brg_rv102_H = [];
  let value_GenBrg_rv103_V = [];
  let value_GenBrg_rv103_H = [];
  let value_GearturbineBrg_rv104_V = [];
  let value_GearturbineBrg_rv104_H = [];
  let value_GearpinionBrg_rv105_V = [];
  let value_GearpinionBrg_rv105_H = [];
  let value_GearwheelturbineBrg_rv106_V = [];
  let value_GearwheelturbineBrg_rv106_H = [];
  let value_GearwheelGen_Brg_rv107_V = [];
  let value_GearwheelGen_Brg_rv107_H = [];

  // seismicVibrationChart
  let value_IBRG_casing = [];
  let value_comp_Casing = [];
  let value_gen_BrgCasing = [];

  for (let i = 0; i < setData.data.length; i++) {
    // console.log("setData.Length", setData.data[i]);

    setClock.push(setData.data[i].clock);

    //Field
    setValueA_Field.push(
      setData.data[i].value.get_field[0]?.valueAField === undefined
        ? 0
        : setData.data[i].value.get_field[0]?.valueAField
    );
    setValueV_Field.push(
      setData.data[i].value.get_field[0]?.valueVField === undefined
        ? 0
        : setData.data[i].value.get_field[0]?.valueVField
    );

    //VoltBeforeTrafo
    setValueV_VoltBeforeTrafo.push(
      setData.data[i].value.get_voltBeforeTrafo[0]?.valueV_BT === undefined
        ? 0
        : setData.data[i].value.get_voltBeforeTrafo[0]?.valueV_BT
    );

    //VoltAfterTrafo
    valueVolta1_2_VoltAfterTrafo.push(
      setData.data[i].value.get_voltAfterTrafo[0]?.valueVolta1_2 === undefined
        ? 0
        : setData.data[i].value.get_voltAfterTrafo[0]?.valueVolta1_2
    );
    valueVolta2_3_VoltAfterTrafo.push(
      setData.data[i].value.get_voltAfterTrafo[0]?.valueVolta2_3 === undefined
        ? 0
        : setData.data[i].value.get_voltAfterTrafo[0]?.valueVolta2_3
    );
    valueVolta3_1_VoltAfterTrafo.push(
      setData.data[i].value.get_voltAfterTrafo[0]?.valueVolta3_1 === undefined
        ? 0
        : setData.data[i].value.get_voltAfterTrafo[0]?.valueVolta3_1
    );

    //LoadAmp
    _1_LoadAmp.push(
      setData.data[i].value.get_loadamp[0]?.value1Loadamp === undefined
        ? 0
        : setData.data[i].value.get_loadamp[0]?.value1Loadamp
    );
    _2_LoadAmp.push(
      setData.data[i].value.get_loadamp[0]?.value2Loadamp === undefined
        ? 0
        : setData.data[i].value.get_loadamp[0]?.value2Loadamp
    );
    _3_LoadAmp.push(
      setData.data[i].value.get_loadamp[0]?.value3Loadamp === undefined
        ? 0
        : setData.data[i].value.get_loadamp[0]?.value3Loadamp
    );

    //powerfactor
    _powerfactor.push(
      setData.data[i].value.get_powerfactor[0]?.valuePowerfactor === undefined
        ? 0
        : setData.data[i].value.get_powerfactor[0]?.valuePowerfactor
    );

    //loadMW
    meter_loadMW.push(
      setData.data[i].value.get_loadmw[0]?.valueMeter_loadmw === undefined
        ? 0
        : setData.data[i].value.get_loadmw[0]?.valueMeter_loadmw
    );
    record_loadMW.push(
      setData.data[i].value.get_loadmw[0]?.valueRecord_loadmw === undefined
        ? 0
        : setData.data[i].value.get_loadmw[0]?.valueRecord_loadmw
    );

    //MVar
    meter_Mvar.push(
      setData.data[i].value.get_mvar[0]?.valueMeter_mvar === undefined
        ? 0
        : setData.data[i].value.get_mvar[0]?.valueMeter_mvar
    );
    record_Mvar.push(
      setData.data[i].value.get_mvar[0]?.valueRecord_mvar === undefined
        ? 0
        : setData.data[i].value.get_mvar[0]?.valueRecord_mvar
    );

    // Gen Trafo
    liquidLevel_gentrafo.push(
      setData.data[i].value.get_genTrafo[0]?.liquid_level === undefined
        ? 0
        : setData.data[i].value.get_genTrafo[0]?.liquid_level
    );
    liquidTemp_gentrafo.push(
      setData.data[i].value.get_genTrafo[0]?.liquid_temp === undefined
        ? 0
        : setData.data[i].value.get_genTrafo[0]?.liquid_temp
    );
    windTemp_gentrafo.push(
      setData.data[i].value.get_genTrafo[0]?.wind_temp === undefined
        ? 0
        : setData.data[i].value.get_genTrafo[0]?.wind_temp
    );

    // RECT. TRAFO LIQUID TEMP.
    value_rectTrafoTemp.push(
      setData.data[i].value.get_rect_trafo_liquid_temp[0]
        ?.value_tblRect_trafo_liquid_temp === undefined
        ? 0
        : setData.data[i].value.get_rect_trafo_liquid_temp[0]
            ?.value_tblRect_trafo_liquid_temp
    );

    //KW HOURS
    value_kwHours.push(
      setData.data[i].value.get_kw_hours[0]?.value_tblkw_hours === undefined
        ? 0
        : setData.data[i].value.get_kw_hours[0]?.value_tblkw_hours
    );

    //Visual Check
    l_o_visualCheck.push(
      setData.data[i].value.get_visual_check[0]?.l_o === undefined
        ? 0
        : setData.data[i].value.get_visual_check[0]?.l_o
    );
    temp_visualCheck.push(
      setData.data[i].value.get_visual_check[0]?.temp === undefined
        ? 0
        : setData.data[i].value.get_visual_check[0]?.temp
    );
    sound_visualCheck.push(
      setData.data[i].value.get_visual_check[0]?.sound === undefined
        ? 0
        : setData.data[i].value.get_visual_check[0]?.sound
    );

    // Turbine Speeed
    rpm_turbineSpeed.push(
      setData.data[i].value.get_tbl_turbinspeed[0]?.value_rpm === undefined
        ? 0
        : setData.data[i].value.get_tbl_turbinspeed[0]?.value_rpm
    );

    // VCE
    value_vce.push(
      setData.data[i].value.get_tbl_vce[0]?.value_vce === undefined
        ? 0
        : setData.data[i].value.get_tbl_vce[0]?.value_vce
    );

    // DSP
    value_dsp.push(
      setData.data[i].value.get_tbl_dsp[0]?.value_dsp === undefined
        ? 0
        : setData.data[i].value.get_tbl_dsp[0]?.value_dsp
    );

    // DSP
    valueM3HR_gasFlow.push(
      setData.data[i].value.get_tbl_gasflow[0]?.value_M37H === undefined
        ? 0
        : setData.data[i].value.get_tbl_gasflow[0]?.value_M37H
    );

    // lubeOilTempChart
    value_oilcooler_inlet_lubeOilTempChart.push(
      setData.data[i].value.get_tbl_lube_oil_temp[0]?.value_oilcooler_inlet ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_lube_oil_temp[0]?.value_oilcooler_inlet
    );
    value_oilcooler_outlet_lubeOilTempChart.push(
      setData.data[i].value.get_tbl_lube_oil_temp[0]?.value_oilcooler_outlet ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_lube_oil_temp[0]?.value_oilcooler_outlet
    );
    value_journaland_thrustdrain_lubeOilTempChart.push(
      setData.data[i].value.get_tbl_lube_oil_temp[0]
        ?.value_journaland_thrustdrain === undefined
        ? 0
        : setData.data[i].value.get_tbl_lube_oil_temp[0]
            ?.value_journaland_thrustdrain
    );
    value_no2_bearingdrain_lubeOilTempChart.push(
      setData.data[i].value.get_tbl_lube_oil_temp[0]?.value_no2_bearingdrain ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_lube_oil_temp[0]?.value_no2_bearingdrain
    );
    value_gearpinion_no1_lubeOilTempChart.push(
      setData.data[i].value.get_tbl_lube_oil_temp[0]?.value_gearpinion_no1 ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_lube_oil_temp[0]?.value_gearpinion_no1
    );
    value_gearwheel_no2_lubeOilTempChart.push(
      setData.data[i].value.get_tbl_lube_oil_temp[0]?.value_gearwheel_no2 ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_lube_oil_temp[0]?.value_gearwheel_no2
    );
    value_gearwheel_no3_lubeOilTempChart.push(
      setData.data[i].value.get_tbl_lube_oil_temp[0]?.value_gearwheel_no3 ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_lube_oil_temp[0]?.value_gearwheel_no3
    );
    value_gearwheel_no4_lubeOilTempChart.push(
      setData.data[i].value.get_tbl_lube_oil_temp[0]?.value_gearwheel_no4 ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_lube_oil_temp[0]?.value_gearwheel_no4
    );
    value_gearwheel_no5_lubeOilTempChart.push(
      setData.data[i].value.get_tbl_lube_oil_temp[0]?.value_gearwheel_no5 ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_lube_oil_temp[0]?.value_gearwheel_no5
    );
    value_generator_drain_lubeOilTempChart.push(
      setData.data[i].value.get_tbl_lube_oil_temp[0]?.value_generator_drain ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_lube_oil_temp[0]?.value_generator_drain
    );

    // lubeoilTankTemp
    value_lubeoil_tanktemp_lubeoilTankTemp.push(
      setData.data[i].value.get_tbl_lubeoil_tanktemp[0]
        ?.value_lubeoil_tanktemp === undefined
        ? 0
        : setData.data[i].value.get_tbl_lubeoil_tanktemp[0]
            ?.value_lubeoil_tanktemp
    );

    // lubeoilBearingTemp
    value_lubeoil_bearingtemperature_lubeoilBearingTemp.push(
      setData.data[i].value.get_tbl_lubeoil_bearingtemperature[0]
        ?.value_lubeoil_bearingtemperature === undefined
        ? 0
        : setData.data[i].value.get_tbl_lubeoil_bearingtemperature[0]
            ?.value_lubeoil_bearingtemperature
    );

    // lubeoilBearingTemp

    value_hvdtrip_circuitpress_hydTripCircuitPress.push(
      setData.data[i].value.get_tbl_hvdtrip_circuitpress[0]
        ?.value_hvdtrip_circuitpress === undefined
        ? 0
        : setData.data[i].value.get_tbl_hvdtrip_circuitpress[0]
            ?.value_hvdtrip_circuitpress
    );

    // value_hvdoil_press_hydOilPress

    value_hvdoil_press_hydOilPress.push(
      setData.data[i].value.get_tbl_hvdoil_press[0]?.value_hvdoil_press ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_hvdoil_press[0]?.value_hvdoil_press
    );

    // lubeOilPress
    value_main_oil_pump_lubeOilPress.push(
      setData.data[i].value.get_tbl_lubeoil_press[0]?.value_main_oil_pump ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_lubeoil_press[0]?.value_main_oil_pump
    );
    value_fwdfilter_lubeOilPress.push(
      setData.data[i].value.get_tbl_lubeoil_press[0]?.value_fwdfilter ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_lubeoil_press[0]?.value_fwdfilter
    );
    value_turbinebearing_header_lubeOilPress.push(
      setData.data[i].value.get_tbl_lubeoil_press[0]
        ?.value_turbinebearing_header === undefined
        ? 0
        : setData.data[i].value.get_tbl_lubeoil_press[0]
            ?.value_turbinebearing_header
    );
    value_gen_bearingheader_lubeOilPress.push(
      setData.data[i].value.get_tbl_lubeoil_press[0]
        ?.value_gen_bearingheader === undefined
        ? 0
        : setData.data[i].value.get_tbl_lubeoil_press[0]
            ?.value_gen_bearingheader
    );

    // secondWheelspaceChart
    value_second_fwd2_secondWheelspace.push(
      setData.data[i].value.get_tbl_second_wheelspace[0]?.value_second_fwd2 ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_second_wheelspace[0]?.value_second_fwd2
    );
    value_second_fwd3_secondWheelspace.push(
      setData.data[i].value.get_tbl_second_wheelspace[0]?.value_second_fwd3 ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_second_wheelspace[0]?.value_second_fwd3
    );
    value_second_aft1_secondWheelspace.push(
      setData.data[i].value.get_tbl_second_wheelspace[0]?.value_second_aft1 ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_second_wheelspace[0]?.value_second_aft1
    );
    value_second_aft2_secondWheelspace.push(
      setData.data[i].value.get_tbl_second_wheelspace[0]?.value_second_aft2 ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_second_wheelspace[0]?.value_second_aft2
    );

    // Exhaust Temp
    value_1_exhaustTemp_exhaustTempChart.push(
      setData.data[i].value.get_tbl_exhaust_temp[0]?.value_1_exhaustTemp ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_exhaust_temp[0]?.value_1_exhaustTemp
    );
    value_2_exhaustTemp_exhaustTempChart.push(
      setData.data[i].value.get_tbl_exhaust_temp[0]?.value_2_exhaustTemp ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_exhaust_temp[0]?.value_2_exhaustTemp
    );
    value_3_exhaustTemp_exhaustTempChart.push(
      setData.data[i].value.get_tbl_exhaust_temp[0]?.value_3_exhaustTemp ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_exhaust_temp[0]?.value_3_exhaustTemp
    );
    value_4_exhaustTemp_exhaustTempChart.push(
      setData.data[i].value.get_tbl_exhaust_temp[0]?.value_4_exhaustTemp ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_exhaust_temp[0]?.value_4_exhaustTemp
    );

    // Comp Temp
    value_discharge_anulr_compTempChart.push(
      setData.data[i].value.get_tbl_comp_temp[0]?.value_discharge_anulr ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_comp_temp[0]?.value_discharge_anulr
    );
    value_inletair_compTempChart.push(
      setData.data[i].value.get_tbl_comp_temp[0]?.value_inletair === undefined
        ? 0
        : setData.data[i].value.get_tbl_comp_temp[0]?.value_inletair
    );

    // EXHAUST FUEL GAS TEMPERATURE °C
    value_5_exhaustFluegas.push(
      setData.data[i].value.get_tbl_exhaust_flue_gas_temperature[0]
        ?.value_5_exhaustFluegas === undefined
        ? 0
        : setData.data[i].value.get_tbl_exhaust_flue_gas_temperature[0]
            ?.value_5_exhaustFluegas
    );
    value_6_exhaustFluegas.push(
      setData.data[i].value.get_tbl_exhaust_flue_gas_temperature[0]
        ?.value_6_exhaustFluegas === undefined
        ? 0
        : setData.data[i].value.get_tbl_exhaust_flue_gas_temperature[0]
            ?.value_6_exhaustFluegas
    );
    value_7_exhaustFluegas.push(
      setData.data[i].value.get_tbl_exhaust_flue_gas_temperature[0]
        ?.value_7_exhaustFluegas === undefined
        ? 0
        : setData.data[i].value.get_tbl_exhaust_flue_gas_temperature[0]
            ?.value_7_exhaustFluegas
    );
    value_8_exhaustFluegas.push(
      setData.data[i].value.get_tbl_exhaust_flue_gas_temperature[0]
        ?.value_8_exhaustFluegas === undefined
        ? 0
        : setData.data[i].value.get_tbl_exhaust_flue_gas_temperature[0]
            ?.value_8_exhaustFluegas
    );
    value_9_exhaustFluegas.push(
      setData.data[i].value.get_tbl_exhaust_flue_gas_temperature[0]
        ?.value_9_exhaustFluegas === undefined
        ? 0
        : setData.data[i].value.get_tbl_exhaust_flue_gas_temperature[0]
            ?.value_9_exhaustFluegas
    );
    value_10_exhaustFluegas.push(
      setData.data[i].value.get_tbl_exhaust_flue_gas_temperature[0]
        ?.value_10_exhaustFluegas === undefined
        ? 0
        : setData.data[i].value.get_tbl_exhaust_flue_gas_temperature[0]
            ?.value_10_exhaustFluegas
    );
    value_11_exhaustFluegas.push(
      setData.data[i].value.get_tbl_exhaust_flue_gas_temperature[0]
        ?.value_11_exhaustFluegas === undefined
        ? 0
        : setData.data[i].value.get_tbl_exhaust_flue_gas_temperature[0]
            ?.value_11_exhaustFluegas
    );
    value_12_exhaustFluegas.push(
      setData.data[i].value.get_tbl_exhaust_flue_gas_temperature[0]
        ?.value_12_exhaustFluegas === undefined
        ? 0
        : setData.data[i].value.get_tbl_exhaust_flue_gas_temperature[0]
            ?.value_12_exhaustFluegas
    );
    value_AVETX_exhaustFluegas.push(
      setData.data[i].value.get_tbl_exhaust_flue_gas_temperature[0]
        ?.value_AVETX_exhaustFluegas === undefined
        ? 0
        : setData.data[i].value.get_tbl_exhaust_flue_gas_temperature[0]
            ?.value_AVETX_exhaustFluegas
    );
    value_T1_exhaustFluegas.push(
      setData.data[i].value.get_tbl_exhaust_flue_gas_temperature[0]
        ?.value_T1_exhaustFluegas === undefined
        ? 0
        : setData.data[i].value.get_tbl_exhaust_flue_gas_temperature[0]
            ?.value_T1_exhaustFluegas
    );
    value_T2_exhaustFluegas.push(
      setData.data[i].value.get_tbl_exhaust_flue_gas_temperature[0]
        ?.value_T2_exhaustFluegas === undefined
        ? 0
        : setData.data[i].value.get_tbl_exhaust_flue_gas_temperature[0]
            ?.value_T2_exhaustFluegas
    );
    value_T3_exhaustFluegas.push(
      setData.data[i].value.get_tbl_exhaust_flue_gas_temperature[0]
        ?.value_T3_exhaustFluegas === undefined
        ? 0
        : setData.data[i].value.get_tbl_exhaust_flue_gas_temperature[0]
            ?.value_T3_exhaustFluegas
    );
    value_T4_exhaustFluegas.push(
      setData.data[i].value.get_tbl_exhaust_flue_gas_temperature[0]
        ?.value_T4_exhaustFluegas === undefined
        ? 0
        : setData.data[i].value.get_tbl_exhaust_flue_gas_temperature[0]
            ?.value_T4_exhaustFluegas
    );

    // Fuel Temp
    value_fuel_temp.push(
      setData.data[i].value.get_tbl_fuel_temp[0]?.value_fuel_temp === undefined
        ? 0
        : setData.data[i].value.get_tbl_fuel_temp[0]?.value_fuel_temp
    );

    // FUEL GAS PRESS
    value_hpgas_before.push(
      setData.data[i].value.get_tbl_fuelgas_press[0]?.value_hpgas_before ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_fuelgas_press[0]?.value_hpgas_before
    );
    value_beforestop_value.push(
      setData.data[i].value.get_tbl_fuelgas_press[0]?.value_beforestop_value ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_fuelgas_press[0]?.value_beforestop_value
    );
    value_aftergas_stopvalue.push(
      setData.data[i].value.get_tbl_fuelgas_press[0]
        ?.value_aftergas_stopvalue === undefined
        ? 0
        : setData.data[i].value.get_tbl_fuelgas_press[0]
            ?.value_aftergas_stopvalue
    );
    value_aftergas_controlvalue.push(
      setData.data[i].value.get_tbl_fuelgas_press[0]
        ?.value_aftergas_controlvalue === undefined
        ? 0
        : setData.data[i].value.get_tbl_fuelgas_press[0]
            ?.value_aftergas_controlvalue
    );

    //
    value_afterporous_filter.push(
      setData.data[i].value.get_tbl_compdisch_airpress[0]
        ?.value_afterporous_filter === undefined
        ? 0
        : setData.data[i].value.get_tbl_compdisch_airpress[0]
            ?.value_afterporous_filter
    );
    value_for96cd.push(
      setData.data[i].value.get_tbl_compdisch_airpress[0]?.value_for96cd ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_compdisch_airpress[0]?.value_for96cd
    );

    // DIFF. PRESS
    value_inlethouse_filter.push(
      setData.data[i].value.get_tbl_diffpress[0]?.value_inlethouse_filter ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_diffpress[0]?.value_inlethouse_filter
    );
    value_lubeoil_filter.push(
      setData.data[i].value.get_tbl_diffpress[0]?.value_lubeoil_filter ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_diffpress[0]?.value_lubeoil_filter
    );
    value_controloil_filter.push(
      setData.data[i].value.get_tbl_diffpress[0]?.value_controloil_filter ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_diffpress[0]?.value_controloil_filter
    );
    value_hydoil_filter.push(
      setData.data[i].value.get_tbl_diffpress[0]?.value_hydoil_filter ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_diffpress[0]?.value_hydoil_filter
    );

    // COOLING WATER
    value_temperature.push(
      setData.data[i].value.get_tbl_cooling_water[0]?.value_temperature ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_cooling_water[0]?.value_temperature
    );

    //BENTLY VIBRATION UN FILTER
    value_thrustBrg_1_A.push(
      setData.data[i].value.get_tbl_bently_vibr_unfilter[0]?.thrustBrg_1_A ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_bently_vibr_unfilter[0]?.thrustBrg_1_A
    );
    value_thrustBrg_1_B.push(
      setData.data[i].value.get_tbl_bently_vibr_unfilter[0]?.thrustBrg_1_B ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_bently_vibr_unfilter[0]?.thrustBrg_1_B
    );
    value_No1Brg_rv101_V.push(
      setData.data[i].value.get_tbl_bently_vibr_unfilter[0]?.No1Brg_rv101_V ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_bently_vibr_unfilter[0]?.No1Brg_rv101_V
    );
    value_No1Brg_rv101_H.push(
      setData.data[i].value.get_tbl_bently_vibr_unfilter[0]?.No1Brg_rv101_H ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_bently_vibr_unfilter[0]?.No1Brg_rv101_H
    );
    value_No1Brg_rv101_V.push(
      setData.data[i].value.get_tbl_bently_vibr_unfilter[0]?.No1Brg_rv101_V ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_bently_vibr_unfilter[0]?.No1Brg_rv101_V
    );
    value_No2Brg_rv102_V.push(
      setData.data[i].value.get_tbl_bently_vibr_unfilter[0]?.No2Brg_rv102_V ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_bently_vibr_unfilter[0]?.No2Brg_rv102_V
    );
    value_No2Brg_rv102_H.push(
      setData.data[i].value.get_tbl_bently_vibr_unfilter[0]?.No2Brg_rv102_H ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_bently_vibr_unfilter[0]?.No2Brg_rv102_H
    );
    value_GenBrg_rv103_V.push(
      setData.data[i].value.get_tbl_bently_vibr_unfilter[0]?.GenBrg_rv103_V ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_bently_vibr_unfilter[0]?.GenBrg_rv103_V
    );
    value_GenBrg_rv103_H.push(
      setData.data[i].value.get_tbl_bently_vibr_unfilter[0]?.GenBrg_rv103_H ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_bently_vibr_unfilter[0]?.GenBrg_rv103_H
    );
    value_GearturbineBrg_rv104_V.push(
      setData.data[i].value.get_tbl_bently_vibr_unfilter[0]
        ?.GearturbineBrg_rv104_V === undefined
        ? 0
        : setData.data[i].value.get_tbl_bently_vibr_unfilter[0]
            ?.GearturbineBrg_rv104_V
    );
    value_GearturbineBrg_rv104_H.push(
      setData.data[i].value.get_tbl_bently_vibr_unfilter[0]
        ?.GearturbineBrg_rv104_H === undefined
        ? 0
        : setData.data[i].value.get_tbl_bently_vibr_unfilter[0]
            ?.GearturbineBrg_rv104_H
    );
    value_GearpinionBrg_rv105_V.push(
      setData.data[i].value.get_tbl_bently_vibr_unfilter[0]
        ?.GearpinionBrg_rv105_V === undefined
        ? 0
        : setData.data[i].value.get_tbl_bently_vibr_unfilter[0]
            ?.GearpinionBrg_rv105_V
    );
    value_GearpinionBrg_rv105_H.push(
      setData.data[i].value.get_tbl_bently_vibr_unfilter[0]
        ?.GearpinionBrg_rv105_H === undefined
        ? 0
        : setData.data[i].value.get_tbl_bently_vibr_unfilter[0]
            ?.GearpinionBrg_rv105_H
    );
    value_GearwheelturbineBrg_rv106_V.push(
      setData.data[i].value.get_tbl_bently_vibr_unfilter[0]
        ?.GearwheelturbineBrg_rv106_V === undefined
        ? 0
        : setData.data[i].value.get_tbl_bently_vibr_unfilter[0]
            ?.GearwheelturbineBrg_rv106_V
    );
    value_GearwheelturbineBrg_rv106_H.push(
      setData.data[i].value.get_tbl_bently_vibr_unfilter[0]
        ?.GearwheelturbineBrg_rv106_H === undefined
        ? 0
        : setData.data[i].value.get_tbl_bently_vibr_unfilter[0]
            ?.GearwheelturbineBrg_rv106_H
    );
    value_GearwheelGen_Brg_rv107_V.push(
      setData.data[i].value.get_tbl_bently_vibr_unfilter[0]
        ?.GearwheelGen_Brg_rv107_V === undefined
        ? 0
        : setData.data[i].value.get_tbl_bently_vibr_unfilter[0]
            ?.GearwheelGen_Brg_rv107_V
    );
    value_GearwheelGen_Brg_rv107_H.push(
      setData.data[i].value.get_tbl_bently_vibr_unfilter[0]
        ?.GearwheelGen_Brg_rv107_H === undefined
        ? 0
        : setData.data[i].value.get_tbl_bently_vibr_unfilter[0]
            ?.GearwheelGen_Brg_rv107_H
    );

    // Seismic Vibration
    value_IBRG_casing.push(
      setData.data[i].value.get_tbl_seismic_vibration[0]?.IBRG_casing ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_seismic_vibration[0]?.IBRG_casing
    );
    value_comp_Casing.push(
      setData.data[i].value.get_tbl_seismic_vibration[0]?.comp_Casing ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_seismic_vibration[0]?.comp_Casing
    );
    value_gen_BrgCasing.push(
      setData.data[i].value.get_tbl_seismic_vibration[0]?.gen_BrgCasing ===
        undefined
        ? 0
        : setData.data[i].value.get_tbl_seismic_vibration[0]?.gen_BrgCasing
    );

    // console.log("object", value_for96cd);
  }

  let tempVibra = [2, 8, 12];
  let indexVibra = tempVibra.map((i) => setClock[i]);

  console.log("clock", indexVibra);
  return {
    setClock,
    indexVibra,
    setValueA_Field,
    setValueV_Field,
    setValueV_VoltBeforeTrafo,
    valueVolta1_2_VoltAfterTrafo,
    valueVolta2_3_VoltAfterTrafo,
    valueVolta3_1_VoltAfterTrafo,
    _1_LoadAmp,
    _2_LoadAmp,
    _3_LoadAmp,
    _powerfactor,
    meter_loadMW,
    record_loadMW,
    meter_Mvar,
    record_Mvar,
    liquidLevel_gentrafo,
    liquidTemp_gentrafo,
    windTemp_gentrafo,
    value_rectTrafoTemp,
    value_kwHours,
    l_o_visualCheck,
    temp_visualCheck,
    sound_visualCheck,
    rpm_turbineSpeed,
    value_vce,
    value_dsp,
    valueM3HR_gasFlow,
    value_oilcooler_inlet_lubeOilTempChart,
    value_oilcooler_outlet_lubeOilTempChart,
    value_journaland_thrustdrain_lubeOilTempChart,
    value_no2_bearingdrain_lubeOilTempChart,
    value_gearpinion_no1_lubeOilTempChart,
    value_gearwheel_no2_lubeOilTempChart,
    value_gearwheel_no3_lubeOilTempChart,
    value_gearwheel_no4_lubeOilTempChart,
    value_gearwheel_no5_lubeOilTempChart,
    value_generator_drain_lubeOilTempChart,
    value_lubeoil_tanktemp_lubeoilTankTemp,
    value_lubeoil_bearingtemperature_lubeoilBearingTemp,
    value_hvdtrip_circuitpress_hydTripCircuitPress,
    value_hvdoil_press_hydOilPress,
    value_main_oil_pump_lubeOilPress,
    value_fwdfilter_lubeOilPress,
    value_turbinebearing_header_lubeOilPress,
    value_gen_bearingheader_lubeOilPress,
    value_second_fwd2_secondWheelspace,
    value_second_fwd3_secondWheelspace,
    value_second_aft1_secondWheelspace,
    value_second_aft2_secondWheelspace,
    value_1_exhaustTemp_exhaustTempChart,
    value_2_exhaustTemp_exhaustTempChart,
    value_3_exhaustTemp_exhaustTempChart,
    value_4_exhaustTemp_exhaustTempChart,
    value_discharge_anulr_compTempChart,
    value_inletair_compTempChart,
    value_5_exhaustFluegas,
    value_6_exhaustFluegas,
    value_7_exhaustFluegas,
    value_8_exhaustFluegas,
    value_9_exhaustFluegas,
    value_10_exhaustFluegas,
    value_11_exhaustFluegas,
    value_12_exhaustFluegas,
    value_AVETX_exhaustFluegas,
    value_T1_exhaustFluegas,
    value_T2_exhaustFluegas,
    value_T3_exhaustFluegas,
    value_T4_exhaustFluegas,
    value_fuel_temp,
    value_hpgas_before,
    value_beforestop_value,
    value_aftergas_stopvalue,
    value_aftergas_controlvalue,
    value_afterporous_filter,
    value_for96cd,
    value_inlethouse_filter,
    value_lubeoil_filter,
    value_controloil_filter,
    value_hydoil_filter,
    value_temperature,
    value_thrustBrg_1_A,
    value_thrustBrg_1_B,
    value_No1Brg_rv101_V,
    value_No1Brg_rv101_H,
    value_No2Brg_rv102_V,
    value_No2Brg_rv102_H,
    value_GenBrg_rv103_V,
    value_GenBrg_rv103_H,
    value_GearturbineBrg_rv104_V,
    value_GearturbineBrg_rv104_H,
    value_GearpinionBrg_rv105_V,
    value_GearpinionBrg_rv105_H,
    value_GearwheelturbineBrg_rv106_V,
    value_GearwheelturbineBrg_rv106_H,
    value_GearwheelGen_Brg_rv107_V,
    value_GearwheelGen_Brg_rv107_H,
    value_IBRG_casing,
    value_comp_Casing,
    value_gen_BrgCasing,
  };
};
// seismicVibrationChartData
