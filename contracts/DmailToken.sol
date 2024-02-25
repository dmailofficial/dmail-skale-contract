// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@layerzerolabs/solidity-examples/contracts/token/oft/v2/OFTV2.sol";

contract DmailToken is OFTV2 {
    constructor(
        address _layerZeroEndpoint,
        uint8 _sharedDecimals,
         address  _initialOwner
    ) OFTV2("Dmail Network", "DMAIL", _sharedDecimals, _layerZeroEndpoint) {
        _mint(_initialOwner, 20000000 * 1e18);
    }
}