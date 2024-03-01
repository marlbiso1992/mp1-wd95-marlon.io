//MVC - model, view, controller design pattern
const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");

app.use(express.urlencoded({ extended:true })) //for form submission
app.use(express.json()) //json response
app.use(
    cors(
        { origin : "http://localhost:3006" }  //front end
    )
)

const userDB = [
    {
        id: 1,
        username: "admin",
        password: "password123"
    },
    {
        id: 2,
        username: "staff",
        password: "123"
    },
    {
        id: 3,
        username: "user1",
        password: "123"
    },
    {
        id: 4,
        username: "user2",
        password: "123"
    },
    {
        id: 5,
        username: "admin5",
        password: "password123"
    },
    {
        id: 6,
        username: "staff6",
        password: "123"
    },
    {
        id: 7,
        username: "user17",
        password: "123"
    },
    {
        id: 8,
        username: "user28",
        password: "123"
    }
]
const profileDB = [
    {
        id:1,
        username: "admin",
        firstname : "James",
        lastname : "Bond",
        phone : "97987",
        email : "james@yahoo.com",
        birthdate: "05/12/1999",
        gender: "Male",
        nationality: "Filipio",
        barangay: "Lamacan",
        town: "Sibonga",
        province: "Cebu",
        profession: "Driver",
    },
    {   
        id:2,
        username: "staff",
        firstname : "Peter",
        lastname : "Pan",
        phone : "97987",
        email : "peter@yahoo.com",
        birthdate: "05/12/1999",
        gender: "Male",
        nationality: "Filipio",
        barangay: "Lamacan",
        town: "Pilar",
        province: "Bohol",
        profession: "Driver",
    },
    {
        id:3,
        username: "user1",
        firstname : "Michael",
        lastname : "Jordan",
        phone : "97987",
        email : "mic@google.com",
        birthdate: "05/12/1999",
        gender: "Male",
        nationality: "Filipio",
        barangay: "Poblacion",
        town: "Argao",
        province: "Cebu",
        profession: "Carpenter",
    },
    {
        id:4,
        username: "user2",
        firstname : "Vic",
        lastname : "Saints",
        phone : "9742342987",
        email : "vic@google.com",
        birthdate: "05/12/1999",
        gender: "Male",
        nationality: "Filipio",
        barangay: "Poblacion",
        town: "Carcar",
        province: "Cebu",
        profession: "Driver",
    },
    {
        id:5,
        username: "admin5",
        firstname : "James5",
        lastname : "Bond5",
        phone : "97987",
        email : "james@y5ahoo.com",
        birthdate: "05/12/1999",
        gender: "Male",
        nationality: "Filipio",
        barangay: "Lamacan",
        town: "Argao",
        province: "Cebu",
        profession: "Driver",
    },
    {   
        id:6,
        username: "staff6",
        firstname : "Peter6",
        lastname : "Pan6",
        phone : "97987",
        email : "peter@yahoo.com",
        birthdate: "05/12/1999",
        gender: "Male",
        nationality: "Filipio",
        barangay: "Lamacan",
        town: "Pilar",
        province: "Bohol",
        profession: "Driver",
    },
    {
        id:7,
        username: "user17",
        firstname : "Michael7",
        lastname : "Jordan7",
        phone : "97987",
        email : "mic@google.com",
        birthdate: "05/12/1999",
        gender: "Male",
        nationality: "Filipio",
        barangay: "Poblacion",
        town: "Argao",
        province: "Cebu",
        profession: "Carpenter",
    },
    {
        id:8,
        username: "user28",
        firstname : "Vic8",
        lastname : "Saints8",
        phone : "9742342987",
        email : "vic@google.com",
        birthdate: "05/12/1999",
        gender: "Male",
        nationality: "Filipio",
        barangay: "Poblacion",
        town: "Carcar",
        province: "Cebu",
        profession: "Driver",
    },
];
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
app.get('/all-profiles', (req, res)=>{
    res.json(profileDB)
})
app.get('/username', (req, res)=>{
    res.json(userDB)
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
app.get('/user-profile/:username', (req, res)=>{
    const profileUser = req.params.username;
    
    const userFound = profileDB.find( 
             (user)=>{
                 return (profileUser) === (user.username)   
             } 
     )
     //loop, fucntion itereate all of the items in the array
     if (userFound){
         res.json(userFound);
     } else {
         res.status(400).json("Invalid Username")
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
app.post('/registration', (req, res)=>{
    let usern = req.body.username;
    let lname = req.body.lastname;
    let email = req.body.email;
    let fname = req.body.firstname;
    let passw = req.body.password;
    let cpassw = req.body.cpassword;

    const newRecord = {
        id:  profileDB.length + 1,
        firstname: fname,
        lastname: lname,
        email: email,
        username: usern,
        
    }
    const newUserRec = {
        id: userDB.length + 1,
        username: usern,
        password: passw,
    } 
if (usern ===""){
    res.status(401).json(
        { code: "failed", msg:"Please fill-up required field" })
}
if (lname ===""){
    res.status(401).json(
        { code: "failed", msg:"Please fill-up required field" })
}
if (email ===""){
    res.status(401).json(
        { code: "failed", msg:"Please fill-up required field" })
}
if (fname ===""){
    res.status(401).json(
        { code: "failed", msg:"Please fill-up required field" })
}

if (passw ===""){
    res.status(401).json(
        { code: "failed", msg:"Please fill-up required field" })
}
    else{  
        const checkuserExist = userDB.find(
        (cu)=>{return cu.username === usern}
    );
    if (checkuserExist) {
        res.status(200).json({ code: "failed", msg:"Username Exist"}) 
       }
    else {
    const saveStatus = profileDB.push(newRecord) && userDB.push(newUserRec);  
        if (saveStatus) {
             res.status(200).json({code: "success", msg:"registration successful", saveStatus })
        }
        else{
            res.status(401).json({ code: "failed", msg:"registration error in saving" })
        }
    }
}

})
app.put('/update-user/:userId', (req, res)=>{
    const user_id = req.params.userId;

    let username = req.body.username;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let phone = req.body.phone;
    let email = req.body.email;
    let birthdate = req.body.birthdate;
    let gender = req.body.gender;
    let nationality = req.body.nationality;
    let barangay = req.body.barangay;
    let town = req.body.town;
    let province = req.body.province;
    let profession = req.body.profession;

    const updateUserRecord = {
        id: user_id,
        username: username,
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        email: email,
        birthdate: birthdate,
        gender: gender,
        nationality: nationality,
        barangay: barangay,
        town: town,
        province: province,
        profession: profession,
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
app.delete('/delete-todo/:todoId', (req, res)=>{
    const todo_id = req.params.todoId;
    const indexValue =  profileDB.findIndex( (obj) => obj.id == todo_id ) && userDB.findIndex( (obj) => obj.id == todo_id );
    profileDB.splice(indexValue, 1) &&  userDB.splice(indexValue, 1); // 1, 1

    if (profileDB && userDB) {
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

const feedBackDB = [
    {
        id: 1,
        fullname: "admin",
        feedback: "passwasdasord123"
    },
    {
        id: 2,
        fullname: "staff",
        feedback: "1asdasdas23"
    }
]
app.get('/all-feedback', (req, res)=>{
    res.json(feedBackDB)
})
app.post('/sendfeedback', (req, res)=>{
        let fullname = req.body.fullname;
        let feedback = req.body.feedback; 

        const newRecord = {
            id:  feedBackDB.length + 1,
            fullname: fullname,
            feedback: feedback,        
        }
 if (fullname === "" ) {
    res.status(401).json(
        { code: "failed", msg:"Please fill-up required field" })
 }   
 if (feedback === "" ) {
    res.status(401).json(
        { code: "failed", msg:"Please fill-up required field" })
 }   
 else {
  const savefeedStatus = feedBackDB.push(newRecord);
       if (savefeedStatus) {
         res.status(200).json(
            { code: "success", msg:"Feedback send successful", savefeedStatus }   
         )
       } else {
         res.status(401).json(
            { code: "failed", msg:"error submission" }   
         )
       }}
})

app.listen(5001)
console.log('Server is running in port 5001')