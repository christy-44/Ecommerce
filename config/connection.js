const mongoClient=require('mongodb').MongoClient
const state={
    db:null
}



module.exports.connect=function(done)
{
    const url='mongodb+srv://christy:Christy1804@taleoftime.9dguyad.mongodb.net/?retryWrites=true&w=majority'
    const dbname='ecommerce'

    mongoClient.connect(url,(err,data)=>{
        if(err)
        return done(err)
        state.db=data.db(dbname)
         done()
         
    })
}

// module.exports.connect=function(done)
// {
//     const url='mongodb://localhost:27017'
//     const dbname='ecommerce'

//     mongoClient.connect(url,(err,data)=>{
//         if(err)
//         return done(err)
//         state.db=data.db(dbname)
//          done()
         
//     })
// }

module.exports.get=function(){
    return state.db
}