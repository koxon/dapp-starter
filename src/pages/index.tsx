// import styles from 'styles/Home.module.scss'
import { ThemeToggleButton, ThemeToggleList } from 'components/Theme'
import { useState } from 'react'
import { useNetwork, useSwitchNetwork, useAccount, useBalance } from 'wagmi'
import ConnectWallet from 'components/Connect/ConnectWallet'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useConnectModal, useAccountModal, useChainModal } from '@rainbow-me/rainbowkit'
import { useSignMessage } from 'wagmi'
import Image from 'next/image'

export default function Home() {
  document.body.className = 'body'
  return (
    <div>
      <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" async />
      <script src="/js/main.js" async />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className={'navigation w-nav'}
    >
      <Image src="/images/mustach.png" width={60} height={94} loading="lazy" alt="Logo" />
      <div className={'navigation-items'}>
        <a href="index.html" aria-current="page" className={'logo-link w-nav-brand w--current'}>
          The Fry Heads
        </a>
        <div className={'navigation-wrap'}>
          <nav role="navigation" className={'navigation-items w-nav-menu'}>
            <a
              href="https://opensea.io/collection/fryheadsnft"
              rel="noreferrer"
              target="_blank"
              className={'navigation-item w-nav-link'}
            >
              OpenSea
            </a>
            <a
              href="https://twitter.com/FryHeadsNFT"
              target="_blank"
              rel="noreferrer"
              className={'navigation-item w-nav-link'}
            >
              Twitter
            </a>
            <a id="connect" href="#" className={'button top-corner-button w-inline-block'}>
              <div id="connect-text" className={'text-block-3'}>
                <ConnectWallet />
                {/* Connect wallet */}
              </div>
            </a>
            <a id="connect" href="#" className={'button top-corner-button open-wallet-button w-inline-block'}>
              <div id="connect-text" className={'text-block-3'}>
                My NFTs
              </div>
            </a>
          </nav>
          <div className={'menu-button w-nav-button'}>
            <Image
              src="/images/menu-icon_1menu-icon.png"
              loading="lazy"
              width={22}
              height={18}
              className={'menu-icon'}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function Main() {
  const { address, isConnected, connector } = useAccount()
  const { chain, chains } = useNetwork()
  const { isLoading: isNetworkLoading, pendingChainId, switchNetwork } = useSwitchNetwork()
  const { data: balance, isLoading: isBalanceLoading } = useBalance({
    address: address,
  })
  const { openConnectModal } = useConnectModal()
  const { openAccountModal } = useAccountModal()
  const { openChainModal } = useChainModal()
  return (
    <div>
      <div className={'section cc-store-home-wrap'}>
        <div className={'intro-header'}>
          <div className={'intro-content'}>
            <div className={'intro-text'}>
              <div className={'heading-jumbo'}>
                Charitable NFTs <br />
              </div>
              <div className={'paragraph-bigger cc-bigger-light'}>
                <b className={'bold-text-3'}>
                  50% of the mint price and secondary sales fees are sent to the charity of your choice, in perpetuity
                </b>
                <br />
              </div>
            </div>
            <a href="#mint-now" id="mint-button" className={'button white-button w-inline-block'}>
              <div className={'text-block'}>Mint now</div>
            </a>
          </div>
        </div>
      </div>

      <section className={'section-6'} id="mint-now">
        <div className={'w-layout-blockcontainer container-4 w-container'}>
          <Image src="/images/angel.png" loading="lazy" width={60} height={89} className={'image-16'} alt="" />

          <div
            id="w-node-af82e65a-d5c0-022e-2e54-5d77b67e6f0d-e672c229"
            className={'w-layout-layout quick-stack wf-layout-layout'}
          >
            <div id="w-node-af82e65a-d5c0-022e-2e54-5d77b67e6f0e-e672c229" className={'w-layout-cell cell'}>
              <div className={'text-block-7'}>Select the type of charity you want to support</div>
            </div>
            <div id="w-node-af82e65a-d5c0-022e-2e54-5d77b67e6f14-e672c229" className={'w-layout-cell cell-2'}>
              <div
                id="w-node-c16ffeee-dd6a-1c56-eed8-7336b13beba6-e672c229"
                className={'w-layout-layout wf-layout-layout'}
              >
                <div id="w-node-c16ffeee-dd6a-1c56-eed8-7336b13beba7-e672c229" className={'w-layout-cell container'}>
                  <picture>
                    <source srcSet="/images/Education.png" media="(orientation: portrait)" />
                    <img src="/images/Education.png" alt="" />
                  </picture>
                </div>
                <div id="w-node-c16ffeee-dd6a-1c56-eed8-7336b13beba8-e672c229" className={'w-layout-cell container'}>
                  <picture>
                    <source srcSet="/images/Environment.png" media="(orientation: portrait)" />
                    <img src="/images/Environment.png" alt="" />
                  </picture>
                </div>
                <div id="w-node-c16ffeee-dd6a-1c56-eed8-7336b13beba9-e672c229" className={'w-layout-cell container'}>
                  <picture>
                    <source srcSet="/images/Civil.png" media="(orientation: portrait)" />
                    <img src="/images/Civil.png" alt="" />
                  </picture>
                </div>
                <div id="w-node-c16ffeee-dd6a-1c56-eed8-7336b13bebaa-e672c229" className={'w-layout-cell container'}>
                  <picture>
                    <source srcSet="/images/Children.png" media="(orientation: portrait)" />
                    <img src="/images/Children.png" alt="" />
                  </picture>
                </div>
                <div id="w-node-c16ffeee-dd6a-1c56-eed8-7336b13bebab-e672c229" className={'w-layout-cell container'}>
                  <picture>
                    <source srcSet="/images/Poverty.png" media="(orientation: portrait)" />
                    <img src="/images/Poverty.png" alt="" />
                  </picture>
                </div>
                <div id="w-node-c16ffeee-dd6a-1c56-eed8-7336b13bebac-e672c229" className={'w-layout-cell container'}>
                  <picture>
                    <source srcSet="/images/Animals.png" media="(orientation: portrait)" />
                    <img src="/images/Animals.png" alt="" />
                  </picture>
                </div>
              </div>
            </div>
            <div id="w-node-_5b68e3e8-bad6-dcea-0cfe-46985e7dd10c-e672c229" className={'w-layout-cell'}>
              <p className={'paragraph-2'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
                erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
                posuere.
              </p>
            </div>
            <div id="w-node-_67d361b7-f970-6adc-c139-bde64e55d3a7-e672c229" className={'w-layout-cell cell-3'}>
              <div
                id="w-node-a339f702-5ac0-cfc4-8816-59e7b9b50952-e672c229"
                className={'w-layout-layout quick-stack-3 wf-layout-layout'}
              >
                <div id="w-node-_5901b886-71e9-384a-2836-c00575768567-e672c229" className={'w-layout-cell cell-17'}>
                  <div className={'text-block-8'}>
                    Mint <b className={'bold-text-6'}>1</b>
                  </div>
                </div>
                <div id="w-node-f114ea7e-670b-93ba-d52c-47ecc944754d-e672c229" className={'w-layout-cell cell-15'}>
                  <div className={'button white-button'}>
                    <div className={'text-block-8'}>
                      <b className={'text-block'}>+more</b>
                    </div>
                  </div>
                </div>
                <div id="w-node-_38c3aaf9-f30c-bf7d-337a-b69f71a6dda2-e672c229" className={'w-layout-cell cell-18'}>
                  <div className={'text-block-8'}>
                    <b className={'bold-text-6'}>25 ETH</b>
                  </div>
                </div>
                <div id="w-node-_636940fc-5c32-5b4f-0173-cb1058fbadae-e672c229" className={'w-layout-cell cell-16'}>
                  <div className={'button white-button'}>
                    <div className={'text-block-8'}>
                      <b className={'text-block'}>-less</b>
                    </div>
                  </div>
                </div>
                <div id="w-node-_4253feaf-023d-1611-52a1-74009f1cbad3-e672c229" className={'w-layout-cell cell-14'}>
                  <a href="#" id="mint-button" className={'button white-button w-inline-block'}>
                    <div className={'text-block'}>Mint now</div>
                  </a>
                  <div className={'text-block-6'}>
                    Supply<b> 4/10000</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={'section-5'}>
        <Image src="/images/70.png" loading="lazy" width={128} height={128} alt="" />
        <Image src="/images/67.png" loading="lazy" width={128} height={128} alt="" />
        <Image src="/images/3.png" loading="lazy" width={128} height={128} alt="" />
        <Image src="/images/15.png" loading="lazy" width={128} height={128} alt="" />
        <Image src="/images/62.png" loading="lazy" width={128} height={128} alt="" />
        <Image src="/images/60.png" loading="lazy" width={128} height={128} alt="" />
        <Image src="/images/59.png" loading="lazy" width={128} height={128} alt="" />
        <Image src="/images/65.png" loading="lazy" width={128} height={128} alt="" />
        <Image src="/images/4.png" loading="lazy" width={128} height={128} alt="" />
      </div>

      <div className={'section-3'}>
        <div id="w-node-_148ecf98-58f8-a2d5-5c85-cc0085cfa3fd-e672c229" className={'w-layout-layout wf-layout-layout'}>
          <div id="w-node-_74068db1-3725-280f-8903-1b1562958ba7-e672c229" className={'w-layout-cell cell-19'}>
            <ul role="list" className={'list left'}>
              <li className={'list-item-1'}>
                <h4 className={'heading-7'}>Minting Fry Heads NFTs</h4>
                <p className={'paragraph'}>
                  First, connect your wallet to the application and make sure your wallet is connected to the Ethereum
                  blockchain and that you have enough ETH tokens to buy and mint the amount number of NFTs you want to
                  buy.
                  <br />
                </p>
                <a
                  href="https://etherscan.io/address/0xAF5C905F70378e984346D49833f0EE244f1D3DE1"
                  target="_blank"
                  rel="noreferrer"
                  className={'link-3'}
                >
                  Fry Heads smart contract address
                </a>
              </li>
              <li className={'list-item-1'}>
                <h4 className={'heading-7'}>Smart contract interaction</h4>
                <p className={'paragraph'}>
                  <b>Anybody</b> can go on{' '}
                  <a
                    href="https://etherscan.io/address/0xAF5C905F70378e984346D49833f0EE244f1D3DE1#readContract"
                    target="_blank"
                    rel="noreferrer"
                    className={'link-4'}
                  >
                    <span className={'text-span'}> Etherscan.io</span>
                  </a>{' '}
                  and execute the follow methods on the smart contract directly:
                </p>
                <ul role="list" className={'list-2'}>
                  <li className={'list-item-4'}>
                    The &quot;<b>withdrawETH()</b>&quot; method will transform WETH tokens into ETH tokens. <br />
                    WETH are obtained by secondary sales on OpenSea.
                    <br />
                    <b>Important Note</b>: Make sure to execute this method first, if there are any WETH tokens in the
                    contract, before executing the &quot;<b>withdraw()</b>&quot; method.
                  </li>
                  <li className={'list-item-5'}>
                    The &quot;<b>withdraw()</b>&quot; method will trigger the funds distribution to all charities and to
                    the creators of the projects.  
                  </li>
                  <li className={'list-item-6'}>
                    The &quot;<b>tokenCharity(token_id)&quot; </b>returns the ID of the charity supported by a specific
                    NFT. Specify the ID of the NFT you want to lookup.
                  </li>
                  <li className={'list-item-6'}>
                    The &quot;<b>charities(charity_id)&quot; </b>returns detailed information about a specific charity.
                    Specify the ID of the charity you want to lookup.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div id="w-node-_73cf7ee7-6e4e-f0d9-162e-c1405e4368b2-e672c229" className={'w-layout-cell cell-21'}>
            <ul role="list" className={'list right'}>
              <li className={'list-item-2'}>
                <h4 className={'heading-7 align-left'}>
                  <span className={'text-span-2'}>
                    <a href="https://nftfreezer.com" target="_blank" rel="noreferrer">
                      <b className={'bold-text-5'}>NFTFreezer.com </b>
                    </a>
                    {' - '}
                  </span>
                  <span className={'text-span-2'}>
                    <b className={'bold-text-4'}>80% off</b>
                  </span>
                  &nbsp;to all Fry Heads holders!
                </h4>
                <p className={'paragraph'}>
                  <div>
                    ‍There&#x27;s no guarantee your NFTs&#x27; images won&#x27;t disappear from the Internet one day.
                    <br />
                    You would have a NFT on the lockchain pointing to dead links on the Internet.
                    <br />
                    <br />
                    <span className={'text-span-2'}>
                      NFT Freezer let you &quot;pin&quot; your NFT assets on{' '}
                      <a href="https://ipfs.tech/" target="_blank" rel="noreferrer">
                        <b className={'bold-text-5'}>IPFS</b>
                      </a>
                      , yourself, and take control over your NFTs&#x27; future.
                    </span>
                    <p>
                      <b>
                        <br />
                        How does it work?
                        <br />
                      </b>
                      <br />
                      <p>
                        NFTs hosted on HTTP are doomed to disappear someday (unpaid bill, domain gone, host gone).{' '}
                        <br />
                        NFTs hosted on IPFS still depend on the developer/creator to keep the assets (metadata and
                        image) on the IPFS network. <br />
                      </p>
                      <p>
                        <br />
                        In fact, IPFS doesn&#x27;t guarantees permanence of your files unless they are
                        &quot;pinned&quot; on a specific IPFS node on the IPFS Network.
                        <br />
                        If the developer/creator stops paying the IPFS pinning service like{' '}
                        <a href="https://www.pinata.cloud/" target="_blank" rel="noreferrer">
                          <b className={'bold-text-5'}>Pinata</b>
                        </a>
                        , then your assets may disappear.
                      </p>
                      <br />
                      If you own expensive NFTs, then like with expensive art, you need to care for it!
                    </p>
                  </div>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  )
}

function SignMsg() {
  const [msg, setMsg] = useState('Dapp Starter')
  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: msg,
  })
  const signMsg = () => {
    if (msg) {
      signMessage()
    }
  }

  return (
    <>
      <p>
        <input value={msg} onChange={e => setMsg(e.target.value)} className="rounded-lg p-1" />
        <button
          disabled={isLoading}
          onClick={() => signMsg()}
          className="ml-1 rounded-lg bg-blue-500 py-1 px-2 text-white transition-all duration-150 hover:scale-105"
        >
          Sign
        </button>
      </p>
      <p>
        {isSuccess && <span>Signature: {data}</span>}
        {isError && <span>Error signing message</span>}
      </p>
    </>
  )
}

function Footer() {
  return (
    <div>
      <script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=64e27211d1d1b88ce672c123"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossOrigin="anonymous"
        async
      />
      <script src="js/webflow.js" async />
    </div>
  )
}
