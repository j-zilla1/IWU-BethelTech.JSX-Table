import React from "react";
import ReactDOM from "react-dom";
 const stateInfo = (
    state,
    capital,
    population,
    state1,
    capital1,
    population1,
    state2,
    capital2,
    population2,
    state3,
    capital3,
    population3
) =>{
    return (
<table>
    <tbody>
    <tr>
        <th>State</th>
        <th>Capital</th>
        <th>Population</th>
    </tr>
    </tbody>
    <tbody>
        <tr>
        <td>{state}</td>
        <td>{capital}</td>
        <td>{population}</td>
        
    </tr>
    </tbody>
    <tbody>
        <tr>
        <td>{state1}</td>
        <td>{capital1}</td>
        <td>{population1}</td>
        
    </tr>
    </tbody>
    <tbody>
        <tr>
        <td>{state2}</td>
        <td>{capital2}</td>
        <td>{population2}</td>
        
    </tr>
    </tbody>
    <tbody>
        <tr>
        <td>{state3}</td>
        <td>{capital3}</td>
        <td>{population3}</td>
        
    </tr>
    </tbody>
    
    
</table>
    );
}

ReactDOM.render(
stateInfo(
// states
'Idaho',//state
'Boise',//capital
'2.26 thousand',//population
'Tennessee',//state1
'Nashville',//capital1
'6.651 million',//population1
'Maine',//state2
'Augusta',//capital2
'1.331 million',//population2
'Wisconsin',//state3
'Madison',//capital3
'5.779 million'//population3
    ),
    document.getElementById('root')
);
