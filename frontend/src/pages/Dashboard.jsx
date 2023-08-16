import { useState, useEffect } from "react";
import IntensityBarChart from "../components/BarChart";
import Navbar from "../components/Navbar";
import SortByCountry from "../components/SortByCountry";

const Dashboard = () => {
    const [data,setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [property, setProperty] = useState('intensity');
    const [type,setType] = useState('region')
    const [numberOrder,setNumberOrder] = useState('default')
    const [alphabeticalOrder, setAlphabeticalOrder] = useState('a-z')
    const [selectCountry, setSelectCountry] = useState('Algeria')
    const [countryProperty,setCountryProperty] = useState('intensity')
    const [valueType,setValueType] = useState('mean')

    useEffect( () => {
        setIsLoading(true)
        const fetchData = async () => {
            const response = await fetch('/api/data/')
            const json = await response.json()
            setData(json)
            setIsLoading(false)
        }
        fetchData();
    }, [])

    return ( 
        <>
            <Navbar />
            <div className="main-dashboard">
                <div className="box-1 box">
                    <h3>Filter By : </h3>
                    <select value={property} onChange={e => setProperty(e.target.value)}>
                        <option value="intensity">Intensity</option>
                        <option value="relevance">Relevance</option>
                        <option value="likelihood">Likelihood</option>
                    </select>
                    <h3>Filter By : </h3>
                    <select value={type} onChange={e => setType(e.target.value)}>
                        <option value="region">Region</option>
                        <option value="country">Country</option>
                        <option value="sector">Sector</option>
                        <option value="topic">Topic</option>
                        <option value="pestle">Pestle</option>
                        <option value="source">Source</option>
                        <option value="start_year">Year</option>
                    </select>
                    <h3>Range Sort By : </h3>
                    <select value={numberOrder} onChange={e => {
                            setNumberOrder(e.target.value)
                            setAlphabeticalOrder('-');
                        }
                    }>
                        <option value="Default">Default</option>
                        <option value="low-to-high">Low-to-How</option>
                        <option value="high-to-low">High-to-Low</option>
                    </select>
                    <h3>Alphabetical Order : </h3>
                    <select value={alphabeticalOrder} onChange={e => {
                            setAlphabeticalOrder(e.target.value)
                            setNumberOrder('default');
                        }
                    }>
                        <option value="a-z">A-Z</option>
                        <option value="z-a">Z-A</option>
                    </select>
                    <div className='bar-chart'>
                        {isLoading && <div>Loading...</div>}
                        {!isLoading && <IntensityBarChart data={data} property={property} type={type} numberOrder={numberOrder} alphabeticalOrder={alphabeticalOrder} /> } 
                    </div>                              
                </div>
                <div className="box-2 box">
                    <h3>Country : </h3>
                    <select value={selectCountry} onChange={e => setSelectCountry(e.target.value)}>
                    <option value="Algeria">Algeria</option>
                        <option value="Angola">Angola</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Canada">Canada</option>
                        <option value="China">China</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Egypt">Egypt</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Gabon">Gabon</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Germany">Germany</option>
                        <option value="Greece">Greece</option>
                        <option value="Hungary">Hungary</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran">Iran</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Japan">Japan</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libya">Libya</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Mali">Mali</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Poland">Poland</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Russia">Russia</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Sudan">South Sudan</option>
                        <option value="Spain">Spain</option>
                        <option value="Syria">Syria</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States of America">United States of America</option>
                        <option value="Venezuela">Venezuela</option>
                    </select>
                    <h3>Filter By : </h3>
                    <select value={countryProperty} onChange={e => setCountryProperty(e.target.value)}>
                        <option value="intensity">Intensity</option>
                        <option value="relevance">Relevance</option>
                        <option value="likelihood">Likelihood</option>
                    </select>
                    <h3>Value By : </h3>
                    <select value={valueType} onChange={e => setValueType(e.target.value)}>
                        <option value="mean">Mean</option>
                        <option value="max">Maximum</option>
                        <option value="min">Minimum</option>
                    </select>
                    {!isLoading && <SortByCountry data={data}  property={countryProperty} valueType={valueType} selectCountry={selectCountry}/> } 

                    {/* <SortByCountry data={data} chartType={chartType} property={property} type={type} numberOrder={numberOrder} alphabeticalOrder={alphabeticalOrder} /> */}
                </div>
            </div>
        </>
     );

}

export default Dashboard;