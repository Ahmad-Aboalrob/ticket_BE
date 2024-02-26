import client from '../../../connection.js'
const signUp=(req,res) =>{
    let query =`insert into employee (name,email,password) values ('${req.body.name}','${req.body.email}','${req.body.password}')`
    client.query(query, (err) => {
        if (!err) {
            
         res.send({success : true})
        }
        else {
            res.send({error:err.message})
         }
    }
       
    )
}
const signIn=(req,res) =>{
    let query =`select * from employee where email = '${req.body.email}' AND password = '${req.body.password}'`
    
    client.query(query, (err,result) => {
        if (!err) {
            if (result.rowCount > 0) {
            
                res.send({success : true, employee : result.rows})
               }
               else {
                   res.send({success : false, error:"incorrect email or password"})
       
               }
        } else {
            console.log(err)
            res.send({error :err.message})
        }
       
        
    }
       
    )
}
const getEmployeeByID=(req,res) =>{
    let query =`select * from employee where id=${req.body.id}`
    
    client.query(query, (err,result) => {
        if (!err) {
            if (result.rowCount > 0) {
            
                res.send({success : true, employee : result.rows})
               }
               else {
                   res.send({success : false, error:"Incorrect ID !"})
       
               }
        } else {
            console.log(err)
            res.send({error :err.message})
        }
       
        
    }
       
    )
}
const update=(req,res) => {
    let query = `update employee set name='${req.body.name}', email='${req.body.email}',
    password='${req.body.password}' where id=${req.body.id}`
    client.query(query, (err,result) => {
        if (!err) {
            res.send({success:true})
        } else {
            console.log(err)
            res.send({success:false,error :err.message})
        }
       
        
    })
}

export {signUp,signIn,update,getEmployeeByID}