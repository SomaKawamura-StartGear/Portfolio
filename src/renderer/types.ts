import React from 'react'
import type { PageContextBuiltIn } from 'vite-plugin-ssr/types'

export type Page = (pageProps: PageProps) => React.ReactElement
export type PageProps = Record<string, unknown>

export type PageContext = PageContextBuiltIn<Page> & {
  Page: Page
  pageProps: PageProps
  urlPathname: string
}

export type PageContextServer = PageContext & {
  urlPathname: string
}
