const { expect } = require("chai");

describe("EmezieNFT", function () {
  let owner;
  let otherAccount;
  let emezieNFT;

  beforeEach(async function () {
    [owner, otherAccount] = await ethers.getSigners();

    const EmezieNFT = await ethers.getContractFactory("EmezieNFT");
    emezieNFT = await EmezieNFT.deploy();
    await emezieNFT.deployed();
  });

  it("should allow the owner to set the mint price", async function () {
    const newMintPrice = ethers.utils.parseEther("0.1");

    await emezieNFT.connect(owner).setMintPrice(newMintPrice);

    expect(await emezieNFT.mintPrice()).to.equal(newMintPrice);
  });

  it("should allow the owner to set the max per wallet", async function () {
    const newMaxPerWallet = 5;

    await emezieNFT.connect(owner).setMaxPerWallet(newMaxPerWallet);

    expect(await emezieNFT.maxPerWallet()).to.equal(newMaxPerWallet);
  });

  it("should allow the owner to set the max supply", async function () {
    const newMaxSupply = 100;

    await emezieNFT.connect(owner).setMaxSupply(newMaxSupply);

    expect(await emezieNFT.maxSupply()).to.equal(newMaxSupply);
  });

  it("should allow the owner to enable public minting", async function () {
    await emezieNFT.connect(owner).setIsPublicMintEnable(true);

    expect(await emezieNFT.getIsPublicMintEnable()).to.be.true;
  });

  it("should allow the owner to set the base token URL", async function () {
    const newBaseTokenUrl = "https://example.com/tokens/";

    await emezieNFT.connect(owner).setBaseTokenUrl(newBaseTokenUrl);

    expect(await emezieNFT.getBaseTokenUrl()).to.equal(newBaseTokenUrl);
  });

  it("should allow the owner to set the withdrawal wallet", async function () {
    const newWithdrawWallet = await otherAccount.getAddress();

    await emezieNFT.connect(owner).setWithdrawWallet(newWithdrawWallet);

    expect(await emezieNFT.withdrawWallet()).to.equal(newWithdrawWallet);
  });

  it("should allow the owner to set the base extension", async function () {
    const newBaseExtension = ".png";

    await emezieNFT.connect(owner).setBaseExtension(newBaseExtension);

    expect(await emezieNFT.getBaseExtension()).to.equal(newBaseExtension);
  });

  it("should mint tokens successfully", async function () {
    const mintQuantity = 3;
    const mintPrice = ethers.utils.parseEther("0.1");
    const maxPerWallet = 5;
    const maxSupply = 10;

    // Set up the contract for minting
    await emezieNFT.connect(owner).setMintPrice(mintPrice);
    await emezieNFT.connect(owner).setMaxPerWallet(maxPerWallet);
    await emezieNFT.connect(owner).setMaxSupply(maxSupply);
    await emezieNFT.connect(owner).setIsPublicMintEnable(true);

    // Mint tokens
    const mintedTokenIds = await emezieNFT.connect(otherAccount).mint(mintQuantity, {
      value: mintQuantity * mintPrice,
    });

    expect(mintedTokenIds.length).to.equal(mintQuantity);

    // Verify token ownership
    for (let i = 0; i < mintedTokenIds.length; i++) {
      expect(await emezieNFT.ownerOf(mintedTokenIds[i])).to.equal(await otherAccount.getAddress());
    }
  });
});
