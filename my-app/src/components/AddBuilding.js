import React from 'react';

class AddBuilding extends React.Component {
    state = {
        id:'',
        code: '',
        name: '',
        coordinates: '',
        address:''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addListing(this.state.id, 
        this.state.code, 
        this.state.name, 
        this.state.coordinates, 
        this.state.address)
      }

    render(){
        return(
            <div className="randomtext">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        ID:
                        <input type="text"
                        placeholder="ID..."
                        value={this.state.id} 
                        onChange={event => this.setState({id: event.target.value})}
                        required 
                        />
                    </label>
                    <label>
                        Code:
                        <input type="text"
                        placeholder="Code..."
                        value={this.state.code} 
                        onChange={event => this.setState({code: event.target.value})} 
                        required
                        />
                    </label>
                    <label>
                        Name:
                        <input type="text"
                        placeholder="Name..."
                        value={this.state.name} 
                        onChange={event => this.setState({name: event.target.value})} 
                        required
                        />
                    </label>
                    <label>
                        Coordinates:
                        <input type="text"
                        placeholder="Coordinates..."
                        value={this.state.coordinates} 
                        onChange={event => this.setState({coordinates: event.target.value})} 
                        />
                    </label>
                    <label>
                        Address:
                        <input type="text"
                        placeholder="Address..."
                        value={this.state.address} 
                        onChange={event => this.setState({address: event.target.value})} 
                        />
                    </label>
                
                <input type="submit" value="Submit" />
                </form>
            </div>



        )
    }

}
export default AddBuilding