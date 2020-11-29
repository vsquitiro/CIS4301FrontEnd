import React, { Component} from 'react';
// import { Link } from 'react-router-dom'
import axios from 'axios';

const Row = props => (
    <tr>
        <td>{props.row.EMPLID}</td>
        <td>{props.row.NAME}</td>
        <td>{props.row.BIRTHDATE}</td>
        <td>{props.row.SALARY}</td>
    </tr>
)

export default class RowsList extends Component {

    constructor(props) {
        super(props);
        this.state = {rows: []};
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/employees/')
            .then(response => {
                this.setState({rows: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:3000/api/employees')
            .then(response => {
                this.setState({rows: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    rowList() {
        return this.state.rows.map(function(currentRow, i) {
            return <Row row={currentRow} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Rows List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Name</th>
                            <th>Birthdate</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.rowList() }
                    </tbody>
                </table>
            </div>
        )
    }
}