var mongoose=require('mongoose')
const toDoListSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    hasDone:{
        type:Boolean,
        default:false
    },
    dueDate:{
        type:Date,
        required:true
    }
});

const toDoList=mongoose.model('toDoList',toDoListSchema);
module.exports={toDoList};