const getContract = name => artifacts.require(name)

contract('Constants', () => {
  let keccakConstants

  before(async () => {
    keccakConstants = await getContract('KeccakConstants').new()
  })

  it('checks ENS constants', async () => {
    const ensConstants = await getContract('ENSConstantsMock').new()

    assert.equal(await ensConstants.getEthTldLabel(), await keccakConstants.ETH_TLD_LABEL(), "ETH tld label doesn't match")
    assert.equal(await ensConstants.getEthTldNode(), await keccakConstants.ETH_TLD_NODE(), "ETH tld node doesn't match")
    assert.equal(await ensConstants.getPublicResolverLabel(), await keccakConstants.PUBLIC_RESOLVER_LABEL(), "public resolver label doesn't match")
    assert.equal(await ensConstants.getPublicResolverNode(), await keccakConstants.PUBLIC_RESOLVER_NODE(), "public resolver node doesn't match")
  })

  it('checks APMNamehash constants', async () => {
    const apmNamehash = await getContract('APMNamehashMock').new()

    assert.equal(await apmNamehash.getAPMNode(), await keccakConstants.APM_NODE(), "APM node doesn't match")
  })

  it('checks APMRegistry constants', async () => {
    const apm = await getContract('APMRegistry').new()

    assert.equal(await apm.CREATE_REPO_ROLE(), await keccakConstants.CREATE_REPO_ROLE(), "create repo role doesn't match")
  })

  it('checks ENSSubdomainRegistrar constants', async () => {
    const ensRegistrar = await getContract('ENSSubdomainRegistrar').new()

    assert.equal(await ensRegistrar.CREATE_NAME_ROLE(), await keccakConstants.CREATE_NAME_ROLE(), "create name role doesn't match")
    assert.equal(await ensRegistrar.DELETE_NAME_ROLE(), await keccakConstants.DELETE_NAME_ROLE(), "delete name role doesn't match")
    assert.equal(await ensRegistrar.POINT_ROOTNODE_ROLE(), await keccakConstants.POINT_ROOTNODE_ROLE(), "point rootnode role doesn't match")
  })

  it('checks Repo constants', async () => {
    const repo = await getContract('Repo').new()

    assert.equal(await repo.CREATE_VERSION_ROLE(), await keccakConstants.CREATE_VERSION_ROLE(), "create version role doesn't match")
  })
})
