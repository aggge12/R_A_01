using LiteDB;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Helpers;
using System.Web.Http;
using System.Web.Http.Cors;

namespace LabbAPPBrew.Controllers
{
    public class ValuesController : ApiController
    {

        LiteDatabase db = new LiteDatabase(HttpContext.Current.Server.MapPath("~/App_Data/MyData.db"));

        // GET api/values
        public ProductService.Product GetProduct(int id)
        {
            ProductService.ProductServiceClient client = new ProductService.ProductServiceClient();
            ProductService.Product p = client.GetProductDetails(id);
            return p;
        }

        // GET api/values/5
        public object getFavorites(int id)
        {
            var favorites = db.GetCollection<Favorites>("favorites");
            List<Favorites> results = favorites.Find(x => x.userid == id).ToList<Favorites>();
            return results;
        }

        // POST api/values
        [HttpGet]
        public HttpStatusCode SaveNew(int userid, int productid)
        {
            var favorites = db.GetCollection<Favorites>("favorites");
            Favorites f = new Favorites();
            f.userid = userid;
            f.productid = productid;
            if (favorites.Find(x => (x.userid == userid) && (x.productid == productid)).ToList<Favorites>().Count > 0)
            {
                return HttpStatusCode.Conflict;
            }
            else
            {
                favorites.Insert(f);
            }

            return HttpStatusCode.OK;
        }

        // PUT api/values/5
        [HttpGet]
        public HttpStatusCode RemoveFavorite(int userid, int productid)
        {
            var favorites = db.GetCollection<Favorites>("favorites");
            favorites.Delete(x => (x.userid == userid) && (x.productid == productid));
            return HttpStatusCode.OK;
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
        [HttpGet]
        public async System.Threading.Tasks.Task<JObject> getCatAsync()
        {
            HttpClient client = new HttpClient();
            string path = "https://catfact.ninja/fact";
            var response =  await client.GetAsync(path);
            HttpContent content = response.Content;
            
            // ... Read the string.

            string result = await content.ReadAsStringAsync();
            JObject o = JObject.Parse(result);
            
            return o;
        }

    }
}
