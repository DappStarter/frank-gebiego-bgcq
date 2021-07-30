require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid narrow fortune stone stool razor meadow coach guess kangaroo army gesture'; 
let testAccounts = [
"0xc805d4013c6d5ffdaf2928273bd65ea2dc0607c1418a84ec44e3f2e41d2fe592",
"0xb8d9619a39452ebc8df3b5e16f67821fb2489e806eff686865fd5b17a61e59b4",
"0x3b06cc8c015ac65cf421cf5117c3fa5fd986fa20df8b654db726dc35aadb46bd",
"0x000171f636eff09e754332d60d465f01de1518ad60487b72c13462b20e280db5",
"0x1468bc5c50aa94d74edb48215406e874893622238974b90e200c258fb0b1ff84",
"0x2a8cdab921a1a7d9b26b1bec4cb5498b7edfc29264f96a1328ebfbb2c257eae6",
"0x6ae3d2c1835af6cee77ca6a5ae748eabca565b107b92eb117a9085faa1603c3a",
"0x23a08a9033051e76e536989356eced7cfe2508f1a90aafb30f3f6a112fa0ae36",
"0x176f6a3e6120f3e3bbf84466afbf3198ac88ce77fd5da9e01951a4a680868f82",
"0xf16b02a740b5fe05e84d6bca3eae77d54d7a435f10c4d92bac6004fd0906f42b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


