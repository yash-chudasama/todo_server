

const express=require("express");
const router=express.Router();
const toDoListController=require('../controller/toDoListController');
router.get('/',toDoListController.getList)
router.post('/addTask',toDoListController.addTask)
router.get('/getTask/:id',toDoListController.getTask);
router.delete('/:id',toDoListController.removeTask);
router.put('/editTask/:id',toDoListController.editTask)
router.put('/changeStatus/:id',toDoListController.changeStatus)

module.exports=router;