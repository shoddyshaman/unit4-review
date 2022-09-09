require('dotenv').config()
const {sequelize} = require('./util/database')
const express = require('express')
const cors = require('cors')
const {SERVER_PORT} = process.env
const {login,register} = require('./controller/authController')
const app = express()

app.use(express.json())
app.use(cors())


app.post('/register', register)
app.post('/login', login)



sequelize.sync({ force: true })
// sequelize.sync()
    .then(() => {
        app.listen(SERVER_PORT, () => console.log(`db sync successful & server running on port ${SERVER_PORT}`))
    })
    .catch(err => console.log(err))