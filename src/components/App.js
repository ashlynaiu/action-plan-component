import React from 'react';
import ActionPlanTable from './ActionPlanTable';
import ModalShowMore from './modals/ModalShowMore';
import tasks from '../action-plan-data';
class App extends React.Component {
	constructor() {
		super();
		this.showMoreModalToggle = this.showMoreModalToggle.bind(this);
		this.state = {
			tasks: { tasks },
			showMoreModal: false
		};
	}

	showMoreModalToggle() {
		this.setState(
			{ showMoreModal: !this.state.showMoreModal }
		);
	}

	//selectedData={ this.selectedData }
	render() {
		return (
			<div>
				<ModalShowMore showMoreModal={this.state.showMoreModal} showMoreModalToggle={this.showMoreModalToggle}/>
				<ActionPlanTable tasks={tasks} showMoreModalToggle={this.showMoreModalToggle} ></ActionPlanTable>
			</div>
		)
	}
}

export default App;