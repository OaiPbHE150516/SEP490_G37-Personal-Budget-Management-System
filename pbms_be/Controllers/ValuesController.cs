using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using pbms_be.Data;
using System.Text;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace pbms_be.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {

        private readonly PbmsDbContext _context;

        public ValuesController(PbmsDbContext context)
        {
            _context = context;
        }

        // GET: api/<ValuesController>
        [HttpGet]
        public IEnumerable<Sample> Get()
        {
            return _context.Sample;
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public Sample Get(int id)
        {
            var result = _context.Sample.Find(id);
            return result;
        }
    }
}