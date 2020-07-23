pragma solidity 0.4.24;


contract KeccakConstants {
    // ENS
    bytes32 public constant ENS_ROOT = bytes32(0);
    bytes32 public constant ETH_TLD_LABEL = keccak256(abi.encodePacked("eth"));
    bytes32 public constant ETH_TLD_NODE = keccak256(abi.encodePacked(ENS_ROOT, ETH_TLD_LABEL));
    bytes32 public constant PUBLIC_RESOLVER_LABEL = keccak256(abi.encodePacked("resolver"));
    bytes32 public constant PUBLIC_RESOLVER_NODE = keccak256(abi.encodePacked(ETH_TLD_NODE, PUBLIC_RESOLVER_LABEL));

    // APM
    bytes32 public constant APM_NODE = keccak256(abi.encodePacked(ETH_TLD_NODE, keccak256(abi.encodePacked("aragonpm"))));

    // APMRegistry
    bytes32 public constant CREATE_REPO_ROLE = keccak256(abi.encodePacked("CREATE_REPO_ROLE"));

    // ENSSubdomainRegistrar
    bytes32 public constant CREATE_NAME_ROLE = keccak256(abi.encodePacked("CREATE_NAME_ROLE"));
    bytes32 public constant DELETE_NAME_ROLE = keccak256(abi.encodePacked("DELETE_NAME_ROLE"));
    bytes32 public constant POINT_ROOTNODE_ROLE = keccak256(abi.encodePacked("POINT_ROOTNODE_ROLE"));

    // Repo
    bytes32 public constant CREATE_VERSION_ROLE = keccak256(abi.encodePacked("CREATE_VERSION_ROLE"));
}
