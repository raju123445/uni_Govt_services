import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connection from "./connection.js";
import loginRoute from "./route/login.js";
import service_route from "./route/service_route.js";
const app = express();

dotenv.config();

const port = process.env.PORT || 3001;


const allowedOrigins = [
  "http://localhost:3000",
  "https://uni-govt-services.vercel.app",
  "http://localhost:5173/",
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
// app.use(cors());
app.use(express.json());

connection();

app.get("/", (req, res) => {
  res.send("Backend API is running successfully 🚀");
});

app.get("/login", (req, res) => {
  res.send("This is login🚀");
});

app.use("/api", loginRoute);

app.use("/api", service_route);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
