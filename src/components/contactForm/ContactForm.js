import cn from 'classnames'
import styles from './contactForm.module.scss'
import {useRef, useState} from 'react'
import useLocale from 'hooks/useLocale'
import Locale from 'components/locale/Locale'
import Button, {ButtonVariant} from 'components/button/Button'
import Input, {InputVariant} from 'components/input/Input'
import TextArea, {TextareaVariant} from 'components/textarea/Textarea'
import Select from 'components/select/Select'
import {slugify} from 'utils/string'
import Arrow from '../../svgs/arrowCta.svg'
import Script from 'next/script'

const ContactForm = ({topics}) => {
	const controller = useRef(null)
	const locale = useLocale()

	const formRef = useRef()
	const [isProcessing, setIsProcessing] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)
	const [isError, setIsError] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()

		if (window.grecaptcha) {
			setIsProcessing(true)
			setIsSuccess(false)
			setIsError(false)

			const form = e.currentTarget
			const formData = new FormData(form)

			window.grecaptcha.ready(() => {
				window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_KEY, {action: 'send'}).then(async token => {
					if (controller.current) {
						controller.current.abort()
					}
					controller.current = new AbortController()

					const data = {
						recaptcha: token,
					}
					Array.from(formData.entries()).forEach((entry) => {
						data[entry[0]] = entry[1]
					})

					fetch(form.action, {
						signal: controller.current.signal,
						method: form.method,
						headers: {
							Accept: 'application/json',
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(data),
					}).then(response => {
						if (response.status === 200) {
							form.reset()
							setIsSuccess(true)
						} else {
							setIsError(true)
						}
						return response.json()
					}).then(data => {
						// console.log('ContactForm.js --', data)
					}).finally(() => {
						setIsProcessing(false)
						controller.current = null

						setTimeout(() => {
							setIsError(false)
							setIsSuccess(false)
						}, 2000)
					})
				})
			})
		}
	}

	return (
		<div className={styles.contactForm}>
			<Script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_KEY}`} strategy='lazyOnload' />
			<form
				className={styles.form}
				ref={formRef}
				action='/api/send'
				method='POST'
				onSubmit={handleSubmit}>
				<Input className={styles.input} type='email' name='email' variant={InputVariant.float} placeholder={locale('Enter your work email')} label={locale('Enter your work email')} required />
				<div className={styles.line}>
					<Input className={styles.input} type='text' name='firstname' variant={InputVariant.float} placeholder={locale('Enter your first name')} label={locale('Enter your first name')} required />
					<Input className={styles.input} type='text' name='lastname' variant={InputVariant.float} placeholder={locale('Enter your last name')} label={locale('Enter your last name')} required />
				</div>
				<div className={styles.line}>
					<Input className={styles.input} type='tel' name='tel' variant={InputVariant.float} placeholder={locale('Enter your phone number')} label={locale('Enter your phone number')} required />
					<Select
						name='topic'
						className={styles.input}
						options={topics.map((topic) => {
							return {name: topic, value: slugify(topic)}
						})}
						placeholder={locale('What can we help you with?')}
						required />
				</div>
				<TextArea className={styles.textarea} name='message' variant={TextareaVariant.float} placeholder={locale('Enter your message')} label={locale('Enter your message')} required />

				<div className={styles.buttonWrapper}>
					<Button className={cn(styles.buttonSubmit, isSuccess && styles.isSuccess, isError && styles.isError)} variant={ButtonVariant.rounded} type='submit' inverted disabled={isProcessing}>
						<span className={styles.defaultLabel}><Arrow aria-hidden /><Locale>Submit</Locale></span>
						<span className={cn(styles.message, styles.label)}><Arrow aria-hidden /><Locale>Submit</Locale></span>
						<span className={cn(styles.message, styles.error)}><Locale>An error occured</Locale></span>
						<span className={cn(styles.message, styles.success)}><Locale>Message sent</Locale></span>
					</Button>
					<p className={cn('pm-10', styles.disclaimer)}>This site is protected by reCAPTCHA and the Google <a href='https://policies.google.com/privacy' target='_blank' rel='noopener noreferrer'>Privacy Policy</a> and <a href='https://policies.google.com/terms' target='_blank' rel='noopener noreferrer'>Terms of Service</a> apply.</p>
				</div>
			</form>
		</div>
	)
}

export default ContactForm
