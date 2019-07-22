# Xiaohongshu API Node.js

Xiaohongshu API bindings for Node.js.

## Installation:

```shell
$ npm install --save xiaohongshu-node
```

## API

This module exports a constructor function which takes an options object.

### `Xiaohongshu(options)`

Creates a new `Xiaohongshu` instance.

#### Arguments

- `options` - Required - A plain JavaScript object that contains the
configuration options.

#### Options

- `appKey` - Required - A string that specifies the appKey generated by Xiaohongshu backend.
- `appSecret` - Required - A string that specifies the appSecret generated by Xiaohongshu backend.

[How to get app Key/Secret](https://school.xiaohongshu.com/en/open/quick-start/how-to-get-app-key.html "How to get app Key/Secret.")

#### Return value

A `Xiaohongshu` instance.

#### Exceptions

Throws an `Error` exception if the required options are missing.

#### Example

```js
const XiaohongshuAPI = require('xiaohongshu-node');

const xiaohongshu = new XiaohongshuAPI({
  appKey: 'your-app-key',
  appSecret: 'your-app-secret',
});
```

### Resources

Every resource is accessed via your `Xiaohongshu` instance:

```js
const xiaohongshu = new XiaohongshuAPI({
  appKey: 'your-app-key',
  appSecret: 'your-app-secret',
});

// xiaohongshu.<resource_name>.<method_name>
```

Each method returns a `Promise` that resolves with the result:

```js
xiaohongshu.spu.getList()
  .then(spus => console.log(spus))
  .catch(err => console.error(err));
```

### Available resources and methods

- SPU
  - `create(body)`
  - `update(spuId, body)`
  - `get(spuId, query)`
- SPL
  - `create(spuId, body)`
  - `createItem(splId, body)`
  - `update(splId, body)`
  - `updateItem(splId, body)`
  - `submitItem(splId, body)`
- SPV
  - `create(splId, body)`
  - `update(spvId, body)`
  - `updateCustoms(spvId, body)`
- ITEM
  - `create(spvId, body)`
  - `update(itemId, body)`
  - `updateLogistics(itemId, body)`
  - `updateAvailability(itemId, body)`
  - `getListLite(query)`
  - `getList(query)`
  - `get(itemId)`
  - `getInventory(itemId)`
  - `updateInventory(itemId, body)`
- PACKAGE
  - `getLastest(query)`
  - `getStatus(query)`
  - `getList(query)`
  - `get(packageId)`
  - `updateShipping(packageId, body)`
  - `createBatch(body)`
  - `updateBatch(batchNo, body)`
  - `getlistCancelled(query)`
  - `updateCancelled(body)`

where `query` and `body` are a plain JavaScript object. 
See https://school.xiaohongshu.com/en/open/product/item-list.html
for parameters details.

## Become a master of the Xiaohongshu ecosystem:

* [Xiaohongshu school ](https://school.xiaohongshu.com/home "Xiaohongshu school ")
* [API documentation](https://school.xiaohongshu.com/en/open/quick-start/introduction.html "API documentation")
* [Article - Xiaohingshu content generation](https://walkthechat.com/taobao-integrates-with-xiaohongshu-to-move-into-content-generation/ "Xiaohingshu content generation")
* [Article - Word of mouth](https://walkthechat.com/xiaohongshu-little-red-book-fostering-e-commerce-via-word-mouth/ "Word of mouth")

##  Apps already using Xiaohongshu API node:

* [Walkthechat - WeChat Agency - Start leveraging WeChat](https://walkthechat.com/ "Walkthechat - WeChat Agency - Start leveraging WeChat")
* [Walkthechat - CMS](https://cms.v3.walkthechat.com "Walkthechat - CMS")

## Supported by:
* [Walkthechat](https://walkthechat.com/ "Walkthechat")

## License

[MIT](LICENSE)
