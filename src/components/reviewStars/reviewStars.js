import {colors} from '@config/variables'
import cn from 'classnames'
import styles from './reviewStars.module.scss'

const ReviewStars = ({
	className = null,
	rating,
	color = colors.black,
}) => {
	return (
		<div className={cn(styles.reviewStars, className)}>
			{[...Array(5).keys()].map(i => (
				<svg
					width='15' height='15' viewBox='0 0 15 15' fill='none'
					xmlns='http://www.w3.org/2000/svg'
					key={i}
					className={cn(styles.star)}>
					<path
						{...(color ? {
							stroke: i < rating ? 'none' : color.hex,
							fill: i < rating ? color.hex : 'none',
						} : {className: i < rating ? styles.starFill : styles.starStroke})}
						d='M10.9566 9.76652L7.98008 10.7755L10.5078 8.65525L14.6034 5.21434L9.2678 5.58744L7.27126 0.638806L5.97314 5.81783L0.637521 6.19093L5.17217 9.02835L3.87473 14.2171L7.97036 10.7762L12.505 13.6136L10.9566 9.76652Z' />
				</svg>
			))}
		</div>
	)
}

export default ReviewStars
