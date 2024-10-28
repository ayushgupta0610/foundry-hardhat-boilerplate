## Foundry

**Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.**

Foundry consists of:

- **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools).
- **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.
- **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network.
- **Chisel**: Fast, utilitarian, and verbose solidity REPL.

## Documentation

https://book.getfoundry.sh/

## Usage

### Build via hardhat

```shell
$ npx hardhat compile
```

### Build via foundry

```shell
$ forge build
```

### Test via hardhat

```shell
$ npx hardhat test
```

### Test via foundry

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Run hardhat Node

```shell
$ npx hardhat node
```

### Run Anvil node

```shell
$ anvil
```

### Deploy via hardhat

```shell
$ npx hardhat run script/Counter.ts --network <network_name>
```

### Deploy via foundry

```shell
$ forge script script/Counter.s.sol:CounterScript --rpc-url <your_rpc_url> --private-key <your_private_key>
```

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
$ npx hardhat --help
```
