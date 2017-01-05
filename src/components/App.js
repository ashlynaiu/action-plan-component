import React from 'react';
import downArrow from '../images/icons/down.svg';

class App extends React.Component {
	render() {
		const customClass = {
			fill: "#B7C5D1",
			padding: "2px 5px"
		};

		return (
			<div class="slds-table--edit_container slds-is-relative">
				<table className="slds-table slds-table--edit slds-table--bordered slds-table--fixed-layout slds-no-cell-focus" role="grid">
					<thead>
						<tr className="slds-line-height--reset">
							<th></th>
							<th focusable="true" className="slds-is-sortable slds-is-resizable slds-text-title--caps" scope="col">
								<a href="" className="slds-th__action slds-text-link--reset" tabindex="0">
									<span className="slds-truncate" title="Name">Name</span>
								</a>
							</th>
							<th focusable="true" className="slds-is-sortable slds-is-resizable slds-text-title--caps" scope="col">
								<a href="" className="slds-th__action slds-text-link--reset" tabindex="0">
									<span className="slds-truncate" title="Name">Priority</span>
								</a>
							</th>
							<th focusable="true" className="slds-is-sortable slds-is-resizable slds-text-title--caps" scope="col">
								<a href="" className="slds-th__action slds-text-link--reset" tabindex="0">
									<span className="slds-truncate" title="Name">Due date</span>
								</a>
							</th>
							<th focusable="true" className="slds-is-sortable slds-is-resizable slds-text-title--caps" scope="col">
								<a href="" className="slds-th__action slds-text-link--reset" tabindex="0">
									<span className="slds-truncate" title="Name">Assigned to</span>
								</a>
							</th>
							<th focusable="true" className="slds-is-sortable slds-is-resizable slds-text-title--caps" scope="col">
								<a href="" className="slds-th__action slds-text-link--reset" tabindex="0">
									<span className="slds-truncate" title="Name">Compliance</span>
								</a>
							</th>
							<th focusable="true" className="slds-is-sortable slds-is-resizable slds-text-title--caps" scope="col">
								<a href="" className="slds-th__action slds-text-link--reset" tabindex="0">
									<span className="slds-truncate" title="Name"></span>
								</a>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="slds-hint-parent">
							<td role="gridcell" class="slds-text-align--right">
								<div class="slds-th__action slds-th__action--form">
									<span class="slds-checkbox">
										<input type="checkbox" name="options" id="checkbox-1799" />
									</span>
								</div>
							</td>
							<td role="gridcell" className="slds-cell-edit">
								<span class="slds-grid slds-grid--align-spread">
									<span class="slds-truncate" title="Acme">Call Prospect to setup meeting</span>
									<button class="slds-button slds-button--icon slds-cell-edit__button slds-m-left--x-small" tabindex="-1">
										<span class="slds-assistive-text">Call Prospect to setup meeting</span>
										<svg class="slds-button__icon slds-button__icon--hint slds-button__icon--edit" viewBox="0 0 38 24" >
											<use xlinkHref={downArrow + '#down'}></use>
										</svg>
									</button>
								</span>
							</td>
							<td role="gridcell" className="slds-cell-edit">
								<span className="slds-truncate" title="High">High</span>
							</td>
							<td role="gridcell" className="slds-cell-edit">
								<div className="slds-truncate" title="2/9/2017">2/9/2017</div>
							</td>
							<td role="gridcell slds-cell-edit">
								<div className="slds-truncate" title="Andre Steele">Andre Steele</div>
							</td>
							<td role="gridcell" class="slds-text-align--right">
								<div class="slds-th__action slds-th__action--form">
									<span class="slds-checkbox">
										<input type="checkbox" name="options" id="checkbox-1799" checked/>
									</span>
								</div>
							</td>
							<td role="gridcell">
								<button className="slds-button slds-button--icon-border-filled slds-button--icon-x-small" style={customClass} title="Show More">
									<svg class="slds-button__icon slds-button__icon--hint slds-button__icon--small" viewBox="0 0 38 24" >
										<use xlinkHref={downArrow + '#down'}></use>
									</svg>
									<span className="slds-assistive-text">Show More</span>
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default App;