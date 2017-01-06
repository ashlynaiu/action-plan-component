module.exports = {
	1: {
		name: 'Call Prospect to setup a meeting',
		priority: 'High',
		edit: 'Admin',
		days: 1,
		assigned: 'Associate',
		category: 'Phone call',
		compliance: true,
		dependentChildren: true,
		dependentParent: null
		reminder: 'Email',
		timeBefore: 1,
		timeLength: 'day',
		note: null
	},

	2: {
		name: 'Prospect meeting',
		priority: 'High',
		edit: 'Admin',
		days: 5,
		assigned: 'Advisor',
		category: 'Meeting',
		compliance: true,
		dependentChildren: false,
		dependentParent: 1,
		reminder: 'Email',
		timeBefore: 1,
		timeLength: 'day',
		note: null
	},

	3: {
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

	4: {
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