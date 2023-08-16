import express from 'express'
import morgan from "morgan";
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

// Initialize express
const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

// settings
app.set("port", process.env.PORT || 3000);
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('index'))

// middlewares
app.use(morgan("dev"));

// static files
app.use(express.static(join(__dirname, 'public')))

// listening the Server
app.listen(app.get("port"));
console.log("server is listening on port", app.get("port"));


