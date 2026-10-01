const express = require('express')
const router=express.Router();
const fs = require("fs").promises

const getUsers = async ()=>{
    const users = await fs.readFile("./users.json", "utf-8")
    return JSON.parse(users)
}

router.get('/', async (req, res) => 
    {   
        const users = await getUsers();
        res.json(users);
    }
)

router.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

module.exports = router

