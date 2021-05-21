const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const adminRouter = require("./routes/admin");
const morgan = require('morgan')

// const cookieParser = require('cookie-parser');
// const session = require('express-session');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json());
app.use(morgan('dev'))
app.use("/admin", adminRouter);
app.use(require("./routes/projects"));
app.use(require("./routes/csv"));


// app.use(cookieParser());
// app.use(session({
//   secret: 'hang ten dude!',
//   resave: false,
//   saveUninitialized: true
// }));


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

