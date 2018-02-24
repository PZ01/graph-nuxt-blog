import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const GRAPHCMS_API = 'https://api.graphcms.com/simple/v1/cjdm4mxr02iq10184m7cnd65i';

export default () => ({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache()
})
