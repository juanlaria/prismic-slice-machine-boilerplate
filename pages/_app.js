import { ThemeProvider } from 'styled-components'
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '~/prismicio'
import { GlobalStyle, theme } from '~/shared/styles';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href}>
            <a {...props}>
              {children}
            </a>
          </Link>
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
