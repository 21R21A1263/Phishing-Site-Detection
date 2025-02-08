import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));


var website=[{
  web:"netflix.com",
},{
  web:"amazon.in",
},{
  web:"www.Amazon.in",
},{
  web:"tsrtc.gov.in",
},{
  web:"apsrtc.gov.in",
},{
  web:"Mlrinstitutions.ac.in",
},{
  web:"www.Flipkart.in",
},{
  web:"www.youtube.com",
},{
  web:"Gmail.com",
},{
  web:"www.google.com",
},{
  web:"www.facebook.com",
}]



var bool=false;

function passwordCheck(req, res, next) {
  const name=req.body["EnterYourSite"];
  for(let i=0;i<website.length;i++){
    if(website[i].web === name){
      bool=true;
    }
  }
  next();
}
app.use(passwordCheck);


app.get("/", (req, res) => {
  
  res.render("index.ejs",{tt:"3"});
});

app.post("/check", (req, res) => {
  res.render("index.ejs",{tt:bool});
  bool=false;
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
