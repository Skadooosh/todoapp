const router = require("express").Router();
// LOAD MODEL
const TodoList = require('../models/todolist.model');

router.route('/')
    .get((req,res) => { 
        TodoList.find()
            .then(lists => res.json(lists))
            .catch(err => res.status(400).json("Error: "+ err))
    });

router.route('/add')
    .post((req,res) => {
        const title = req.body.title;
        const description = req.body.description;
        const time = req.body.time;

        const newList = new TodoList({
            title,
            description,
            time
        });

        newList.save()
            .then(() => res.json('List Updated'))
            .catch(err => res.status(400).json("Error : " + err))
    })

router.route('/delete/:id')
    .delete((req,res) => {
        TodoList.findById(req.params.id)
            .then(() => res.json("Deleted"))
            .catch(err => res.status(400).json("Error"))
    })

module.export = router;
