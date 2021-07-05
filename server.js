const express = require("express");
const next = require("next");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");

const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(morgan("dev"));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(cookieParser("lkdjgdji32048708@##T"));
  server.use(
    expressSession({
      resave: false,
      saveUninitialized: false,
      secret: "lkdjgdji32048708@##T",
      cookie: {
        httpOnly: true,
        secure: false,
      },
    })
  );

  server.get("/product/:id/:name/:price", (req, res) => {
    const actualPage = "/product_detail";
    const queryParams = {
      id: req.params.id,
      name: req.params.name,
      price: req.params.price,
    };
    return app.render(req, res, actualPage, queryParams);
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(3000, () => {
    console.log("next + express running on 3000");
  });
});
