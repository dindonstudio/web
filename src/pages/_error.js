import React from 'react'
import Head from 'next/head'

/**
 * Error page component
 */
const Error = ({statusCode}) => {
	return (
		<div>
			<Head>
				<title>Error</title>
			</Head>
			<h1>
				{statusCode
					? `An error ${statusCode} occurred on server`
					: 'An error occurred on client'}
			</h1>
			<p>
				<a href='/'>Return to homepage</a>
			</p>
		</div>
	)
}

Error.getInitialProps = ({res, err}) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : null
	return {statusCode}
}

export default Error
