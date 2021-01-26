const express = require('express');
const axios = require('axios');
const ejs = require('ejs');
const { response } = require('express');
const app = express();

app.set('view engine', ejs);
app.use(express.static('public'));

app.get('/', (req, res)=>{
    let url = `https://api.spoonacular.com/recipes/random/?apiKey=f5cb061b72a14bcca37b16883a4290f8`;

    axios.get(url)
    .then(response =>{
        console.log(response.data.recipes[0]);
        let recipe = response.data.recipes[0];

        res.render('index.ejs', {
            spoonRec: recipe,
            pageTitle: "Random Recipes"
        });
    })

});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server has started.");
});
