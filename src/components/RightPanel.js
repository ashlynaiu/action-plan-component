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

					<div className="slds-rich-text-editor">
						<div role="toolbar" className="slds-rich-text-editor__toolbar slds-is-relative slds-shrink-none slds-p-around--x-small slds-grid slds-theme--shade">
							<ul aria-label="Format text" className="slds-button-group-list">
								<li>
									<button className="slds-button slds-button--icon-border-filled" aria-describedBy="bold" tabIndex="0" title="settings">
										<svg className="slds-button__icon" aria-hidden="true">
											<use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#bold"></use>
										</svg>
										<span className="slds-assistive-text">Bold</span>
									</button>
								</li>
								<li>
									<button className="slds-button slds-button--icon-border-filled" aria-describedBy="italic" tabIndex="-1" title="settings">
										<svg className="slds-button__icon" aria-hidden="true">
											<use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#italic"></use>
										</svg>
										<span className="slds-assistive-text">Italic</span>
									</button>
								</li>
								<li>
									<button className="slds-button slds-button--icon-border-filled" aria-describedBy="underline" tabIndex="-1" title="settings">
										<svg className="slds-button__icon" aria-hidden="true">
											<use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#underline"></use>
										</svg>
										<span className="slds-assistive-text">Underline</span>
									</button>
								</li>
								<li>
									<button className="slds-button slds-button--icon-border-filled" aria-describedBy="strikethrough" tabIndex="-1" title="settings">
										<svg className="slds-button__icon" aria-hidden="true">
											<use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#strikethrough"></use>
										</svg>
										<span className="slds-assistive-text">Strike Through</span>
									</button>
								</li>
							</ul>
							<ul aria-label="Format body" className="slds-button-group-list">
								<li>
									<button className="slds-button slds-button--icon-border-filled" aria-describedBy="richtextbulletedlist" tabIndex="-1" title="settings">
										<svg className="slds-button__icon" aria-hidden="true">
											<use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextbulletedlist"></use>
										</svg>
										<span className="slds-assistive-text">Bulleted List</span>
									</button>
								</li>
								<li>
									<button className="slds-button slds-button--icon-border-filled" aria-describedBy="richtextnumberedlist" tabIndex="-1" title="settings">
										<svg className="slds-button__icon" aria-hidden="true">
											<use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextnumberedlist"></use>
										</svg>
										<span className="slds-assistive-text">Numbered List</span>
									</button>
								</li>
								<li>
									<button className="slds-button slds-button--icon-border-filled" aria-describedBy="richtextindent" tabIndex="-1" title="settings">
										<svg className="slds-button__icon" aria-hidden="true">
											<use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextindent"></use>
										</svg>
										<span className="slds-assistive-text">Indent</span>
									</button>
								</li>
								<li>
									<button className="slds-button slds-button--icon-border-filled" aria-describedBy="richtextoutdent" tabIndex="-1" title="settings">
										<svg className="slds-button__icon" aria-hidden="true">
											<use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#richtextoutdent"></use>
										</svg>
										<span className="slds-assistive-text">Outdent</span>
									</button>
								</li>
							</ul>
							<ul aria-label="Remove Formatting" className="slds-button-group-list">
								<li>
									<button className="slds-button slds-button--icon-border-filled" tabIndex="-1" title="settings">
										<svg className="slds-button__icon" aria-hidden="true">
											<use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#remove_formatting"></use>
										</svg>
										<span className="slds-assistive-text">Remove Formatting</span>
									</button>
								</li>
							</ul>
						</div>
						<div className="slds-rich-text-editor__textarea">
							<label className="slds-assistive-text" htmlFor="composer-text-input-2369">Compose text</label>
							<textarea id="composer-text-input-2369" className="slds-assistive-text"></textarea>
							<div tabIndex="0" className="slds-textarea slds-p-around--medium slds-text-longform slds-grid slds-grow">
								<div className="slds-text-color--weak slds-grow">Compose text...</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}

export default RightPanel;