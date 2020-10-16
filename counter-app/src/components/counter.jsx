import React, { Component } from 'react';



class Counter extends Component {
    state = { 
        //contains any data this component needs
        //count: this.props.value,
        value: this.props.counter.value,
        imageUrl: 'https://picsum.photos/200',
        tags: ['tag1', 'tag2', 'tag3'],
     }
     
    componentDidUpdate (prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if(prevProps.counter.value !== this.props.counter.value){
            //Ajax call and get new date from the server
        }
    }

    componentWillUnmount(){
        console.log('Counter - Unmount');
    }

    render() { 
        console.log('Counter - Rendered');
            
        return (
            <div>
                {this.props.children}
                <h4>{this.props.id}</h4>
                <img src={this.state.imageUrl} alt=""/>
                <span style={{fontSize: 20}} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ () => this.props.onIncrement(this.props.counter) } className="btn btn-secondary brn-m">Increment</button>
                <button onClick={ () => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm m-2">Delete</button>
                {this.renderTags()}

            </div>);
    }
    
    renderTags(){
        if (this.state.tags.length === 0) 
            return <p>There are no tags!</p>;
        return <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }
    
    formatCount(){
        const { value } = this.props.counter
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;
