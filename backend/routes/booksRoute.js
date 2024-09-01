import express from 'express';
const router = express.Router();
import { Book } from '../models/bookModel.js';


   router.post('/', async(request, response)=>{
    try {
       if(
        !request.body.title ||
        !request.body.author ||
        !request.body.publishYear
       )
       {
        return response.status(400).send({message: 'Send all require fields title, author,publishYear',
    })
       }
    
       const newBook ={
        title: request.body.title,
        author: request.body.author,
        publishYear: request.body.publishYear,
       }
    
       const book = await Book.create(newBook)
       return response.status(201).send(book);
    
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message})
    }
    })
    
    //get all the records from the database
    router.get('/',async(request, response)=>{
        try {
            const books = await Book.find({})
            return response.status(200).json(
            {
            count: books.length,
            data: books
        }
            );
        } catch (error) {
            console.log(error.message)
            response.status(500).send({message: error.message})
            
        }
    })
    //get the records from the database by id
    router.get('/:id',async(request, response)=>{
        try {
    
            const {id} = request.params;
            const book = await Book.findById(id)
            return response.status(200).json(book);
        } catch (error) {
            console.log(error.message)
            response.status(500).send({message: error.message})
            
        }
    })
    
    //update the record
    router.put('/:id', async (request, response)=>{
    try{
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
           )
           {
            return response.status(400).send({
            message: 'Send all require fields title, author,publishYear',
        })
           }
    
           const  {id} = request.params;
           const results = await Book.findByIdAndUpdate(id,request.body)
    if(!results){
        return response.status(404).json({message: 'Book not found'});
    }
        return response.status(200).send({message: 'Book Updated successfully'});
    
    } catch(error){
    console.log({message: error.message})
    }
    
    
    
    })
    
    router.delete('/:id',async(request, response)=>{
        try{
    const {id} = request.params;
    const results = await Book.findByIdAndDelete(id);
    if(!results){
        return response.status(404).json({message: 'Book not found'})
    }
    return response.status(200).send({message: 'Book deleted Successfully'});
    
        } catch(error){
    console.log(error.message);
        response.status(500).send({message: error.message})
    
        }
    
    })
    
    export default router;