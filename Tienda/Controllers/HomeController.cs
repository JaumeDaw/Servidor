using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Tienda.Models;

namespace Tienda.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            MantenimientoArticulo man = new MantenimientoArticulo();
            
            return View(man.GetAll());
        }

        public IActionResult Privacy()
        {
            return View();
        }
        public IActionResult Alta() { 
            return View();
        }
        [HttpPost]
        public IActionResult Alta(IFormCollection collection)
        {
            MantenimientoArticulo ma = new MantenimientoArticulo();
            Articulo art = new Articulo();
            {
                art.Codigo = int.Parse(collection["codigo"]);
                art.Descripcion = collection["descripcion"];
                art.Precio = float.Parse(collection["precio"].ToString());
            }
            ma.Alta(art);
            return RedirectToAction("Index");
        }
        public IActionResult Delete(int cod)
        {
            MantenimientoArticulo ma = new MantenimientoArticulo();
            ma.Borrar(cod);
            return RedirectToAction("Index");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}