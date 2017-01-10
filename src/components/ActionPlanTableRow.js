import React from 'react';
import downArrow from '../images/icons/down.svg';
import chevronDown from '../images/icons/chevrondown.svg';

class ActionPlanTableRow extends React.Component {
	render() {
		const { data, index, getParent, collapseChildren } = this.props;
		const Advisor = 'Andre Steele';
		const Associate = 'Luis Davis';

		let dueDate = (days)=> {
			let today = new Date();
			let dd = today.getDate() + days;
			let mm = today.getMonth() + 1;
			let yyyy = today.getFullYear();
			return mm+'/'+dd+'/'+yyyy;
		};

		let assignedName = (role)=> {
			if(role === 'Advisor') {
				return Advisor;
			}
			else {
				return Associate;
			}
		};

		let indentCal = ()=> {
			if(data.dependentParent > 0) {
				return `dataTable-dependent--${data.nested}`;
			}
		};

		let expandedCal = () => {
			if(data.dependentParent > 0) {
				let parent = getParent(data.dependentParent)
				if (!parent.expanded) {
					return 'dataTable-row--hide'
				}
			}
			return 'dataTable-row--show'
		}

		let showChevron = ()=> {
			if(data.dependentChildren === true) {
				return (
					<use xlinkHref={chevronDown + '#chevrondown'}></use>
				)
			}
		};

		return (
			<tr className={`${expandedCal()}`}>
				<td className={`dataTable-smallCol ${indentCal()}`}>
					<div className="slds-th__action slds-th__action--form">
						<div className="dataTable-chevronDown" onClick={() => collapseChildren(index)}>
							<svg className="slds-button__icon--small" viewBox="0 0 52 52" aria-hidden="true">
								{showChevron()}
							</svg>
						</div>
						<span className="slds-checkbox">
							<input type="checkbox" name="options" id={`checkbox-${index}`} />
							<label className="slds-checkbox__label" htmlFor={`checkbox-${index}`}>
								<span className="slds-checkbox--faux"></span>
								<span className="slds-form-element__label slds-assistive-text">Select All</span>
							</label>
						</span>
					</div>
				</td>
				<td scope="row" data-label={data.name}>
					<div className="slds-truncate" title={data.name}>{data.name}</div>
				</td>
				<td data-label={data.priority}>
					<div className="slds-truncate" title={data.priority}>{data.priority}</div>
				</td>
				<td data-label={dueDate(data.days)}>
					<div className="slds-truncate" title={dueDate(data.days)}>{dueDate(data.days)}</div>
				</td>
				<td data-label={assignedName(data.assigned)}>
					<div className="slds-truncate" title={assignedName(data.assigned)}>{assignedName(data.assigned)}</div>
				</td>
				<td data-label="Confidence">
					<div className="slds-truncate" title="20%">20%</div>
				</td>
				<td data-label="Amount">
					<button className="slds-button slds-button--icon-border-filled slds-button--icon-x-small dataTable-moreButton" title="Show More">
						<svg className="slds-button__icon slds-button__icon--hint slds-button__icon--small" viewBox="0 0 38 24" aria-hidden="true">
							<use xlinkHref={downArrow + '#down'}></use>
						</svg>
						<span className="slds-assistive-text">Show More</span>
					</button>
				</td>
			</tr>

		)
	}
}

export default ActionPlanTableRow;