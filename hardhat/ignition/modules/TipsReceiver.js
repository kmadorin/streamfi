const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const TipsReceiverModule = buildModule("TipsReceiverModule", (m) => {
  const token = m.contract("TipsReceiver");

  return { token };
});

module.exports = TipsReceiverModule;