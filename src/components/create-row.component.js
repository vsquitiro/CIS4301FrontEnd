import React, { Component } from 'react';
import {TableContext} from '../table-context';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class CreateRow extends Component {

    constructor(props) {
        super(props);

        this.onChangeAnalysisType = this.onChangeAnalysisType.bind(this);
        this.onChangeParam = this.onChangeParam.bind(this);
        this.onChangeMin = this.onChangeMin.bind(this);
        this.onChangeMax = this.onChangeMax.bind(this);
        this.onChangeDateMin = this.onChangeDateMin.bind(this);
        this.onChangeDateMax = this.onChangeDateMax.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.addValuesToDropdown = this.addValuesToDropdown.bind(this);
        this.multipleParams = this.multipleParams.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            analysisType: 'accident_percentage',
            param_count: 1,
            params: [{
                param: undefined,
                min: undefined,
                max: undefined,
                value: undefined,
                idx: 0
            },
            {
                param: undefined,
                min: undefined,
                max: undefined,
                value: undefined,
                idx: 1
            }],
            param: undefined,
            min: undefined,
            max: undefined,
            value: undefined,
            key_value_arrays: {
                'state': require('./value-arrays/state-names'),
                'sex': require('./value-arrays/sex'),
                'road_surface': require('./value-arrays/road-surface'),
                'collision': require('./value-arrays/collision-type'),
                'weather': require('./value-arrays/weather'),
                'drinking': require('./value-arrays/drinking'),
                'drugs': require('./value-arrays/drugs'),
            }
        }
    }

    paramSpecifics(param) {
        console.log('Param_test');
        console.log(param);
        if (['age','speed','speeding'].includes(param)) {
            return (
                <div>
                    <div>
                        <label style={{fontWeight: "bold"}}>Min</label>
                    </div>
                    <input
                        type="text"
                        onChange={this.onChangeMin}
                        />
                    <div style={{marginTop: 10}}>
                        <label style={{fontWeight: "bold"}}>Max</label>
                    </div>
                    <input
                        type="text"
                        onChange={this.onChangeMax}
                        />
                </div>
            )
        } else if (['timestamp'].includes(param)) {
            console.log('timestamp recognized.')
            return (
                <div>
                    <div>
                        <label style={{fontWeight: "bold"}}>Start Date</label>
                    </div>
                    <DatePicker 
                        selected={this.state.min}
                        onSelect={this.onChangeDateMin}
                        minDate={new Date("2015/01/01")}
                        maxDate={new Date("2015/12/31")}
                    />
                    <div style={{marginTop: 10}}>
                        <label style={{fontWeight: "bold"}}>End Date</label>
                    </div>
                    <DatePicker 
                        selected={this.state.max}
                        onSelect={this.onChangeDateMax}
                        minDate={new Date("2015/01/01")}
                        maxDate={new Date("2015/12/31")}
                    />
                </div>
            )
        } else if (['state','sex','road_surface','collision','weather','drinking','drugs'].includes(param)) {
            return (
                <div>
                    <label style={{fontWeight: "bold"}}>Value of Attribute</label>
                    <div style={{marginBottom: 10}}>
                        <select value={this.state.value} onChange={this.onChangeValue}>
                            { this.addValuesToDropdown(param) }
                        </select>
                    </div>
                </div>
            )
        }
    }

    addValuesToDropdown(type) {
        console.log('Add Values Test');
        return this.state.key_value_arrays[type].map(function(i) {
        return <option value={i["key"]}>{i["val"]}</option>
        });
    }

    multipleParams() {
        return this.state.params.map(param_set => (
        <div>
            <label style={{fontWeight: "bold"}}>Attribute to Analyze</label>
            <div style={{marginBottom: 10}}>
                <select value={param_set.param} onChange={this.onChangeParam}>
                    <option value={undefined}></option>
                    <option value="age">Age</option>
                    <option value="collision">Collision</option>
                    <option value="timestamp">Date</option>
                    <option value="drinking">Drinking</option>
                    <option value="drugs">Drugs</option>
                    <option value="road_surface">Road Surface Condition</option>
                    <option value="sex">Sex</option>
                    <option value="speed">Speed</option>
                    <option value="speeding">Speed over Speed Limit</option>
                    <option disabled={this.state.analysisType==="state_ranking" ? true : false } value="state">State</option>
                    <option value="weather">Weather</option>
                </select>
            </div>
            { this.paramSpecifics(this.state.param) }
        </div>
        ))
    }

    onChangeParam(e) {
        console.log('Param change test');
        console.log(e.target.value);
        this.setState({
            param: e.target.value
        });
    }

    onChangeMin(e) {
        this.setState({
            min: e.target.value
        });
    }

    onChangeDateMin(e) {
        this.setState({
            min: e
        });
    }

    onChangeMax(e) {
        this.setState({
            max: e.target.value
        });
    }

    onChangeDateMax(e) {
        this.setState({
            max: e
        });
    }

    onChangeAnalysisType(e) {
        this.setState({
            analysisType: e.target.value
        });
    }

    onChangeValue(e) {
        this.setState({
            value: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Query submitted:`);

        let query_params = '/select/?';
        if (this.state.proj !== '') {
            query_params += 'proj=' + this.state.proj;
        }

        if (this.state.att !== '' && this.state.con !== '') {
            if (query_params !== '/select/?') {
                query_params += '&'
            }
            query_params += 'att=' + this.state.att + '&con=' + this.state.con;
        }

        if (query_params === '/select/?') {
            query_params = '';
        }

        console.log("Min Max Test");
        console.log(this.state.param);

        let min_send = undefined;
        let max_send = undefined;

        if(this.state.param==="timestamp") {

            let min_str = String(this.state.min);
            min_send = `'` + min_str.substr(8,2);
            min_send += `-` + min_str.substr(4,3) + `-2015'`;
            console.log(min_send);

            let max_str = String(this.state.max);
            max_send = `'` + max_str.substr(8,2);
            max_send += `-` + max_str.substr(4,3) + `-2015'`;
            console.log(max_send);

        } else {
            min_send = this.state.min;
            max_send = this.state.max;
        }

        let obj = {
            search_params: [{
                "param": this.state.param,
                "min": min_send,
                "max": max_send,
                "value": this.state.value
            }]
        }

        console.log(obj);

        if(this.state.analysisType === 'state_ranking') {
            this.context.handleNewEndpoint('http://localhost:3000/api/state_ranking', obj);
        } else if (this.state.analysisType === 'accident_percentage') {
            this.context.handleNewEndpoint('http://localhost:3000/api/accident_percentage', obj);
        }
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Perform Analysis</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label style={{fontWeight: "bold"}}>Analysis Type</label>
                        <div>
                            <input 
                                type="radio"
                                name="analysisType"
                                id="accidentPercentage"
                                value="accident_percentage"
                                checked={this.state.analysisType==='accident_percentage'}
                                onChange={this.onChangeAnalysisType}
                                />
                            <label style={{marginLeft: 10}}>Accident Percentage</label>
                        </div>
                        <div>
                            <input 
                                type="radio"
                                name="analysisType"
                                id="stateRanking"
                                value="state_ranking"
                                checked={this.state.analysisType==='state_ranking'}
                                onChange={this.onChangeAnalysisType}
                                />
                            <label style={{marginLeft: 10}}>State Ranking</label>
                        </div>
                        { this.multipleParams()}                  
                        {/* <label style={{fontWeight: "bold"}}>Attribute to Analyze</label>
                        <div style={{marginBottom: 10}}>
                            <select value={this.state.param} onChange={this.onChangeParam}>
                                <option value={undefined}></option>
                                <option value="age">Age</option>
                                <option value="collision">Collision</option>
                                <option value="timestamp">Date</option>
                                <option value="drinking">Drinking</option>
                                <option value="drugs">Drugs</option>
                                <option value="road_surface">Road Surface Condition</option>
                                <option value="sex">Sex</option>
                                <option value="speed">Speed</option>
                                <option value="speeding">Speed over Speed Limit</option>
                                <option disabled={this.state.analysisType==="state_ranking" ? true : false } value="state">State</option>
                                <option value="weather">Weather</option>
                            </select>
                        </div>
                        { this.paramSpecifics(this.state.param) } */}
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Analyze" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
CreateRow.contextType = TableContext;