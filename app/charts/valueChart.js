$(async function () {
  /* ChartJS
   * -------
   * Here we will create a few charts using ChartJS
   */
  let api_date = `/charts/date`;
  let setData;
  await fetch(api_date, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      setData = data;
    });

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

  for (let i = 0; i < setData.data.length; i++) {
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

    // console.log("object", _1_LoadAmp);
  }

  let chartField = {
    labels: setClock,
    datasets: [
      {
        label: "V",
        backgroundColor: "rgba(60,141,188,0.9)",
        borderColor: "rgba(60,141,188,0.8)",
        pointRadius: false,
        pointColor: "#3b8bba",
        pointStrokeColor: "rgba(60,141,188,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(60,141,188,1)",
        data: setValueV_Field,
      },
      {
        label: "A",
        backgroundColor: "rgba(210, 214, 222, 1)",
        borderColor: "rgba(210, 214, 222, 1)",
        pointRadius: false,
        pointColor: "rgba(210, 214, 222, 1)",
        pointStrokeColor: "#c1c7d1",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: setValueA_Field,
      },
    ],
  };
  //
  let chartVoltageBeforeTrafo = {
    labels: setClock,
    datasets: [
      {
        label: "V",
        backgroundColor: "rgba(60,141,188,0.9)",
        borderColor: "rgba(60,141,188,0.8)",
        pointRadius: false,
        pointColor: "#3b8bba",
        pointStrokeColor: "rgba(60,141,188,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(60,141,188,1)",
        data: setValueV_VoltBeforeTrafo,
      },
    ],
  };
  //

  let voltAfterChartData = {
    labels: setClock,
    datasets: [
      {
        label: "1-2",
        backgroundColor: "rgba(60,141,188,0.9)",
        borderColor: "rgba(60,141,188,0.8)",
        pointRadius: false,
        pointColor: "#3b8bba",
        pointStrokeColor: "rgba(60,141,188,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(60,141,188,1)",
        data: valueVolta1_2_VoltAfterTrafo,
      },
      {
        label: "2-3",
        backgroundColor: "rgba(210, 214, 222, 1)",
        borderColor: "rgba(210, 214, 222, 1)",
        pointRadius: false,
        pointColor: "rgba(210, 214, 222, 1)",
        pointStrokeColor: "#c1c7d1",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: valueVolta2_3_VoltAfterTrafo,
      },
      {
        label: "3-1",
        backgroundColor: "rgba(121, 193, 115, 0.8)",
        borderColor: "rgba(121, 193, 115, 0.8)",
        pointRadius: false,
        pointColor: "rgba(121, 193, 115, 0.8)",
        pointStrokeColor: "#c1c7d1",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: valueVolta3_1_VoltAfterTrafo,
      },
    ],
  };
  //

  let chartPowerFactor = {
    labels: setClock,
    datasets: [
      {
        label: "V",
        backgroundColor: "rgba(121, 193, 115, 0.8)",
        borderColor: "rgba(121, 193, 115, 1)",
        pointRadius: false,
        pointColor: "#3b8bba",
        pointStrokeColor: "rgba(60,141,188,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(60,141,188,1)",
        data: _powerfactor,
      },
    ],
  };

  //

  let loadAMPChartData = {
    labels: setClock,
    datasets: [
      {
        label: "1",
        backgroundColor: "rgba(60,141,188,0.9)",
        borderColor: "rgba(60,141,188,0.8)",
        pointRadius: false,
        pointColor: "#3b8bba",
        pointStrokeColor: "rgba(60,141,188,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(60,141,188,1)",
        data: _1_LoadAmp,
      },
      {
        label: "2",
        backgroundColor: "rgba(210, 214, 222, 1)",
        borderColor: "rgba(210, 214, 222, 1)",
        pointRadius: false,
        pointColor: "rgba(210, 214, 222, 1)",
        pointStrokeColor: "#c1c7d1",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: _2_LoadAmp,
      },
      {
        label: "3",
        backgroundColor: "rgba(121, 193, 115, 0.8)",
        borderColor: "rgba(121, 193, 115, 0.8)",
        pointRadius: false,
        pointColor: "rgba(121, 193, 115, 0.8)",
        pointStrokeColor: "#c1c7d1",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: _3_LoadAmp,
      },
    ],
  };
  //

  let chartloadmw = {
    labels: setClock,
    datasets: [
      {
        label: "V",
        backgroundColor: "rgba(60,141,188,0.9)",
        borderColor: "rgba(60,141,188,0.8)",
        pointRadius: false,
        pointColor: "#3b8bba",
        pointStrokeColor: "rgba(60,141,188,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(60,141,188,1)",
        data: meter_loadMW,
      },
      {
        label: "A",
        backgroundColor: "rgba(210, 214, 222, 1)",
        borderColor: "rgba(210, 214, 222, 1)",
        pointRadius: false,
        pointColor: "rgba(210, 214, 222, 1)",
        pointStrokeColor: "#c1c7d1",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: record_loadMW,
      },
    ],
  };
  //

  let chartmvar = {
    labels: setClock,
    datasets: [
      {
        label: "V",
        backgroundColor: "rgba(60,141,188,0.9)",
        borderColor: "rgba(60,141,188,0.8)",
        pointRadius: false,
        pointColor: "#3b8bba",
        pointStrokeColor: "rgba(60,141,188,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(60,141,188,1)",
        data: [10, 23, 21, 21],
      },
      {
        label: "A",
        backgroundColor: "rgba(210, 214, 222, 1)",
        borderColor: "rgba(210, 214, 222, 1)",
        pointRadius: false,
        pointColor: "rgba(210, 214, 222, 1)",
        pointStrokeColor: "#c1c7d1",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [21, 32, 12, 43],
      },
    ],
  };
  //

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
  //

  // --------------------------------------------------------------------

  //-------------
  //- BAR CHART FIELD -
  //-------------
  let fieldChartCanvas = $("#barChart").get(0).getContext("2d");
  let fieldChartData = $.extend(true, {}, chartField);
  let field_temp0 = chartField.datasets[0];
  let field_temp1 = chartField.datasets[1];
  fieldChartData.datasets[0] = field_temp1;
  fieldChartData.datasets[1] = field_temp0;

  let fieldChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    datasetFill: false,
  };

  new Chart(fieldChartCanvas, {
    type: "bar",
    data: fieldChartData,
    options: fieldChartOptions,
  });

  // VOLTAGE BEFORE TRAFO

  //-------------
  //- BAR CHART VOLTBEFTRAFO -
  //-------------
  let voltBefTrafoChartCanvas = $("#voltBeforeTrafoChart")
    .get(0)
    .getContext("2d");
  let voltBefTrafoChartData = $.extend(true, {}, chartVoltageBeforeTrafo);
  let voltbefore_temp0 = chartVoltageBeforeTrafo.datasets[0];
  voltBefTrafoChartData.datasets[0] = voltbefore_temp0;

  let voltBefTrafoChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    datasetFill: false,
  };

  new Chart(voltBefTrafoChartCanvas, {
    type: "bar",
    data: voltBefTrafoChartData,
    options: voltBefTrafoChartOptions,
  });

  //-------------
  //- LINE CHART - VOLTAGE AFTER TRAFO
  //--------------
  let voltafterChartCanvas = $("#voltAfterTrafoChart").get(0).getContext("2d");
  let voltafterChartOptions = $.extend(true, {}, areaChartOptions);
  let voltafterChartData = $.extend(true, {}, voltAfterChartData);
  voltafterChartData.datasets[0].fill = false;
  voltafterChartData.datasets[1].fill = false;
  voltafterChartData.datasets[2].fill = false;
  voltafterChartOptions.datasetFill = false;

  let voltafterChart = new Chart(voltafterChartCanvas, {
    type: "line",
    data: voltafterChartData,
    options: voltafterChartOptions,
  });

  //-------------
  //- LINE CHART -LOAD AMP CHART
  //--------------
  let loadampChartCanvas = $("#loadAmpChart").get(0).getContext("2d");
  let loadampChartOptions = $.extend(true, {}, areaChartOptions);
  let loadampChartData = $.extend(true, {}, loadAMPChartData);
  loadampChartData.datasets[0].fill = false;
  loadampChartData.datasets[1].fill = false;
  loadampChartData.datasets[2].fill = false;
  loadampChartOptions.datasetFill = false;

  let loadampChart = new Chart(loadampChartCanvas, {
    type: "line",
    data: loadampChartData,
    options: loadampChartOptions,
  });

  //-------------
  //- BAR CHART FIELD -
  //-------------
  let powerfactorChartCanvas = $("#powerfactorChart").get(0).getContext("2d");
  let powerfactorChartData = $.extend(true, {}, chartPowerFactor);
  let powerfactor_temp0 = chartPowerFactor.datasets[0];
  powerfactorChartData.datasets[0] = powerfactor_temp0;

  let powerfactorChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    datasetFill: false,
  };

  new Chart(powerfactorChartCanvas, {
    type: "bar",
    data: powerfactorChartData,
    options: powerfactorChartOptions,
  });

  //-------------
  //- BAR CHART LOAD MW -
  //-------------
  let loadmwChartCanvas = $("#loadmwChart").get(0).getContext("2d");
  let loadmwChartData = $.extend(true, {}, chartloadmw);
  let loadmw_temp0 = chartloadmw.datasets[0];
  let loadmw_temp1 = chartloadmw.datasets[1];
  loadmwChartData.datasets[0] = loadmw_temp1;
  loadmwChartData.datasets[1] = loadmw_temp0;

  let loadmwChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    datasetFill: false,
  };

  new Chart(loadmwChartCanvas, {
    type: "bar",
    data: loadmwChartData,
    options: loadmwChartOptions,
  });

  //-------------
  //- BAR CHART MVAR-
  //-------------
  let mvarChartCanvas = $("#mvarChart").get(0).getContext("2d");
  let mvarChartData = $.extend(true, {}, chartmvar);
  let mvar_temp0 = chartmvar.datasets[0];
  let mvar_temp1 = chartmvar.datasets[1];
  mvarChartData.datasets[0] = mvar_temp1;
  mvarChartData.datasets[1] = mvar_temp0;

  let mvarChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    datasetFill: false,
  };

  new Chart(mvarChartCanvas, {
    type: "bar",
    data: mvarChartData,
    options: mvarChartOptions,
  });

  //
});
