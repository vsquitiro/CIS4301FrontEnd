import React, { Component } from 'react';
import axios from 'axios';

export default class EditRow extends Component {
    
    constructor(props) {
        super(props);

        this.onChangeEMPLID = this.onChangeEMPLID.bind(this);
        this.onChangeNAME = this.onChangeTodoNAME.bind(this);
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

    componentDidMount() {
        axios.get('http://localhost:3000/api/employees/' + this.props.match.params.EMPLID)
            .then(response => {
                this.setState({
                    EMPLID:    response.data.EMPLID,
                    NAME:      response.data.NAME,
                    BIRTHDATE: response.data.BIRTHDATE,
                    SALARY:    response.data.SALARY
                })
            })
            .catch(function(error) {
                console.log(error)
            })
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
        const obj = {
            EMPLID: this.state.EMPLID,
            NAME: this.state.NAME,
            BIRTHDATE: this.state.BIRTHDATE,
            SALARY: this.state.SALARY
        };
        axios.post('http://localhost:3000/api/employees/update/'+this.props.match.params.EMPLID, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3>Update Row</h3>
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
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Update Todo" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}