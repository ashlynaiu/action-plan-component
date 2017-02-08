import React from 'react';
import ActionPlanTable from './ActionPlanTable';
import downArrow from '../images/icons/down.svg';
import list from '../images/icons/list.svg';
import task from '../images/icons/task.svg';

class ActionPlanCard extends React.Component {
	constructor(props) {
		super(props);
		this.completeTask = this.completeTask.bind(this);
		this.state = {
			tasks: this.props.tasks
		}
	}

	completeTask(index) {
		const tasks = {...this.state.tasks};

		//Toggle the checkbox
		tasks[index]['completed'] = !tasks[index]['completed'];

		//Evaluate the disabled checkboxes and enable/disable dependent tasks
		let totalTasks = Object.keys(this.props.tasks).length;
		if (tasks[index]['dependentChildren']) {
			for (let k = 1; k < totalTasks; k++) {
				if(tasks[k]['dependentParentName'] === tasks[index]['name'])
					tasks[k]['disabled'] = !tasks[k]['disabled'];
			}
		}

		//Update the state
		this.setState({ tasks })
	}

	render() {
		let progressBar = ()=> {
			let value = 0;
			let totalTasks = Object.keys(this.props.tasks).length;
			for (let k = 1; k < totalTasks; k++) {
				if (this.props.tasks[k]['completed'] === true) {
					value++
				}
			}
			return Math.ceil(( value / totalTasks ) * 100);
		}

		return (
			<article className="slds-card">
				<div className="slds-card__header slds-card__header--top slds-grid">
					<header className="slds-media slds-media--center slds-has-flexi-truncate">
						<div className="slds-media__figure">
							<span className="slds-icon_container slds-icon-standard-contact" title="description of icon when needed">
								<svg className="slds-icon slds-icon--small iconCustom--blue" viewBox="0 0 52 52" aria-hidden="true">
									<use xlinkHref={list + '#list'}></use>
								</svg>
							</span>
						</div>
						<div className="slds-media__body">
							<h2>
								<a className="slds-card__header-link slds-truncate">
									<span className="slds-text-heading--small">Client Onboarding Process</span>
								</a>
							</h2>
						</div>
					</header>
					<div className="slds-button-group custom-buttonGroup" role="group">
						<button className="slds-button slds-button--neutral">Mark All Tasks Complete</button>
						<button className="slds-button slds-button--neutral">Edit</button>
						<div className="slds-dropdown-trigger slds-dropdown-trigger--click slds-button--last">
							<button className="slds-button slds-button--icon-border-filled" aria-haspopup="true" title="Show More">
								<svg className="slds-button__icon" viewBox="0 0 38 24" aria-hidden="true">
									<use xlinkHref={downArrow + '#down'}></use>
								</svg>
								<span className="slds-assistive-text">Show More</span>
							</button>
						</div>
					</div>
				</div>
				<div className="slds-card__body">
					<div className="slds-card__body--details">
						<div className="actionPlanProgressBar">
							<progress max="100" value={progressBar()}></progress>
						</div>
						<div className="actionPlanSummary">
							<div className="actionPlanSummary-data">
								<span>Plan Completion</span>
								<p>{progressBar()}%</p>
							</div>
							<div className="actionPlanSummary-data">
								<span>Plan Due</span>
								<p>3/1/2017</p>
							</div>
							<div className="actionPlanSummary-data">
								<span>Owner</span>
								<p>Luis Davis</p>
							</div>
							<div className="actionPlanSummary-data">
								<span>Tasks Completed</span>
								<p>0 out of 9</p>
							</div>
							<div className="actionPlanSummary-data">
								<span>Next Meeting</span>
								<p>None</p>
							</div>
						</div>
					</div>
					<div className="slds-card__header slds-grid">
						<header className="slds-media slds-media--center slds-has-flexi-truncate">
							<div className="slds-media__figure">
								<span className="slds-icon_container slds-icon-standard-contact" title="description of icon when needed">
									<svg className="slds-icon slds-icon--small iconCustom--green" viewBox="0 0 52 52" aria-hidden="true">
										<use xlinkHref={task + '#task'}></use>
									</svg>
								</span>
							</div>
							<div className="slds-media__body">
								<h2>
									<a className="slds-card__header-link slds-truncate">
										<span className="slds-text-heading--small">Tasks</span>
									</a>
								</h2>
							</div>
						</header>
						<div className="slds-no-flex">
							<button className="slds-button slds-button--neutral" onClick={() => this.props.showMoreModalToggle()}>New Task</button>
						</div>
					</div>
					<ActionPlanTable
						tasks={this.props.tasks}
						showMoreModalToggle={this.props.showMoreModalToggle}
						completeTask={this.completeTask} >
					</ActionPlanTable>
				</div>
			</article>
		)
	}
}

export default ActionPlanCard;