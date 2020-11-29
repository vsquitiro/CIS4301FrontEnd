import React, { Component} from 'react';
import axios from 'axios';
import {TableContext} from '../table-context';

export default class ResultTable extends Component {

    constructor(props) {
        super(props);
        this.state = {rows: [],};
    }

    componentDidMount() {
        console.log('mounting')

        axios.get(this.context.table_endpoint)
            .then(response => {
                this.context.handleNewHeaders(Object.keys(response.data[0]));
                // console.log(this.context.table_headers);
                this.setState({rows: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    arrayCheck(array1, array2) {
        if (array1 === undefined || array2 === undefined) {
            return false;
        }
        if (array1.length != array2.length) {
            return false;
        }
        for (var i = 0; i < array1.length; ++i) {
            if (JSON.stringify(array1[i]) != JSON.stringify(array2[i])) {
                return false;
            }
        }
        return true;
    }

    componentDidUpdate() {
        console.log('updating')
        axios.get(this.context.table_endpoint)
            .then(response => {
                if (!this.arrayCheck(this.context.table_headers,Object.keys(response.data[0]))) {
                    console.log('header updating');
                    console.log(this.context.table_headers);
                    console.log(Object.keys(response.data[0]));
                    this.context.handleNewHeaders(Object.keys(response.data[0]));
                }
                if (!this.arrayCheck(this.state.rows, response.data)) {
                    console.log(this.state.rows);
                    console.log(response.data);
                    this.setState({rows: response.data});
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    // rowList() {
    //     return this.state.rows.map(function(currentRow, i) {
    //         return <RowItem row={currentRow} key={i} />;
    //     });
    // }

    rowList(headers) {
        return this.state.rows.map(currentRow => (
        <tr>
            {this.rowData(currentRow, headers)}
        </tr>
        ))
    }

    rowData(row, headers) {
        return headers.map(header => (
            <td>
                {row[header]}
            </td>
        ))
    }

    firstLetterCap(string) {
        let lowerString = string.toLowerCase();
        let firstChar   = string.charAt(0);
        return firstChar + lowerString.slice(1, string.length);
    }

    headersList(headers) {
        return headers.map(header => (
            <td>
                {this.firstLetterCap(header)}
            </td>
        ))
    }

    render() {
        return (
            <div>
                <h3>Results</h3>

                <table className="table table-striped" style={{ marginTop: 20 }}>

                    <thead>
                        <tr>
                            {this.headersList(this.context.table_headers)}
                        </tr>
                    </thead>

                    <tbody>
                        {this.rowList(this.context.table_headers)}
                    </tbody>

                </table>
                
            </div>
        )
    }
}
ResultTable.contextType = TableContext;