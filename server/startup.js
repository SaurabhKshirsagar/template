var readline = require("readline"),
  webpack = require("webpack"),
  webpackConfig = require("../webpack.config.js"),
  compiler = webpack(webpackConfig),
  path = require("path"),
  bodyParser = require("body-parser"),
  npm = require("./npminstall"),
  express = require("express"),
  _ = require("lodash"),
  compression = require("compression");

var app;
let loopback = require("loopback"), fs = require("fs");
//loopback.createModel("Employee",{"name":{required:true}});

function startExpress() {
  app = express();
  var port = process.env.PORT || 8091;
  app.set("port", port);
  console.log("hosting express server on port " + port + "...");

  app.get("/listUsers", function(req, res) {
    fs.readFile(__dirname + "/" + "users.json", "utf8", function(err, data) {
      console.log(data);
      res.end(data);
    });
  });

  // Add webpack HMR endpoints
  if (process.env.NODE_ENV != "production") {
    app.use(
      require("webpack-dev-middleware")(compiler, {
        noInfo: true,
        stats: {
          colors: true
        },
        publicPath: "/"
      })
    );

    app.use(require("webpack-hot-middleware")(compiler));
  }

  // turn on compression
  app.use(compression());

  // index.html, css & js
  app.use(express.static(__dirname + "/../build"));
  // images
  app.use(express.static(__dirname + "/../client/images"));
  app.use("/locale", express.static(__dirname + "/../client/locale"));
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  app.use(bodyParser.json({ limit: "50mb" }));

  //npm install apis
  app.post("/npminstall", function(req, res) {
    let packagename = req.body.packagename;
    let data = {};

    npm
      .install([packagename], {
        cwd: __dirname
      })
      .then(function(e) {
        data.error = null;
        data.message = "Package installed";
        res.send(data);
      })
      .catch(function(e) {
        data.error = true;
        data.message = "unable to install package";
        res.send(data);
      });
  });

  app.post("/npmlist", function(req, res) {
    let packagename = req.body.packagename;
    let data = {};
    npm
      .list(__dirname)
      .then(function(packages) {
        if (0 <= _.indexOf(packages, packagename)) {
          data.error = null;
          data.message = `${packagename} already installed.`;
          res.send(data);
        } else if (0 <= _.indexOf(packages, `UNMET PEER DEPENDENCY ${packagename}`)) {
          data.error = null;
          data.message = `${packagename} installed with UNMET PEER DEPENDENCY `;
          res.send(data);
        }
          data.error = true;
          data.message = `${packagename} is not installed. Try with packagename@VERSION`;
          res.send(data);
      })
      .catch(function(e) {
        data.error = true;
        data.message = `${packagename} is not installed. Try with packagename@VERSION`;
        res.send(data);
      });
  });

  //if you are adding more routes then ensure that app.get('*',...)  remains the last route.
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../build/index.html"));
  });

  app.listen(app.get("port"));
  console.log("express server started.");
  if (process.env.NODE_ENV != "production") {
    console.log("Please wait for webpack build to finish...");
  }
}

if (process.env.NODE_ENV != "production") {
  startExpress();
} else {
  compiler.watch(
    {
      aggregateTimeout: 100
    },
    function(err, stats) {
      var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      if (err) {
        console.error(err);
        rl.question(
          "\nWebpack bundling failed, press return to exit...",
          function() {
            process.exit(1);
          }
        );
        return;
      }
      console.log(stats.toString({ colors: true }));
      var jsonStats = stats.toJson();
      if (jsonStats.errors.length > 0) {
        rl.question(
          "\nWebpack bundling failed, press return to exit...",
          function() {
            process.exit(1);
          }
        );
        return;
      }

      console.log("webpack bundle built.");
      if (!app) {
        startExpress();
      } else {
        console.log("express server is already running...");
      }
    }
  );
}
