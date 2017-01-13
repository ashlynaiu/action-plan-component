// dataTable-dependent--1 to indent row
import React from 'react';
import ActionPlanTableRow from './ActionPlanTableRow';

class ActionPlanTable extends React.Component {
	constructor(props) {
		super(props);
		this.collapseChildren = this.collapseChildren.bind(this);
		this.getParent = this.getParent.bind(this);
		this.state = {
			tasks: this.props.tasks
		}
	}

	collapseChildren(key) {
		const task = {...this.state.tasks}
		task[key]['expanded'] = !task[key]['expanded'];
		this.setState({ task });
	}

	getParent(key) {
		return this.props.tasks[key];
	}

	render() {
		return (
			<table className="dataTable slds-table slds-table--bordered slds-table--cell-buffer">
				<thead>
					<tr className="slds-text-title--caps">
						<th scope="col">
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
					{Object
						.keys(this.state.tasks)
						.map(key => <ActionPlanTableRow key={key} index={key} data={this.state.tasks[key]} collapseChildren={this.collapseChildren} getParent={this.getParent}/>)
					}
				</tbody>
			</table>
		)
	}
}

export default ActionPlanTable;