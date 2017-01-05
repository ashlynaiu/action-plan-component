import React from 'react';
// import downArrow from '../images/icons/down.svg';
class App extends React.Component {
	render() {
		return (
			<table className="slds-table slds-table--bordered slds-table--cell-buffer">
				<thead>
					<tr className="slds-text-title--caps">
						<th scope="col">
							<div className="slds-truncate" title="Opportunity Name">Opportunity Name</div>
						</th>
						<th scope="col">
							<div className="slds-truncate" title="Account Name">Account Name</div>
						</th>
						<th scope="col">
							<div className="slds-truncate" title="Close Date">Close Date</div>
						</th>
						<th scope="col">
							<div className="slds-truncate" title="Stage">Stage</div>
						</th>
						<th scope="col">
							<div className="slds-truncate" title="Confidence">Confidence</div>
						</th>
						<th scope="col">
							<div className="slds-truncate" title="Amount">Amount</div>
						</th>
						<th scope="col">
							<div className="slds-truncate" title="Contact">Contact</div>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row" data-label="Opportunity Name">
							<div className="slds-truncate" title="Cloudhub">Cloudhub</div>
						</th>
						<td data-label="Account Name">
							<div className="slds-truncate" title="Cloudhub">Cloudhub</div>
						</td>
						<td data-label="Close Date">
							<div className="slds-truncate" title="4/14/2015">4/14/2015</div>
						</td>
						<td data-label="Prospecting">
							<div className="slds-truncate" title="Prospecting">Prospecting</div>
						</td>
						<td data-label="Confidence">
							<div className="slds-truncate" title="20%">20%</div>
						</td>
						<td data-label="Amount">
							<div className="slds-truncate" title="$25k">$25k</div>
						</td>
						<td data-label="Contact">
							<div className="slds-truncate" title="jrogers@cloudhub.com">jrogers@cloudhub.com</div>
						</td>
					</tr>
					<tr>
						<th scope="row" data-label="Opportunity Name">
							<div className="slds-truncate" title="Cloudhub + Anypoint Connectors">Cloudhub + Anypoint Connectors</div>
						</th>
						<td data-label="Account Name">
							<div className="slds-truncate" title="Cloudhub">Cloudhub</div>
						</td>
						<td data-label="Close Date">
							<div className="slds-truncate" title="4/14/2015">4/14/2015</div>
						</td>
						<td data-label="Prospecting">
							<div className="slds-truncate" title="Prospecting">Prospecting</div>
						</td>
						<td data-label="Confidence">
							<div className="slds-truncate" title="20%">20%</div>
						</td>
						<td data-label="Amount">
							<div className="slds-truncate" title="$25k">$25k</div>
						</td>
						<td data-label="Contact">
							<div className="slds-truncate" title="jrogers@cloudhub.com">jrogers@cloudhub.com</div>
						</td>
					</tr>
				</tbody>
			</table>
		)
	}
}

export default App;