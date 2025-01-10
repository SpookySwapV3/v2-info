import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.0xgraph.xyz/api/public/28820bd2-ad8b-4d40-a142-ce8d7c786f66/subgraphs/spookyswap/v2/v0.0.1/gn'
    ,
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.0xgraph.xyz/api/public/query_deployment?subgraph_id=QmUL6XWMYzPcY2FXFZ5cNLhbCnqr18waxKgv5uXXAyRbis',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const stakingClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/way2rach/talisman',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.0xgraph.xyz/api/public/cd32e813-81db-4a20-948b-22285458fdad/subgraphs/sonic/blocks/v0.0.1/gn',
  }),
  cache: new InMemoryCache(),
})
