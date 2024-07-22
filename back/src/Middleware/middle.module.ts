import { NextFunction, Request, Response } from "express";

export function loggerMiddleware (req: Request, res: Response, next: NextFunction) {
    const dateTime = new Date().toLocaleString();
    console.log(`[${dateTime}] ${req.method} ${req.originalUrl}`);

    next();
};

