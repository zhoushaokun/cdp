## Abstract

A JavaScript Lib which can get color data of one picture in certain area.

## todo

- [X] get certain rectangle area data of picture
- [ ] support`ES6`syntax
- [ ] add test case
- [ ] support`typescript`
- [ ] get any kind of area data


## how to use

This is how we use this lib now.
```js
const cdp = require('color-data-picker').getImageData;

cdp.getImageData(url, {
    success(data){
        //process(data);
    },
});
```

## API
getImageData function need two key param:`url`and`config`.
- url: string;

- config: Object;

This is `typescript` definition.
```typescript
interface ConfigType{
    success: (data: number[]) => void;
    fail: (msg: string) => void;
    x?: number;
    y?: number;
    spanX?: numbr;
    spanY?: numbr;
    scale?: numbr | (realWidth?: number, realHeight?: number) => number;
}
```
| name | meaning | type | default |
|--|--|--|--|
| x | x spot of beginning | number | 0 |
| y | y spot of beginning | number | 0 |
| spanX | horizonal span | number | realWidth * scale or realWidth * scale() |
| spanY | vertiacl span | number | realHeight * scale or realHeight * scale()|
| scale | scale function hook | number 或者 (realWidth: number) => number | 1 |
| success| success callback | (msg: string) => {} | () => {} |
| fail | fail callback | (msg: string) => {} | () => {} |

## Certificate

ISC



## 概述

用来实现获取图片特定区域的颜色数据。

## 要做

- [X] 获取选择矩形区域的颜色值。
- [ ] 支持`ES6`语法
- [ ] 增加测试用例
- [ ] 增加类型定义或者迁移`TypeScript`
- [ ] 获取任意选择的不规则区域颜色值

## 使用

当前使用方法：
```js
const cdp = require('color-data-picker').getImageData;

cdp.getImageData(url, {
    success(data){
        //process(data);
    },
});
```

## API
getImageData 接受两个参数`url`和`config`。
- url: string;

- config: Object;

```typescript
interface ConfigType{
    success: (data: number[]) => void;
    fail: (msg: string) => void;
    x?: number;
    y?: number;
    spanX?: numbr;
    spanY?: numbr;
    scale?: numbr | (realWidth?: number, realHeight?: number) => number;
}
```
| name | meaning | type | default |
|--|--|--|--|
| x | 起始点横坐标 | number | 0 |
| y | 起始点纵坐标 | number | 0 |
| spanX | 横向跨度 | number | realWidth * scale 或者 realWidth * scale() |
| spanY | 纵向跨度 | number | realHeight * scale 或者 realHeight * scale()|
| scale | scale设置钩子 | number 或者 (realWidth: number) => number | 1 |
| success| 成功回调 | (msg: string) => {} | () => {} |
| fail | 失败回调 | (msg: string) => {} | () => {} |

## 证书

ISC

