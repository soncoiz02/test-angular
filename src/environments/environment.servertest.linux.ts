// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // API_BASE: './api',
  // API_URL: './api',
  API_BASE: 'http://118.70.81.203:7979/api',
  API_URL: 'http://118.70.81.203:7979/api',
  SOCKET_URL: 'ws://127.0.0.1:7889',
  VAN_URL: '',
  REGISTER_URL: '',
  VERSION: '3.0.2.3',
  isCheckSignature: true,
  siteKey: '6LccccwZAAAAAF5Fd9C0DvTUKr4D5gSka_3sz1s2',
  so_luong_kk_toi_da: 5000,
  size_attach_max: 6 * 1024 * 1024, //6MB
};
