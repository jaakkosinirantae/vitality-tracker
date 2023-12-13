/* 
   Filename: AdvancedVisualization.js
   Content: Advanced Visualization Code for Analytics Dashboard
*/

// Importing necessary libraries
const d3 = require('d3');
const $ = require('jquery');

// Setting up the chart container
const svgWidth = 800;
const svgHeight = 500;
const margin = { top: 20, right: 20, bottom: 50, left: 50 };
const chartWidth = svgWidth - margin.left - margin.right;
const chartHeight = svgHeight - margin.top - margin.bottom;

// Creating SVG element
const svg = d3.select('#chart-container')
  .append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);

// Creating chart group
const chart = svg.append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`);

// Fetching data from API endpoint
const fetchData = () => {
  return fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
      processData(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

// Processing data
const processData = (data) => {
  // Data manipulation and transformation
  const processedData = data.map(item => {
    return {
      date: new Date(item.date),
      value: Number(item.value)
    };
  });

  // Creating scales and axes
  const xScale = d3.scaleTime()
    .domain([d3.min(processedData, d => d.date), d3.max(processedData, d => d.date)])
    .range([0, chartWidth]);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(processedData, d => d.value)])
    .range([chartHeight, 0]);

  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  // Rendering chart elements
  chart.append('g')
    .attr('transform', `translate(0, ${chartHeight})`)
    .call(xAxis);

  chart.append('g')
    .call(yAxis);

  chart.selectAll('circle')
    .data(processedData)
    .enter()
    .append('circle')
    .attr('cx', d => xScale(d.date))
    .attr('cy', d => yScale(d.value))
    .attr('r', 5)
    .attr('fill', 'blue');

  chart.selectAll('line')
    .data(processedData)
    .enter()
    .append('line')
    .attr('x1', d => xScale(d.date))
    .attr('y1', d => yScale(d.value))
    .attr('x2', (d, i) => (i < processedData.length - 1) ? xScale(processedData[i + 1].date) : xScale(d.date))
    .attr('y2', (d, i) => (i < processedData.length - 1) ? yScale(processedData[i + 1].value) : yScale(d.value))
    .attr('stroke', 'green')
    .attr('stroke-width', 2);
};

// Initializing chart
fetchData();