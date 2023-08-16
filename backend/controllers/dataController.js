const EnergyInsights = require('../models/dataModel')

const getData = async (req,res) => {

    try{
        const energyData = await EnergyInsights.find()
        res.status(200).json(energyData)
    } catch(err){
        res.status(400).json({'error': err.message})
    }
}

const getCountryData = async (req,res) => {
    const { country } = req.body;

    try{
        const dataByCountry = await EnergyInsights.find({ country })
        const count = dataByCountry.length
        res.status(200).json({"Total Docs": totalDocs, dataByCountry})
    } catch (err) {
        res.status(400).json({'error': err.message})
    }
}

const getRegionData = async (req,res) => {
    const { region } = req.body;

    try{
        const dataByRegion = await EnergyInsights.find({ region })
        const count = dataByRegion.length
        res.status(200).json({"Total Docs": count, dataByRegion})
    } catch (err) {
        res.status(400).json({'error': err.message})
    }
}

const getDataByYear = async (req,res) => {
    const { year } = req.body;

    try{
        const getDataByYear = await EnergyInsights.find({ start_year: year})
        const count = getDataByYear.length
        res.status(200).json({"Total Docs": count, getDataByYear})
    } catch (err) {
        res.status(400).json({'error': err.message})
    }
}


getCountryData

module.exports = { 
    getData ,
    getCountryData,
    getRegionData,
    getDataByYear
}