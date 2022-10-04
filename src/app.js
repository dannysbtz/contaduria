import express from "express";
import indexRoutes from "./routes/index.routes";
import path from "path";
import { create } from "express-handlebars";
import morgan from "morgan";
import override from "method-override"

const app = express();

//views
app.set("views", path.join(__dirname, "/views"));

//Handlebars
var hbs = create({
  layoutsDir: path.join(app.get("views"), "layouts"),
  defaultLayout: "main",
  extname: ".hbs",
});

app.engine(".hbs", hbs.engine);

app.set("view engine", ".hbs");

//midddlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(override("_method"));

//routes
app.use(indexRoutes);

//static files
app.use(express.static(path.join(__dirname,"/public")));
export default app;
