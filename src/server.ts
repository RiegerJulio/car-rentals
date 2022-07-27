import express from 'express';
import swaggerUi from 'swagger-ui-express';
import router from './routes';
import swaggerJson from './swagger.json';
import "./database";


const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));

app.use(router);

app.get("/", (req, res) => {
  return res.json({ message: "Funfando" })
})

app.listen(3000);