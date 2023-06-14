const networkConfig = {
    31337: {
        name: "localhost",
    },
    5: {
        name: "goerli",
    },
    11155111: {
        name: "sepolia",
    },
    1: {
        name: "mainnet"
    }
}

const developmentChains = ["hardhat", "localhost"]

export {
    networkConfig,
    developmentChains,
}