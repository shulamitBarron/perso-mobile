const express = require('express');
var bodyParser = require('body-parser');
const path = require("path");
var request = require('request');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 8091;

/**
 * get data from DB
 */
const usersData = {
   "david": {
        "transactions":	        "transactions":[
            [	            {
                {	              "id": "0",
                    "id": "1",	              "account": "B_1010_1002",
                    "account": "B_1010_1003",	              "accountNumber": "1002",
                    "accountNumber": "1003",	              "transaction": "Gov.org",
                    "transaction": "NETFLIX.COM",	              "type": "PostedCheck",
                    "type": "DepositCheck",	              "amount": "-2000",
                    "amount": "9000.99",	              "date": "2019-02-26",
                    "date": "2018-11-01",	              "categoryDescription": "Government",
                    "categoryDescription": "Travel",	              "Mode": "Out",
                    "Mode": "In",	              "currencyCd": "ILS",
                    "currencyCd": "ILS",	              "status": "cleared"
                    "status": "cleared"	            },
                }, {	            {
                    "id": "1B",	              "id": "1",
                    "account": "B_1010_1003",	              "account": "B_1010_1002",
                    "accountNumber": "1003",	              "accountNumber": "1002",
                    "transaction": "NETFLIX.COM",	              "transaction": "Grocery Shlomo",
                    "type": "DepositCheck",	              "type": "PostedCheck",
                    "amount": "9000.99",	              "amount": "-500",
                    "date": "2018-11-01",	              "date": "2019-02-27",
                    "categoryDescription": "Travel",	              "categoryDescription": "Food",
                    "Mode": "In",	              "Mode": "Out",
                    "currencyCd": "ILS",	              "currencyCd": "ILS",
                    "status": "cleared"	              "status": "cleared"
                }, {	            },
                    "id": "2",	            {
                    "account": "B_1010_1003",	              "id": "2",
                    "accountNumber": "1003",	              "account": "B_1010_1003",
                    "transaction": "NETFLIX.COM",	              "accountNumber": "1003",
                    "type": "DepositCheck",	              "transaction": "Brachi",
                    "amount": "-219.99",	              "type": "PostedCheck",
                    "date": "2018-11-01",	              "amount": "-100",
                    "categoryDescription": "Grocery",	              "date": "2019-02-27",
                    "Mode": "In",	              "categoryDescription": "clothing",
                    "currencyCd": "ILS",	              "Mode": "Out",
                    "status": "cleared"	              "currencyCd": "ILS",
                }, {	              "status": "cleared"
                    "id": "3",	            },
                    "account": "B_1010_1004",	            {
                    "accountNumber": "1004",	              "id": "3",
                    "transaction": "NETFLIX.COM",	              "account": "B_1010_1002",
                    "type": "DepositCheck",	              "accountNumber": "1002",
                    "amount": "-219.99",	              "transaction": "sem.COM",
                    "date": "2018-10-25",	              "type": "PostedCheck",
                    "categoryDescription": "Grocery",	              "amount": "-2100",
                    "Mode": "In",	              "date": "2019-01-26",
                    "currencyCd": "ILS",	              "categoryDescription": "Travel",
                    "status": "cleared"	              "Mode": "Out",
                }, {	              "currencyCd": "ILS",
                    "id": "4",	              "status": "cleared"
                    "account": "B_1010_1002",	            },
                    "accountNumber": "1002",	            {
                    "transaction": "sem.COM",	              "id": "4",
                    "type": "charge",	              "account": "B_1010_1002",
                    "amount": "9000.99",	              "accountNumber": "1002",
                    "date": "2018-11-01",	              "transaction": "sem.COM",
                    "categoryDescription": "Salary",	              "type": "PostedCheck",
                    "Mode": "In",	              "amount": "-500",
                    "currencyCd": "ILS",	              "date": "2019-01-20",
                    "status": "cleared"	              "categoryDescription": "Grocery",
                }, {	              "Mode": "Out",
                    "id": "5",	              "currencyCd": "ILS",
                    "account": "B_1010_1002",	              "status": "cleared"
                    "accountNumber": "1002",	            },
                    "transaction": "sem.COM",	            {
                    "type": "charge",	              "id": "5",
                    "amount": "9000.99",	              "account": "B_1010_1002",
                    "date": "2017-09-28",	              "accountNumber": "1002",
                    "categoryDescription": "Salary",	              "transaction": "sem.COM",
                    "Mode": "In",	              "type": "PostedCheck",
                    "currencyCd": "ILS",	              "amount": "-450",
                    "status": "cleared"	              "date": "2019-01-01",
                }, {	              "categoryDescription": "Grocery",
                    "id": "6",	              "Mode": "Out",
                    "account": "B_1010_1002",	              "currencyCd": "ILS",
                    "accountNumber": "1002",	              "status": "cleared"
                    "transaction": "sem.COM",	            },
                    "type": "charge",	            {
                    "amount": "6000.99",	              "id": "6",
                    "date": "2018-11-01",	              "account": "B_1010_1002",
                    "categoryDescription": "Salary",	              "accountNumber": "1002",
                    "Mode": "In",	              "transaction": "sem.COM",
                    "currencyCd": "ILS",	              "type": "PostedCheck",
                    "status": "cleared"	              "amount": "-250",
                }, {	              "date": "2019-01-05",
                    "id": "7",	              "categoryDescription": "Grocery",
                    "account": "B_1010_1002",	              "Mode": "Out",
                    "accountNumber": "1002",	              "currencyCd": "ILS",
                    "transaction": "sem.COM",	              "status": "cleared"
                    "type": "charge",	            },
                    "amount": "7000.99",	            {
                    "date": "2018-08-28",	              "id": "7",
                    "categoryDescription": "Salary",	              "account": "B_1010_1002",
                    "Mode": "In",	              "accountNumber": "1002",
                    "currencyCd": "ILS",	              "transaction": "sem.COM",
                    "status": "cleared"	              "type": "PostedCheck",
                }, {	              "amount": "-800",
                    "id": "8",	              "date": "2019-01-13",
                    "account": "B_1010_1003",	              "categoryDescription": "Grocery",
                    "accountNumber": "1003",	              "Mode": "Out",
                    "transaction": "sem.COM",	              "currencyCd": "ILS",
                    "type": "charge",	              "status": "cleared"
                    "amount": "5000.99",	            },
                    "date": "2018-07-28",	            {
                    "categoryDescription": "Salary",	              "id": "8",
                    "Mode": "In",	              "account": "B_1010_1002",
                    "currencyCd": "ILS",	              "accountNumber": "1002",
                    "status": "cleared"	              "transaction": "sem.COM",
                }, {	              "type": "PostedCheck",
                    "id": "9",	              "amount": "-450",
                    "account": "B_1010_1003",	              "date": "2019-01-24",
                    "accountNumber": "1003",	              "categoryDescription": "Grocery",
                    "transaction": "sem.COM",	              "Mode": "Out",
                    "type": "charge",	              "currencyCd": "ILS",
                    "amount": "5000.99",	              "status": "cleared"
                    "date": "2018-07-28",	            },
                    "categoryDescription": "Salary",	            {
                    "Mode": "In",	              "id": "9",
                    "currencyCd": "ILS",	              "account": "B_1010_1002",
                    "status": "cleared"	              "accountNumber": "1002",
                },	              "transaction": "sem.COM",
                {	              "type": "PostedCheck",
                    "id": "10",	              "amount": "-700",
                    "account": "B_1010_1002",	              "date": "2019-01-18",
                    "accountNumber": "1002",	              "categoryDescription": "clothing",
                    "transaction": "sem.COM",	              "Mode": "Out",
                    "type": "charge",	              "currencyCd": "ILS",
                    "amount": "2000",	              "status": "cleared"
                    "date": "2018-11-01",	            },
                    "categoryDescription": "Government",	            {
                    "Mode": "In",	              "id": "10",
                    "currencyCd": "ILS",	              "account": "B_1010_1002",
                    "status": "cleared"	              "accountNumber": "1002",
                }, {	              "transaction": "sem.COM",
                    "id": "11",	              "type": "PostedCheck",
                    "account": "B_1010_1004",	              "amount": "-100",
                    "accountNumber": "1004",	              "date": "2019-01-08",
                    "transaction": "sem.COM",	              "categoryDescription": "clothing",
                    "type": "charge",	              "Mode": "Out",
                    "amount": "1000.99",	              "currencyCd": "ILS",
                    "date": "2017-09-28",	              "status": "cleared"
                    "categoryDescription": "Government",	            },
                    "Mode": "In",	            {
                    "currencyCd": "ILS",	              "id": "11",
                    "status": "cleared"	              "account": "B_1010_1002",
                }, {	              "accountNumber": "1002",
                    "id": "12",	              "transaction": "sem.COM",
                    "account": "B_1010_1002",	              "type": "PostedCheck",
                    "accountNumber": "1002",	              "amount": "-2100",
                    "transaction": "sem.COM",	              "date": "2018-12-26",
                    "type": "charge",	              "categoryDescription": "Travel",
                    "amount": "5000.99",	              "Mode": "Out",
                    "date": "2018-06-28",	              "currencyCd": "ILS",
                    "categoryDescription": "Government",	              "status": "cleared"
                    "Mode": "In",	            },
                    "currencyCd": "ILS",	            {
                    "status": "cleared"	              "id": "12",
                }, {	              "account": "B_1010_1002",
                    "id": "13",	              "accountNumber": "1002",
                    "account": "B_1010_1002",	              "transaction": "sem.COM",
                    "accountNumber": "1002",	              "type": "PostedCheck",
                    "transaction": "sem.COM",	              "amount": "-500",
                    "type": "charge",	              "date": "2018-12-20",
                    "amount": "1000.99",	              "categoryDescription": "Grocery",
                    "date": "2018-05-28",	              "Mode": "Out",
                    "categoryDescription": "Government",	              "currencyCd": "ILS",
                    "Mode": "In",	              "status": "cleared"
                    "currencyCd": "ILS",	            },
                    "status": "cleared"	            {
                }, {	              "id": "13",
                    "id": "14",	              "account": "B_1010_1002",
                    "account": "B_1010_1003",	              "accountNumber": "1002",
                    "accountNumber": "1003",	              "transaction": "sem.COM",
                    "transaction": "sem.COM",	              "type": "PostedCheck",
                    "type": "charge",	              "amount": "-450",
                    "amount": "5000.99",	              "date": "2018-12-01",
                    "date": "2018-04-28",	              "categoryDescription": "Grocery",
                    "categoryDescription": "Government",	              "Mode": "Out",
                    "Mode": "In",	              "currencyCd": "ILS",
                    "currencyCd": "ILS",	              "status": "cleared"
                    "status": "cleared"	            },
                }, {	            {
                    "id": "15",	              "id": "14",
                    "account": "B_1010_1003",	              "account": "B_1010_1002",
                    "accountNumber": "1003",	              "accountNumber": "1002",
                    "transaction": "sem.COM",	              "transaction": "sem.COM",
                    "type": "charge",	              "type": "PostedCheck",
                    "amount": "5000.99",	              "amount": "-250",
                    "date": "2018-08-28",	              "date": "2018-12-05",
                    "categoryDescription": "Salary",	              "categoryDescription": "Grocery",
                    "Mode": "In",	              "Mode": "Out",
                    "currencyCd": "ILS",	              "currencyCd": "ILS",
                    "status": "cleared"	              "status": "cleared"
                }, {	            },
                    "id": "14",	            {
                    "account": "B_1010_1003",	              "id": "15",
                    "accountNumber": "1003",	              "account": "B_1010_1002",
                    "transaction": "sem.COM",	              "accountNumber": "1002",
                    "type": "charge",	              "transaction": "sem.COM",
                    "amount": "5000.99",	              "type": "PostedCheck",
                    "date": "2018-07-28",	              "amount": "-800",
                    "categoryDescription": "Government",	              "date": "2018-12-13",
                    "Mode": "In",	              "categoryDescription": "Grocery",
                    "currencyCd": "ILS",	              "Mode": "Out",
                    "status": "cleared"	              "currencyCd": "ILS",
                }, {	              "status": "cleared"
                    "id": "16",	            },
                    "account": "B_1010_1003",	            {
                    "accountNumber": "1003",	              "id": "16",
                    "transaction": "sem.COM",	              "account": "B_1010_1002",
                    "type": "charge",	              "accountNumber": "1002",
                    "amount": "-5000.99",	              "transaction": "sem.COM",
                    "date": "2018-10-11",	              "type": "PostedCheck",
                    "categoryDescription": "Grocery",	              "amount": "-450",
                    "Mode": "Out",	              "date": "2018-12-24",
                    "currencyCd": "ILS",	              "categoryDescription": "Grocery",
                    "status": "cleared"	              "Mode": "Out",
                }, {	              "currencyCd": "ILS",
                    "id": "16B",	              "status": "cleared"
                    "account": "B_1010_1003",	            },
                    "accountNumber": "1003",	            {
                    "transaction": "sem.COM",	              "id": "17",
                    "type": "charge",	              "account": "B_1010_1002",
                    "amount": "-5000.99",	              "accountNumber": "1002",
                    "date": "2018-11-01",	              "transaction": "sem.COM",
                    "categoryDescription": "Grocery",	              "type": "PostedCheck",
                    "Mode": "Out",	              "amount": "-700",
                    "currencyCd": "ILS",	              "date": "2018-12-18",
                    "status": "cleared"	              "categoryDescription": "clothing",
                }, {	              "Mode": "Out",
                    "id": "16b",	              "currencyCd": "ILS",
                    "account": "B_1010_1003",	              "status": "cleared"
                    "accountNumber": "1003",	            },
                    "transaction": "sem.COM",	            {
                    "type": "charge",	              "id": "18",
                    "amount": "-4000.99",	              "account": "B_1010_1002",
                    "date": "2018-10-27",	              "accountNumber": "1002",
                    "categoryDescription": "Grocery",	              "transaction": "sem.COM",
                    "Mode": "Out",	              "type": "PostedCheck",
                    "currencyCd": "ILS",	              "amount": "-100",
                    "status": "cleared"	              "date": "2018-12-08",
                }	              "categoryDescription": "clothing",
                , {	              "Mode": "Out",
                    "id": "17",	              "currencyCd": "ILS",
                    "account": "B_1010_1004",	              "status": "cleared"
                    "accountNumber": "1004",	            },
                    "transaction": "sem.COM",	            {
                    "type": "charge",	              "id": "19",
                    "amount": "-1000.99",	              "account": "B_1010_1002",
                    "date": "2018-10-08",	              "accountNumber": "1002",
                    "categoryDescription": "Grocery",	              "transaction": "sem.COM",
                    "Mode": "Out",	              "type": "PostedCheck",
                    "currencyCd": "ILS",	              "amount": "-2100",
                    "status": "cleared"	              "date": "2018-11-24",
                }, {	              "categoryDescription": "Travel",
                    "id": "18",	              "Mode": "Out",
                    "account": "B_1010_1004",	              "currencyCd": "ILS",
                    "accountNumber": "1004",	              "status": "cleared"
                    "transaction": "sem.COM",	            },
                    "type": "charge",	            {
                    "amount": "-112000.99",	              "id": "20",
                    "date": "2018-10-18",	              "account": "B_1010_1002",
                    "categoryDescription": "Travel",	              "accountNumber": "1002",
                    "Mode": "Out",	              "transaction": "sem.COM",
                    "currencyCd": "ILS",	              "type": "PostedCheck",
                    "status": "cleared"	              "amount": "-500",
                },	              "date": "2018-11-18",
                {	              "categoryDescription": "Grocery",
                    "id": "18",	              "Mode": "Out",
                    "account": "B_1010_1004",	              "currencyCd": "ILS",
                    "accountNumber": "1004",	              "status": "cleared"
                    "transaction": "sem.COM",	            },
                    "type": "charge",	            {
                    "amount": "-1000.99",	              "id": "21",
                    "date": "2018-09-18",	              "account": "B_1010_1002",
                    "categoryDescription": "Travel",	              "accountNumber": "1002",
                    "Mode": "Out",	              "transaction": "sem.COM",
                    "currencyCd": "ILS",	              "type": "PostedCheck",
                    "status": "cleared"	              "amount": "-450",
                },	              "date": "2018-11-01",
                {	              "categoryDescription": "Grocery",
                    "id": "19",	              "Mode": "Out",
                    "account": "B_1010_1003",	              "currencyCd": "ILS",
                    "accountNumber": "1003",	              "status": "cleared"
                    "transaction": "sem.COM",	            },
                    "type": "charge",	            {
                    "amount": "-3000.99",	              "id": "22",
                    "date": "2018-11-01",	              "account": "B_1010_1002",
                    "categoryDescription": "Grocery",	              "accountNumber": "1002",
                    "Mode": "Out",	              "transaction": "sem.COM",
                    "currencyCd": "ILS",	              "type": "PostedCheck",
                    "status": "cleared"	              "amount": "-250",
                }	              "date": "2018-11-05",
                , {	              "categoryDescription": "Grocery",
                    "id": "17",	              "Mode": "Out",
                    "account": "B_1010_1003",	              "currencyCd": "ILS",
                    "accountNumber": "1003",	              "status": "cleared"
                    "transaction": "sem.COM",	            },
                    "type": "charge",	            {
                    "amount": "-400.99",	              "id": "23",
                    "date": "2018-11-01",	              "account": "B_1010_1002",
                    "categoryDescription": "EEE",	              "accountNumber": "1002",
                    "Mode": "Out",	              "transaction": "sem.COM",
                    "currencyCd": "ILS",	              "type": "PostedCheck",
                    "status": "cleared"	              "amount": "-800",
                }, {	              "date": "2018-11-13",
                    "id": "18",	              "categoryDescription": "Grocery",
                    "account": "B_1010_1004",	              "Mode": "Out",
                    "accountNumber": "1004",	              "currencyCd": "ILS",
                    "transaction": "sem.COM",	              "status": "cleared"
                    "type": "charge",	            },
                    "amount": "-2000.99",	            {
                    "date": "2018-11-01",	              "id": "24",
                    "categoryDescription": "Travel",	              "account": "B_1010_1002",
                    "Mode": "Out",	              "accountNumber": "1002",
                    "currencyCd": "ILS",	              "transaction": "sem.COM",
                    "status": "cleared"	              "type": "PostedCheck",
                }, {	              "amount": "-450",
                    "id": "19",	              "date": "2018-11-24",
                    "account": "B_1010_1004",	              "categoryDescription": "Grocery",
                    "accountNumber": "1004",	              "Mode": "Out",
                    "transaction": "sem.COM",	              "currencyCd": "ILS",
                    "type": "charge",	              "status": "cleared"
                    "amount": "2000.99",	            },
                    "date": "2018-11-01",	            {
                    "categoryDescription": "Salary",	              "id": "25",
                    "Mode": "In",	              "account": "B_1010_1002",
                    "currencyCd": "ILS",	              "accountNumber": "1002",
                    "status": "cleared"	              "transaction": "sem.COM",
                }, {	              "type": "PostedCheck",
                    "id": "20",	              "amount": "-700",
                    "account": "B_1010_1004",	              "date": "2018-11-18",
                    "accountNumber": "1004",	              "categoryDescription": "clothing",
                    "transaction": "sem.COM",	              "Mode": "Out",
                    "type": "charge",	              "currencyCd": "ILS",
                    "amount": "440.99",	              "status": "cleared"
                    "date": "2018-11-01",	            },
                    "categoryDescription": "Government",	            {
                    "Mode": "In",	              "id": "26",
                    "currencyCd": "ILS",	              "account": "B_1010_1002",
                    "status": "cleared"	              "accountNumber": "1002",
                }, {	              "transaction": "sem.COM",
                    "id": "21",	              "type": "PostedCheck",
                    "account": "B_1010_1004",	              "amount": "-100",
                    "accountNumber": "1004",	              "date": "2018-11-08",
                    "transaction": "sem.COM",	              "categoryDescription": "clothing",
                    "type": "charge",	              "Mode": "Out",
                    "amount": "1440.99",	              "currencyCd": "ILS",
                    "date": "2018-11-01",	              "status": "cleared"
                    "categoryDescription": "Government",	            },
                    "Mode": "In",	            {
                    "currencyCd": "ILS",	              "id": "27",
                    "status": "cleared"	              "account": "B_1010_1002",
                }, {	              "accountNumber": "1002",
                    "id": "22",	              "transaction": "sem.COM",
                    "account": "B_1010_1003",	              "type": "PostedCheck",
                    "accountNumber": "1003",	              "amount": "-1100",
                    "transaction": "sem.COM",	              "date": "2018-10-29",
                    "type": "charge",	              "categoryDescription": "Travel",
                    "amount": "1440.99",	              "Mode": "Out",
                    "date": "2018-11-01",	              "currencyCd": "ILS",
                    "categoryDescription": "Government",	              "status": "cleared"
                    "Mode": "In",	            },
                    "currencyCd": "ILS",	            {
                    "status": "cleared"	              "id": "28",
                },	              "account": "B_1010_1002",
                {	              "accountNumber": "1002",
                    "id": "23",	              "transaction": "sem.COM",
                    "account": "B_1010_1003",	              "type": "PostedCheck",
                    "accountNumber": "1003",	              "amount": "-1500",
                    "transaction": "sem.COM",	              "date": "2018-10-27",
                    "type": "PostedCheck",	              "categoryDescription": "Grocery",
                    "amount": "-1440.99",	              "Mode": "Out",
                    "date": "2018-11-01",	              "currencyCd": "ILS",
                    "categoryDescription": "null",	              "status": "cleared"
                    "Mode": "Out",	            },
                    "currencyCd": "ILS",	            {
                    "status": "cleared"	              "id": "29",
                },	              "account": "B_1010_1002",
                {	              "accountNumber": "1002",
                    "id": "24",	              "transaction": "sem.COM",
                    "account": "B_1010_1005",	              "type": "PostedCheck",
                    "accountNumber": "1005",	              "amount": "-950",
                    "transaction": "sem.COM",	              "date": "2018-10-01",
                    "type": "PostedCheck",	              "categoryDescription": "Grocery",
                    "amount": "-1440.99",	              "Mode": "Out",
                    "date": "2018-11-01",	              "currencyCd": "ILS",
                    "categoryDescription": "null",	              "status": "cleared"
                    "Mode": "Out",	            },
                    "currencyCd": "ILS",	            {
                    "status": "cleared"	              "id": "30",
                },	              "account": "B_1010_1002",
                {	              "accountNumber": "1002",
                    "id": "25",	              "transaction": "sem.COM",
                    "account": "B_1010_1005",	              "type": "PostedCheck",
                    "accountNumber": "1005",	              "amount": "-250",
                    "transaction": "seddddm.COM",	              "date": "2018-10-05",
                    "type": "PostedCheck",	              "categoryDescription": "Grocery",
                    "amount": "-120.99",	              "Mode": "Out",
                    "date": "2018-11-01",	              "currencyCd": "ILS",
                    "categoryDescription": "null",	              "status": "cleared"
                    "Mode": "Out",	            },
                    "currencyCd": "ILS",	            {
                    "status": "cleared"	              "id": "31",
                },	              "account": "B_1010_1002",
                {	              "accountNumber": "1002",
                    "id": "26",	              "transaction": "sem.COM",
                    "account": "B_1010_1005",	              "type": "PostedCheck",
                    "accountNumber": "1005",	              "amount": "-800",
                    "transaction": "Nrtdm.COM",	              "date": "2018-10-13",
                    "type": "PostedCheck",	              "categoryDescription": "Grocery",
                    "amount": "-120.99",	              "Mode": "Out",
                    "date": "2018-11-01",	              "currencyCd": "ILS",
                    "categoryDescription": "null",	              "status": "cleared"
                    "Mode": "Out",	            },
                    "currencyCd": "ILS",	            {
                    "status": "cleared"	              "id": "32",
                },	              "account": "B_1010_1002",
                {	              "accountNumber": "1002",
                    "id": "26B",	              "transaction": "sem.COM",
                    "account": "B_1010_1005",	              "type": "PostedCheck",
                    "accountNumber": "1005",	              "amount": "-450",
                    "transaction": "Nrtdm.COM",	              "date": "2018-10-24",
                    "type": "PostedCheck",	              "categoryDescription": "Grocery",
                    "amount": "-120.99",	              "Mode": "Out",
                    "date": "2018-11-01",	              "currencyCd": "ILS",
                    "categoryDescription": "null",	              "status": "cleared"
                    "Mode": "Out",	            },
                    "currencyCd": "ILS",	            {
                    "status": "cleared"	              "id": "33",
                },	              "account": "B_1010_1002",
                {	              "accountNumber": "1002",
                    "id": "26C",	              "transaction": "sem.COM",
                    "account": "B_1010_1005",	              "type": "PostedCheck",
                    "accountNumber": "1005",	              "amount": "-700",
                    "transaction": "Nrtdm.COM",	              "date": "2018-10-18",
                    "type": "PostedCheck",	              "categoryDescription": "clothing",
                    "amount": "-120.99",	              "Mode": "Out",
                    "date": "2018-11-01",	              "currencyCd": "ILS",
                    "categoryDescription": "null",	              "status": "cleared"
                    "Mode": "Out",	            },
                    "currencyCd": "ILS",	            {
                    "status": "cleared"	              "id": "34",
                }],	              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "sem.COM",
              "type": "PostedCheck",
              "amount": "-100",
              "date": "2018-10-08",
              "categoryDescription": "clothing",
              "Mode": "Out",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "35",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "Gov.org",
              "type": "charge",
              "amount": "2000.00",
              "date": "2018-12-01",
              "categoryDescription": "Government",
              "Mode": "In",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "36",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "Gov.org",
              "type": "charge",
              "amount": "1200.00",
              "date": "2019-02-27",
              "categoryDescription": "Government",
              "Mode": "In",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "37",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "Gov.org",
              "type": "charge",
              "amount": "2000.00",
              "date": "2019-02-15",
              "categoryDescription": "Government",
              "Mode": "In",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "40",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "Gov.org",
              "type": "charge",
              "amount": "2800.99",
              "date": "2019-01-25",
              "categoryDescription": "Government",
              "Mode": "In",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "42",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "sem.COM",
              "type": "charge",
              "amount": "-5000.99",
              "date": "2018-11-12",
              "categoryDescription": "Grocery",
              "Mode": "Out",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "43",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "sem.COM",
              "type": "charge",
              "amount": "-1100",
              "date": "2018-12-03",
              "categoryDescription": "Grocery",
              "Mode": "Out",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "44",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "sem.COM",
              "type": "charge",
              "amount": "-112000.5",
              "date": "2019-01-01",
              "categoryDescription": "Travel",
              "Mode": "Out",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "45",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "sem.COM",
              "type": "charge",
              "amount": "-1000",
              "date": "2019-01-27",
              "categoryDescription": "Grocery",
              "Mode": "Out",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "46",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "sem.COM",
              "type": "charge",
              "amount": "-2100",
              "date": "2019-01-03",
              "categoryDescription": "Grocery",
              "Mode": "Out",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "47",
              "account": "B_1010_1003",
              "accountNumber": "1003",
              "transaction": "Grocery.Shlomo",
              "type": "charge",
              "amount": "-100",
              "date": "2019-02-26",
              "categoryDescription": "Grocery",
              "Mode": "Out",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "48",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "Grocery.Shlomo",
              "type": "charge",
              "amount": "-100",
              "date": "2019-02-26",
              "categoryDescription": "Grocery",
              "Mode": "Out",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "49",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "Irox",
              "type": "DepositCheck",
              "amount": "6100",
              "date": "2019-02-26",
              "categoryDescription": "Salary",
              "Mode": "In",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "50",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "Irox",
              "type": "DepositCheck",
              "amount": "1100",
              "date": "2019-02-27",
              "categoryDescription": "Salary",
              "Mode": "In",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "51",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "Irox",
              "type": "DepositCheck",
              "amount": "6100",
              "date": "2019-01-10",
              "categoryDescription": "Salary",
              "Mode": "In",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "52",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "Irox",
              "type": "DepositCheck",
              "amount": "6100",
              "date": "2018-12-10",
              "categoryDescription": "Salary",
              "Mode": "In",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "53",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "Irox",
              "type": "DepositCheck",
              "amount": "6100",
              "date": "2018-11-10",
              "categoryDescription": "Salary",
              "Mode": "In",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "54",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "Irox",
              "type": "DepositCheck",
              "amount": "5500",
              "date": "2018-10-10",
              "categoryDescription": "Salary",
              "Mode": "In",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "55",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "Irox",
              "type": "DepositCheck",
              "amount": "5500",
              "date": "2018-09-10",
              "categoryDescription": "Salary",
              "Mode": "In",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "56",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "Irox",
              "type": "DepositCheck",
              "amount": "5500",
              "date": "2018-08-10",
              "categoryDescription": "Salary",
              "Mode": "In",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "57",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "Irox",
              "type": "DepositCheck",
              "amount": "4500",
              "date": "2018-07-10",
              "categoryDescription": "Salary",
              "Mode": "In",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "58",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "Irox",
              "type": "DepositCheck",
              "amount": "5500",
              "date": "2018-06-10",
              "categoryDescription": "Salary",
              "Mode": "In",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "59",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "Irox",
              "type": "DepositCheck",
              "amount": "5500",
              "date": "2018-05-10",
              "categoryDescription": "Salary",
              "Mode": "In",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "60",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "Irox",
              "type": "DepositCheck",
              "amount": "5500",
              "date": "2018-04-10",
              "categoryDescription": "Salary",
              "Mode": "In",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "61",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "Irox",
              "type": "DepositCheck",
              "amount": "5500",
              "date": "2018-03-10",
              "categoryDescription": "Salary",
              "Mode": "In",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "62",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "Irox",
              "type": "DepositCheck",
              "amount": "5500",
              "date": "2018-02-10",
              "categoryDescription": "Salary",
              "Mode": "In",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "63",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "Irox",
              "type": "DepositCheck",
              "amount": "5500",
              "date": "2018-01-10",
              "categoryDescription": "Salary",
              "Mode": "In",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "64",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "Sem",
              "type": "DepositCheck",
              "amount": "-11050",
              "date": "2019-01-28",
              "categoryDescription": "tuition Fee",
              "Mode": "Out",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "65",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "Sem",
              "type": "DepositCheck",
              "amount": "-11050",
              "date": "2018-12-28",
              "categoryDescription": "tuition Fee",
              "Mode": "Out",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "66",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "Sem",
              "type": "DepositCheck",
              "amount": "-11050",
              "date": "2018-11-28",
              "categoryDescription": "tuition Fee",
              "Mode": "Out",
              "currencyCd": "ILS",
              "status": "cleared"
            },
            {
              "id": "67",
              "account": "B_1010_1002",
              "accountNumber": "1002",
              "transaction": "Sem",
              "type": "DepositCheck",
              "amount": "-11050",
              "date": "2018-10-28",
              "categoryDescription": "tuition Fee",
              "Mode": "Out",
              "currencyCd": "ILS",
              "status": "cleared"
            },{
                "id": "68",
                "account": "B_1010_1003",
                "accountNumber": "1003",
                "transaction": "Personetics",
                "type": "DepositCheck",
                "amount": "4100",
                "date": "2019-02-26",
                "categoryDescription": "Salary",
                "Mode": "In",
                "currencyCd": "ILS",
                "status": "cleared"
              },{
                "id": "69",
                "account": "B_1010_1003",
                "accountNumber": "1003",
                "transaction": "Personetics",
                "type": "DepositCheck",
                "amount": "3100",
                "date": "2019-01-26",
                "categoryDescription": "Salary",
                "Mode": "In",
                "currencyCd": "ILS",
                "status": "cleared"
              },{
                "id": "70",
                "account": "B_1010_1003",
                "accountNumber": "1003",
                "transaction": "Personetics",
                "type": "DepositCheck",
                "amount": "1100",
                "date": "2018-12-26",
                "categoryDescription": "Salary",
                "Mode": "In",
                "currencyCd": "ILS",
                "status": "cleared"
              },{
                "id": "71",
                "account": "B_1010_1003",
                "accountNumber": "1003",
                "transaction": "Personetics",
                "type": "DepositCheck",
                "amount": "4100",
                "date": "2018-11-26",
                "categoryDescription": "Salary",
                "Mode": "In",
                "currencyCd": "ILS",
                "status": "cleared"
              },{
                "id": "72",
                "account": "B_1010_1003",
                "accountNumber": "1003",
                "transaction": "Personetics",
                "type": "DepositCheck",
                "amount": "6100",
                "date": "2018-10-26",
                "categoryDescription": "Salary",
                "Mode": "In",
                "currencyCd": "ILS",
                "status": "cleared"
              },{
                "id": "73",
                "account": "B_1010_1003",
                "accountNumber": "1003",
                "transaction": "Personetics",
                "type": "DepositCheck",
                "amount": "1100",
                "date": "2018-09-26",
                "categoryDescription": "Salary",
                "Mode": "In",
                "currencyCd": "ILS",
                "status": "cleared"
              },{
                "id": "74",
                "account": "B_1010_1003",
                "accountNumber": "1003",
                "transaction": "Gov.org",
                "type": "charge",
                "amount": "2000.00",
                "date": "2019-01-10",
                "categoryDescription": "grant",
                "Mode": "In",
                "currencyCd": "ILS",
                "status": "cleared"
              },{
                "id": "75",
                "account": "B_1010_1003",
                "accountNumber": "1003",
                "transaction": "Gov.org",
                "type": "charge",
                "amount": "2000.00",
                "date": "2019-02-10",
                "categoryDescription": "grant",
                "Mode": "In",
                "currencyCd": "ILS",
                "status": "cleared"
              },{
                "id": "76",
                "account": "B_1010_1003",
                "accountNumber": "1003",
                "transaction": "Gov.org",
                "type": "charge",
                "amount": "2800.00",
                "date": "2018-12-10",
                "categoryDescription": "grant",
                "Mode": "In",
                "currencyCd": "ILS",
                "status": "cleared"
              },{
                "id": "77",
                "account": "B_1010_1003",
                "accountNumber": "1003",
                "transaction": "Gov.org",
                "type": "charge",
                "amount": "2800.00",
                "date": "2018-10-10",
                "categoryDescription": "grant",
                "Mode": "In",
                "currencyCd": "ILS",
                "status": "cleared"
              },{
                "id": "78",
                "account": "B_1010_1003",
                "accountNumber": "1003",
                "transaction": "Ministry of Education",
                "type": "charge",
                "amount": "3000.00",
                "date": "2019-02-15",
                "categoryDescription": "Scholarship",
                "Mode": "In",
                "currencyCd": "ILS",
                "status": "cleared"
              },{
                "id": "79",
                "account": "B_1010_1003",
                "accountNumber": "1003",
                "transaction": "Ministry of Education",
                "type": "charge",
                "amount": "3000.00",
                "date": "2019-01-15",
                "categoryDescription": "Scholarship",
                "Mode": "In",
                "currencyCd": "ILS",
                "status": "cleared"
              },{
                "id": "80",
                "account": "B_1010_1003",
                "accountNumber": "1003",
                "transaction": "Ministry of Education",
                "type": "charge",
                "amount": "3000.00",
                "date": "2018-12-15",
                "categoryDescription": "Scholarship",
                "Mode": "In",
                "currencyCd": "ILS",
                "status": "cleared"
              },{
                "id": "81",
                "account": "B_1010_1003",
                "accountNumber": "1003",
                "transaction": "Ministry of Education",
                "type": "charge",
                "amount": "3000.00",
                "date": "2018-11-15",
                "categoryDescription": "Scholarship",
                "Mode": "In",
                "currencyCd": "ILS",
                "status": "cleared"
              },{
                "id": "82",
                "account": "B_1010_1003",
                "accountNumber": "1003",
                "transaction": "Ministry of Education",
                "type": "charge",
                "amount": "3000.00",
                "date": "2018-10-15",
                "categoryDescription": "Scholarship",
                "Mode": "In",
                "currencyCd": "ILS",
                "status": "cleared"
              },
          ],
        "accounts":
            [
                {
                    "id": "B_1010_1002",
                    "balance": "320",
                    "number": "1002",
                    "credit": "11177.57",
                    "currencyCd": "ILS",
                    "type": "Credit",
                    "accountStatus": "Open",
                    "numberOfOwners": "1"
                }, {
                    "id": "B_1010_1003",
                    "balance": "2000",
                    "number": "1003",
                    "credit": "1000",
                    "currencyCd": "ILS",
                    "type": "Credit",
                    "accountStatus": "Open",
                    "numberOfOwners": "1"
                }
                , {
                    "id": "B_1010_1007",
                    "balance": "24430",
                    "number": "1007",
                    "credit": "1000",
                    "currencyCd": "ILS",
                    "type": "Credit",
                    "accountStatus": "Open",
                    "numberOfOwners": "1"
                }, {
                    "id": "B_1010_1001",
                    "balance": "-1430",
                    "number": "1001",
                    "credit": "1000",
                    "currencyCd": "ILS",
                    "type": "Credit",
                    "accountStatus": "Open",
                    "numberOfOwners": "1"
                }
            ]
    }
}

const banks ={
    "test-1":{
        'content-type': 'application/json',
        'token': '3dwesdlklkl67tyu89776',
        'name': 'test bank 1',
        'lang': 'en'
    },
    "test-2":{
        'content-type': 'application/json',
        'token': '3dwesdlklkl67tyu89888',
        'name': 'test bank 2',
        'lang': 'fr'
    },
    "test-3":{
        'content-type': 'application/json',
        'token': '3dwesdlklkl67tyu89uto',
        'name': 'test bank 3',
        'lang': 'en'
    }
}
let userId;
let bank;
const serverURL = "https://personetics-moneywatch.herokuapp.com";

const personeticsAPIs = [
    'getInsights',
    'getInsightDetails',
    'getInboxInsights',
    'updateInsightRating',
    'updateInsightFeedback'
]

/**
 * serves
 * Page: project's home/sample page
 * Request Type: POST
 * Handle: will rout/send/pipe the request to the appropriate server, according to network map
 */
app.post('/*', function (req, res, next) {
    if (personeticsAPIs.indexOf(req.body.type) > -1) {
        request.post({
            url: `${serverURL}/${req.body.type}`,
            body: JSON.stringify({
                ...req.body,
                transactions: usersData[userId].transactions,
                accounts: usersData[userId].accounts
            }),
            headers: banks[bank]
        }, function (error, response, body) {
            if (error || response.statusCode !== 200) {
                res.send({ ok: false, error: error ? error.message : "error" });
            } else {
                var respo = JSON.parse(body);
                respo.unreadMessages = 1;
                respo.ok = true;
                respo.protocolVersion = 2.3;
                respo.statusMessage = "ok";
                respo.status = "200";
                res.send(respo);
            }
        });
    } else {
        res.send({ ok: true });
    }
})
















//----------------------------------------------------
app.get('/', function (request, response) {
    bank = request.query.bank;
    userId = request.query.userId;
    response.sendFile("samplePage/samplePage.html", { root: 'Product' });
})
/**
 * serves
 * Page: project's home/sample page
 * Request Type: GET
 * Handle: returns resources(files) upon request, with the bellow file name extensions
 */
var fileExtentions = ['js', 'css', 'ashx', 'gif', 'svg', 'jpg', 'png', 'html', 'htm', 'map', 'ttf'];
app.get('/*\.(' + fileExtentions.join('|') + ')', function (request, response) {
    var url = request.params[0] + "." + request.params[1];
    response.sendFile(url, { root: 'Product' });
})

app.listen(port, function (err) {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log("server is listening on " + port);
})

module.exports = app;
