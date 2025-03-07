export const GAS_TOKEN_NAME = 'BTC'
export const DEX_NAME = 'GoatSwap'
export const ASSET_URL = 'https://sxpppvinxvbb6utl.public.blob.vercel-storage.com/goatswap/'
export const EXPLORER_URL = 'https://explorer.goat.network/'
export const DEX_URL = 'https://goatswap.fi/'
export const V3_INFO_URL = 'https://info.goatswap.fi/'
export const DOCS_URL = 'https://docs.goatswap.fi/'
export const TWITTER_URL = 'https://twitter.com/goatswap_fi'
export const DISCORD_URL = DEX_URL
export const VERTICAL_LOGO = ASSET_URL + 'BrandAssets/LOGO-Vertical-Light.svg'
export const LOADING_GIF = ASSET_URL + 'Website/Foreground/Gifs-404/conclusion.gif'
export const accent1_dark = '#deaf2e'
export const accent2_dark = '#7d6932'

export const FACTORY_ADDRESS = '0xbF8c8B5D27e76890416eA95a50d4732BB4906741'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  HALF_YEAR: '6 months',
  ALL_TIME: 'All time',
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [
  'https://www.coingecko.com/tokens_list/uniswap/defi_100/v_0_0_0.json',
]

// hide from overview list
export const TOKEN_BLACKLIST = [
  '0xe745071d92c6eddc552060f74aa5c8133830519a',
  '0x269e278a5064a7d9590ebeb1c43b7a499792baa2',
  '0xe3d1c9fabf7ef00af772f681267e132bb609de66',
  '0x3850fa3db6e5acc6d06efc9b1eb4a9d1c0e3e068'
]

// pair blacklist
export const PAIR_BLACKLIST = [
  '0x54c8792109bdaac39eaf1ce9fc1827f6d5c6d657',
  '0x6ba70bf081aa208c6d9658e604506fb261544e23'
]

// warnings to display if page contains info about blocked token
export const BLOCKED_WARNINGS = {
}

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = []

export const UNTRACKED_COPY = `Derived USD values may be inaccurate without liquid stablecoin or ${GAS_TOKEN_NAME} pairings.`

// tokens that should be tracked but arent due to lag in subgraph
export const TRACKED_OVERRIDES = [

]
