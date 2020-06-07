using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DemoVer1.Models;
using Entity.Models;
using Microsoft.EntityFrameworkCore.Internal;
using Entity.ViewModels;

namespace DemoVer1.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly DemoAppDbContext  _dbContext;

        public HomeController(ILogger<HomeController> logger, DemoAppDbContext dbContext)
        {
            _logger = logger;
            _dbContext = dbContext;
        }

        public IActionResult Index()
        {
            return View();
        }

        public async Task<List<ViewChartDataModel>> GetChartData()
        {
            List<ViewChartDataModel> dsViewsData = new List<ViewChartDataModel>();
            var loaiThietBis = _dbContext.LoaiThietBis.ToList();
            var thietBis = _dbContext.ThietBis.ToList();
            foreach (var loaiThietBi in loaiThietBis)
            {
                var thietBiThoaMan = thietBis.Where(m => m.LoaiId == loaiThietBi.Id).ToList();
                var dsViTriX = thietBiThoaMan.Select(x => x.ViTriX).ToList();
                var dsViTriY = thietBiThoaMan.Select(x => x.ViTriY).ToList();

                dsViewsData.Add(new ViewChartDataModel()
                {
                    Ten = loaiThietBi.TenLoai,
                    KiHieu = loaiThietBi.KiHieu,
                    DsViTriX = dsViTriX,
                    DsViTriY = dsViTriY,
                    
                });
            }
            return dsViewsData;
        }


        [HttpPost]
        public void GenDB(float[] x, float[] y,int loai)
        {
            for (int i = 0; i < 100; i++)
            {
                _dbContext.ThietBis.Add(new ThietBi()
                {
                    LoaiId = loai,
                    ViTriX = x[i],
                    ViTriY = y[i]
                });
            }
            _dbContext.SaveChanges();

        }

    }
}
