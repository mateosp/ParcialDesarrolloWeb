import 'kleur/colors';
import { g as decodeKey } from './chunks/astro/server_CZqtZvMq.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CVqTtrZT.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/mateosuarezpaez/Desktop/Proyectos/Parcial-DesarrolloWeb/Parcial-DesarrolloWeb/Parcial__2/","cacheDir":"file:///Users/mateosuarezpaez/Desktop/Proyectos/Parcial-DesarrolloWeb/Parcial-DesarrolloWeb/Parcial__2/node_modules/.astro/","outDir":"file:///Users/mateosuarezpaez/Desktop/Proyectos/Parcial-DesarrolloWeb/Parcial-DesarrolloWeb/Parcial__2/dist/","srcDir":"file:///Users/mateosuarezpaez/Desktop/Proyectos/Parcial-DesarrolloWeb/Parcial-DesarrolloWeb/Parcial__2/src/","publicDir":"file:///Users/mateosuarezpaez/Desktop/Proyectos/Parcial-DesarrolloWeb/Parcial-DesarrolloWeb/Parcial__2/public/","buildClientDir":"file:///Users/mateosuarezpaez/Desktop/Proyectos/Parcial-DesarrolloWeb/Parcial-DesarrolloWeb/Parcial__2/dist/client/","buildServerDir":"file:///Users/mateosuarezpaez/Desktop/Proyectos/Parcial-DesarrolloWeb/Parcial-DesarrolloWeb/Parcial__2/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.Cmgxpz53.css"}],"routeData":{"route":"/dashboard","isIndex":false,"type":"page","pattern":"^\\/dashboard\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard.astro","pathname":"/dashboard","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.Cmgxpz53.css"}],"routeData":{"route":"/explorar","isIndex":false,"type":"page","pattern":"^\\/explorar\\/?$","segments":[[{"content":"explorar","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/explorar.astro","pathname":"/explorar","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.Cmgxpz53.css"}],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.Cmgxpz53.css"}],"routeData":{"route":"/perfil","isIndex":false,"type":"page","pattern":"^\\/perfil\\/?$","segments":[[{"content":"perfil","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/perfil.astro","pathname":"/perfil","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.Cmgxpz53.css"}],"routeData":{"route":"/proyectos","isIndex":false,"type":"page","pattern":"^\\/proyectos\\/?$","segments":[[{"content":"proyectos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/proyectos.astro","pathname":"/proyectos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.Cmgxpz53.css"}],"routeData":{"route":"/register","isIndex":false,"type":"page","pattern":"^\\/register\\/?$","segments":[[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/register.astro","pathname":"/register","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.Cmgxpz53.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/mateosuarezpaez/Desktop/Proyectos/Parcial-DesarrolloWeb/Parcial-DesarrolloWeb/Parcial__2/src/pages/dashboard.astro",{"propagation":"none","containsHead":true}],["/Users/mateosuarezpaez/Desktop/Proyectos/Parcial-DesarrolloWeb/Parcial-DesarrolloWeb/Parcial__2/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/mateosuarezpaez/Desktop/Proyectos/Parcial-DesarrolloWeb/Parcial-DesarrolloWeb/Parcial__2/src/pages/login.astro",{"propagation":"none","containsHead":true}],["/Users/mateosuarezpaez/Desktop/Proyectos/Parcial-DesarrolloWeb/Parcial-DesarrolloWeb/Parcial__2/src/pages/proyectos.astro",{"propagation":"none","containsHead":true}],["/Users/mateosuarezpaez/Desktop/Proyectos/Parcial-DesarrolloWeb/Parcial-DesarrolloWeb/Parcial__2/src/pages/register.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/dashboard@_@astro":"pages/dashboard.astro.mjs","\u0000@astro-page:src/pages/explorar@_@astro":"pages/explorar.astro.mjs","\u0000@astro-page:src/pages/login@_@astro":"pages/login.astro.mjs","\u0000@astro-page:src/pages/perfil@_@astro":"pages/perfil.astro.mjs","\u0000@astro-page:src/pages/proyectos@_@astro":"pages/proyectos.astro.mjs","\u0000@astro-page:src/pages/register@_@astro":"pages/register.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/mateosuarezpaez/Desktop/Proyectos/Parcial-DesarrolloWeb/Parcial-DesarrolloWeb/Parcial__2/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DpiFUm8S.mjs","\u0000@astrojs-manifest":"manifest_CmIum8m1.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/dashboard.Cmgxpz53.css","/favicon.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"PmLxhSjk5P9zuWifpM7bSFHvFyO/Aq+wJVoZNXvK1wg="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
