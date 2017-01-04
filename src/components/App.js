import React from 'react';

class App extends React.Component {
	render() {
		return (
			<table className="slds-table slds-table--bordered slds-table--fixed-layout" role="grid">
				<thead>
					<tr className="slds-line-height--reset">
						<th focusable="true" className="slds-is-sortable slds-is-resizable slds-text-title--caps" scope="col">
							<a href="" className="slds-th__action slds-text-link--reset" tabindex="0">
								<span className="slds-assistive-text">Sort </span>
								<span className="slds-truncate" title="Name">Name</span>

								<span className="slds-assistive-text" aria-live="assertive" aria-atomic="true"></span>
							</a>
							<div className="slds-resizable">
								<label  className="slds-assistive-text">Name column width</label>
								<input type="range" min="20" max="1000" className="slds-resizable__input slds-assistive-text" id="cell-resize-handle-1788" tabindex="0" />
								<span className="slds-resizable__handle">
									<span className="slds-resizable__divider"></span>
								</span>
							</div>
						</th>
						<th focusable="true" className="slds-is-sortable slds-is-resizable slds-text-title--caps" scope="col">
							<a href="" className="slds-th__action slds-text-link--reset" tabindex="0">
								<span className="slds-assistive-text">Sort </span>
								<span className="slds-truncate" title="Account Name">Account Name</span>
							</a>
							<div className="slds-resizable">
								<label  className="slds-assistive-text">Account Name column width</label>
								<input type="range" min="20" max="1000" className="slds-resizable__input slds-assistive-text" id="cell-resize-handle-1789" tabindex="0" />
								<span className="slds-resizable__handle">
									<span className="slds-resizable__divider"></span>
								</span>
							</div>
						</th>
						<th focusable="true" className="slds-is-sortable slds-is-resizable slds-text-title--caps" scope="col">
							<a href="" className="slds-th__action slds-text-link--reset" tabindex="0">
								<span className="slds-assistive-text">Sort </span>
								<span className="slds-truncate" title="Close Date">Close Date</span>
							</a>
							<div className="slds-resizable">
								<label  className="slds-assistive-text">Close Date column width</label>
								<input type="range" min="20" max="1000" className="slds-resizable__input slds-assistive-text" id="cell-resize-handle-1790" tabindex="0" />
								<span className="slds-resizable__handle">
									<span className="slds-resizable__divider"></span>
								</span>
							</div>
						</th>
						<th focusable="true" className="slds-is-sortable slds-is-resizable slds-text-title--caps" scope="col">
							<a href="" className="slds-th__action slds-text-link--reset" tabindex="0">
								<span className="slds-assistive-text">Sort </span>
								<span className="slds-truncate" title="Stage">Stage</span>
							</a>
							<div className="slds-resizable">
								<label  className="slds-assistive-text">Stage column width</label>
								<input type="range" min="20" max="1000" className="slds-resizable__input slds-assistive-text" id="cell-resize-handle-1791" tabindex="0" />
								<span className="slds-resizable__handle">
									<span className="slds-resizable__divider"></span>
								</span>
							</div>
						</th>
						<th focusable="true" className="slds-is-sortable slds-is-resizable slds-text-title--caps" scope="col">
							<a href="" className="slds-th__action slds-text-link--reset" tabindex="0">
								<span className="slds-assistive-text">Sort </span>
								<span className="slds-truncate" title="Confidence">Confidence</span>
							</a>
							<div className="slds-resizable">
								<label className="slds-assistive-text">Confidence column width</label>
								<input type="range" min="20" max="1000" className="slds-resizable__input slds-assistive-text" id="cell-resize-handle-1792" tabindex="0" />
								<span className="slds-resizable__handle">
									<span className="slds-resizable__divider"></span>
								</span>
							</div>
						</th>
						<th focusable="true" className="slds-is-sortable slds-is-resizable slds-text-title--caps" scope="col">
							<a href="" className="slds-th__action slds-text-link--reset" tabindex="0">
								<span className="slds-assistive-text">Sort </span>
								<span className="slds-truncate" title="Amount">Amount</span>
							</a>
							<div className="slds-resizable">
								<label className="slds-assistive-text">Amount column width</label>
								<input type="range" min="20" max="1000" className="slds-resizable__input slds-assistive-text" id="cell-resize-handle-1793" tabindex="0" />
								<span className="slds-resizable__handle">
									<span className="slds-resizable__divider"></span>
								</span>
							</div>
						</th>
						<th focusable="true" className="slds-is-sortable slds-is-resizable slds-text-title--caps" scope="col">
							<a href="" className="slds-th__action slds-text-link--reset" tabindex="0">
								<span className="slds-assistive-text">Sort </span>
								<span className="slds-truncate" title="Contact">Contact</span>
							</a>
							<div className="slds-resizable">
								<label className="slds-assistive-text">Contact column width</label>
								<input type="range" min="20" max="1000" className="slds-resizable__input slds-assistive-text" id="cell-resize-handle-1794" tabindex="0" />
								<span className="slds-resizable__handle">
									<span className="slds-resizable__divider"></span>
								</span>
							</div>
						</th>
						<th scope="col" >
							<div className="slds-th__action">
								<span className="slds-assistive-text">Actions</span>
							</div>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className="slds-hint-parent">
						<td role="gridcell" className="slds-text-align--right" >
							<span className="slds-checkbox">
								<input type="checkbox" name="options" id="checkbox-1795" />
								<label className="slds-checkbox__label">
									<span className="slds-checkbox--faux"></span>
									<span className="slds-form-element__label slds-assistive-text">Select item 1</span>
								</label>
							</span>
						</td>
						<th scope="row">
							<div className="slds-truncate" title="Acme - 1,200 Widgets"><a href="">Acme - 1,200 Widgets</a></div>
						</th>
						<td role="gridcell">
							<div className="slds-truncate" title="Acme">Acme</div>
						</td>
						<td role="gridcell">
							<div className="slds-truncate" title="4/10/15">4/10/15</div>
						</td>
						<td role="gridcell">
							<div className="slds-truncate" title="Value Proposition">Value Proposition</div>
						</td>
						<td role="gridcell">
							<div className="slds-truncate" title="30%">30%</div>
						</td>
						<td role="gridcell">
							<div className="slds-truncate" title="$25,000,000">$25,000,000</div>
						</td>
						<td role="gridcell">
							<div className="slds-truncate" title="jrogers@acme.com"><a href="">jrogers@acme.com</a></div>
						</td>
						<td role="gridcell" >
							<button className="slds-button slds-button--icon-border-filled slds-button--icon-x-small" title="Show More">
								<span className="slds-assistive-text">Show More</span>
							</button>
						</td>
					</tr>
					<tr className="slds-hint-parent">
						<td role="gridcell" className="slds-text-align--right" >
							<span className="slds-checkbox">
								<input type="checkbox" name="options" id="checkbox-1796" />
								<label className="slds-checkbox__label">
									<span className="slds-checkbox--faux"></span>
									<span className="slds-form-element__label slds-assistive-text">Select item 2</span>
								</label>
							</span>
						</td>
						<th scope="row">
							<div className="slds-truncate" title="Acme - 200 Widgets"><a href="">Acme - 200 Widgets</a></div>
						</th>
						<td role="gridcell">
							<div className="slds-truncate" title="Acme">Acme</div>
						</td>
						<td role="gridcell">
							<div className="slds-truncate" title="1/31/15">1/31/15</div>
						</td>
						<td role="gridcell">
							<div className="slds-truncate" title="Prospecting">Prospecting</div>
						</td>
						<td role="gridcell">
							<div className="slds-truncate" title="60%">60%</div>
						</td>
						<td role="gridcell">
							<div className="slds-truncate" title="$5,000,000">$5,000,000</div>
						</td>
						<td role="gridcell">
							<div className="slds-truncate" title="bob@acme.com"><a href="">bob@acme.com</a></div>
						</td>
						<td role="gridcell" >
							<button className="slds-button slds-button--icon-border-filled slds-button--icon-x-small" title="Show More">
								<span className="slds-assistive-text">Show More</span>
							</button>
						</td>
					</tr>
					<tr className="slds-hint-parent">
						<td role="gridcell" className="slds-text-align--right" >
							<span className="slds-checkbox">
								<input type="checkbox" name="options" />
								<label className="slds-checkbox__label">
									<span className="slds-checkbox--faux"></span>
									<span className="slds-form-element__label slds-assistive-text">Select item 3</span>
								</label>
							</span>
						</td>
						<th scope="row">
							<div className="slds-truncate" title="salesforce.com - 1,000 Widgets"><a href="">salesforce.com - 1,000 Widgets</a></div>
						</th>
						<td role="gridcell">
							<div className="slds-truncate" title="salesforce.com">salesforce.com</div>
						</td>
						<td role="gridcell">
							<div className="slds-truncate" title="1/31/15 3:45PM">1/31/15 3:45PM</div>
						</td>
						<td role="gridcell">
							<div className="slds-truncate" title="Id. Decision Makers">Id. Decision Makers</div>
						</td>
						<td role="gridcell">
							<div className="slds-truncate" title="70%">70%</div>
						</td>
						<td role="gridcell">
							<div className="slds-truncate" title="$25,000">$25,000</div>
						</td>
						<td role="gridcell">
							<div className="slds-truncate" title="nathan@salesforce.com"><a href="">nathan@salesforce.com</a></div>
						</td>
						<td role="gridcell" >
							<button className="slds-button slds-button--icon-border-filled slds-button--icon-x-small" title="Show More">
								<span className="slds-assistive-text">Show More</span>
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		)
	}
}


export default App;
