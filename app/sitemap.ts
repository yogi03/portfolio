import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import projectsData from "../content/projects.json";

function getStaticRoutes(dir: string, basePath: string = ""): string[] {
  let routes: string[] = [];
  
  if (!fs.existsSync(dir)) return routes;
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (
        entry.name === "api" ||
        entry.name.startsWith("_") ||
        entry.name.startsWith("[")
      ) {
        continue;
      }
      
      const isRouteGroup = entry.name.startsWith("(") && entry.name.endsWith(")");
      const newBasePath = isRouteGroup ? basePath : `${basePath}/${entry.name}`;
      
      routes = routes.concat(
        getStaticRoutes(path.join(dir, entry.name), newBasePath)
      );
    } else if (entry.name.startsWith("page.")) {
      routes.push(basePath === "" ? "/" : basePath);
    }
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://notyogi.space";
  const appDir = path.join(process.cwd(), "app");
  
  const staticPaths = getStaticRoutes(appDir);
  
  const staticRoutes: MetadataRoute.Sitemap = staticPaths.map((route) => {
    const isHome = route === "/";
    return {
      url: `${baseUrl}${isHome ? "" : route}`,
      lastModified: new Date(),
      changeFrequency: isHome ? "weekly" : "monthly",
      priority: isHome ? 1 : 0.8,
    };
  });

  const dynamicRoutes: MetadataRoute.Sitemap = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
