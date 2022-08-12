import Head from 'next/head'
import * as prismicH from "@prismicio/helpers";

const Favicon = ({settings}) => {
	const { color, icon } = settings.data
	const siteTitle = prismicH.asText(settings.data.siteTitle)

	return (
		<Head>
			<link rel="apple-touch-icon-precomposed" sizes="57x57" href={`${icon.url}&fit=fill&ar=1&w=57&h=57`} />
			<link rel="apple-touch-icon-precomposed" sizes="114x114" href={`${icon.url}&fit=fill&ar=1&w=114&h=114`} />
			<link rel="apple-touch-icon-precomposed" sizes="72x72" href={`${icon.url}&fit=fill&ar=1&w=72&h=72`} />
			<link rel="apple-touch-icon-precomposed" sizes="144x144" href={`${icon.url}&fit=fill&ar=1&w=144&h=144`} />
			<link rel="apple-touch-icon-precomposed" sizes="60x60" href={`${icon.url}&fit=fill&ar=1&w=60&h=60`} />
			<link rel="apple-touch-icon-precomposed" sizes="120x120" href={`${icon.url}&fit=fill&ar=1&w=120&h=120`} />
			<link rel="apple-touch-icon-precomposed" sizes="76x76" href={`${icon.url}&fit=fill&ar=1&w=76&h=76`} />
			<link rel="apple-touch-icon-precomposed" sizes="152x152" href={`${icon.url}&fit=fill&ar=1&w=152&h=152`} />
			<link rel="apple-touch-icon" sizes="180x180" href={`${icon.url}&fit=fill&ar=1&w=180&h=180`} />
			<link rel="icon" type="image/png" sizes="196x196" href={`${icon.url}&fit=fill&ar=1&w=196&h=196`} />
			<link rel="icon" type="image/png" sizes="96x96" href={`${icon.url}&fit=fill&ar=1&w=96&h=96`} />
			<link rel="icon" type="image/png" sizes="32x32" href={`${icon.url}&fit=fill&ar=1&w=32&h=32`} />
			<link rel="icon" type="image/png" sizes="16x16" href={`${icon.url}&fit=fill&ar=1&w=16&h=16`} />
			<link rel="icon" type="image/png" sizes="128x128" href={`${icon.url}&fit=fill&ar=1&w=128&h=128`} />
			<link rel="icon" type="image/png" sizes="192x192" href={`${icon.url}&fit=fill&ar=1&w=192&h=192`} />
			<meta name="application-name" content={siteTitle}/>
			<meta name="msapplication-TileColor" content={color} />
			<meta name="msapplication-TileImage" content={`${icon.url}&fit=fill&ar=1&w=144&h=144`} />
			<meta name="msapplication-square70x70logo" content={`${icon.url}&fit=fill&ar=1&w=70&h=70`} />
			<meta name="msapplication-square150x150logo" content={`${icon.url}&fit=fill&ar=1&w=150&h=150`} />
			<meta name="msapplication-wide310x150logo" content={`${icon.url}&fit=fill&ar=1&w=310&h=150`} />
			<meta name="msapplication-square310x310logo" content={`${icon.url}&fit=fill&ar=1&w=310&h=310`} />
		</Head>
	)
}

export default Favicon
