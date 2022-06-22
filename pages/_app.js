
import { useLayoutEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import NextLink from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '~/prismicio'
import Perf from '~/utils/singletons/performance'
import { GlobalStyle, theme } from '~/shared/styles';

export default function App({ Component, pageProps, router }) {
	useLayoutEffect(() => {
		if (router.query?.perf !== undefined) {
			Perf.getGPU()
			Perf.getCPU()
			Perf.getInfo()
			Perf.showStats()
		}
	}, [router.query])

  return (
    <>
      <GlobalStyle />
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <NextLink href={href}>
            <a {...props}>
              {children}
            </a>
          </NextLink>
        )}
        externalLinkComponent={(props) => <a target="_blank" rel="noopener noreferrer" {...props} />}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </PrismicPreview>
      </PrismicProvider>
    </>
  )
}
