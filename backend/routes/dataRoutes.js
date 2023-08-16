const express = require('express');
const { getData, getCountryData, getRegionData , getDataByYear} = require('../controllers/dataController')
const router = express.Router()

router.get('/data', getData)
router.get('/data/country', getCountryData)
router.get('/data/region', getRegionData)
router.get('/data/year', getDataByYear)

module.exports = router