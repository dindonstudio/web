import cn from 'classnames'
import styles from './{{camelCase name}}.module.scss'
import Slice from 'slices/Slice'

const {{pascalCase name}} = (props) => {
	const {...rest} = props
	return (
		<Slice className={cn(styles.{{camelCase name}})} {...rest}>
			{{pascalCase name}}
		</Slice>
	)
}

export default {{pascalCase name}}
