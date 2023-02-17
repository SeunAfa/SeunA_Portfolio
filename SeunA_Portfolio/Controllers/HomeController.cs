using Microsoft.AspNetCore.Mvc;
using SeunA_Portfolio.Models;
using System.Diagnostics;

namespace SeunA_Portfolio.Controllers
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
            return View();
        }

        public IActionResult PortfolioProjects()
        {
            return View();
        }

        public IActionResult ProjectOne()
        {
            return View();
        }

        public IActionResult ProjectTwo()
        {
            return View();
        }

        public IActionResult ProjectThree()
        {
            return View();
        }

        public IActionResult ProjectFour()
        {
            return View();
        }

        public IActionResult ProjectFive()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}