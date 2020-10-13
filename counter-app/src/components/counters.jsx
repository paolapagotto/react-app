import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
    render() { 
        return ( 
            <div>

                <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>

                { this.state.counters.map(counter => (
                <Counter 
                    key={counter.id} 
                    onIncrement={this.props.onIncrement}
                    onDelete={this.props.onDelete} 
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