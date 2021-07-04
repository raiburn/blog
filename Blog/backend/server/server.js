const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('../routes');
const mongoose = require('mongoose');
const config = require('../configs/config');
const jwt = require('jsonwebtoken');
const authController = require('../controllers/Users');


mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,useFindAndModify:false});


app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', routes);
app.set('llave', config.llave);

//login endpoint
app.post('/login', async (req, res) => {
  try{
      const login = await authController.Login(req, res);
      const body = req.body;
      //if login return trye return a token and the info from the user       
      if(login.data ===true){
          const payload = {
              id : login._id,
              username: body.username,
              check:  true
          };
          const token = jwt.sign(payload, app.get('llave'), {
              expiresIn: 1440
          });
          const info = {
            username: body.username,
            level: login.level
          }
          res.json({
              mensaje: 'Autenticación correcta',
              token: token,
              info: info
          });

        //if login returned false it will return an error
      }else if(login === false){
          res.json({ mensaje: "Usuario y, o contraseña incorrectos"});
      }else{
          res.json({ mensaje: "Usuario no encontrado"});
      }
  }catch(error){
      console.log(error);
  }
})

app.get('/secure', (req, res) => {
    var token = req.headers['authorization']
    if(!token){
        res.status(401).send({
          error: "Es necesario el token de autenticación"
        })
    }

    token = token.replace('', '');

    jwt.verify(token, config.llave, function(err, user) {
      if (err) {
        res.status(401).send({
          error: 'Token inválido'
        })
      } else {
        return true;
      }
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost`)
});