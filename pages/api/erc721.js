const Joi = require("joi");
const rpc = require("../../src/rpc");
const abi721 = require("../../src/abi721");
const { ethers } = require("ethers");

const schema = Joi.object().keys({
  apiKey: Joi.string().required(),
  chainId: Joi.number().required(), // 1: Ethereum, 4: Rinkeby, 420: Goerli
  contract: Joi.string().required(), // Address of the erc721 contract aks collection
  to: Joi.string().required(), // Address to send to
  tokenId: Joi.string().required(), // tokenId of the NFT collection 
});

// send coin aka ETH
export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send({ error: "Only POST allowed" });
  const { error, value } = schema.validate(req.body);
  if (error) return res.status(400).send({ error: error.message });
  if (value.apiKey !== process.env.API_KEY) return res.status(401).send({ error: "Invalid API key" });
  const provider = new ethers.providers.JsonRpcProvider(rpc[value.chainId]);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  // connect to token
  const contract = new ethers.Contract(value.contract, abi721, wallet);
  // call tranfer method
  contract
    .transferFrom(wallet.address, value.to, value.tokenId)
    .then((tx) => {
      res.status(200).json({ data: tx.hash });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
}
