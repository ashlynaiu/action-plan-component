import React from 'react';
import ActionPlanCard from'./ActionPlanCard';
import Header from'./Header';
import RightPanel from'./RightPanel';
import LeftPanel from'./LeftPanel';
import ModalShowMore from './modals/ModalShowMore';
import tasks from '../action-plan-data';
import defaultTasks from '../default-action-plan-data';
class App extends React.Component {
	constructor() {
		super();
		this.showMoreModalToggle = this.showMoreModalToggle.bind(this);
		this.state = {
			tasks: { tasks },
			showMoreModal: {
				open: false,
				tasks: { defaultTasks }
			}
		};
	}

	showMoreModalToggle(index) {
		const showMoreModal = {...this.state.showMoreModal}
		showMoreModal['open'] = !this.state.showMoreModal['open'];

		if (index > 0) {
			showMoreModal['tasks'] = this.state.tasks.tasks[index];
		}
		else {
			showMoreModal['tasks'] = defaultTasks;
		}
		this.setState({ showMoreModal });
	}


	render() {
		let taskNames = ()=> {
			let taskNameArray = ['None'];
			Object.keys(tasks).forEach((key) => {
				taskNameArray.push(tasks[key]['name']);
			})
			return taskNameArray;
		}
		return (
			<div>
				<ModalShowMore taskNames={taskNames()} showMoreModal={this.state.showMoreModal} showMoreModalToggle={this.showMoreModalToggle} tasks={this.state.showMoreModal.tasks}></ModalShowMore>
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