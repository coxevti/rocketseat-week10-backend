const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");

const { setupWebsocket } = require("./websocket");
const router = require("./routes");

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(
  "mongodb+srv://week10:ANTcHE3TH8zLLRCj@cluster0-norwu.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  }
);

// mongoose.connect('mongodb://localhost/week10', {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useCreateIndex: true
// });

app.use(cors());
app.use(express.json());
app.use(router);

server.listen(3333);
