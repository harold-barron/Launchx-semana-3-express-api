//Usamos objeto express
const express = require('express')

//Creamos app de express
const app = express()

//indicamos que se va a utilizar un archivo json
 app.use(express.json)

//indicamos el puerto
const port = 3000

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
   })