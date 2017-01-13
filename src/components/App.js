import React from 'react';
import ActionPlanTable from './ActionPlanTable';
import tasks from '../action-plan-data';
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			tasks: { tasks }
		};
	}

	render() {
		return (
			<ActionPlanTable tasks={tasks}></ActionPlanTable>
		)
	}
}

export default App;