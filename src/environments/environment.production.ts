import baseEnvConstants from './environment.development';

let prodEnvConstants = {};

// 依據建置模式 (REACT_APP_MODE) 使用不同的常數
switch (process.env.REACT_APP_MODE) {
  // SIT
  case 'sit':
    prodEnvConstants = {
      ...baseEnvConstants
    };
    break;
  // UAT
  case 'uat':
    prodEnvConstants = {
      ...baseEnvConstants,
      application: {
        ...baseEnvConstants.application,
        homepage: 'https://tahs.twfhclife.com.tw/insure/'
      },
      backend: {
        ...baseEnvConstants.backend,
        // domainName: 'http://10.7.168.58',
        domainName: 'https://tahs.twfhclife.com.tw', // Proxy
        api: {
          ...baseEnvConstants.backend.api,
          // port: ':80',
          port: '', // Proxy
          url: {
            ...baseEnvConstants.backend.api.url,
            prefix: '/insure/oista/api'
          },
          headers: {
            authorization: {
              prefix: 'Bearer',
              code: '5f8a0114-786b-3e12-a1be-8602fe22484f'
            }
          }
        },
        eBillWS: {
          ...baseEnvConstants.backend.eBillWS,
          port: ''
        }
      }
    };
    break;
  // PRODUCTION
  case 'prod':
    prodEnvConstants = {
      ...baseEnvConstants,
      application: {
        ...baseEnvConstants.application,
        homepage: 'https://elife.twfhclife.com.tw/insure/'
      },
      backend: {
        ...baseEnvConstants.backend,
        domainName: 'https://elife.twfhclife.com.tw', // Proxy
        api: {
          ...baseEnvConstants.backend.api,
          // port: ':80',
          port: '', // Proxy
          url: {
            ...baseEnvConstants.backend.api.url,
            prefix: '/insure/ois/api'
          },
          headers: {
            authorization: {
              prefix: 'Bearer',
              code: 'b4dca53d-a224-317b-9a94-dc210fa66292'
            }
          }
        },
        nccc: {
          ...baseEnvConstants.backend.nccc,
          url: 'https://nccnet-ec.nccc.com.tw/merchant/HPPRequest'
        },
        eBillWS: {
          ...baseEnvConstants.backend.eBillWS,
          url: 'https://ebill.ba.org.tw/cpp/pay.aspx',
          port: ''
        }
      }
    };
    break;
  // DEFAULT
  default:
    prodEnvConstants = { ...baseEnvConstants };
    break;
}

export default prodEnvConstants;
