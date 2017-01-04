module.exports = {
	task1: {
		name: 'Call Prospect to setup a meeting',
		priority: 'High',
		edit: 'Admin',
		days: 1,
		assigned: 'Associate',
		category: 'Phone call',
		compliance: true,
		dependent: null,
		reminder: 'Email',
		timeBefore: 1,
		timeLength: 'day',
		note: null
	},

	task2: {
		name: 'Prospect meeting',
		priority: 'High',
		edit: 'Admin',
		days: 5,
		assigned: 'Advisor',
		category: 'Meeting',
		compliance: true,
		dependent: 'task1',
		reminder: 'Email',
		timeBefore: 1,
		timeLength: 'day',
		note: null
	},

	task3: {
		name: 'Log meeting notes into Salesforce',
		priority: 'High',
		edit: 'Admin',
		days: 2,
		assiged: 'Associate',
		category: 'Misc',
		compliance: true,
		dependent: 'task2',
		reminder: 'Email',
		timeBefore: 1,
		timeLength: 'day',
		note: null
	},

	task4: {
		name: 'Update client info in CRM',
		priority: 'Medium',
		edit: 'Everyone',
		days: 2,
		assiged: 'Associate',
		category: 'Misc',
		compliance: false,
		dependent: 'task2',
		reminder: 'Email',
		timeBefore: 1,
		timeLength: 'day',
		note: null
	}
}