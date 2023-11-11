const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Client = require('../odm/cpu.js');

var urlencode = express.urlencoded({ extended: true });

module.exports = function(app){

// Главная страница
app.get('/', function(req, res) {
	res.render('main', {layout: 'index'});
});

// Машруты
app.get('/marh', function(req, res) {
	res.render('marh', {layout: 'index'});
});

// Информация
app.get('/info', function(req, res) {
	res.render('info', {layout: 'index'});
});
// Личный кабинет
app.get('/lk', function(req, res) {
	res.render('lk', {layout: 'index'});
});

// hills
app.get('/hills', function(req, res) {
	res.render('hills', {layout: 'index'});
});
// forest
app.get('/forest', function(req, res) {
	res.render('forest', {layout: 'index'});
});

// 404
app.get('/404', function(req, res) {
	res.render('404', {layout: 'index'});
});

// reg
app.get('/reg', function(req, res) {
	res.render('reg', {layout: 'index'});
});

// of
app.get('/of', function(req, res) {
	res.render('of', {layout: 'index'});
});

// Страница формы данных
app.get('/setuserdata', function(req, res) {
	res.render('setuserdata', {layout: 'index'});
});

// Запись данных в БД (ODM)
app.post('/setdata', urlencode, function(req, res){

    console.log(req.body);
    const setClient = new Client({
		client_name: req.body.clientname,
		client_email: req.body.clientmail
	});

	setClient.save();

	res.redirect('/getdata');
	
});

// Чтение данных из БД (ODM)
app.get('/getdata', function(req, res){

    var products = {};
    Client.find({})
    .then((clientdata) => {
        contacts = clientdata.map( item => item.toObject());
        console.log(contacts);
        res.render('getdata', {
            layout: 'index',
            contactsdata: contacts
        })     
     })
     .catch((error) => {
        console.log(error);
    });


});

}