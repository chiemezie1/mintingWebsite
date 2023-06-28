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
    mapping(address => uint256) public walletMints;

    constructor(
        uint256 _mintPrice,
        uint256 _totalSupply,
        uint256 _maxPerWallet,
        uint256 _maxSupply
    ) payable ERC721("EmezieNFT", "ENFT") {
        mintPrice = _mintPrice;
        totalSupply = _totalSupply;
        maxPerWallet = _maxPerWallet;
        maxSupply = _maxSupply;
    }

    function setIspublicMintEnable(
        bool _isPublicMintEnable
    ) external onlyOwner {
        isPublicMintEnable = _isPublicMintEnable;
    }

    function setBaseTokenUrl(string calldata _baseTokenUrl) external onlyOwner {
        baseTokenUrl = _baseTokenUrl;
    }

    function tokenURI(
        uint256 _tokenId
    ) public view override returns (string memory) {
        require(_exists(_tokenId), "Token not found");

        // Construct the URI for the token's metadata
        // by concatenating the base URL, token ID, and file format extension.
        return
            string(
                abi.encodePacked(
                    baseTokenUrl,
                    Strings.toString(_tokenId),
                    "json"
                )
            );
    }

    function withdraw() external onlyOwner {
        (bool success, ) = withdrawWallet.call{value: address(this).balance}(
            ""
        );
        require(success, "withdraw failed");
    }

    function mint(uint _quantity) public payable {
        require(isPublicMintEnable, "Miniting not enabled");
        require(msg.value == _quantity * mintPrice, "wrong mint value");
        require(totalSupply + _quantity <= maxSupply, "sold out");
        require(walletMints[msg.sender] + _quantity <= maxPerWallet, "Max value per wallet exceeded");
        
        for(uint256 i = 0; i < _quantity; i++){
            uint256 newTokenId = totalSupply +1;
            totalSupply++;
            _safeMint(msg.sender, newTokenId);
        }
    }
}
