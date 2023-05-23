import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import { Routes } from './routes'
import theme from './styles/theme'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ContextProvider } from './hooks/useContext'

const client = new ApolloClient({
  uri: 'https://lobster-app-2fa5v.ondigitalocean.app/graphql',
  cache: new InMemoryCache()
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ContextProvider>
        <Routes />
      </ContextProvider>
    </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
)