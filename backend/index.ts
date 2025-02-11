import express from 'express';
import cors from 'cors';
import pool from "./config/database";
import jobRoutes from './routes/job-routes';
import applicationRoutes from './routes/application-routes';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', jobRoutes);
app.use('/api', applicationRoutes);


// Start the Express server
const PORT = 5000;

app.listen(PORT, () => {
  pool.connect().then(() => console.log("DB Connected"));
  console.log(`Server is running on http://localhost:${PORT}`);
});