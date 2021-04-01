module.exports = [
	{
		type: 'input',
		name: 'name',
		message: 'What is your first and last name?',
	},
	{
		type: 'input',
		name: 'title',
		message: 'What is the title of the project?',
	},
	{
		type: 'input',
		name: 'description',
		message: 'Please provide a description of your project.',
	},
  {
    type: 'input',
    name: 'usage',
    message: 'What is the deployed link of your project? (Please put https:// in it)',
  },
	{
		type: 'input',
		name: 'contribution',
		message: 'Share instructions on how others can contribute to your project.',
	},
  {
    type: 'input',
    name: 'tests',
    message: 'Share some of the tests you ran for your project.',
  },
	{
	 type: 'list',
	 name: 'license',
	 message: 'Which license would you to use for this project?',
	 choices: ['MIT', 'Apache', 'GNU GPLv3', 'ISC']
 },
	{
		type: 'input',
		name: 'github',
		message: 'What is your github URL? (Please put https:// in it)',
	},
	{
		type: 'input',
		name: 'email',
		message: 'What is your email address?',
	},
];
