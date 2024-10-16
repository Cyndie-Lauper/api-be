import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import connectDB from "./app/databases/mongo.database.js";
import registerRoutes from "./app/middleware/app.middleware.js";
import errorHandler from "./app/middleware/errorHandler.js";

dotenv.config();

// Constants
const app = express();
const port = process.env.PORT || 3000;
const swaggerPath = path.join(process.cwd(), "swagger.yaml");
const swaggerDocument = YAML.load(swaggerPath);

// Connect MongoDB
connectDB();

// const allowedOrigins = ['http://localhost:5173', 'https://'];

// app.use(cors({

//   origin: 'http://localhost:5173',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
// }));

app.use(cors());
app.use(morgan("combined"));
app.use(helmet());
app.use(express.json());
app.use(errorHandler);

//middleware
registerRoutes(app);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
    res.send("Hello world!!");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
