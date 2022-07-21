require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture stomach dash oval universe hunt pave army general'; 
let testAccounts = [
"0x1f5bfd2e8291e8f525a49ddab9b1f4639fedc1e078bbc2b752bc920d4d3d1740",
"0xe605849006a5db3aebee278cda5067260be51343220e79ec896f30d2fdceb8d4",
"0x726268bb81b7d3b2144fd2057629c134e47f3b9bd4410aed80c53dc034332bfa",
"0x29f74260fee6490ea9aea51454b121f0a926717d34b2154c6191ed197ec40d4a",
"0x3ef7d98db93b5f58c6a83eb1433126f49513b5e0c678a5469865ffa3562b66d4",
"0x377ca3924844f846500258dd720a169e768643d3451038fd510cea614aefc2a4",
"0xed012cc04f1cf398ba46adbab935df54b57df3508049104334c22627d3ee9dc8",
"0x1d6b0bac308a8d3869bd8461caa3aa7fd91512594b8667cfcd42eda161784fe9",
"0x1621726bd391022929a46d3f563c9ef5bc9f8c0da98bec515cbf31491a67110e",
"0xa3f56de4f85d0b81a3684f53d15b8f79a11b1ff547c1e0405720b742c1d164ee"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

