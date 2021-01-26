import React, { Component } from 'react'

export default class Alert extends Component {
    render() {
        return (
            <div className={"alert alert-"+ this.props.type}>
                <h4>{this.props.header}</h4>
                {this.props.children}
            </div>
        )
    }
}
