var {toDoList}=require('../model/toDoList')

exports.getList=(req,res,next)=>{
    console.log("enter in list")
    toDoList.find({}).then((listData)=>{
        console.log(listData)
        res.status(200).json({list:listData})
    }).catch(err=>{
        console.log("Error in getList")
        console.log(err)
        res.status(500).json({list:null})
    })
}

exports.addTask=(req,res,next)=>{
    console.log(req.body)
    var addInListData=new toDoList(req.body)
    addInListData.save().then((data)=>{
        console.log(data)
        res.status(200)
    }).catch(err=>{
        console.log("Error in addTask")
        console.log(err)
        res.status(500)
    })
}


exports.getTask=(req,res,next)=>{
    var id=req.params.id
    toDoList.findById(id).then((data)=>{
        res.status(200).json({list:data})
    }).catch(err=>{
        console.log("Error in getTask")
        console.log(err)
        res.status(500).json({list:null})
      })
}

exports.removeTask=(req,res,next)=>{
   var id=req.params.id
   toDoList.findByIdAndDelete(id).then((data)=>{
       res.status(200)
   }).catch(err=>{
    console.log("Error in removeTask")
    console.log(err)
       res.status(500)
   })
}


// exports.editTask=(req,res,next)=>{
//     toDoList.findByIdAndUpdate(req.params.id,req.body,{upsert: true}).then((data)=>{
//         console.log(data)
//         res.status(200).json({data:data})
//     }).catch((err)=>{
//       console.log("Error in editTask") 
//       console.log(err)
//       res.status(500)       
//     })
// }

exports.changeStatus=(req,res,next)=>{
 var id=req.params.id
 var status=req.params.status
 //console.log(req.params)
 toDoList.findByIdAndUpdate(id,{$set: { hasDone :req.body.hasDone}},{new:true}).then((data)=>{
     console.log(data)
     res.status(200)
 }).catch(err=>{
     console.log(err)
     res.status(500)
 })
}
