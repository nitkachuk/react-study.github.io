import React, { Component } from 'react'
import Menu from './Menu'

export default class Ccomponent extends Component {

    constructor( props ) {
        super( props )

        this.state = {
            name: 'Alex',
            surname: 'Bob',

            visibility: true
        };

        this.handleClick = this.handleClick.bind( this );
    }

    handleClick() {
        this.setState( state => ({
            visibility: !state.visibility
        }) )
    }

  render() {

      const surname = this.state.surname;

        if( this.state.visibility )     {

    return (

        <div className="cc-blue">
            
            <Menu />
            <h1>Class comp { this.props.name } </h1>
            <h1>Class comp { this.props.number.join(", ") } </h1>

            <h1>Class comp { this.state.name } </h1>
            <h1>Class comp { surname } </h1>

            <button onClick={ this.handleClick }>Click</button>

        </div>

    );

                                        }
        else    {

    return (

            <div className="cc-blue">
                <button onClick={ this.handleClick }>Click</button>
            </div>

    );

        }

  }
}

Ccomponent.defaultProps = { name: 'DefaultValue' }