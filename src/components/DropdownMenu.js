// dataTable-dependent--1 to indent row
import React from 'react';
import downArrow from '../images/icons/down.svg';

class DropdownMenu extends React.Component {
	render() {
		return (
			<div className="slds-dropdown-trigger slds-dropdown-trigger--click slds-is-open">
				<button className="slds-button slds-button--icon-border-filled slds-button--icon-x-small dataTable-moreButton" title="Show More">
					<svg className="slds-button__icon slds-button__icon--hint" viewBox="0 0 38 24" aria-hidden="true">
						<use xlinkHref={downArrow + '#down'}></use>
					</svg>
					<span className="slds-assistive-text">Show More</span>
				</button>
				<div className="slds-dropdown slds-dropdown--right">
					<ul className="slds-dropdown__list" role="menu">
						<li className="slds-dropdown__item" role="presentation">
							<a href="" role="menuitem" tabindex="0">
								<span className="slds-truncate">More Options</span>
							</a>
						</li>
						<li className="slds-dropdown__item" role="presentation">
							<a href="" role="menuitem" tabindex="-1">
								<span className="slds-truncate">Add Subtask</span>
							</a>
						</li>
						<li className="slds-dropdown__item" role="presentation">
							<a href="" role="menuitem" tabindex="-1">
								<span className="slds-truncate">Collapse</span>
							</a>
						</li>
						<li className="slds-dropdown__item" role="presentation">
							<a href="" role="menuitem" tabindex="-1">
								<span className="slds-truncate">Delete</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default DropdownMenu;