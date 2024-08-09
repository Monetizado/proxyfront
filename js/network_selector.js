function selectNetworkData() {
	const networksProperties = {
		"arbitrum:sepolia" : {urlRPC: "https://arbitrum-sepolia.blockpi.network/v1/rpc/public", chainId: 421614, chainName: "Arbitrum Sepolia", currencyName: "ETH", decimals: 18, currencySymbol: "ETH"},
		"base:testnet": {urlRPC: "https://sepolia.base.org", chainId: 84532, chainName: "Base Sepolia", currencyName: "ETH", decimals: 18, currencySymbol: "ETH"},
		"berachain:testnet" : {urlRPC: "https://artio.rpc.berachain.com/", chainId: 80085, chainName: "Berachain Testnet", currencyName: "BERA", decimals: 18, currencySymbol: "BERA"},
		"bittorrent:testnet": {urlRPC: "https://pre-rpc.bt.io/", chainId: 1029, chainName: "BitTorrent Chain Donau", currencyName: "BTT", decimals: 18, currencySymbol: "BTT"},
		"bnb:testnet": {urlRPC: "https://bsc-testnet-rpc.publicnode.com	", chainId: 97, chainName: "BNB Chain Testnet", currencyName: "BNB", decimals: 18, currencySymbol: "BNB"},
		"botanix:testnet" : {urlRPC: "https://node.botanixlabs.dev", chainId: 3636, chainName: "Botanix Testnet", currencyName: "BTC", decimals: 18, currencySymbol: "BTC"},
		"camp:testnetv1" : {urlRPC: "https://rpc-camp-network-4xje7wy105.t.conduit.xyz", chainId: 90354, chainName: "Camp Testnet V1", currencyName: "ETH", decimals: 18, currencySymbol: "ETH"},
		"celo:testnet" : {urlRPC: "https://alfajores-forno.celo-testnet.org", chainId: 44787, chainName: "Celo Alfajores", currencyName: "CELO", decimals: 18, currencySymbol: "CELO"},
		"chiliz:testnet" : {urlRPC: "https://spicy-rpc.chiliz.com/", chainId: 88882, chainName: "Chiliz Spicy Testnet", currencyName: "CHZ", decimals: 18, currencySymbol: "CHZ"},
		"core:testnet" : {urlRPC: "https://rpc.test.btcs.network", chainId: 1115, chainName: "Core Blockchain Testnet", currencyName: "tCORE", decimals: 18, currencySymbol: "tCORE"},
		"educhain:testnet" : {urlRPC: "https://open-campus-codex-sepolia.drpc.org", chainId: 656476, chainName: "Open Campus Codex Sepolia", currencyName: "EDU", decimals: 18, currencySymbol: "EDU"},
		"etherlink:testnet" : {urlRPC: "https://node.ghostnet.etherlink.com", chainId: 128123, chainName: "Etherlink Testnet", currencyName: "XTZ", decimals: 18, currencySymbol: "XTZ"},
		"filecoin:testnet" : {urlRPC: "https://filecoin-calibration.drpc.org", chainId: 314159, chainName: "Filecoin Calibration", currencyName: "tFIL", decimals: 18, currencySymbol: "tFIL"},
		"fuse:testnet" : {urlRPC: "https://rpc.fusespark.io", chainId: 123, chainName: "Fuse Spark Testnet", currencyName: "FUSE", decimals: 18, currencySymbol: "FUSE"},
		"linea:testnet" : {urlRPC: "https://rpc.sepolia.linea.build", chainId: 59141, chainName: "Linea Sepolia", currencyName: "ETH", decimals: 18, currencySymbol: "ETH"},
		"lisk:testnet" : {urlRPC: "https://rpc.sepolia-api.lisk.com", chainId: 4202, chainName: "Lisk Sepolia Testnet", currencyName: "ETH", decimals: 18, currencySymbol: "ETH"},
		"meter:testnet" : {urlRPC: "https://rpctest.meter.io", chainId: 83, chainName: "Meter Testnet", currencyName: "MTR", decimals: 18, currencySymbol: "MTR"},
		"mode:testnet" : {urlRPC: "https://sepolia.mode.network", chainId: 919, chainName: "Mode Testnet", currencyName: "ETH", decimals: 18, currencySymbol: "ETH"},
		"morph:testnet": {urlRPC: "https://rpc-testnet.morphl2.io", chainId: 2710, chainName: "Morph Testnet", currencyName: "ETH", decimals: 18, currencySymbol: "ETH"},
		"opbnb:testnet": {urlRPC: "https://opbnb-testnet-rpc.bnbchain.org", chainId: 5611, chainName: "opBnB Testnet", currencyName: "BNB", decimals: 18, currencySymbol: "BNB"},
		"rootstock:testnet": {urlRPC: "https://public-node.testnet.rsk.co", chainId: 31, chainName: "Rootstock Testnet", currencyName: "tRBTC", decimals: 18, currencySymbol: "tRBTC"},
		"scroll:testnet": {urlRPC: "https://sepolia-rpc.scroll.io/", chainId: 534351, chainName: "Scroll Sepolia", currencyName: "ETH", decimals: 18, currencySymbol: "ETH"},
		"shardeum:testnet": {urlRPC: "https://sphinx.shardeum.org", chainId: 8082, chainName: "Shardeum Sphinx", currencyName: "SHM", decimals: 18, currencySymbol: "SHM"},
		"shido:testnet": {urlRPC: "https://rpc-testnet-nodes.shidoscan.com", chainId: 9007, chainName: "Shido Testnet", currencyName: "SHIDO", decimals: 18, currencySymbol: "SHIDO"},
		"taraxa:testnet": {urlRPC: "https://rpc.testnet.taraxa.io/", chainId: 842, chainName: "Taraxa Testnet", currencyName: "TARA", decimals: 18, currencySymbol: "TARA"},
		"theta:testnet": {urlRPC: "https://eth-rpc-api-testnet.thetatoken.org/rpc", chainId: 365, chainName: "Theta Testnet", currencyName: "TFUEL", decimals: 18, currencySymbol: "TFUEL"},
		// Mainnets
		"bittorrent:mainnet": {urlRPC: "https://rpc.bt.io", chainId: 199, chainName: "BitTorrent Chain Mainnet", currencyName: "BTT", decimals: 18, currencySymbol: "BTT"}
	};

	const monetizationTag = document.querySelector('link[rel="monetizado"]');
	const parts = monetizationTag.href.split("://");
	const networkData = networksProperties[parts[0]];
	return networkData;
}

