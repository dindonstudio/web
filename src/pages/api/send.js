import Mailgun from 'mailgun.js'
import FormData from 'form-data'

export default async function preview (req, res) {
	if (!req.body.email || !req.body.recaptcha) res.status(400).json({error: 'Missing parameters'})

	const sendEmail = async () => {
		const mailgun = new Mailgun(FormData)
		const mg = mailgun.client({username: 'api', key: process.env.NEXT_MAILGUN_API_KEY})

		let signature = `\n\n${req.body.firstname || ''} ${req.body.lastname || ''}`
		if (req.body.tel) signature += `\n${req.body.tel}`

		mg.messages.create(process.env.NEXT_MAILGUN_DOMAIN, {
			from: `${req.body.firstname || ''} ${req.body.lastname || ''} <${req.body.email}>`,
			to: [process.env.NEXT_CONTACT_EMAIL],
			subject: req.body.topic,
			text: req.body.message + signature,
		// html: req.body.message + signature,
		})
			.then(msg => {
				return res.status(200).json({message: msg})
			})
			.catch(err => {
				return res.status(400).json({error: err})
			}).finally(() => {
				return res.end()
			})
	}

	fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_RECAPTCHA_SECRET}&response=${req.body.recaptcha}`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	}).then(response => response.json())
		.then(async data => {
			if (data.success && data.score > 0.6) {
				await sendEmail()
			} else {
				res.status(400).json({error: 'Recaptcha failed'}).end()
			}
		})
		.catch(error => {
			res.status(400).json({error}).end()
		})
}
