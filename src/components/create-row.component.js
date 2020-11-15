import React, { Component } from 'react';
import {TableContext} from '../table-context';
import axios from 'axios';

export default class CreateRow extends Component {

    constructor(props) {
        super(props);

        this.onChangeProj = this.onChangeProj.bind(this);
        this.onChangeAtt = this.onChangeAtt.bind(this);
        this.onChangeCon = this.onChangeCon.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            proj: '',
            att: '',
            con: '',
        }
    }

    onChangeProj(e) {
        this.setState({
            proj: e.target.value
        })
    }

    onChangeAtt(e) {
        this.setState({
            att: e.target.value
        });
    }

    onChangeCon(e) {
        this.setState({
            con: e.target.value
        });
    }

    onChangeSALARY(e) {
        this.setState({
            SALARY: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Query submitted:`);
        console.log(`Proj: ${this.state.proj}`);
        console.log(`Att: ${this.state.att}`);
        console.log(`Con: ${this.state.con}`);

        // const newRow = {
        //     EMPLID: this.state.EMPLID,
        //     NAME: this.state.NAME,
        //     BIRTHDATE: this.state.BIRTHDATE,
        //     SALARY: this.state.SALARY
        // }

        // axios.post('http://localhost:3000/api/add', newRow)
        //     .then(res => console.log(res.data));


        let query_params = '/select/?';
        if (this.state.proj != '') {
            query_params += 'proj=' + this.state.proj;
        }

        if (this.state.att != '' && this.state.con != '') {
            if (query_params != '/select/?') {
                query_params += '&'
            }
            query_params += 'att=' + this.state.att + '&con=' + this.state.con;
        }

        if (query_params == '/select/?') {
            query_params = '';
        }

        this.context.handleNewEndpoint('http://localhost:3000/api/employees' + query_params);

        // this.setState({
        //     EMPLID: '',
        //     NAME: '',
        //     BIRTHDATE: '',
        //     SALARY: ''
        // })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Perform Analysis</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Field to Display: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.proj}
                            onChange={this.onChangeProj}
                            />
                    </div>
                    <div className="form-group">
                        <label>Attribute to Check: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.att}
                            onChange={this.onChangeAtt}
                            />
                    </div>
                    <div className="form-group">
                        <label>Condition: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.con}
                            onChange={this.onChangeCon}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="analyze" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
CreateRow.contextType = TableContext;