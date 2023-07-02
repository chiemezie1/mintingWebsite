const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("EmezieNFT", function () {
  let emezieNFT;
  let owner;
  let otherAccount;

  beforeEach(async function () {
    const EmezieNFT = await ethers.getContractFactory("EmezieNFT");
    emezieNFT = await EmezieNFT.deploy();
    [owner, otherAccount] = await ethers.getSigners();
  });

  it("should allow the owner to update the isPublicMintEnable flag", async function () {

    await emezieNFT.connect(owner).setIsPublicMintEnable(true);

    expect(await emezieNFT.isPublicMintEnable()).to.be.true;
  });

});
