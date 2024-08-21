import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import connectDB from "./app/databases/mongo.database.js";
import registerRoutes from "./app/middleware/app.middleware.js";

dotenv.config();

// Constants
const app = express();
const port = process.env.PORT;
const swaggerDocument = YAML.load("./swagger.yaml");

// Connect MongoDB
connectDB();

// const allowedOrigins = ['http://localhost:5173', 'https://fnb-web.vercel.app'];

// app.use(cors({

//   origin: 'http://localhost:5173',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
// }));

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
registerRoutes(app);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
    res.send("Hello world!!");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
