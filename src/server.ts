import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import usersRouter from "./routes/userRoutes";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/users", usersRouter);

// Inicializar archivos de datos si no existen
const dataDir = path.join(__dirname, "data");

if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

["users.json", "posts.json"].forEach(file => {
  const filePath = path.join(dataDir, file);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]");
  }
});

app.get("/", (req, res) => {
  res.send("Backend PWA-Final funcionando");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});