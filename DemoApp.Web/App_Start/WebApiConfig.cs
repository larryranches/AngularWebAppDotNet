using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace DemoApp.Web
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes

            var folderPath = HttpContext.Current.Server.MapPath(HttpRuntime.AppDomainAppVirtualPath + "/App");
            foreach (var folder in new DirectoryInfo(folderPath).GetDirectories())
            {
                var areaPath = folder.Name;

                //config.Routes.MapHttpRoute(
                //    name: areaPath + "DefaultApi",
                //    routeTemplate: "App/" + areaPath + "/Api/{controller}/{id}",
                //    defaults: new { id = RouteParameter.Optional }
                //);

                config.Routes.MapHttpRoute(
                    name: areaPath + "CustomApi",
                    //routeTemplate: "api/{controller}/{action}" 
                    routeTemplate: "App/" + areaPath + "/Api/{controller}/{action}",
                    defaults: new { id = RouteParameter.Optional }
                );

            }

            var appXmlType = config.Formatters.XmlFormatter.SupportedMediaTypes.FirstOrDefault(t => t.MediaType == "application/xml");
            config.Formatters.XmlFormatter.SupportedMediaTypes.Remove(appXmlType);
        }
    }
}
