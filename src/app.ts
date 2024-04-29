
import express, { Application } from 'express';
import cors from 'cors'

export const app: Application = express();

app.use(express.json());
app.use(cors());

app.get('/healthy', (req, res) => {
    res.status(200).json(
        {
            success: true,
            message: 'Server is healthy'
        }
    );
})