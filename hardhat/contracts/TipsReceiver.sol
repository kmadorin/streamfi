// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TipsReceiver {
    address public constant NATIVE_ASSET = address(0);
    event Donation(address indexed from, address indexed to, address indexed asset, uint256 amount, string message);

    function sendTip(address to, address asset, uint256 amount, string memory message) external {
        IERC20(asset).transferFrom(msg.sender, to, amount);
        emit Donation(msg.sender, to, asset, amount, message);
    }

    // Add the receive function to handle plain Ether transfers
    receive() external payable {
        _receiveNativeTip();
    }

    fallback() external payable {
        _receiveNativeTip();
    }

    function _receiveNativeTip() private {
        address _to;
        string memory _message;

        (_to, _message) = abi.decode(msg.data, (address, string));

        (bool _sent,) = _to.call{value: msg.value}("");

        require(_sent, "Failed to send Ether");

        emit Donation(msg.sender, _to, NATIVE_ASSET, msg.value, _message);
    }
}