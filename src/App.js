import React, { Component } from 'react'
import './App.css'
import Alert from './Components/Alert'
import Media from './Components/Media'

class App extends Component {
  constructor(){
    super();
    this.state={
      type:"danger",
      header:"Fatal Error",
      content: "ini content dari alert"
    }
  }
  changeTypeAlert=(event)=>{
    this.setState({type:event.target.value})
  }
  changeHeaderAlert=(event)=>{
    this.setState({header:event.target.value})
  }
  changeContentAlert=(event)=>{
    this.setState({content:event.target.value})
  }
  render() {
    return (
      <div>
      <div className="App container">
        <div className="alert alert-info">
          <h3 className="text-danger">Ini project pertama React JS</h3>
          <p>Belajar React JS itu mudah</p>
          <button className="mr-1 btn btn-success">Setuju</button>
          <button className="btn btn-info">Iya Dong</button>
        </div>
      </div>
      <br/>
      <div className="App container col-sm-6">
        <Alert type="danger" header="Fatal Error">
          Ini adalah alert dengan tipe danger
        </Alert>
        <Alert type="success" header="Berhasil">
          Ini adalah alert dengan tipe success
        </Alert>
        <Alert type="warning" header="Warning">
          Ini adalah alert dengan tipe warning
        </Alert>
      </div>
      <br/>
      <div>
        <Media image="react.png" title="React JS">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, itaque aspernatur voluptates dolores vel consequuntur ex odio unde minima dolore fuga, magnam omnis nisi repellat at. Eum harum aliquid blanditiis.
        </Media>
        <Media image="angular.png" title="Angular JS">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere non eum dolor quaerat fugiat molestiae placeat, ratione nulla natus necessitatibus fuga repellendus sed eaque porro totam sint, voluptate quis velit?
        </Media>
      </div>
      <br/>
      <div>
        <Alert type={this.state.type} header={this.state.header}>
          {this.state.content}
        </Alert>
        <hr/>
        <h4>Alert Control</h4>
        <b className="text-left">Tipe Alert</b>
        <select className="form-control" name="type" value={this.state.type} onChange={this.changeTypeAlert}>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
          <option value="info">Info</option>
        </select>
        <b className="text-left">Header Alert</b>
        <input type="text"name="header" className="form-control" value={this.state.header} onChange={this.changeHeaderAlert}/>
        <b className="text-left">Content Alert</b>
        <input type="text" name="content" className="form-control" value={this.state.content} onChange={this.changeContentAlert}/>
      </div>
      </div>
    )
  }
}

export default App

