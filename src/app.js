import {usersJSON} from './getUsers'

let express = require('express');
let app = express();

app.get('/', function (req, res) {
    res.send('This React-native-example home');
})

app.get('/getUsers', function (req, res) {
    res.send(usersJSON);
})

var server = app.listen(8000, function () {

})
