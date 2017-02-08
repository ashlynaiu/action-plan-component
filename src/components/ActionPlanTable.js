import React from 'react';
import ActionPlanTableRow from './ActionPlanTableRow';
import info from '../images/icons/info.svg';

class ActionPlanTable extends React.Component {
	constructor(props) {
		super(props);
		this.collapseChildren = this.collapseChildren.bind(this);
		this.getParent = this.getParent.bind(this);
		this.popoverToogle = this.popoverToogle.bind(this);
		this.state = {
			tasks: this.props.tasks,
			popover: false
		}
	}

	recursiveToggle (key, value, tasks) {
		if ( value === true ) {
			tasks[key]['expanded'] = !tasks[key]['expanded'];
			Object.keys(tasks).forEach((task_id) => {
				if ((task_id !== key)
					&& (tasks[task_id]['expanded'] !== value)
					&& (tasks[task_id]['dependentChildren'])
					&& (tasks[task_id]['dependentParent'] == key)
					&& (parseInt(task_id, 10) != tasks[key]['dependentParent']))
				{
					this.recursiveToggle(task_id, value, tasks)
				}
			})
		} else if (tasks[key]['dependentChildren']) {
			tasks[key]['expanded'] = value
			Object.keys(tasks).forEach((task_id) => {
				if ((task_id !== key)
					&& (tasks[task_id]['expanded'] !== value)
					&& (tasks[task_id]['dependentChildren'])
					&& (tasks[task_id]['dependentParent'] == key)
					&& (parseInt(task_id, 10) != tasks[key]['dependentParent']))
				{
					this.recursiveToggle(task_id, value, tasks)
				}
			})
		}
		return
	}

	collapseChildren(key) {
		const tasks = {...this.state.tasks}
		this.recursiveToggle(key, !tasks[key]['expanded'], tasks)
		this.setState({ tasks });
	}

	getParent(key) {
		return this.props.tasks[key];
	}

	popoverToogle() {
		this.setState(
			{ popover: !this.state.popover }
		);
		console.log(this.state.popover)
	}

	render() {
		let showPopover = ()=> {
			console.log('trying')
			if (!this.state.popover) {
				return 'hide-element';
			}
			return 'show-element';
		};

		return (
			<div className="actionPlanContainer">
				<table className="dataTable slds-table slds-table--bordered slds-table--cell-buffer">
					<thead>
						<tr className="slds-text-title--caps">
							<th scope="col">
								<div className="slds-truncate " title="Opportunity Name">Name</div>
							</th>
							<th scope="col" className="dataTable-cellLarge">
								<div className="slds-truncate" title="Account Name">Priority</div>
							</th>
							<th scope="col" className="dataTable-cellLarge">
								<div className="slds-truncate" title="Close Date">Due Date</div>
							</th>
							<th scope="col" className="dataTable-cellLarge">
								<div className="slds-truncate" title="Stage">Assigned To</div>
							</th>
							<th scope="col" className="dataTable-cellSmall--flex" onMouseOver={this.popoverToogle} onMouseOut={this.popoverToogle}>
								<div className="slds-truncate" title="Required for Compliance">Required</div>
								<div className="customInfoIcon">
									<svg className="slds-button__icon slds-button__icon--hint" viewBox="0 0 52 52" aria-hidden="true">
										<use xlinkHref={info + '#info'}></use>
									</svg>
								</div>
								<div className={`popOverCustom ${showPopover()}`}>
									<section className="slds-popover slds-nubbin--top-right" role="dialog">
										<div className="slds-popover__body">
											<p>A required task means that your compliance team will be checking for this task’s completion for legal reasons.</p>
										</div>
									</section>
								</div>
							</th>
							<th scope="Show More" className="dataTable-cellSmall">
								<div title="Show More"></div>
							</th>
						</tr>
					</thead>
					<tbody>
						{Object
							.keys(this.props.tasks)
							.map(key => <ActionPlanTableRow
								key={key}
								index={key}
								data={this.props.tasks[key]}
								collapseChildren={this.collapseChildren}
								getParent={this.getParent}
								showMoreModalToggle={this.props.showMoreModalToggle}
								completeTask={this.props.completeTask} />)
						}
					</tbody>
				</table>
			</div>
		)
	}
}

export default ActionPlanTable;