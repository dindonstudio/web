import {useContext} from 'react'
import LocaleContext from 'contexts/LocaleContext'

const useLocale = () => {
	const strings = useContext(LocaleContext)

	return (value) => strings?.find?.((entry) => entry.key === value)?.value || value
}

export default useLocale
