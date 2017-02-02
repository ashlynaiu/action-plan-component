import React from 'react';
import downArrow from '../images/icons/down.svg';
import add from '../images/icons/add.svg';
import newaccount from '../images/icons/new_account.svg';

const Header = () =>  {
	return (
		<div>
			<header className="slds-global-header_container"><a href="" className="slds-assistive-text slds-assistive-text--focus">Skip to Navigation</a><a href="" className="slds-assistive-text slds-assistive-text--focus">Skip to Main Content</a>
				<div className="slds-global-header slds-grid slds-grid--align-spread">
					<div className="slds-global-header__item">
						<div className="slds-global-header__logo">
							<img src="https://www.lightningdesignsystem.com/assets/images/logo-noname.svg" alt="" />
						</div>
					</div>
					<div className="slds-global-header__item slds-global-header__item--search">
						<div className="slds-form-element slds-lookup">
							<label className="slds-assistive-text" htmlFor="global-search-01">Search Salesforce</label>
							<div className="slds-form-element__control lookup__search-control slds-input-has-icon slds-input-has-icon--left">
								<svg aria-hidden="true" className="slds-input__icon">

								</svg>
								<input id="global-search-01" className="slds-input slds-lookup__search-input" type="search" placeholder="Search Salesforce" />
							</div>
						</div>
					</div>
					<ul className="slds-global-header__item slds-grid slds-grid--vertical-align-center">
						<li className="slds-dropdown-trigger slds-dropdown-trigger--click slds-m-left--x-small">
							<button className="slds-button" title="person name" aria-haspopup="true">
								<span className="slds-avatar slds-avatar--circle slds-avatar--medium">
									<img src="/images/avatar2.jpg" alt="person name" />
								</span>
							</button>
						</li>
					</ul>
				</div>
			</header>
			<div className="slds-context-bar">
				<div className="slds-context-bar__primary slds-context-bar__item--divider-right">
					<div className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--click slds-no-hover">
						<div className="slds-context-bar__icon-action">
							<a href="" className="slds-icon-waffle_container slds-context-bar__button">
								<div className="slds-icon-waffle">
									<div className="slds-r1"></div>
									<div className="slds-r2"></div>
									<div className="slds-r3"></div>
									<div className="slds-r4"></div>
									<div className="slds-r5"></div>
									<div className="slds-r6"></div>
									<div className="slds-r7"></div>
									<div className="slds-r8"></div>
									<div className="slds-r9"></div>
								</div>
								<span className="slds-assistive-text">Open App Launcher</span>
							</a>
						</div>
						<span className="slds-context-bar__label-action slds-context-bar__app-name">
							<span className="slds-truncate">Financial Services Cloud</span>
						</span>
					</div>
				</div>
				<nav className="slds-context-bar__secondary">
					<ul className="slds-grid">
						<li className="slds-context-bar__item">
							<a href="" className="slds-context-bar__label-action" title="Home">
								<span className="slds-truncate">Client</span>
							</a>
						</li>
						<li className="slds-context-bar__item">
							<a href="" className="slds-context-bar__label-action" title="Leads">
								<span className="slds-truncate">Leads</span>
							</a>
						</li>
						<li className="slds-context-bar__item">
							<a href="" className="slds-context-bar__label-action" title="Households">
								<span className="slds-truncate">Households</span>
							</a>
						</li>
						<li className="slds-context-bar__item">
							<a href="" className="slds-context-bar__label-action" title="Feed">
								<span className="slds-truncate">Feed</span>
							</a>
						</li>
						<li className="slds-context-bar__item onNav">
							<a href="" className="slds-context-bar__label-action" title="Feed">
								<span className="slds-truncate">Calendar</span>
							</a>
						</li>
						<li className="slds-context-bar__item">
							<a href="" className="slds-context-bar__label-action" title="Reports">
								<span className="slds-truncate">Reports</span>
							</a>
						</li>
						<li className="slds-context-bar__item">
							<a href="" className="slds-context-bar__label-action" title="Assets">
								<span className="slds-truncate">Assets and Liabilities</span>
							</a>
						</li>
						<li className="slds-context-bar__item">
							<a href="" className="slds-context-bar__label-action" title="Files">
								<span className="slds-truncate">Files</span>
							</a>
						</li>
						<li className="slds-context-bar__item">
							<a href="" className="slds-context-bar__label-action" title="Dashboard">
								<span className="slds-truncate">Dashboard</span>
							</a>
						</li>
						<li className="slds-context-bar__item">
							<a href="" className="slds-context-bar__label-action" title="Campaigns">
								<span className="slds-truncate">Opportunities</span>
							</a>
						</li>
						<li className="slds-context-bar__item">
							<a href="" className="slds-context-bar__label-action" title="Campaigns">
								<span className="slds-truncate">Campaigns</span>
							</a>
						</li>
						<li className="slds-context-bar__item">
							<a href="" className="slds-context-bar__label-action" title="More">
								<span className="slds-truncate">More</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>

			<div className="slds-page-header">
				<div className="slds-grid">
					<div className="slds-col slds-has-flexi-truncate">
						<div className="slds-media slds-no-space slds-grow">
							<div className="slds-media__figure">
								<svg className="slds-icon slds-icon-standard-user iconCustom" viewBox="0 0 52 52" aria-hidden="true">
									<use xlinkHref={newaccount + '#newaccount'}></use>
								</svg>
							</div>
							<div className="slds-media__body">
								<p className="slds-text-title--caps slds-line-height--reset">Client</p>
								<h1 className="slds-page-header__title slds-m-right--small slds-align-middle slds-truncate" title="this should match the Record Title">Rachel Adams</h1>
							</div>
						</div>
					</div>
					<div className="slds-col slds-no-flex slds-grid slds-align-top">
						<button className="slds-button slds-button--neutral slds-not-selected" aria-live="assertive">
							<span className="slds-text-not-selected">
								<svg className="slds-button__icon--stateful slds-button__icon--left" viewBox="0 0 52 52" aria-hidden="true">
									<use xlinkHref={add + '#add'}></use>
								</svg>Follow</span>
						</button>
						<div className="slds-button-group" role="group">
							<button className="slds-button slds-button--neutral">Edit</button>
							<button className="slds-button slds-button--neutral">Delete</button>
							<button className="slds-button slds-button--neutral">Clone</button>
							<div className="slds-dropdown-trigger slds-dropdown-trigger--click slds-button--last" aria-expanded="false">
								<button className="slds-button slds-button--icon-border-filled customDropdown" aria-haspopup="true" title="More Actions">
									<svg className="slds-button__icon" viewBox="0 0 52 52" aria-hidden="true">
										<use xlinkHref={downArrow + '#down'}></use>
									</svg>
									<span className="slds-assistive-text">More Actions</span>
								</button>
							</div>
						</div>
					</div>
				</div>
				<ul className="slds-grid slds-page-header__detail-row">
					<li className="slds-page-header__detail-block">
						<p className="slds-text-title slds-truncate slds-m-bottom--xx-small" title="Total Accounts">Total Accounts</p>
						<p className="slds-text-body--regular slds-truncate" title="$3,000,000<">$3,000,000</p>
					</li>
					<li className="slds-page-header__detail-block">
						<p className="slds-text-title slds-truncate slds-m-bottom--xx-small" title="Level">Level</p>
						<p className="slds-text-body--regular">Platinum</p>
					</li>
					<li className="slds-page-header__detail-block">
						<p className="slds-text-title slds-truncate slds-m-bottom--xx-small" title="Last Interaction">Last Interaction</p>
						<p className="slds-text-body--regular">1/13/2017</p>
					</li>
					<li className="slds-page-header__detail-block">
						<p className="slds-text-title slds-truncate slds-m-bottom--xx-small" title="Last Interaction">Next Interaction</p>
						<p className="slds-text-body--regular">3/21/2017</p>
					</li>
				</ul>
			</div>

		</div>
	)
}

export default Header;