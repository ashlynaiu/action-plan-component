import React from 'react';

class ActionPlanTableRowDay extends React.Component {
	render() {
		const { data, getParent } = this.props;
		//Calculate Due Date
		let dueDate = (days)=> {
			let today = new Date();
			let dd = today.getDate() + days;
			let mm = today.getMonth() + 1;
			let yyyy = today.getFullYear();

			if (data.dependentParent > 0 ){
				let parent = getParent(data.dependentParent);
				let previousDay = parent.days;
				return mm+'/' + (dd + previousDay) + '/'+yyyy;
			}
			else {
				return mm+'/'+dd+'/'+yyyy;
			}
		};

		return (
			<td data-label={dueDate(data.days)}>
				<div className="slds-truncate" title={dueDate(data.days)}>{dueDate(data.days)}</div>
			</td>
		)
	}
}

export default ActionPlanTableRowDay;