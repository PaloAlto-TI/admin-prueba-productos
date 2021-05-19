import express, { json } from 'express';
import morgan from 'morgan';

import projectRoutes from './routes/projects.js';
import tasksRoutes from './routes/tasks.js';

const app = express();

app.use(morgan('dev'));
app.use(json());
app.use('/api/projects',projectRoutes);
app.use('/api/tasks',tasksRoutes);


export default app;