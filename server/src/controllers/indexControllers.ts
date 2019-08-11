import { Request, Response} from 'express';

class IndexController{
    public index (req:Request, res:Response) {
        res.json({text:'jahsdka'})
    } 
}

export const indexController = new IndexController();
