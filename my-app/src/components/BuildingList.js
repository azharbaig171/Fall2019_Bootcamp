import React from 'react';

class BuilingList extends React.Component  {
	render() {
		//console.log('This is my directory file', this.props.data);
		const filterText = this.props.filterText
		const addBuilding = this.props.addBuilding
		const buildings = this.props.buildings
		const buildingList = this.props.data
		.filter(code => {
			return code.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
		})
		.map(directory => {
			return (
				<tr 
				key={directory.id}
				onClick={() => 
				addBuilding(directory.id)
				}
				>
				<td>{directory.code} </td>
				<td> {directory.name} </td>
				</tr>
			)
		})

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
