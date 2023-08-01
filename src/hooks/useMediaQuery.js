import {useState} from 'react'
import {getCurrentDevice} from 'utils/mediaQueries'
import useWindowResize from './useWindowResize'

const useMediaQuery = () => {
	const [device, setDevice] = useState(null)

	useWindowResize(() => {
		setDevice(getCurrentDevice())
	}, true)

	return device
}

export default useMediaQuery
