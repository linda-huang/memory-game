const admin = require('firebase-admin');
const serviceAccount = require('./service-account.json');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://memory-game-85f8d.firebaseio.com"
});

const db = admin.firestore();

const app = express();
app.use(bodyParser.json());
const port = 8080;

app.get('/', cors(), function(req, res){
    res.send('Welcome home!')
});

const imageCollection = db.collection('images');

app.post('/post', cors(), function(req, res){
    const image = req.body;
    imageCollection.doc().set(image);
    res.send('image created!');
});

app.get('/post', cors(), async function(req, res){
    try{
        const allImagesDoc = await imageCollection.get();
        const images = [];
        for(let doc of allImagesDoc.docs){
            let image = doc.data();
            image.id = doc.id;
            images.push(image);
        }
        res.send(images);
    }
    catch(error){console.log("error")};
});

app.listen(port, function() {console.log('app started')});