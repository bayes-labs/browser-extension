export enum walletActions {
  action = 'wallet_action',
  status = 'status',
  lock = 'lock',
  update_password = 'update_password',
  wipe = 'wipe',
  unlock = 'unlock',
  create = 'create',
  import = 'import',
  add = 'add',
  remove = 'remove',
  get_accounts = 'get_accounts',
  export_wallet = 'export_wallet',
  export_account = 'export_account',
  send_transaction = 'send_transaction',
  personal_sign = 'personal_sign',
  sign_typed_data = 'sign_typed_data',
}
export type WalletAction = keyof typeof walletActions;
