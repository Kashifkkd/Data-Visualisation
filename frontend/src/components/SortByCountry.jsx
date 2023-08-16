import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

// eslint-disable-next-line react/prop-types
const SortByCountry = ({data, property, valueType, selectCountry }) => {

    const graphRef = useRef(null);

    useEffect(() => {
        // eslint-disable-next-line react/prop-types
        const validEntries = data.filter(entry => entry[property] !== null && entry[selectCountry] !== null && entry[selectCountry] !== "");
        const regionData = d3.group(validEntries, d => d.country);

        let averageValue;
        if(valueType === "mean"){
            averageValue = d3.mean(regionData.get(selectCountry), d => d[property]);
        } else if(valueType==="max"){
            averageValue = d3.max(regionData.get(selectCountry), d => d[property]);
        } else {
            averageValue = d3.min(regionData.get(selectCountry), d => d[property]);
        }

        const averageData = Array.from(regionData, () => ({
                region: selectCountry,
                averageValue
            })
        );
       
        const xAxisMargin = 2; 
        const margin = { top: 20, right: 30, bottom: 40, left: 85 };
        const width = 1260 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;
        const barWidth = width / averageData.length;
        const numBars = averageData.length;
        const graphWidth = numBars * barWidth;

        const svg = d3
            .select(graphRef.current)
            .append('svg')
            .attr('width', width + margin.left + margin.right + 400)
            .attr('height', height + margin.top + margin.bottom + 80)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);    

        const x = d3
            .scaleBand()
            .domain(averageData.map(d => d.region))
            .range([0, graphWidth])
            .padding(0.2);

        const y = d3
            .scaleLinear()
            .domain([0, d3.max(averageData, d => d.averageValue)])
            .nice()
            .range([height, 0]);

        svg
            .selectAll('.bar')
            .data(averageData)
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', d => x(d.region))
            .attr('width', x.bandwidth())
            .attr('y', d => y(d.averageValue))
            .attr('height', d => height - y(d.averageValue));

        svg
            .append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0,${height + xAxisMargin})`) 
            .call(d3.axisBottom(x))
            .selectAll('text')
            .attr('transform', 'rotate(-45) translate(-10, 0)')
            .attr('dy', '-0.5em')
            .attr('dx', '-0.5em')
            .style('text-anchor', 'end')
            .attr('font-size', '10px')

        svg.selectAll('.x-axis text')
            .attr('fill', 'black')
            .style('font-weight', 'bold');

        svg
            .append('g')
            .attr('class', 'y-axis')
            .call(d3.axisLeft(y))
            .attr('font-size', '15px')
            .style('font-weight', '700')
            .style('font-family', `'Times New Roman', serif`)
        

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            d3.select(graphRef.current).selectAll('*').remove();
            };
        }, [data,selectCountry,property,valueType]);
   
    

    return ( 
        <>
        <div ref={graphRef}></div>
        </>
     );
}
 
export default SortByCountry;