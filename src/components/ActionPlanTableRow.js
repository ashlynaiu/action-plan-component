import React from 'react';
import DropdownMenu from './DropdownMenu';
import ActionPlanTableRowName from './ActionPlanTableRowName';
import ActionPlanTableRowDay from './ActionPlanTableRowDay';
import ActionPlanTableRowAssigned from './ActionPlanTableRowAssigned';

class ActionPlanTableRow extends React.Component {
	render() {
		const { data, index, getParent, showMoreModalToggle } = this.props;

		let expandedCal = () => {
			if(data.dependentParent > 0) {
				let parent = getParent(data.dependentParent)
				if (!parent.expanded) {
					return 'hide-element';
				}
			}
			return 'show-element';
		}

		return (
			<tr className={`${expandedCal()}`}>

				<ActionPlanTableRowName data={data} collapseChildren={this.props.collapseChildren} index={index} />

				<td data-label={data.priority} className="dataTable-cellLarge">
					<div className="slds-truncate" title={data.priority}>{data.priority}</div>
				</td>

				<ActionPlanTableRowDay data={data} getParent={getParent}/>

				<ActionPlanTableRowAssigned data={data} />

				<td data-label="" className="dataTable-cellSmall">
					<div className="slds-truncate" title="20%">20%</div>
				</td>

				<DropdownMenu showMoreModalToggle={showMoreModalToggle} index={index}/>
			</tr>
		)
	}
}

export default ActionPlanTableRow;