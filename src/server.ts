
import express from 'express';
import {Request, Response } from "express";

export default class Server {
  readonly port: number;


  constructor(port: number) {
    this.port = port;
  }


 



  start() {
    const app = express()
    app.get('/hello', (req: Request, res: Response) => {
      res.send('it\'s works ');
    })
    app.listen(this.port, () => {
      console.log('starting server');
    })
  }
}