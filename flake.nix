{
  description = "MemeFinder Frontend";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };

        server-app = pkgs.mkYarnPackage {
          name = "memefinder-frontend-server";
          src = ./.;
          packageJSON = ./package.json;
          yarnLock = ./yarn.lock;

          buildPhase = ''
            yarn --offline build
          '';
          installPhase = ''
            cp -r deps/memefinder-site/build $out
            cp deps/memefinder-site/package.json $out/
          '';
          distPhase = "true";
        };

        server-app-bin = pkgs.writeShellScriptBin "memefinder-frontend" ''
          ${pkgs.nodejs}/bin/node ${server-app}
        '';
      in
      {
        packages = {
          default = server-app-bin;
          server-app-bin = server-app-bin;
          server-app = server-app;
        };

        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [ nodejs yarn ];
        };
      }
    );
}
