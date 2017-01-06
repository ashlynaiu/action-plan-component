// dataTable-dependent--1 to indent row
import React from 'react';
import ActionPlanTableRow from './ActionPlanTableRow';

class ActionPlanTable extends React.Component {
	render() {

		const tasks = {
			1: {
				name: 'Call Prospect to setup a meeting',
				priority: 'High',
				edit: 'Admin',
				days: 1,
				assigned: 'Associate',
				category: 'Phone call',
				compliance: true,
				dependentChildren: true,
				dependentParent: null,
				reminder: 'Email',
				timeBefore: 1,
				timeLength: 'day',
				note: null
			},
			2: {
				name: 'Prospect meeting',
				priority: 'High',
				edit: 'Admin',
				days: 5,
				assigned: 'Advisor',
				category: 'Meeting',
				compliance: true,
				dependentChildren: false,
				dependentParent: 1,
				reminder: 'Email',
				timeBefore: 1,
				timeLength: 'day',
				note: null
			},
		}

		return (
			<table className="slds-table slds-table--bordered slds-table--cell-buffer">
				<thead>
					<tr className="slds-text-title--caps">
						<th scope="col" colSpan="2">
							<div className="slds-truncate" title="Opportunity Name">Name</div>
						</th>
						<th scope="col">
							<div className="slds-truncate" title="Account Name">Priority</div>
						</th>
						<th scope="col">
							<div className="slds-truncate" title="Close Date">Due Date</div>
						</th>
						<th scope="col">
							<div className="slds-truncate" title="Stage">Assigned To</div>
						</th>
						<th scope="col" colSpan="2">
							<div className="slds-truncate" title="Confidence">Compliance</div>
						</th>
					</tr>
				</thead>
				<tbody>
					{Object.keys(tasks).map(key => <ActionPlanTableRow key={key} index={key} data={tasks[key]}/>)}
				</tbody>
			</table>
		)
	}
}

export default ActionPlanTable;