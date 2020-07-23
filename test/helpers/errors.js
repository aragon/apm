function makeErrorMappingProxy (target) {
  return new Proxy(target, {
    get (target, property) {
      if (property in target) {
        return target[property]
      }

      throw new Error(`Could not find error ${property} in error mapping`)
    },
    set () {
      throw new Error('Unexpected set to error mapping')
    }
  })
}

module.exports = makeErrorMappingProxy({
  // apm/APMRegistry.sol
  APMREG_INIT_PERMISSIONS: 'APMREG_INIT_PERMISSIONS',
  APMREG_EMPTY_NAME: 'APMREG_EMPTY_NAME',

  // apm/Repo.sol
  REPO_INVALID_BUMP: 'REPO_INVALID_BUMP',
  REPO_INVALID_VERSION: 'REPO_INVALID_VERSION',
  REPO_INEXISTENT_VERSION: 'REPO_INEXISTENT_VERSION',

  // apps/AragonApp.sol
  APP_AUTH_FAILED: 'APP_AUTH_FAILED',

  // ens/ENSSubdomainRegistrar.sol
  ENSSUB_NO_NODE_OWNERSHIP: 'ENSSUB_NO_NODE_OWNERSHIP',
  ENSSUB_NAME_EXISTS: 'ENSSUB_NAME_EXISTS',
  ENSSUB_DOESNT_EXIST: 'ENSSUB_DOESNT_EXIST',
})
