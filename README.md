# To Replicate issue


```
npm install
```

```
cd packages/psammead-headings && npm link ../psammead-test-helpers && cd ..;
```

```
npm run build && npm run test -- -u
```

See 

`packages/psammead-headings-with-test-helpers/src/__snapshots__/index.test.jsx.snap`
`packages/psammead-headings/src/__snapshots__/index.test.jsx.snap`