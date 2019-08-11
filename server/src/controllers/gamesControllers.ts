import { Request, Response} from 'express';
import pool from '../database';


class GamesController{

    public async list (req:Request, res:Response) {
        pool.query('SELECT * FROM libros', function(err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
        
    } 

    public async getOne (req:Request, res:Response): Promise<any> {
        const { id } = req.params;
        pool.query('SELECT * FROM libros WHERE id = ?',[id], function(err, result, fields) {
            if (err) throw err;
            //res.json(result);
        if ((result).length >0){
            return res.json((result)[0]);
        }
        res.status(404).json({text:'No se encontro ese libro'});
        });
    }


    public async create(req:Request, res:Response): Promise<void> {
        pool.query('INSERT INTO libros set ?', [req.body]);
        res.json ({text: 'Libro Creado'})
    }   
    
    public async delete(req:Request, res:Response): Promise<void> {
        const { id } = req.params;
        pool.query('DELETE FROM libros WHERE id = ?',[id], function(err, result, fields)  {
            if (err) throw err;
            res.json({text:'Se elimino el juego'});
        });        
    }

    public async update(req:Request, res:Response): Promise<void>{
        const { id } = req.params;
        pool.query('UPDATE libros set ? WHERE  id = ?',[req.body,[id]], function(err, result, fields) {
            if (err) throw err;
            res.json({text:'the book was update'});
        });   
    }
}

const gamesController = new GamesController();
export default gamesController;