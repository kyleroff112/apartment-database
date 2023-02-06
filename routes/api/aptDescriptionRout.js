const router = require('express').Router();
const AptDescription = require('../../Model/AptDescription');

// Get root 'applicant' table
//router.get('/', (req, res)=>{AptDescription.findAll().then((data)=>{res.json(data)})});

// Get a single applicant's information
router.get('/:id', (req, res)=>{AptDescription.findByPk(req.params.id).then((data)=>{res.json(data)})});

// Post a new application