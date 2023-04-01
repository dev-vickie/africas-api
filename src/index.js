

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const smsRouter = require('./africas.js')

const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

app.all('/', (req, res)=>{
    res.send("welcome to africas talking")
})
app.use('/sms', smsRouter)


app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})