require('dotenv').config();

const getInfuraApiEndpoint = (subdomain) => `https://${subdomain}.infura.io/v3/${process.env.INFURA_API_KEY}`;

module.exports = {
    baseUrl: '/',

    nodes: {
        mainnet: getInfuraApiEndpoint('mainnet'),
        ropsten: getInfuraApiEndpoint('ropsten'),
        rinkeby: getInfuraApiEndpoint('rinkeby'),
        kovan: getInfuraApiEndpoint('kovan'),
        goerli: getInfuraApiEndpoint('goerli')
    },

    etherscanAPI: {
        mainnet: 'api',
        ropsten: 'api-ropsten',
        rinkeby: 'api-rinkeby',
        kovan: 'api-kovan',
        goerli: 'api-goerli',
    }
}
