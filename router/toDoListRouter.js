

const express=require("express");
const router=express.Router();
const toDoListController=require('../controller/toDoListController');
router.get('/',toDoListController.getList)
router.post('/',toDoListController.addTask)
router.get('/getTask/:id',toDoListController.getTask);
router.delete('/:id',toDoListController.removeTask);
router.put('/:id',toDoListController.changeStatus)
module.exports=router;