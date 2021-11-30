/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 require('@nomiclabs/hardhat-waffle')

 const API_URL = "https://rinkeby.infura.io/v3/42237be60f5d4b26a120933905269ae9"
 const PRIVATE_KEY = "f9445edece816bbb262f024ea859154ea1f55837b1b64e464b808ee0945f4db2"

module.exports = {
  solidity: "0.7.3",
  networks:{
    rinkeby: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
