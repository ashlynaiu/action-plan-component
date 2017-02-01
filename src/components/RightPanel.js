import React from 'react';

const RightPanel = () =>  {
	return (
		<div>
			<div className="slds-tabs--default">
				<ul className="slds-tabs--default__nav" role="tablist">
					<li className="slds-tabs--default__item slds-active" title="Item One" role="presentation"><a className="slds-tabs--default__link" href="" role="tab" tabIndex="0" aria-selected="true" aria-controls="tab-default-1" id="tab-default-1__item">Item One</a></li>
					<li className="slds-tabs--default__item" title="Item Two" role="presentation"><a className="slds-tabs--default__link" href="" role="tab" tabIndex="-1" aria-selected="false" aria-controls="tab-default-2" id="tab-default-2__item">Item Two</a></li>
					<li className="slds-tabs--default__item" title="Item Three" role="presentation"><a className="slds-tabs--default__link" href="" role="tab" tabIndex="-1" aria-selected="false" aria-controls="tab-default-3" id="tab-default-3__item">Item Three</a></li>
				</ul>
				<div id="tab-default-1" className="slds-tabs--default__content slds-show" role="tabpanel" aria-labelledBy="tab-default-1__item"></div>
			</div>

			<div className="slds-tabs--scoped">
				<ul className="slds-tabs--scoped__nav" role="tablist">
					<li className="slds-tabs--scoped__item slds-active" title="Item One" role="presentation"><a className="slds-tabs--scoped__link" href="" role="tab" tabIndex="0" aria-selected="true" aria-controls="tab-scoped-1" id="tab-scoped-1__item">Item One</a></li>
					<li className="slds-tabs--scoped__item" title="Item Two" role="presentation"><a className="slds-tabs--scoped__link" href="" role="tab" tabIndex="-1" aria-selected="false" aria-controls="tab-scoped-2" id="tab-scoped-2__item">Item Two</a></li>
					<li className="slds-tabs--scoped__item" title="Item Three" role="presentation"><a className="slds-tabs--scoped__link" href="" role="tab" tabIndex="-1" aria-selected="false" aria-controls="tab-scoped-3" id="tab-scoped-3__item">Item Three</a></li>
				</ul>
				<div id="tab-scoped-1" className="slds-tabs--scoped__content slds-show" role="tabpanel" aria-labelledBy="tab-scoped-1__item">



				</div>
			</div>
		</div>
	)
}

export default RightPanel;