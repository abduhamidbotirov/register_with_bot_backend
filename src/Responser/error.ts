import { Response } from "express"

export default (res:Response, error: string, code: number)=>{
    res.status(code).send({ 
        message: error,
        status:code
    })
 
}