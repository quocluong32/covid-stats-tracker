import React from 'react';
import numeral from 'numeral';
import './Table.css';

function TableStates({states}) {
    return (
        <div className="table">
            {/* <table> */}
                <tr style={{padding: '10px'}}>
                    <th style={{color: "black"}}>Country</th>
                    <th style={{color: "black"}}>Confirmed Cases</th>
                    <th style={{color: "red"}}>Active</th>
                    <th style={{color: "green"}}>Recovered</th>
                    <th style={{color: "purple"}}>Deaths</th>
                </tr>
             {states.map((country) => (
                
                <tr>
                    <td>{country.state}</td>
                    <td>
                        <strong>{numeral(country.cases).format("0,0")}</strong>
                    </td>
                    <td>{country.active}</td>
                    <td>{country.recovered}</td>
                    <td>{country.deaths}</td>
                </tr>
                
      ))} 
        </div>
    )
}

export default TableStates