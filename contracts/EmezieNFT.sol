// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract EmezieNFT is ERC721, Ownable, ERC721Enumerable {

    using SafeMath for uint256;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint256 public mintPrice;
    uint256 public maxPerWallet;
    uint256 public maxSupply;
    bool public isPublicMintEnable;
    string internal baseTokenUrl;
    string internal baseExtension;
    address payable public withdrawWallet;
    uint _totalSupply= totalSupply();

  

    mapping(address => uint256) public walletMints;
    mapping(address => bool) public whitelisted;

    constructor() payable ERC721("EmezieNFT", "ENFT") {
    }

    function setMintPrice(uint256 _mintPrice) external onlyOwner {
    mintPrice = _mintPrice * 1 ether;
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

    function getIsPublicMintEnable() external view returns (bool) {
        return isPublicMintEnable;
    }

    function setBaseTokenUrl(string calldata _baseTokenUrl) external onlyOwner {
        baseTokenUrl = _baseTokenUrl;
    }
    function getBaseTokenUrl() external view returns (string memory) {
    return baseTokenUrl;
    }

    function setWithdrawWallet(address payable _withdrawWallet) external onlyOwner {
        withdrawWallet = _withdrawWallet;
    }

     function setBaseExtension(string calldata _newBaseExtension) public onlyOwner {
        baseExtension = _newBaseExtension;
    }

    function isOwner(address _address) public view returns (bool) {
        return owner() == _address;
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        require(_exists(_tokenId), "Token not found");

        // Construct the URI for the token's metadata
        // by concatenating the base URL, token ID, and file format extension.
        return string(abi.encodePacked(baseTokenUrl, Strings.toString(_tokenId), baseExtension));
    }

    function whitelistUser(address _user) public onlyOwner {
        whitelisted[_user] = true;
    }
    function unWhitelistUser(address _user) public onlyOwner {
        whitelisted[_user] = false;
    }

    function withdraw() external onlyOwner {
        (bool success, ) = withdrawWallet.call{value: address(this).balance}("");
        require(success, "Withdraw failed");
    }

   function mint(uint256 _quantity) public payable returns (uint256[] memory) {
    require(whitelisted[msg.sender] != true, "You have been whitelisted");
    require(_quantity < 10,"exceeded Max per mint");
    require(isPublicMintEnable, "Minting not enabled");
    require(msg.value >= _quantity * mintPrice, "Wrong mint value");
    require(_tokenIds.current() + _quantity <= maxSupply, "Sold out");
    require(walletMints[msg.sender] + _quantity <= maxPerWallet, "Max value per wallet exceeded");

    uint256[] memory mintedTokenIds = new uint256[](_quantity);

    for (uint256 i = 0; i < _quantity; i++) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        mintedTokenIds[i] = newTokenId;
        _safeMint(msg.sender, newTokenId);
    }

    return mintedTokenIds;
    }



    function transferOwnership(address newOwner) public override onlyOwner {
        require(newOwner != address(0), "Invalid address");
        _transferOwnership(newOwner);
    }

     // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
