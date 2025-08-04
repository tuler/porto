import type { Chain as Chain_viem, ChainContract } from 'viem'
import * as chains from 'viem/chains'

export type Chain = Chain_viem & {
  contracts?:
    | (Chain_viem['contracts'] & {
        portoAccount?: ChainContract | undefined
      })
    | undefined
}

export function define<const chain extends Chain>(chain: chain): chain {
  return chain
}

export const anvil = /*#__PURE__*/ define({
  ...chains.anvil,
  contracts: {
    ...chains.anvil.contracts,
    portoAccount: {
      address: '0xb19b36b1456e65e3a6d514d3f715f204bd59f431',
    },
  },
  rpcUrls: {
    default: {
      http: ['http://localhost:9119'],
    },
  },
})

export const cartesi = /*#__PURE__*/ define({
  ...chains.cannon,
  contracts: {
    ...chains.cannon.contracts,
    portoAccount: {
      address: '0x305BcAAA8F89B51456673192535137bFC36F35D1',
    },
  },
  name: 'Cartesi Devnet',
  rpcUrls: {
    default: {
      http: ['http://127.0.0.1:6751/porto/rpc'],
    },
  },
})

export const base = /*#__PURE__*/ define({
  ...chains.base,
  contracts: {
    ...chains.base.contracts,
    portoAccount: {
      address: '0x664ab8c20b629422f5398e58ff8989e68b26a4e6',
    },
  },
  rpcUrls: {
    default: {
      http: ['https://base-mainnet.rpc.ithaca.xyz'],
    },
  },
})

export const baseSepolia = /*#__PURE__*/ define({
  ...chains.baseSepolia,
  contracts: {
    ...chains.baseSepolia.contracts,
    portoAccount: {
      address: '0x623b5b44647871268d481d2930f60d5d7f37a1fe',
    },
  },
  rpcUrls: {
    default: {
      http: ['https://base-sepolia.rpc.ithaca.xyz'],
    },
  },
})

export const portoDev = /*#__PURE__*/ define({
  blockExplorers: {
    default: {
      apiUrl: '',
      name: '',
      url: '',
    },
  },
  contracts: {
    portoAccount: {
      address: '0xca03dc4665a8c3603cb4fd5ce71af9649dc00d44',
    },
  },
  id: 28_404,
  name: 'Porto Dev',
  nativeCurrency: { decimals: 18, name: 'Ether', symbol: 'ETH' },
  rpcUrls: {
    default: { http: ['https://porto-dev.rpc.ithaca.xyz'] },
  },
  testnet: true,
})
