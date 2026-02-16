import express from 'express';
import cors from 'cors';
import documentRoutes from './routes/documentRoutes.js';

class App {

  constructor() {
    this.app = express();
    this.setupMiddleware();
    //this.setupRoutes();
  }

  setupMiddleware() {
    this.app.use(cors());
    this.app.use(express.json());
  }

//   setupRoutes() {
//     this.app.use('/api/documents', documentRoutes);
//   }
}

export default new App().app;
