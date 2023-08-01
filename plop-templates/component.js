import cn from 'classnames'
import styles from './{{camelCase name}}.module.scss'

const {{pascalCase name}} = ({children}) => {
	return (
		<div className={cn(styles.{{camelCase name}})}>
			{children}
		</div>
	)
}

export default {{pascalCase name}}
