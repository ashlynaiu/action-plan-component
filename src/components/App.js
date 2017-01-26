import React from 'react';
import ActionPlanCard from'./ActionPlanCard';
import Header from'./Header';
import RightPanel from'./RightPanel';
import LeftPanel from'./LeftPanel';
import ModalShowMore from './modals/ModalShowMore';
import tasks from '../action-plan-data';
class App extends React.Component {
	constructor() {
		super();
		this.showMoreModalToggle = this.showMoreModalToggle.bind(this);
		this.state = {
			tasks: { tasks },
			showMoreModal: {
				open: false,
				modalIndex: 1
			}
		};
	}

	showMoreModalToggle(index) {
		const showMoreModal = {...this.state.showMoreModal}
		showMoreModal['open'] = !this.state.showMoreModal['open'];

		//If a new index is not passed, skip step
		if (index > 0 ) {
			showMoreModal['modalIndex'] = index;
		}

		this.setState({ showMoreModal });
	}

	render() {
		return (
			<div>
				<ModalShowMore showMoreModal={this.state.showMoreModal} showMoreModalToggle={this.showMoreModalToggle} tasks={this.state.tasks}></ModalShowMore>
				<Header />
				<div className="bodyContainer">
					<div className="bodyContainer-leftPanel">
						<LeftPanel />
						<ActionPlanCard tasks={tasks} showMoreModalToggle={this.showMoreModalToggle} ></ActionPlanCard>
					</div>
					<div className="bodyContainer-rightPanel">
						<RightPanel />
					</div>
				</div>
			</div>
		)
	}
}

export default App;