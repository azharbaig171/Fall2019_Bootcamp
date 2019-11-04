import React from 'react';

class ViewBuilding extends React.Component {
	render() {
			const buildings = this.props.buildings.map(id => {
				const building = this.props.data[id-1]
				const {code, name} = building
				if (building.coordinates)
				{
					const {coordinates, address} = building
					return(
						<div>
						<li key={id.id}>{code}</li>
						<li key={id.id}>{name}</li>
						<li key={id.id}>{coordinates.longitude}</li>
						<li key={id.id}>{coordinates.latitude}</li>
						<li key={id.id}>{address}</li>
						</div>
					)
				}
				return(
					<div>
					<li key={id.id}>{code}</li>
					<li key={id.id}>{name}</li>
					</div>
				)
			})
		//console.log(this.props.buildings)
		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
				<ul>
					{buildings}
				</ul>
				<button onClick={this.props.removeBuilding}>
					Remove Building
				</button>
			</div>
		)
	}
}
export default ViewBuilding;
