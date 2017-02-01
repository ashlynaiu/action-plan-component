import React from 'react';

const RightPanel = () =>  {
	return (
		<div className="slds-tabs--default">
			<ul className="slds-tabs--default__nav" role="tablist">
				<li className="slds-tabs--default__item" title="Item One" role="presentation"><a className="slds-tabs--default__link" href="" role="tab" tabIndex="0" aria-selected="true" aria-controls="tab-default-1" id="tab-default-1__item">Details</a></li>
				<li className="slds-tabs--default__item slds-active" title="Item Two" role="presentation"><a className="slds-tabs--default__link" href="" role="tab" tabIndex="-1" aria-selected="false" aria-controls="tab-default-2" id="tab-default-2__item">Action Plans</a></li>
				<li className="slds-tabs--default__item" title="Item Three" role="presentation"><a className="slds-tabs--default__link" href="" role="tab" tabIndex="-1" aria-selected="false" aria-controls="tab-default-3" id="tab-default-3__item">Financial Account</a></li>
				<li className="slds-tabs--default__item" title="Item Three" role="presentation"><a className="slds-tabs--default__link" href="" role="tab" tabIndex="-1" aria-selected="false" aria-controls="tab-default-3" id="tab-default-3__item">Related</a></li>
			</ul>
			<div id="tab-default-1" className="slds-tabs--default__content slds-show" role="tabpanel" aria-labelledBy="tab-default-1__item"></div>
		</div>
	)
}

export default RightPanel;