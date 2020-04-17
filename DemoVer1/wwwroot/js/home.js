

$.ajax({
  type: "post",
  url: "Home/GetChartData",
  data: {},
  success: function (response) {
    var duLieu = [];

    for (const key in response) {
      if (response.hasOwnProperty(key)) {
        const LoaiThietBi = response[key];
        console.log(LoaiThietBi);
        duLieu.push({
          t: LoaiThietBi.dsViTriX,
          r: LoaiThietBi.dsViTriY,
          geometry: µ.DOT,
          name: LoaiThietBi.ten,
          dotType: LoaiThietBi.kiHieu,
          dotSize: 35,
          opacity: 0.8,
        });
      }
    }
    console.log(duLieu);
    
    
    var configs = [
      {
        data: duLieu,
        layout: {
          title: "Bản đồ tọa độ",
          margin: { top: 0, bottom: 0, left: 5, right: 10 },
          angularAxis: { visible: false },
          radialAxis: { visible: false },
        },
      },
    ];

    configs.forEach(function (_config) {
      var config = { layout: { width: 400, height: 400 } };
      µ.util.deepExtend(config, _config);
      micropolar.Axis().config(config).render(d3.select("body").append("div"));
    });
  },
});






// function superformulaGenerator(params) {
//     var n = 360, step = 1, i = -1, r = 0, dt = 2 * Math.PI / n, t, x, y, points = {x: [], y: []};
//     d3.range(0, 360, 3).forEach(function(d, i){ 
//       t = params.m * (d * dt - Math.PI) / 4;
//       t = Math.pow(Math.abs(Math.pow(Math.abs(Math.cos(t) / params.a), params.n2) + Math.pow(Math.abs(Math.sin(t) / params.b), params.n3)), -1 / params.n1);
//       if (t > r) r = t;
//       points.x.push(Math.round(d*100)/100);
//       points.y.push(t);
//     });
//     points.y = points.y.map(function(d, i){ return Math.round(d / r*100)/100; });
//     return points;
//   }
//   var superformula1 = superformulaGenerator({m: 3, n1: 1, n2: 30, n3: 3, a: 1, b: 1});
//   var superformula2 = superformulaGenerator({m: 10, n1: 4, n2: -10, n3: 50, a: 1, b: 1});
//   var superformula3 = superformulaGenerator({m: 10, n1: 3, n2: 0.6, n3: 0, a: 1, b: 1});
//     $.ajax({
//         type: "post",
//         url: "Home/GenDB",
//         data: {
//             x : superformula3.x,
//             y : superformula3.y,
//             loai : 6
//         },
//         success: function (response) {
            
//         }
//     });
//   var configs = [
     
//       {data: [
        //     {t: superformula1.x, r: superformula1.y, geometry: µ.DOT, name: 'loại', dotType:"triangle-down", dotSize: 35, opacity: 0.8},
//             {t: superformula2.x, r: superformula2.y, geometry: µ.DOT, name: 'm19-na100-nb50-nc50', dotType:"cross", dotSize: 35, opacity: 0.8},
//             {t: superformula3.x, r: superformula3.y, geometry: µ.DOT, name: 'm5-na2-nb7-nc7', dotSize: 35, opacity: 0.8}
//      ],



//             layout: {title: 'Dot Plot', margin: {top: 0, bottom: 0, left: 5, right: 10}, angularAxis: {visible: false}, radialAxis: {visible: false}}},
      
//   ];
  
//   configs.forEach(function(_config){
//       var config = {layout: {width: 400, height: 400}};
//       µ.util.deepExtend(config, _config);
//       micropolar.Axis().config(config).render(d3.select('body').append('div'));
//   });