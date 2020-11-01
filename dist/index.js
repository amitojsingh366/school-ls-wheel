"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const serve_index_1 = __importDefault(require("serve-index"));
const app = express_1.default();
app.set("views", path_1.default.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use('/static', express_1.default.static(path_1.default.join(__dirname, '../static')));
app.get("/", (req, res, next) => {
    res.render('wheel');
});
app.use('/static', serve_index_1.default(path_1.default.join(__dirname, '../static')));
app.listen(12345, () => { console.log("server running"); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBZ0Y7QUFDaEYsZ0RBQXdCO0FBQ3hCLDhEQUFxQztBQUVyQyxNQUFNLEdBQUcsR0FBZ0IsaUJBQU8sRUFBRSxDQUFDO0FBRW5DLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDbkQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDOUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsaUJBQU8sQ0FBQyxNQUFNLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXRFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUFFLEVBQUU7SUFDN0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN4QixDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLHFCQUFVLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBR2xFLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBIn0=