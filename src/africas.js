const { body } = require('express-validator');
const { handleErrors } = require('./handleError');

const Router = require('express').Router;

const credentials = {
    apiKey: 'd6883939e9d7a0d90ab43450271fc9ec2d6af4e0059736f51b1f4f9e949e853a',         // use your sandbox app API key for development in the test environment
    username: 'dev-vickie',      // use 'sandbox' for development in the test environment
};
const Africastalking = require('africastalking')(credentials);



const sms = Africastalking.SMS;


const router = Router();

router.post('/send/:message/:phone', async(req, res) => {
    try{

        const options = {
            to: [req.params.phone],
            message: req.params.message
        };

        await sms.send(options)
            .then(response => {
                console.log(response);
                res.status(200).json({message: 'Message sent successfully'});
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({error: error.message});
            });

           

    }catch(e){
        res.status(500).json({error: e.message})
    }
});

module.exports = router;

