import express from "express";

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
  namespace NodeJs {
    interface ProcessEnv {
      JWT_SECRET: string;
      MONGODB_URL: string;
    }
  }
}
