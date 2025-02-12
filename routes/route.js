import express from 'express';
import { getUsers,postUsers,patchUser, deleteUser,getUsersByName,getUserById} from '../controllers/User-controller.js';
import { getPost,createPost,updatePost,deletePost,likePost,addComment,deleteComment,getAPost,getPotd } from '../controllers/post.js';
import { getMembers,getTeams,postMembers,postTeams } from '../controllers/teams.js';
import { getEvents,postEvents } from '../controllers/eventControllers.js';
import * as controller from '../controllers/quizController.js'


const router =express.Router(); 

router.get("/users/:id",getUserById);
router.get("/users/search/:key",getUsersByName);
router.get('/users',getUsers);

router.post("/users",postUsers);

router.patch("/users/:id",patchUser);
router.delete("/users/:id",deleteUser);

router.post("/posts",createPost);
router.get("/posts",getPost);
router.get("/posts/:id",getAPost);
router.patch("/posts/:id",updatePost);
router.delete("posts/:id",deletePost);
router.put("/posts/:id/like",likePost);
router.put("/posts/:id/comment",addComment);
router.put("/posts/:id/comment/:commentId",deleteComment);
router.get("/potd",getPotd); //Potd=post of the day

//teams and members
router.get("/teams",getTeams);
router.get("/members",getMembers);

router.post("/teams",postTeams);
router.post("/members",postMembers);
//events 
router.get("/events",getEvents);
router.post("/events",getEvents);


router.route('/questions')
.get(controller.getQuestions)  //get request
.post(controller.insertQuestions) //post request
.delete(controller.deleteQuestions) //delete requestt

router.route('/result')
   .get(controller.getResult)
   .post(controller.postResult)
   .delete(controller.deleteResult)

export default router;