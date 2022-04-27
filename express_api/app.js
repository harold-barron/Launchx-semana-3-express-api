//Usamos objeto express
const express = require('express')

//Creamos app de express
const app = express()

//indicamos que se va a utilizar un archivo json
 app.use(express.json())

//indicamos el puerto
const port = 3000

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
   })

//HTTP METHODS
app.get('/v1/explorers',(req,res)=>
{
    console.log(`Api explorers GET ALL requests ${new Date()}`)
    const explorer1 = {id:1, name:"harold1"}
    const explorer2 = {id:2, name:"harold2"}
    const explorer3 = {id:3, name:"harold3"}
    const explorer4 = {id:4, name:"harold4"}
    const explorers = [explorer1,explorer2,explorer3,explorer4]
    res.status(200).json(explorers)
})

//Enviando un id desde la url
app.get('/v1/explorers/:id',(req,res)=>
{
    console.log(`Api explorers GET ALL requests ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer1 = {id:1, name:"harold1"}
    res.status(200).json(explorer1)
})