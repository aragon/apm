# Aragon Package Manager

This repo contains Aragon's reference implementation of [aragonPM](https://hack.aragon.org/docs/apm-intro).

#### 🚨 Security review status: bug bounty
aragonPM has undergone two independent professional security reviews, and the issues raised have been resolved. However, there is a [bug bounty program](https://wiki.aragon.org/dev/bug_bounty/) for rewarding hackers who find security vulnerabilities. There is a bounty pool of $250,000 USD, you can find more information [here](https://wiki.aragon.org/dev/bug_bounty/).

#### 👋 Get started contributing with a [good first issue](https://github.com/aragon/apm/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).
Don't be shy to contribute even the smallest tweak. Everyone will be especially nice and helpful to beginners to help you get started!

## Documentation

Visit the [Aragon Developer Portal](https://hack.aragon.org/docs/apm-intro.html) for in-depth documentation on the [architecture](https://hack.aragon.org/docs/apm-architecture) and different parts of the system.

## Developing aragonPM locally

```sh
npm install
npm test

# Lint needs to pass as well
npm run lint
```

## Deploying

```sh
OWNER=[APM owner address] ENS=[ENS registry address] npx truffle exec --network [network] scripts/deploy-apm.js
```

- `ENS`: If no ENS registry address is provided, it will deploy a dummy ENS instance to the network. If the ENS registry is provided, the name `aragonpm.eth` must be owned by the deployer account.
- `OWNER`: The account that will be the initial owner of the APM registry
