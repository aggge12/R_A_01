using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LabbAPPBrew
{
    public class Favorites
    {
        public int id { get; set; }
        public int userid { get; set; }
        public int productid { get; set; }

        public Favorites() { }
        public Favorites(int id, int userid, int productid)
        {
            this.id = id;
            this.userid = userid;
            this.productid = productid;
        }
    }
}