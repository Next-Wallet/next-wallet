const rpc = require("../../src/rpc");
const { ethers } = require("ethers");

// send coin aka ETH
export default function handler(req, res) {
  const provider = new ethers.providers.JsonRpcProvider(rpc[1]);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  return res.send({ data: wallet.address });
}
