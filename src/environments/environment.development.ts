const devEnvConstants = {
  application: {
    id: 'ois',
    homepage: ''
  },
  backend: {
    domainName: 'http://localhost',
    api: {
      port: ':9080',
      url: {
        prefix: ''
      },
      headers: {
        authorization: {
          prefix: 'Bearer',
          code: '24e340a6-1332-3f98-903d-e18b0c85c655'
        }
      }
    },
    eBillWS: {
      url: 'https://ebilltest.fisc.com.tw/cpp/pay.aspx',
      port: ':9090'
    },
    nccc: {
      url: 'https://nccnet-ectest.nccc.com.tw/merchant/HPPRequest'
    }
  }
};

export default devEnvConstants;
