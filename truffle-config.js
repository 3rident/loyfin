const path = require("path");
var HDWalletProvider = require("@truffle/hdwallet-provider");
const MNEMONIC = 'patient width lake wool rich promote bar six prison art swing helmet';
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  //contracts_build_directory: path.join(__dirname, "./3IDENT/contracts"),
  networks: {
    // develop: {
    //   host: "localhost",
    //   port: 7545,
    //   network_id: "1234"
    // },
  //   kovan: {
  //     networkCheckTimeout: 10000,
  //     provider: () => {
  //        return new HDWalletProvider(
  //          MNEMONIC,
  //          `https://kovan.infura.io/v3/e8bc09fdd98f4ef2bd3a53cd221a70c9`
  //        );
  //     },
  //     network_id: "42",
  //  },
//   rinkeby: {
//     provider: function() { 
//      return new HDWalletProvider(MNEMONIC, "https://rinkeby.infura.io/v3/e8bc09fdd98f4ef2bd3a53cd221a70c9");
//     },
//     network_id: 4,
//     gas: 4500000,
//     gasPrice: 10000000000,
// }
   }
};
