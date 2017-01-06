// dataTable-dependent--1 to indent row
import React from 'react';
import ActionPlanTableRow from './ActionPlanTableRow';

class ActionPlanTable extends React.Component {
	render() {
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
					<ActionPlanTableRow></ActionPlanTableRow>
				</tbody>
			</table>
		)
	}
}

export default ActionPlanTable;