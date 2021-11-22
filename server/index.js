const express = require ('express')
const app = express()
const mysql =require ("mysql")
const cors = require("cors")

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root@#',
    database: 'subagentsystem'
})

app.post('/create', (req, res) => {
    const name = req.body.name
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword
    const subagentName = req.body.subName
    const contactnumber = req.body.contact

    db.query('INSERT INTO subagent (name, password, confirmPassword, subagentName, contact) numberVALUES (?,?,?,?,?)', [name, password, confirmPassword, subagentName, contactnumber],
    (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send("Values Inserted")
        }
    }
    )
})

app.listen(3001, () => {
    console.log("your server is running, on port 3001")
})