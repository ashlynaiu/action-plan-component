import React from 'react';
import chevronDown from '../images/icons/chevrondown.svg';

class ActionPlanTableRowName extends React.Component {
	constructor(props) {
		super(props);
		this.clickHandler = this.clickHandler.bind(this);
		this.transformChevron = this.transformChevron.bind(this);
		this.state = {
			chevronCollapsed: this.props.data.expanded
		}
	}

	clickHandler(index) {
		this.props.collapseChildren(index);
		this.transformChevron();
	}

	transformChevron() {
		if(this.props.data.dependentChildren === true) {
			let chevron = this.state.chevronCollapsed;
			chevron = this.props.data.expanded;
			this.setState({ chevronCollapsed: chevron})
		}
	}

	render() {
		const { data, index, completeTask} = this.props;

		//Calculate the indentation of a row by adding the appropriate class
		let indentCal = ()=> {
			if(data.dependentParent > 0) {
				return `dataTable-dependent--${data.nested}`;
			}
			return 'dataTable-dependent';
		};

		//Calculate if the row should have a Chevron
		let showChevron = ()=> {
			if(data.dependentChildren === true) {
				return (
					<use xlinkHref={chevronDown + '#chevrondown'}></use>
				)
			}
		};

		//Calculate transform of chevron based on state
		let chevronCSS = ()=> {
			if(data.dependentChildren === true) {
				if(this.state.chevronCollapsed) {
					return 'chevron-open';
				}
				else {
					return 'chevron-closed';
				}
			}
		}

		return (
			<td scope="row" className={indentCal()} data-label={data.name}>
				<div className="slds-th__action slds-th__action--form">
					<div className={`dataTable-chevronDown ${chevronCSS()}`} onClick={() => this.clickHandler(index)}>
						<svg className="slds-button__icon--small" viewBox="0 0 52 52" aria-hidden="true">
							{showChevron()}
						</svg>
					</div>
					<span className="slds-checkbox">
						<input type="checkbox" name="options" id={`checkbox-${index}`} onChange={() => completeTask(index)} />
						<label className="slds-checkbox__label" htmlFor={`checkbox-${index}`}>
							<span className="slds-checkbox--faux"></span>
							<span className="slds-form-element__label slds-assistive-text">Mark completed</span>
						</label>
					</span>
				</div>
				<div className="slds-truncate" title={data.name}>{data.name}</div>
			</td>
		)
	}
}

export default ActionPlanTableRowName;