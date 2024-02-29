//MVC - model, view, controller design pattern
const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");

app.use(express.urlencoded({ extended:true })) //for form submission
app.use(express.json()) //json response
app.use(
    cors(
        { origin : "http://localhost:3000" }  //front end
    )
)

const userDB = [
    {
        id: 1,
        username: "admin",
        password: "password123",
        status: 1,
        email: "myTest@yahoo.com"
    },
    {
        id: 2,
        username: "staff",
        password: "123",
        status: 0,
        email: "staff@google.com"
    }

]
//CRUD  create, read, update, delete
const profileDB = [
    {
        id:1,
        firstname : "James",
        lastname : "Bond",
        phone : "97987",
        address : "New York USA",
        email : "james@yahoo.com",
    },
    {   
        id:2,
        firstname : "Peter",
        lastname : "Pan",
        phone : "97987",
        address : "California USA",
        email : "peter@yahoo.com",
    },
    {
        id:3,
        firstname : "Michael",
        lastname : "Jordan",
        phone : "97987",
        address : "California USA",
        email : "mic@google.com",
    },
    {
        id:4,
        firstname : "Vic",
        lastname : "Saints",
        phone : "9742342987",
        address : "CDO Mindanao",
        email : "vic@google.com",
    },
];

let obj = profileDB[2];
let pnumber = obj.phone;

const generateAccessToken = (user) =>{
  let token =  jwt.sign({ id: user.id, username: user.username, email: user.email }, "ThisMySecretKey", {});
  return token;       
}

const middlewareVerification = (req, res, next) => {
 const authHeader = req.headers.authorization;
 console.log(authHeader);
    if(authHeader) {
        const token = authHeader.split(" ")[1]; 
   
        jwt.verify(token, "ThisMySecretKey", (err, user)=>{
            if(err){
                return res.status(403).json("Invalid Token");
            }
            req.user = user;
            next();
            
        })
    } else {
        return res.status(403).json("Yor are not authenticated");
    }
}


app.get('/all-profiles', middlewareVerification, (req, res)=>{
    res.json(profileDB)
})

app.get('/one-profile/:id', (req, res)=>{
   const profileId = req.params.id;
   
   const userFound = profileDB.find( 
            (user)=>{
                return parseInt(profileId) === parseInt(user.id)   
            } 
    )
    //loop, fucntion itereate all of the items in the array
    if (userFound){
        res.json(userFound);
    } else {
        res.status(400).json("Invalid Id")
    }
})

app.put('/update-user/:userId', (req, res)=>{
    const user_id = req.params.userId;

    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let phone = req.body.phone;
    let address = req.body.address;
    let email = req.body.email;

    const updateUserRecord = {
        id: user_id,
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        address: address,
        email: email,
    }

   const updateThisRecord =  profileDB.findIndex( (obj) => obj.id == user_id );
   profileDB[updateThisRecord] = updateUserRecord;

   if (profileDB) {
        res.json(
            {
                code : "success",
                msg : "Update Done"
            }
        )
   } else {
      res.status(400).json(
        {
            code : "failed",
            msg : "Error encountered while updating"
        }
      )
   }

})
 // let x = [67, 8, 9, 50, 45]        
app.get('/delete-user/:userId', (req, res)=>{
    const user_id = req.params.userId;
    const indexValue =  profileDB.findIndex( (obj) => obj.id == user_id );
    profileDB.splice(indexValue, 1);

    if (profileDB) {
        res.json(
            {
                code : "success",
                msg : "Delete Done"
            }
        )
   } else {
      res.status(400).json(
        {
            code : "failed",
            msg : "Error encountered while deleting"
        }
      )
   }
    
})
 
app.post('/registration', (req, res)=>{
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let phone = req.body.phone;
    let address = req.body.address;
    let email = req.body.email;

    idCoount = profileDB.length + 1;
    const newRecord = {
        id: idCoount,
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        address: address,
        email: email,
    }
    
  const saveStatus = profileDB.push(newRecord);  
   if (saveStatus) {
     res.status(200).json(
        { code: "success", msg:"registration successful" }   
     )
   } else {
     res.status(401).json(
        { code: "failed", msg:"registration error in saving" }   
     )
   }

})

app.post('/login-validation/', (req, res)=>{
    let username_login = req.body.username;
    let password_login = req.body.password;

   const user = userDB.find(
        (ob)=>{
          return ob.username === username_login && ob.password === password_login 
        }
    );
    
    if (user) {
        const token = generateAccessToken(user);
        const myReturn = { code: "success", 
        msg : "Username and Password matched a record", 
        loginUser : user, 
        loginId : user.id,
        accessToken : token,
       }

        res.status(200).json(myReturn);

    } else {
       res.status(401).json({ code: "failed", msg:"Incorrect Username and Password"}) 
    }


})


const pageContent = [
    {
        id:'home',
        content:'sample content for home page'
    },
    {
        id:'about',
        content:'sample content for about'
    },
]

//these routes or end-points are for admin
app.get('/page-content', (req, res)=>{
   
   let pageId = req.body.pageContent; 
   let actualContent = req.body.contentValue;

   newObject = {
        id: pageId,
        content:actualContent,
   } 
    
   const contentIndex =  pageContent.findIndex( (obj) => obj.id === pageId );
   pageContent[contentIndex] = newObject;

   if (pageContent) {
    res.json(
        {
            code : "success",
            msg : "Saving Done",
            //obj: pageContent
        }
    )
    } else {
    res.status(400).json(
        {
            code : "failed",
            msg : "Error encountered while saving home page content"
        }
    )
    }

})


app.get('/page-content/:id', (req, res)=>{
    const pageId = req.params.id;

    const pageFound = pageContent.find( 
             (page) => {
                 return pageId === page.id  
             } 
     )
     if (pageFound){
         res.json(pageFound.content);
     } else {
         res.status(400).json("Invalid Id")
     }
 })


//HTTP METHODS
//GET, POST, PUT, HEAD, DELETE, PATCH
app.get('/:test/:num1/:num2', (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    //database query

    const twoNumbers = [
       
        {
           id : num1,
           name: "This is the num1",
           signal: true, 
        },
        {     id : num2,
            name: "This is the num 2",
            signal: true,   
        }
    ]

   // let sample = [num1, num2]

    //let z = parseInt(num1);

   // let m = "Hello WD95P";

    res.json(twoNumbers);
    
}
);


app.post('/save-data', (req, res) => {
    let fname = req.body.firstname;
    let lname = req.body.lastname;

    res.json([fname, lname])

})

app.put('/put-data/:id', (req, res) => {
     let fname = req.body.firstname;
    //let lname = req.body.lastname;

    let id = req.params.id;
   //update change firstname where id = id

    res.json([num1, fname])
})

app.delete('/delete/record/:id', (req, res)=>{
  
})


const todoDatabase = [
        {
        id:1,
        itemName: "Candy",
        itemDescription: "Sample description",
        price : 5.0,
        image : "https://m.media-amazon.com/images/I/51AmVUqqMdL.jpg", 
        },
        {
        id:2,
        itemName: "Shampoo",
        itemDescription: "Sample description",
        price : 7.0 ,
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTauXJhfnq_hqdMv0Bn7_tZVKUaAX4cY8k58w&usqp=CAU", 
        },

        {
         id:3,
         itemName: "Mouse",
         itemDescription: "Sample description",
         price : 20.0 ,
         image : "https://m.media-amazon.com/images/I/81eVPDBxWuL._AC_UF894,1000_QL80_.jpg", 
        },

        {
         id:4,
         itemName: "Keyboard",
         itemDescription: "Sample description",
         price : 50.0, 
         image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnLaKs8Y7xgOA18jqdngxOFQx2_nhPdep3A&usqp=CAU",
        },

 ];

app.post('/save-todo', (req, res) => {

    let itemName = req.body.ItemName;
    let itemDescription = req.body.ItemDescription;

    const newTodo = {
        id: todoDatabase.length + 1,
        itemName: itemName,
        itemDescription: itemDescription 
    }

   if ( todoDatabase.push(newTodo) ) {
        res.status(200).json( {code:'success', msg:'done saving'} )
   } else {
        res.status(400).json( {code:'failed', msg:'error encountered while saving'} )
   }

})

app.put('/update-todo/:todoId', (req, res)=>{
    const todo_id = req.params.todoId;

    let itemName = req.body.ItemName;
    let itemDescription = req.body.ItemDescription;

    const updateTodoRecord = {
        id: todo_id,
        itemName: itemName,
        itemDescription: itemDescription 
    }

   const indexOfTodo =  todoDatabase.findIndex( (obj) => obj.id == todo_id );

   todoDatabase[indexOfTodo] = updateTodoRecord;

   if (todoDatabase) {
        res.json(
            {
                code : "success",
                msg : "Update Done"
            }
        )
   } else {
      res.status(400).json(
        {
            code : "failed",
            msg : "Error encountered while updating"
        }
      )
   }

})
       

app.get('/get-todo-data', middlewareVerification, (req, res) => {
    res.json(todoDatabase);  
})


app.get('/get-todo/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    console.log(todoId)
    console.log(todoDatabase);
    const itemFound = todoDatabase.find( (item) => {  return todoId === item.id } ) 

     if (itemFound){
         res.status(200).json(itemFound);
     } else {
         res.status(400).json("Invalid Id")
     }

})
// let myArr = []
app.delete('/delete-todo/:todoId', (req, res)=>{
    const todo_id = req.params.todoId;
    const indexValue =  todoDatabase.findIndex( (obj) => obj.id == todo_id );
    todoDatabase.splice(indexValue, 1); // 1, 1

    if (todoDatabase) {
        res.json(
            {
                code : "success",
                msg : "Delete Todo Done"
            }
        )
   } else {
      res.status(400).json(
        {
            code : "failed",
            msg : "Error encountered while deleting todo"
        }
      )
   }
    
})



app.listen(5000)
console.log('Server is running in port 5000')