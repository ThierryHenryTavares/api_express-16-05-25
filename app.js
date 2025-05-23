import express from "express"
import cors from "cors"
import { setUserToList,lista } from "./lista.js"

const app  = express()
const port = 8000
app.use(express.json())
app.use(cors())

setUserToList("John Doe")
setUserToList("Jane Doe")

app.get("/", (req,res) => {
    return res.send(lista)
})



app.listen(port, ()=>console.log(`Iniciado na porta ${port}`))