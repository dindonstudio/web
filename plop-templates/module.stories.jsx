import themes from 'utils/themes'
import {{pascalCase name}} from './{{pascalCase name}}'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'slices/{{pascalCase name}}',
	component: {{pascalCase name}},
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		theme: {
			options: themes,
			control: 'inline-radio',
		},
	},
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <{{pascalCase name}} {...args} />

export const primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
primary.args = {
	theme: themes.green,
}
