import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.goat.0xgraph.xyz/api/public/f31d1ab2-5380-484e-bfc2-d2b8d606add5/subgraphs/goatswap/v2/production/gn'
    ,
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})


export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.goat.0xgraph.xyz/api/public/f31d1ab2-5380-484e-bfc2-d2b8d606add5/subgraphs/goat/min_blocks/v0.0.1/gn',
  }),
  cache: new InMemoryCache(),
})