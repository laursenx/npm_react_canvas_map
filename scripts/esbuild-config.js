const fs = require("fs");
const { exec } = require("child_process");

const pkg = require("../package.json");

const metafilePlugin = {
  name: "metafilePlugin",
  setup: (build) => {
    build.onEnd((result) => {
      if (result.errors.length === 0) {
        fs.writeFileSync("dist/meta.json", JSON.stringify(result.metafile));
      }
    });
  },
};

const typescriptPlugin = {
  name: "typescriptPlugin",
  setup: (build) => {
    build.onEnd((result) => {
      if (result.errors.length === 0) {
      }
    });
  },
};

const external = [...Object.keys(pkg.peerDependencies || {})];

exports.config = {
  plugins: [metafilePlugin, typescriptPlugin],
  bundle: true,
  minify: true,
  sourcemap: true,
  metafile: true,
  format: "esm",
  target: ["esnext"],
  entryPoints: ["src/index.ts", "src/index.css"],
  outdir: "dist",
  external,
};
