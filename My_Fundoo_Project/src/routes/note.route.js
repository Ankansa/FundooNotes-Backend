import express from 'express';
import * as noteController from '../controllers/note.controller';
import { newNoteValidator } from '../validators/note.validator';
import { userAuth } from '../middlewares/auth.middleware';
import { redisData } from '../middlewares/redisMidwares';



const noteRouter = express.Router();

//route to create a new note

noteRouter.post('/',newNoteValidator,userAuth,noteController.newNote );

//route to get all note

noteRouter.get('/',userAuth,redisData,noteController.getAllNote)

//route to get one note

noteRouter.get("/:_id",userAuth,noteController.getOneNote)

//route to update note

noteRouter.put("/:_id",userAuth,noteController.UpdateNote)

// Delete Note ##############

noteRouter.delete("/:_id",userAuth,noteController.deleteNote)

// Archive Note ##############

noteRouter.put("/archive/:_id",userAuth,noteController.archive)

// Unarchive Note ##############

noteRouter.put("/unarchive/:_id",userAuth,noteController.Unarchive)


// Move to Trash and remove from trash Note ##############

noteRouter.put("/movetrash/:_id",userAuth,noteController.movetrash)


// Move to Trash and remove from trash Note ##############

noteRouter.put("/removetrash/:_id",userAuth,noteController.removetrash)

export default noteRouter;