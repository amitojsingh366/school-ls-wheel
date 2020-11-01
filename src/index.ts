import express, { Application, Request, Response, NextFunction } from 'express';
import path from "path";

const app: Application = express();

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use('/static', express.static(path.join(__dirname, '../static')));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.render('wheel');
});

app.listen(12345, () => { console.log("server running") })
