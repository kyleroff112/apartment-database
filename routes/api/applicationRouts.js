const router = require('express').Router();
const Application = require('../../Model/Application');

//Get root 'applicant' table
// router.get('/', (req, res)=>{Application.findAll().then((data)=>{res.json(data)})
// });

// router.get('/', async (req, res)=>{
//     try{
//         const allForms = await Application.findAll();
//         if (!allForms) {
//             res.status(404).json({error: 'Cant allocate the requested data...'})
//         }
//         res.status(200).json(allForms);
//     } catch(err) {
//         res.status(500).json(err);
//     }
// });

// Get a single applicant's information
router.get('/:id', (req, res)=>{Application.findByPk(req.params.id).then((data)=>{res.json(data)})});

// Post a completed application
router.post('/', (req, res)=>{Application.create(req.body).then((newForm)=>{res.json(newForm)})});


// Put/update a submitted application
router.put('/:applicant_id', async(req,res)=>{
    const applicantionChanges = await Application.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip_code: req.body.zip_code,
        phone_number: req.body.phone_number,
        email: req.body.email,
        pets: req.body.pets,
        pet_description: req.body.pet_description,
        smoker: req.body.smoker,
        employment: req.body.employment,
        comany_name: req.body.comany_name,
    },
    {
        where: {
            applicant_id:  req.params.applicant_id,
        },
    });
    res.json(applicantionChanges);
})

module.exports = router;