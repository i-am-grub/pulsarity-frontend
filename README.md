# Pulsarity Frontend

This repo is setup as a Vue project that uses Vite as the build tooling. While
the bash command included in this file utalize bun, your preferred javascript
package manager.

## Building the Frontent

Run the following command.

```bash
bun run build
```

A `dist` folder will contain the build artifacts after the command completes.

## Running with the Pulsarity Backend

Create a symbolic link from the generated `dist` folder to the cloned
[backend repo](https://github.com/i-am-grub/pulsarity)

```bash
ln -s <path-to-frontend-repo>/pulsarity-frontend/dist <path-to-backend-repo>/src/pulsarity/frontend
```

## Updating Protocol Buffer Static Files

1. Clone the [pulsarity-protobuf](https://github.com/i-am-grub/pulsarity-protobuf) repo
2. Generate protocol buffer static javascript files from the cloned repo into the `src/utils`
   folder of this repo.

```bash
bun run pbjs -t static-module -w esm -o src/utils/pulsarity_pb.js --dts <path-to-cloned-repo>/src/*.proto
```

3. Generate static typescript files from static javascript files

```bash
bun run pbts -o src/utils/pulsarity_pb.d.ts src/utils/pulsarity_pb.js
```
