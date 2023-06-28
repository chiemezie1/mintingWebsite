// SPDX-License-Identifier: UNLICENSED

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
    mapping (address => uint256) public walletMints;

    constructor(uint256 _mintPrice, uint256 _totalSupply, uint256 _maxPerWallet, uint256 _maxSupply) payable ERC721("EmezieNFT", "ENFT") {
        mintPrice = _mintPrice;
        totalSupply = _totalSupply;
        maxPerWallet =_maxPerWallet;
        maxSupply =_maxSupply;
    }
    
    function setIspublicMintEnable(bool _isPublicMintEnable)external onlyOwner {
        isPublicMintEnable = _isPublicMintEnable;
    }

    function setBaseTokenUrl(string calldata _baseTokenUrl) external onlyOwner {
        baseTokenUrl = _baseTokenUrl;
    }
}
