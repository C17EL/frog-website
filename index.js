import express from "express";
import bodyParser from "body-parser";
import path from "path"; 

const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(process.cwd(), 'public')));


app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/anatomy", (req, res) =>{
    res.render("anatomy");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

  