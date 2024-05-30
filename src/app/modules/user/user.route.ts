import express, { NextFunction, Request, Response } from 'express'
import { userController } from './user.controller';


const route = express.Router()

const armyProtector = (req: Request, res: Response, next: NextFunction) => {
    console.log('object route Hi guys')
    next()
}

route.post('/create-student', armyProtector, userController.createStudent)



export const userRoute = route;