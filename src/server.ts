import express from 'express';
import categoryRoutes from './routes/Category.routes';

const app = express();

app.use(express.json());

app.use("/categories", categoryRoutes)

app.get("/", (req, res) => {
  return res.json({ message: "Funfando" })
})

app.listen(3000);