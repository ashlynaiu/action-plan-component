import React from 'react';

class ActionPlanTableRowCompliance extends React.Component {
	constructor(props) {
		super(props);
		this.toggleCheckbox = this.toggleCheckbox.bind(this);
		this.state = {
			checked: this.props.data.compliance
		}
	}

	toggleCheckbox() {
		this.setState(
			{ checked: !this.state.checked }
		);
	}

	render() {
		const { index } = this.props;

		return (
			<td data-label="" className="dataTable-cellSmall">
				<span className="slds-checkbox">
					<input type="checkbox" name="options" id={`compliance-${index}`} checked={this.state.checked} onChange={this.toggleCheckbox} />
					<label className="slds-checkbox__label" htmlFor={`compliance-${index}`}>
						<span className="slds-checkbox--faux"></span>
						<span className="slds-form-element__label slds-assistive-text">Mark completed</span>
					</label>
				</span>
			</td>
		)
	}
}

export default ActionPlanTableRowCompliance;