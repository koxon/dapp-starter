import 'styles/style.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/router'
import HeadGlobal from 'components/HeadGlobal'
// Web3Wrapper deps:
import { getDefaultWallets, RainbowKitProvider, lightTheme, darkTheme } from '@rainbow-me/rainbowkit'
import { Chain, chain, createClient, configureChains, WagmiConfig } from 'wagmi'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { app } from 'appConfig'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { chains, provider } = configureChains(
    [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum, gnosisChain],
    [
      infuraProvider({ infuraId: process.env.NEXT_PUBLIC_INFURA_ID !== '' && process.env.NEXT_PUBLIC_INFURA_ID }),
      jsonRpcProvider({
        rpc: chain => {
          if (chain.id !== gnosisChain.id) return null
          return { http: chain.rpcUrls.default }
        },
      }),
      publicProvider(),
    ]
  )
  const { connectors } = getDefaultWallets({ appName: app.name, chains })
  const wagmiClient = createClient({ autoConnect: true, connectors, provider })

  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <HeadGlobal />
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          showRecentTransactions={true}
          // Currently theme color is only following system, not the app theme
          theme={{
            lightMode: lightTheme(),
            darkMode: darkTheme(),
          }}
        >
          <Component key={router.asPath} {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </ThemeProvider>
  )
}
export default App

// Add Custom Chain
const gnosisChain: Chain = {
  id: 100,
  name: 'Gnosis',
  network: 'gnosis',
  nativeCurrency: {
    decimals: 18,
    name: 'xDai',
    symbol: 'XDAI',
  },
  rpcUrls: {
    default: 'https://gnosischain-rpc.gateway.pokt.network',
  },
  blockExplorers: {
    default: { name: 'BlockScout', url: 'https://blockscout.com/xdai/mainnet' },
  },
  testnet: false,
}
