## Steps to reproduce

1. Install dependencies via `pnpm install`
2. Try to deploy with command:
```sh
pnpm deploy --filter="{services/service-1}" --offline --prod ./deployed-service
```
3. recieve error:
```
ERR_PNPM_NO_OFFLINE_META  Failed to resolve @nuxt/devalue@2.0.0 in package mirror /Users/afedorov/Library/Caches/pnpm/metadata/registry.npmjs.org/@nuxt/devalue.json

This error happened while installing the dependencies of package-a@1.0.0
```

## Enviroment
1. pnpm: v7.11.0
2. node: v16.15.1
