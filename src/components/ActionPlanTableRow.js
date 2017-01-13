import React from 'react';
import chevronDown from '../images/icons/chevrondown.svg';
import DropdownMenu from './DropdownMenu';
import ActionPlanTableRowDay from './ActionPlanTableRowDay';

class ActionPlanTableRow extends React.Component {
	render() {
		const { data, index, getParent, collapseChildren } = this.props;
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

		//Calculate the indentation of a row by adding the appropriate class
		let indentCal = ()=> {
			if(data.dependentParent > 0) {
				return `dataTable-dependent--${data.nested}`;
			}
			return 'dataTable-dependent';
		};

		//Calculate whether the rows should be hidden or shown
		let expandedCal = () => {
			console.log('made it');
			if(data.dependentParent > 0) {
				let parent = getParent(data.dependentParent)
				if (!parent.expanded) {
					return 'hide-element';
				}
			}
			return 'show-element';
		}

		//Calculate if the row should have a Chevron
		let showChevron = ()=> {
			if(data.dependentChildren === true) {
				return (
					<use xlinkHref={chevronDown + '#chevrondown'}></use>
				)
			}
		};

		return (
			<tr className={`${expandedCal()}`}>
				<td scope="row" className={indentCal()} data-label={data.name}>
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
					<div className="slds-truncate" title={data.name}>{data.name}</div>
				</td>
				<td data-label={data.priority}>
					<div className="slds-truncate" title={data.priority}>{data.priority}</div>
				</td>
				<ActionPlanTableRowDay data={data} getParent={getParent}/>
				<td data-label={assignedName(data.assigned)}>
					<div className="slds-truncate" title={assignedName(data.assigned)}>{assignedName(data.assigned)}</div>
				</td>
				<td data-label="Confidence">
					<div className="slds-truncate" title="20%">20%</div>
				</td>
				<td data-label="Amount">
					<DropdownMenu />
				</td>
			</tr>
		)
	}
}

export default ActionPlanTableRow;