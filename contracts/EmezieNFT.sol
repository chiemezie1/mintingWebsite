// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract EmezieNFT is ERC721, Ownable {
    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxPerWallet;
    uint256 public maxSupply;
    bool public isPublicMintEnable;
    string internal baseTokenUrl;
    address payable public withdrawWallet;
    mapping(address => uint256) public walletMints;

    constructor() payable ERC721("EmezieNFT", "ENFT") {
    }

    function setMintPrice(uint256 _mintPrice) external onlyOwner {
    mintPrice = _mintPrice * 1 ether;
    }

    function setTotalSupply(uint256 _totalSupply) external onlyOwner {
        totalSupply = _totalSupply;
    }

    function setMaxPerWallet(uint256 _maxPerWallet) external onlyOwner {
        maxPerWallet = _maxPerWallet;
    }

    function setMaxSupply(uint256 _maxSupply) external onlyOwner {
        maxSupply = _maxSupply;
    }

    function setIsPublicMintEnable(bool _isPublicMintEnable) external onlyOwner {
        isPublicMintEnable = _isPublicMintEnable;
    }

    function setBaseTokenUrl(string calldata _baseTokenUrl) external onlyOwner {
        baseTokenUrl = _baseTokenUrl;
    }

    function setWithdrawWallet(address payable _withdrawWallet) external onlyOwner {
        withdrawWallet = _withdrawWallet;
    }

    function isOwner(address _address) public view returns (bool) {
        return owner() == _address;
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        require(_exists(_tokenId), "Token not found");

        // Construct the URI for the token's metadata
        // by concatenating the base URL, token ID, and file format extension.
        return string(abi.encodePacked(baseTokenUrl, Strings.toString(_tokenId), "json"));
    }

    function withdraw() external onlyOwner {
        (bool success, ) = withdrawWallet.call{value: address(this).balance}("");
        require(success, "Withdraw failed");
    }

    function mint(uint256 _quantity) public payable {
        require(isPublicMintEnable, "Minting not enabled");
        require(msg.value == _quantity * mintPrice, "Wrong mint value");
        require(totalSupply + _quantity <= maxSupply, "Sold out");
        require(walletMints[msg.sender] + _quantity <= maxPerWallet, "Max value per wallet exceeded");

        for (uint256 i = 0; i < _quantity; i++) {
            uint256 newTokenId = totalSupply + 1;
            totalSupply++;
            _safeMint(msg.sender, newTokenId);
        }
    }

    function transferOwnership(address newOwner) public override onlyOwner {
        require(newOwner != address(0), "Invalid address");
        _transferOwnership(newOwner);
    }
}
