import React from 'react';
import call from '../images/icons/call.svg';
import downArrow from '../images/icons/down.svg';

const RightPanel = () =>  {
	return (
		<div>
			<div className="slds-tabs--default">
				<ul className="slds-tabs--default__nav" role="tablist">
					<li className="slds-tabs--default__item slds-active" title="Item One" role="presentation"><a className="slds-tabs--default__link" href="" role="tab" tabIndex="0" aria-selected="true" aria-controls="tab-default-1" id="tab-default-1__item">Activity</a></li>
					<li className="slds-tabs--default__item" title="Item Two" role="presentation"><a className="slds-tabs--default__link" href="" role="tab" tabIndex="-1" aria-selected="false" aria-controls="tab-default-2" id="tab-default-2__item">Log a Call</a></li>
				</ul>
				<div id="tab-default-1" className="slds-tabs--default__content slds-show" role="tabpanel" aria-labelledBy="tab-default-1__item"></div>
			</div>

			<span className="slds-assistive-text">Call</span>
				<div className="slds-media">
					<div className="slds-media__body">
						<div className="slds-media slds-media--timeline slds-timeline__media--call">
							<div className="slds-media__figure slds-timeline__icon">
								<div className="slds-icon_container" title="call">
									<svg className="slds-icon slds-icon--small slds-icon-standard-log-a-call iconCustom" viewBox="0 0 52 52" aria-hidden="true">
										<use xlinkHref={call + '#call'}></use>
									</svg>
								</div>
							</div>
							<div className="slds-media__body">
								<h3 className="slds-truncate" title="Mobile conversation on Monday"><a>Mobile conversation on Monday</a></h3>
								<p className="slds-truncate" title="Lei seemed interested in closing this deal quickly! Let’s move.">Lei seemed interested in closing this deal quickly! Let’s move.</p>
								<ul className="slds-list--horizontal slds-wrap">
									<li className="slds-m-right--large">
										<span className="slds-text-title">Name:</span>
										<span className="slds-text-body--small"><a>Lei Chan</a></span>
									</li>
									<li className="slds-m-right--large">
										<span className="slds-text-title">Assigned to:</span>
										<span className="slds-text-body--small"><a>Betty Mason</a></span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="slds-media__figure slds-media__figure--reverse">
						<div className="slds-timeline__actions">
							<p className="slds-timeline__date">Feb 24</p>
							<button className="slds-button slds-button--icon-border-filled slds-button--icon-x-small" aria-haspopup="true" title="More Options for Call, Mobile conversation">
								<svg className="slds-button__icon" viewBox="0 0 38 24" aria-hidden="true">
									<use xlinkHref={downArrow + '#down'}></use>
								</svg>
								<span className="slds-assistive-text">More Options for Call, Mobile conversation</span>
							</button>
						</div>
					</div>
				</div>

		</div>
	)
}

export default RightPanel;