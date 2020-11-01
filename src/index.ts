import express, { Application, Request, Response, NextFunction } from 'express';


const app: Application = express();

app.set("view engine", "ejs");

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.render("something");
});

app.listen(12345, () => { console.log("server running") })
