import React from 'react';
import axios from 'axios';
import Leaflet from 'leaflet';
import {TableContext} from '../table-context';
import 'leaflet/dist/leaflet.css'
import CanvasJSReact from '../canvasjs.react';

var Component = React.Component;
// var CanvasJSReact = require('/canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class accidentGraph extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  mapPoints: [],
		  options: {}


		};
	  }

	

	componentDidMount() {

		let results = [];

		let months = [
			{begin: `'31-DEC-2014'`, end: `'01-FEB-2015'`,},
			{begin: `'31-JAN-2015'`, end: `'01-MAR-2015'`,},
			{begin: `'28-FEB-2015'`, end: `'01-APR-2015'`,},
			{begin: `'31-MAR-2015'`, end: `'01-MAY-2015'`,},
			{begin: `'30-APR-2015'`, end: `'01-JUN-2015'`,},
			{begin: `'31-MAY-2015'`, end: `'01-JUL-2015'`,},
			{begin: `'30-JUN-2015'`, end: `'01-AUG-2015'`,},
			{begin: `'31-JUL-2015'`, end: `'01-SEP-2015'`,},
			{begin: `'31-AUG-2015'`, end: `'01-OCT-2015'`,},
			{begin: `'30-SEP-2015'`, end: `'01-NOV-2015'`,},
			{begin: `'31-OCT-2015'`, end: `'01-DEC-2015'`,},
			{begin: `'30-NOV-2015'`, end: `'01-JAN-2016'`,},
		]


		console.log(results);

		var options = {
			
			animationEnabled: true,
			
			exportEnabled: true,
			
			theme: "light2", // "light1", "dark1", "dark2"
			
			
			
			title:{
				text: "Bounce Rate by Week of Year"
			},



			axisY: {
				title: "Bounce Rate",
				suffix: "%"
			},
			
			

			axisX: {
				title: "Week of Year",
				prefix: "W",
				interval: 2
			},
	
			data: [{
				type: "line",
				toolTipContent: "Week {x}: {y}%",
				dataPoints: []
			}]
		}
		
		for (var i=0; i<12; i++) {
			
			let obj = {
					search_params: [{
					param: 'timestamp',
					min: months[i]['begin'],
					max: months[i]['end']
				},
			{
				param: 'age',
				min: 16,
				max: 35
			}]
			}

			axios.post('http://localhost:3000/api/graph_results', obj)
			.then(response => {
				options['data'][0]['dataPoints'].push({x: options['data'][0]['dataPoints'].length + 1, y: response.data[0]['ACCIDENT_COUNT']});
				console.log('response');
				
				this.setState({options: options})
			})
		}
	}

	componentDidUpdate 


	render() {


		return (
		<div>
			<div id="graphID"> </div>
			
				<CanvasJSChart options = {this.state.options}
					/* onRef={ref => this.chart = ref} */
				/>

				{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			
		
		</div>
		);
	}
}
//module.exports = accidentGraph;       

accidentGraph.contextType = TableContext;

export default accidentGraph;
