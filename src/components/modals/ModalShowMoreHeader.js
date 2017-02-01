import React from 'react';

class ModalShowMoreHeader extends React.Component {
	render() {
		return (
			<header className="slds-modal__header">
				<button className="slds-button slds-modal__close slds-button--icon-inverse" title="Close">
					<svg className="slds-button__icon slds-button__icon--large" aria-hidden="true">
						<use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
					</svg>
					<span className="slds-assistive-text">Close</span>
				</button>
				<h2 id="modal-heading-01" className="slds-text-heading--medium">Task Details</h2>
			</header>
		)
	}
}

export default ModalShowMoreHeader;