const router = require('express').Router();
const Credentials = require('../../Model/Credentials');
const bcrypt = require('bcrypt');

// Get root 'applicant' table
//router.get('/', (req, res)=>{Credentials.findAll().then((data)=>{res.json(data)})});

// Get a single applicant's information
router.get('/:id', (req, res)=>{Credentials.findByPk(req.params.id).then((data)=>{res.json(data)})});

// Post/create a new user
router.post('/', async (req, res)=>{
    try {
        const passwordHash = await bcrypt.hash(req.body.password, 10);

        const newUser = await Credentials.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            user_name: req.body.user_name,
            password: passwordHash,
            phone_number: req.body.phone_number,
        });
        res.status(200).json(newUser);
    } catch (err) {
        res.status(400).json(err)
    }
});

// Login
router.post('/login', async (req, res)=>{
    try {
        const userName = await Credentials.findOne({ 
            where: { user_name: req.body.user_name } 
        });
        if (!userName) {
          res.status(404).json({ message: 'Incorrect user-name/password, please try again.' });
          return;
        };
        const password = await bcrypt.compare(req.body.password, userName.password);
        if (!password) {
          res.status(400).json({ message: 'Incorrect user-name/password, please try again.' });
          return;
        }
        res.status(200).json({ message: 'Login successful.' });
      } catch (err) {
        res.status(500).json(err);
      }
});


module.exports = router;