"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js/dist/zone-node");
require("reflect-metadata");
var core_1 = require("@angular/core");
// Express Engine
var express_engine_1 = require("@nguniversal/express-engine");
// Import module map for lazy loading
var module_map_ngfactory_loader_1 = require("@nguniversal/module-map-ngfactory-loader");
var compression = require('compression');
var express = require("express");
var path_1 = require("path");
// Faster server renders w/ Prod mode (dev mode never needed)
core_1.enableProdMode();
// Express server
var app = express();
// compress all responses
app.use(compression());
var PORT = process.env.PORT || 4000;
// * NOTE :: leave this as require() since this file is built Dynamically from webpack
var _a = require('./server/main'), AppServerModuleNgFactory = _a.AppServerModuleNgFactory, LAZY_MODULE_MAP = _a.LAZY_MODULE_MAP;
// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', express_engine_1.ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
        module_map_ngfactory_loader_1.provideModuleMap(LAZY_MODULE_MAP)
    ]
}));
app.set('view engine', 'html');
app.set('views', 'browser');
// Server static files from /browser
app.get('*.*', express.static('browser', {
    maxAge: '1y'
}));
// All regular routes use the Universal engine
app.get('*', function (req, res) {
    //this is for i18n
    var supportedLocales = ['en', 'es'];
    var defaultLocale = 'en';
    var matches = req.url.match(/^\/([a-z]{2}(?:-[A-Z]{2})?)\//);
    //check if the requested url has a correct format '/locale' and matches any of the supportedLocales
    var locale = (matches && supportedLocales.indexOf(matches[1]) !== -1) ? matches[1] : defaultLocale;
    res.render(locale + "/index", { req: req });
});
// Start up the Node server
app.listen(PORT, function () {
    console.log("Node Express server listening on http://localhost:" + PORT);
});
//# sourceMappingURL=server.js.map