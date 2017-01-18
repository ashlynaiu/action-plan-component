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
		dependentParent: null,
		dependentParentName: null,
		nested: 0,
		reminder: 'Email',
		timeBefore: 1,
		timeLength: 'day',
		note: null,
		expanded: true
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
		dependentParentName: 'Call Prospect to setup a meeting',
		nested: 1,
		reminder: 'Email',
		timeBefore: 1,
		timeLength: 'day',
		note: null,
		expanded: false
	}
}