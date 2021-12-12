import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.initilizeConfig();
    this.initializeConnection();
    this.initializeRoutes();
  }

  private initilizeConfig(): void {
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(express.json());
    this.app.use(bodyParser.json());
    this.app.use(cors());
  }

  private initializeRoutes(): void {
    // this.app.use('/', new GamesRoutes().router);
  }

  public listen(): void {
    this.app.listen(process.env.PORT || 3333, () => console.log('server running'));
  }

  private async initializeConnection(): Promise<void> {
    //
  }
}

export default App;
