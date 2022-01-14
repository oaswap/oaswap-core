module.exports = async function ({
  getNamedAccounts,
  deployments,
}) {
  const { deploy } = deployments;

  const { deployer, dev } = await getNamedAccounts();

  await deploy("OaswapFactory", {
    from: deployer,
    args: [deployer],
    log: true,
    deterministicDeployment: false,
  });
};

module.exports.tags = ["OaswapFactory", "AMM"];
