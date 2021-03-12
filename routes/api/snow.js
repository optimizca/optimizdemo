"use strict";
const express = require('express');
const router = express.Router();

const axios = require('axios')

// @route   GET api/appd
// @desc    Test route
// @access  Public
router.get('/',(req,res)=> res.send('SnowRoute'));

router.get('/usecase1',(req,res)=> {
    
   
    res.send('Service Now use case1')
});



function sendPostRequestToApp(dataJSON,destURL)
    {
        //var dataJSON=JSON.stringify(payload);
	    const config = {
            headers: { 
                'Content-Type': 'application/json'

            }
        }
        
        axios.post(destURL, dataJSON,config)
        .then((res) => {
            console.log(`statusCode: ${res.statusCode}`)
            console.log(res)
        })
        .catch((error) => {
            console.error(error)
        })
    }

function sendGetRequestToApp(destURL)
    {
        //var dataJSON=JSON.stringify(payload);
	    const config = {
            headers: { 
                'Content-Type': 'application/json'

            }
        }
        
        axios.get(destURL,config)
        .then((res) => {
            console.log(`statusCode: ${res.statusCode}`)
            console.log(res)
        })
        .catch((error) => {
            console.error(error)
        })
    }

module.exports =router;

