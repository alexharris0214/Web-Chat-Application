import express from 'express'
const app = express();
const port = 3000;
import connectDB from './utils/DbConnect.js';
import messagingRoutes from './routes/messagingRoutes.js'
import userRoutes from '../routes/userRoutes.js'

connectDB()

app.use(express.json());

app.use('/api/messages', messagingRoutes)
app.use('/api/users', userRoutes)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
