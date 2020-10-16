import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
    render() { 
        console.log('Counters - Rendered');

        const { counters, onReset, onDelete, onIncrement } = this.props;
        return ( 
            <div>
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">
                    Reset</button>

                { counters.map (counter => (
                <Counter 
                    key={counter.id} 
                    onIncrement={onIncrement}
                    onDelete={onDelete} 
                    // value={counter.value} 
                    // id={counter.id} 
                    counter = { counter }
                    selected={true}>

                    <h4>Title Counter #{counter.id}</h4>

                </Counter> 
                ))};
            </div>
         );
    };
};

 
export default Counters;