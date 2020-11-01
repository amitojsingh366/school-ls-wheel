import express, { Application, Request, Response, NextFunction } from 'express';
import path from "path";
import serveindex from "serve-index";

const port = 12345;
const app: Application = express();

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use('/static', express.static(path.join(__dirname, '../static')));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.render('wheel');
});

app.use('/static', serveindex(path.join(__dirname, '../static')));

app.listen(port, () => { console.log(`Server Running on port ${port}\nYou can visit it here: http://localhost:${port}`) })
