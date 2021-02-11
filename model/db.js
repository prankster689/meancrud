var mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/crudDB",{ useNewUrlParser: true, useUnifiedTopology: true  },function(err)
{
    if(!err)
    {
        console.log("ok connected")
    }
})

