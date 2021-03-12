"use strict";
const express = require('express');
const router = express.Router();

const axios = require('axios')
var appdDestination='http://3.138.201.9:8080';

function generateAppDload()
{
    var purchasePrice=Math.random() * (4000 - 1000) + 1000;
   var randomSelector=Math.floor(Math.random() * 13);
   var listProducts=["iPhone 11", "MacBook Pro","Barista Machine","Bose 700","iPad Pro","Yamaha Piano"]
   var selectedProduct="Z1"
   if(randomSelector<=6)
   {
    selectedProduct=listProducts[randomSelector-1]
   
    //add product 
    console.log("Add Product");
    var dataJSON ={
        productId: 3,
        productName: "IPhone",
        productDescription: "Phone",
        manufacturerName: "Apple",
        manufacturerId: 2,
        sellerName: "DigitalShopee",
        sellerId: 2
    };
    sendPostRequestToApp(dataJSON,appdDestination+"/api/product/addProduct");

    //pay product 
    console.log("Pay Product");
     var    dataJSON ={
            productId: selectedProduct ,
            price: purchasePrice
    };
    sendPostRequestToApp(dataJSON,appdDestination+"api/product/payment");

    console.log("Get Customers");
    sendGetRequestToApp(appdDestination+"/api/product/getCustomers");
    console.log("Get listProductCatlog");
    sendGetRequestToApp(appdDestination+"/api/product/listProductCatalog");
    console.log("Get Products");
    sendGetRequestToApp(appdDestination+"/api/product/getProducts");
    console.log("Get Weather");
    sendGetRequestToApp(appdDestination+"/api/open/getWeather?cityName=Toronto");
    
   }
    //Purchase product 
    console.log("Purchase Product");
    var dataJSON ={
        
            productId:selectedProduct ,
            customerId: "1234",
            price: purchasePrice
        
    };
    sendPostRequestToApp(dataJSON,appdDestination+"/api/product/purchase");


}

// @route   GET api/appd
// @desc    Test route
// @access  Public
router.get('/',(req,res)=> res.send('AppDroute'));

router.get('/purchasefailure',(req,res)=> {
    generateAppDload();
    (function myLoop (i) {          
        setTimeout(function () { 
            generateAppDload();                          
           if (--i) myLoop(i);      //  decrement i and call myLoop again if i > 0
        }, 60000)
     })(300);   
   
    res.send('AppD Use cases always on with purchase failure')
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

