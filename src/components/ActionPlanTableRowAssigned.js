import React from 'react';

class ActionPlanTableRowAssigned extends React.Component {
	render() {
		const { data } = this.props;
		//Set Assigned Role Names
		const Advisor = 'Andre Steele';
		const Associate = 'Luis Davis';

		//Calculate who is assigned to the role
		let assignedName = (role)=> {
			if(role === 'Advisor') {
				return Advisor;
			}
			else {
				return Associate;
			}
		};

		return (
			<td data-label={assignedName(data.assigned)} className="dataTable-cellLarge">
				<div className="slds-truncate" title={assignedName(data.assigned)}>{assignedName(data.assigned)}</div>
			</td>
		)
	}
}

export default ActionPlanTableRowAssigned;