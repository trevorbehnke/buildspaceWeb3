require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/iMtCRdbxSyd9ArxB3AGoPuXOSS7iqo6t",
      accounts: [
        "27e34014fbc38406f50ed9a67927147169868a6a2b0930ead151b0f2de82905d",
      ],
    },
  },
};
