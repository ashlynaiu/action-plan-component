import React from 'react';
import downArrow from '../images/icons/down.svg';

class DropdownMenu extends React.Component {
	constructor() {
		super();
		this.toggleDropdownButton = this.toggleDropdownButton.bind(this);
		this.state = {
			showDropdown: false
		}
	}

	toggleDropdownButton() {
		this.setState(
			{ showDropdown: !this.state.showDropdown }
		);
	}

	render() {
		const { showMoreModalToggle } = this.props;
		let showMoreClass = ()=> {
			if (!this.state.showDropdown) {
				return 'slds-is-closed';
			}
			return 'slds-is-open';
		};

		return (
			<td data-label="Show More" className="dataTable-cellSmall">
				<div className={`slds-dropdown-trigger slds-dropdown-trigger--click ${showMoreClass()}`}>
					<button className="slds-button slds-button--icon-border-filled slds-button--icon-x-small dataTable-moreButton" title="Show More" onClick={() => this.toggleDropdownButton()}>
						<svg className="slds-button__icon slds-button__icon--hint" viewBox="0 0 38 24" aria-hidden="true">
							<use xlinkHref={downArrow + '#down'}></use>
						</svg>
						<span className="slds-assistive-text">Show More</span>
					</button>
					<div className="slds-dropdown slds-dropdown--right">
						<ul className="slds-dropdown__list" role="menu">
							<li className="slds-dropdown__item" role="presentation" onClick={() => showMoreModalToggle()}>
								<a role="menuitem" tabIndex="0">
									<span className="slds-truncate">More Options</span>
								</a>
							</li>
							<li className="slds-dropdown__item" role="presentation">
								<a role="menuitem" tabIndex="-1">
									<span className="slds-truncate">Add Subtask</span>
								</a>
							</li>
							<li className="slds-dropdown__item" role="presentation">
								<a role="menuitem" tabIndex="-1">
									<span className="slds-truncate">Collapse</span>
								</a>
							</li>
							<li className="slds-dropdown__item" role="presentation">
								<a role="menuitem" tabIndex="-1">
									<span className="slds-truncate">Delete</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</td>
		)
	}
}

export default DropdownMenu;