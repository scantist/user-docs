import { companyConfig as _companyConfig } from "./companyConfig.js";
// overwrite companyConfig with setting/index.js
if (_companyConfig) {
  Object.keys(_companyConfig).forEach((k) => {
    // not recommended, but allow to overwrite if there is a public/setting/index.js
    if (window.company_env[k] != undefined) {
      _companyConfig[k] = window.company_env[k];
    }
  });
}

export const companyConfig = _companyConfig;