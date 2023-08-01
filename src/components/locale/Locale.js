import useLocale from 'hooks/useLocale'

const Locale = ({children}) => {
	const l = useLocale()

	return (
		<>
			{l(children)}
		</>
	)
}

export default Locale
