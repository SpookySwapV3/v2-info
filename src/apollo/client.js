import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.goldsky.com/api/public/project_clss7z2o15cxh010fdvq909x6/subgraphs/monad-v2/1.0.0/gn'
    ,
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})


export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.goldsky.com/api/public/project_clss7z2o15cxh010fdvq909x6/subgraphs/monad-blocks/1.0.0/gn',
  }),
  cache: new InMemoryCache(),
})