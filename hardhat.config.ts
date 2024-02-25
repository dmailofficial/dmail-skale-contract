require('dotenv').config()
import {HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";


const config: HardhatUserConfig = {
  networks: {
    slake_chaos_testnet: {
      url: 'https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix',
      accounts: [process.env.DEPLOYER_0xFF_PK!]
    },
    slake_calypso_testnet: {
      url: 'https://testnet.skalenodes.com/v1/giant-half-dual-testnet',
      accounts: [process.env.DEPLOYER_0xFF_PK!]
    },
    goerli: {
      url: 'https://rpc.ankr.com/eth_goerli',
      accounts: [process.env.TEST_PK!]
    },
    fantom_testnet: {
      url: 'https://rpc.ankr.com/fantom_testnet',
      accounts: [process.env.DEPLOYER_PK!]
    },
    mainnet: {
      url: 'https://ethereum.publicnode.com',
      accounts: [process.env.DEPLOYER_PK!],
      chainId: 1,
    },
    bsc: {
      url: 'https://bsc-dataseed2.defibit.io',
      accounts: [process.env.DEPLOYER_PK!, process.env.chongzhi_PK!],
      chainId: 56,
    },
    linea: {
      url: 'https://linea.blockpi.network/v1/rpc/public',
      accounts: [process.env.DEPLOYER_PK!],
      chainId: 59144
    }
  },
  etherscan: {
    apiKey: {
      goerli: process.env.GOERLI_API_KEY!,
      ftmTestnet: process.env.FANTOM_API_KEY!,
      bsc: process.env.BSC_API_KEY!,
      linea: process.env.LINEA_API_KEY!,
      mainnet: "VR6KQV3XDKVHRBG13K18SMISBMDN7KH6NM"
    }
  },
  solidity: {
    version: "0.8.18",
    // settings: {
    //   optimizer: {
    //     enabled: true,
    //     runs: 200
    //   },
    //   evmVersion: "london"
    // }
  }
};

export default config;
