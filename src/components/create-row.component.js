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
        this.addAttribute = this.addAttribute.bind(this);
        this.removeAttribute = this.removeAttribute.bind(this);
        this.addRemoveButtons = this.addRemoveButtons.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            analysisType: 'accident_percentage',
            params: [{
                param: undefined,
                min: undefined,
                max: undefined,
                value: undefined,
                idx: 0
            }],
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

    paramSpecifics(param, idx) {
        if (['age','speed','speeding'].includes(param)) {
            return (
                <div>
                    <div>
                        <label style={{fontWeight: "bold"}}>Min</label>
                    </div>
                    <input
                        type="text"
                        onChange={this.onChangeMin.bind(this, idx)}
                        />
                    <div style={{marginTop: 10}}>
                        <label style={{fontWeight: "bold"}}>Max</label>
                    </div>
                    <input
                        type="text"
                        onChange={this.onChangeMax.bind(this, idx)}
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
                        selected={this.state.params[idx]['min']}
                        onSelect={this.onChangeDateMin.bind(this, idx)}
                        minDate={new Date("2015/01/01")}
                        maxDate={new Date("2015/12/31")}
                    />
                    <div style={{marginTop: 10}}>
                        <label style={{fontWeight: "bold"}}>End Date</label>
                    </div>
                    <DatePicker 
                        selected={this.state.params[idx]['max']}
                        onSelect={this.onChangeDateMax.bind(this, idx)}
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
                        <select value={this.state.value} onChange={this.onChangeValue.bind(this, idx)}>
                            { this.addValuesToDropdown(param) }
                        </select>
                    </div>
                </div>
            )
        }
    }

    addValuesToDropdown(type) {
        return this.state.key_value_arrays[type].map(function(i) {
        return <option value={i["key"]}>{i["val"]}</option>
        });
    }

    multipleParams() {
        return this.state.params.map(param_set => (
        <div>
            <label style={{fontWeight: "bold"}}>Attribute to Analyze</label>
            <div style={{marginBottom: 10}}>
                <select value={param_set.param} onChange={this.onChangeParam.bind(this, param_set.idx)}>
                    <option value={undefined}></option>
                    <option value={"age"}>Age</option>
                    <option value={"collision"}>Collision</option>
                    <option value={"timestamp"}>Date</option>
                    <option value={"drinking"}>Drinking</option>
                    <option value={"drugs"}>Drugs</option>
                    <option value={"road_surface"}>Road Surface Condition</option>
                    <option value={"sex"}>Sex</option>
                    <option value={"speed"}>Speed</option>
                    <option value={"speeding"}>Speed over Speed Limit</option>
                    <option disabled={this.state.analysisType==="state_ranking" ? true : false } value={"state"}>State</option>
                    <option value={"weather"}>Weather</option>
                </select>
            </div>
            { this.paramSpecifics(param_set.param, param_set.idx) }
        </div>
        ))
    }

    onChangeParam(idx, e) {
        let param_obj = this.state.params;
        param_obj[idx]['param'] = e.target.value;
        this.setState({
            params: param_obj
        });
    }

    onChangeMin(idx, e) {
        let param_obj = this.state.params;
        param_obj[idx]['min'] = e.target.value;
        this.setState({
            params: param_obj
        });
    }

    onChangeDateMin(idx, e) {
        let param_obj = this.state.params;
        param_obj[idx]['min'] = e;
        this.setState({
             params: param_obj
        });
    }

    onChangeMax(idx, e) {
        let param_obj = this.state.params;
        param_obj[idx]['max'] = e.target.value;
        this.setState({
            params: param_obj
        });
    }

    onChangeDateMax(idx, e) {
        let param_obj = this.state.params;
        param_obj[idx]['max'] = e;
        this.setState({
            params: param_obj
        });
    }

    onChangeAnalysisType(e) {
        this.setState({
            analysisType: e.target.value
        });
    }

    onChangeValue(idx, e) {
        let param_obj = this.state.params;
        param_obj[idx]['value'] = e.target.value
        this.setState({
            params: param_obj
        });
    }

    addAttribute() {
        let param_obj = this.state.params;
        let length = param_obj.length;
        param_obj.push({
            param: undefined,
            min: undefined,
            max: undefined,
            value: undefined,
            idx: length
        });
        this.setState({
            params: param_obj
        });
    }

    removeAttribute() {
        let param_obj = this.state.params;
        param_obj.pop();
        this.setState({
            params: param_obj
        });
    }

    addRemoveButtons(paramNum) {
        if(paramNum > 1) {
            return (
                <div>
                    <button style={{marginBottom: 10, marginTop: 5, marginRight: 15}} onClick={ this.addAttribute } className="btn btn-primary">Add Attribute</button>
                    <button style={{marginBottom: 10, marginTop: 5}} onClick={ this.removeAttribute } className="btn btn-primary">Remove Attribute</button>
                </div>
            )
        } else {
            return (
                <div>
                    <button style={{marginBottom: 10, marginTop: 5}} onClick={ this.addAttribute } className="btn btn-primary">Add Attribute</button>
                </div>
            )
        }
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Query submitted:`);

        let obj = {
            search_params: []
        }

        for(var i=0; i < this.state.params.length; i++) {
            let min_send = undefined;
            let max_send = undefined;

            if(this.state.params[i]['param']==="timestamp") {

                let min_str = String(this.state.params[i]['min']);
                min_send = `'` + min_str.substr(8,2);
                min_send += `-` + min_str.substr(4,3) + `-2015'`;

                let max_str = String(this.state.params[i]['max']);
                max_send = `'` + max_str.substr(8,2);
                max_send += `-` + max_str.substr(4,3) + `-2015'`;

            } else {
                min_send = this.state.params[i]['min'];
                max_send = this.state.params[i]['max'];
            }
            obj.search_params.push({
                "param": this.state.params[i]['param'],
                "min": min_send,
                "max": max_send,
                "value": this.state.params[i]['value']
            })
        }
        console.log("Object to send:");
        console.log(obj);

        if(this.state.analysisType === 'state_ranking') {
            this.context.handleNewEndpoint('http://localhost:3000/api/state_ranking', obj);
        } else if (this.state.analysisType === 'accident_percentage') {
            this.context.handleNewEndpoint('http://localhost:3000/api/accident_percentage', obj);
        }

        this.context.markAsNeedingUpdate();
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Perform Analysis</h3>
                { this.addRemoveButtons(this.state.params.length) }
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