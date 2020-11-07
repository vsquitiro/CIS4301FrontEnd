import React, { Component } from 'react';
import axios from 'axios';

export default class CreateRow extends Component {

    constructor(props) {
        super(props);

        this.onChangeEMPLID = this.onChangeEMPLID.bind(this);
        this.onChangeNAME = this.onChangeNAME.bind(this);
        this.onChangeBIRTHDATE = this.onChangeBIRTHDATE.bind(this);
        this.onChangeSALARY = this.onChangeSALARY.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            EMPLID: '',
            NAME: '',
            BIRTHDATE: '',
            SALARY: ''
        }
    }

    onChangeEMPLID(e) {
        this.setState({
            EMPLID: e.target.value
        });
    }

    onChangeNAME(e) {
        this.setState({
            NAME: e.target.value
        });
    }

    onChangeBIRTHDATE(e) {
        this.setState({
            BIRTHDATE: e.target.value
        });
    }

    onChangeSALARY(e) {
        this.setState({
            SALARY: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`EMPLID: ${this.state.EMPLID}`)
        console.log(`NAME: ${this.state.NAME}`)
        console.log(`BIRTHDATE: ${this.state.BIRTHDATE}`)
        console.log(`SALARY: ${this.state.SALARY}`)

        const newRow = {
            EMPLID: this.state.EMPLID,
            NAME: this.state.NAME,
            BIRTHDATE: this.state.BIRTHDATE,
            SALARY: this.state.SALARY
        }

        axios.post('http://localhost:3000/api/add', newRow)
            .then(res => console.log(res.data));

        this.setState({
            EMPLID: '',
            NAME: '',
            BIRTHDATE: '',
            SALARY: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create New Row</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Employee ID: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.EMPLID}
                            onChange={this.onChangeEMPLID}
                            />
                    </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.NAME}
                            onChange={this.onChangeNAME}
                            />
                    </div>
                    <div className="form-group">
                        <label>Birthdate: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.BIRTHDATE}
                            onChange={this.onChangeBIRTHDATE}
                            />
                    </div>
                    <div className="form-group">
                        <label>Salary: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.SALARY}
                            onChange={this.onChangeSALARY}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Row" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}