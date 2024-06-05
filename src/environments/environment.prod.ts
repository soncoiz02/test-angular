// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  API_BASE: './api',
  API_URL: './api',
  SOCKET_URL: 'ws://127.0.0.1:7889',
  VAN_URL: '',
  REGISTER_URL: '',
  VERSION: '3.0.2.3',
  isCheckSignature: true,
  siteKey: '6Lc-mt8ZAAAAAJDMelMRon2HRwyVRWk7FtiZfT5o',
  so_luong_kk_toi_da: 5000,
  size_attach_max: 6 * 1024 * 1024, //6MB
};
