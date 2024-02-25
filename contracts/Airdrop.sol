// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DmailAirdrop is Ownable, Pausable {
    IERC20 public immutable token;
    using SafeERC20 for IERC20;

    address payable public sweepReceiver;
    mapping(address => uint256) public claimableTokens;

    event CanClaim(address indexed recipient, uint256 amount);
    event HasClaimed(address indexed recipient, uint256 amount);
    event Swept(uint256 amount);

    constructor(
        IERC20 _token,
        address payable _initialOwner
    ) Ownable(msg.sender) {
        require(address(_token) != address(0), "AirDrop: zero token address");
        require(_initialOwner != address(0), "AirDrop: zero sweep address");
        token = _token;
        sweepReceiver = _initialOwner;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }


     function claim() public whenNotPaused
    {
        uint256 amount = claimableTokens[msg.sender];
        require(amount > 0, "AirDrop: nothing to claim");
        claimableTokens[msg.sender] = 0;
        token.safeTransfer(msg.sender, amount);
        emit HasClaimed(msg.sender, amount);
    }


    function setRecipients(
        address[] calldata _recipients,
        uint256[] calldata _claimableAmount
    ) external onlyOwner {
        require(
            _recipients.length == _claimableAmount.length,
            "AirDrop: invalid array length"
        );

        for (uint256 i = 0; i < _recipients.length; i++) {
            require(
                claimableTokens[_recipients[i]] == 0,
                "AirDrop: recipient already set"
            );
            claimableTokens[_recipients[i]] = _claimableAmount[i];
            emit CanClaim(_recipients[i], _claimableAmount[i]);
        }
    }


    function sweep() external onlyOwner {
        uint256 leftovers = token.balanceOf(address(this));
        require(leftovers != 0, "AirDrop: no leftovers");
        token.safeTransfer(sweepReceiver, leftovers);
        emit Swept(leftovers);
    }
}
