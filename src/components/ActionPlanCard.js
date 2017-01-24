import React from 'react';
import ActionPlanTable from './ActionPlanTable';
import downArrow from '../images/icons/down.svg';

class ActionPlanCard extends React.Component {
	render() {
		return (
			<article className="slds-card">
				<div className="slds-card__header slds-grid">
					<header className="slds-media slds-media--center slds-has-flexi-truncate">
						<div className="slds-media__figure">
							<span className="slds-icon_container slds-icon-standard-contact" title="description of icon when needed">
								<svg className="slds-icon slds-icon--small" aria-hidden="true">

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
					<div className="actionPlanSummary">
						<div className="actionPlanSummary-data">
							<span>Plan Completion</span>
							<p>0%</p>
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
					<div className="slds-card__header slds-grid">
						<header className="slds-media slds-media--center slds-has-flexi-truncate">
							<div className="slds-media__figure">
								<span className="slds-icon_container slds-icon-standard-contact" title="description of icon when needed">
									<svg className="slds-icon slds-icon--small" aria-hidden="true">

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
							<button className="slds-button slds-button--neutral">New Task</button>
						</div>
					</div>
					<ActionPlanTable tasks={this.props.tasks} showMoreModalToggle={this.props.showMoreModalToggle} ></ActionPlanTable>
				</div>
			</article>
		)
	}
}

export default ActionPlanCard;