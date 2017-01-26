import React from 'react';

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
		</div>
	)
}

export default Header;