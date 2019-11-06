import React from 'react';
import RemoveBuilding from './RemoveBuilding';

class BuilingList extends React.Component  {
	render() {
		//console.log('This is my directory file', this.props.data);
		const filterText = this.props.filterText
		const addBuilding = this.props.addBuilding
		const buildingList = this.props.data
		.filter(code => {
			return code.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 
			|| 
			code.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
		})
		.map(directory => {
			return (
				<tr 
				key={directory.id}
				>
				<td onClick={() => addBuilding(directory.id)}>
				{directory.code} 
				</td>
				<td onClick={() => addBuilding(directory.id)}>
				{directory.name}
				</td>
				<RemoveBuilding
				id = {directory.id}
				removeListing = {this.props.removeListing.bind(this)}
            	/>
				</tr>
			)
		})

		return (
		<div>{buildingList}</div>
		)
	}
}
export default BuilingList;
