var main = {
    init: function () {
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
                    micropolar.Axis().config(config).render(d3.select("#skyplot").append("span"));
                });
            },
        });


        var heatmapInstance = h337.create({
            container: document.querySelector('#heatmap')
        });
        // now generate some random data
        var points = [];
        var max = 0;
        var width = 840;
        var height = 400;
        var len = 200;

        while (len--) {
            var val = Math.floor(Math.random() * 100);
            max = Math.max(max, val);
            var point = {
                x: Math.floor(Math.random() * width),
                y: Math.floor(Math.random() * height),
                value: val
            };
            points.push(point);
        }
        var data = {
            max: max,
            data: points
        };
        heatmapInstance.setData(data);
    }
}

main.init();





