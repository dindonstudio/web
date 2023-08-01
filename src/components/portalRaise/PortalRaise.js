import {colors} from '@config/variables'
import cn from 'classnames'
import BulletPoints from 'components/bulletPoints/BulletPoints'
import CircleBackground from 'components/circleBackground/CircleBackground'
import DigitTumbler from 'components/digitTumbler/DigitTumbler'
import styles from './portalRaise.module.scss'

const PortalRaise = (props) => {
	return (
		<section className={cn(styles.portalRaise)}>
			<DigitTumbler digits={8} className={styles.digits} />
			<BulletPoints {...props} orientation='horizontal' className={styles.bulletPoints} />
			<CircleBackground
				className={styles.background}
				childClassName={styles.circle}
				colors={{circle: colors.pinkPurple.hex}}
				overflowVisible
				fixed={false} />
		</section>
	)
}

export default PortalRaise
