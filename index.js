import mainRouter from "./src/routers/index.js";
import express, { json } from "express";
const app = express();
app.use(json());
import expressJSDocSwagger from "express-jsdoc-swagger";

const options = {
  info: {
    version: "1.0.0",
    title: "API Documentation",
    description: "Dokumentasi api untuk auth dan crud product"
  },
  filesPattern: "./**/*.js",
  // eslint-disable-next-line no-undef
  baseDir: __dirname,
  swaggerUIPath: "/docs"
};

expressJSDocSwagger(app)(options);


app.use(("/"), mainRouter);

app.get("/", (req, res) => {
  res.json({
    Success: true,
    Messange: "Back end Running"
  });
});

app.listen(8080, () => {
  console.log("Back end Running on port http://localhost:8080");
});
