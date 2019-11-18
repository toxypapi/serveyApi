
import express from 'express';
import {Request, Response } from "express";
import bodyparser from "body-parser";

export default class Server {
  readonly port: number;
  
  constructor(port: number) {
    this.port = port;
  }

  start() {
    const app = express()

    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    // parse application/x-www-form-urlencoded
    app.use(bodyparser.urlencoded({ extended: false }))
     
    // parse application/json
    app.use(bodyparser.json())

    app.get('/servey', (req: Request, res: Response) => {
      res.send('it\'s works ');
    })

    app.post('/servey', (req: Request, res: Response) => {
      console.log(req.body);
    })
    app.listen(this.port, () => {
      console.log('starting server');
    })
  }
}