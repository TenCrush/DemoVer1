using System;
using System.Collections.Generic;
using System.Text;

namespace Entity.ViewModels
{
    public class ViewChartDataModel
    {
       
        public string Ten { get; set; }
        public string KiHieu { get; set; }
        public List<float> DsViTriX { get; set; }
        public List<float> DsViTriY { get; set; }
    }
}
