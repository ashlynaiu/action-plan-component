import React from 'react';
import downArrow from '../images/icons/down.svg';
import chevronDown from '../images/icons/chevrondown.svg';

class ActionPlanTableRow extends React.Component {
	render() {
		const { data } = this.props;
		return (
			<tr>
				<td className="dataTable-smallCol">
					<div className="slds-th__action slds-th__action--form">
						<div className="dataTable-chevronDown">
							<svg class="slds-button__icon--small" viewBox="0 0 52 52" aria-hidden="true">
								<use xlinkHref={chevronDown + '#chevrondown'}></use>
							</svg>
						</div>
						<span className="slds-checkbox">
							<input type="checkbox" name="options" id="checkbox-1799" />
							<label className="slds-checkbox__label" htmlFor="checkbox-1799">
								<span className="slds-checkbox--faux"></span>
								<span className="slds-form-element__label slds-assistive-text">Select All</span>
							</label>
						</span>
					</div>
				</td>
				<td scope="row" data-label="Call Prospect to setup a meeting">
					<div className="slds-truncate" title="Call Prospect to setup a meeting">{data.name}</div>
				</td>
				<td data-label="High">
					<div className="slds-truncate" title="High">High</div>
				</td>
				<td data-label="2/9/2017">
					<div className="slds-truncate" title="2/9/2017">2/9/2017</div>
				</td>
				<td data-label="Andre Steele">
					<div className="slds-truncate" title="Andre Steele">Andre Steele</div>
				</td>
				<td data-label="Confidence">
					<div className="slds-truncate" title="20%">20%</div>
				</td>
				<td data-label="Amount">
					<button className="slds-button slds-button--icon-border-filled slds-button--icon-x-small dataTable-moreButton" title="Show More">
						<svg class="slds-button__icon slds-button__icon--hint slds-button__icon--small" viewBox="0 0 38 24" aria-hidden="true">
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