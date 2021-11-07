const LFN = artifacts.require("LFN.sol");

module.exports = async function (deployer, network, accounts) {
  // deployment steps   
  await deployer.deploy(LFN);
  
};