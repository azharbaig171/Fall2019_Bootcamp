import React from 'react';

class ViewBuilding extends React.Component {
	render() {
			const buildings = this.props.buildings.map(id => {
				const building = this.props.data.find(function(element){
					return element.id === id;
				})
				if (building == undefined)
				{
					return(
						<div>
							<p>Listing deleted</p>
						</div>
					)
				}
				const {code, name} = building
				if (building.coordinates)
				{
					const {coordinates, address} = building
					return(
						<div>
						<li key={id.id}><p>Code: {code} </p></li>
						<li key={id.id}><p>Name: {name} </p></li>
						<li key={id.id}><p>Latitude: {coordinates.latitude}</p></li>
						<li key={id.id}><p>Longitude: {coordinates.longitude}</p></li>
						<li key={id.id}><p>Address: {address}</p></li>
						<button onClick={this.props.removeBuilding}>
							Remove Building
						</button>
						</div>

					)
				}
				return(
					<div key = {id.id}>
					<li key={id.id}><p>Code: {code} </p></li>
					<li key={id.id}><p>Name: {name} </p></li>
					<button onClick={this.props.removeBuilding}>
						Remove Building
					</button>
					</div>
				)
			})
		//console.log(this.props.buildings)
		return (
			<div className="list">
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
				<ul>
					{buildings}
				</ul>
			</div>
		)
	}
}
export default ViewBuilding;
