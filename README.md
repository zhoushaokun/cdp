## 概述

用来实现获取图片特定区域的颜色数据。

## todo

- [X] 获取选择矩形区域的颜色值
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
| name | type | default |
|--|--|--|
| x | number | 0 |
| y | number | 0 |
| spanX | number | realWidth * scale 或者 realWidth * scale() |
| spanY | number | realHeight * scale 或者 realHeight * scale()|
| scale | number 或者 (realWidth: number) => number | 1 |
| fail | (msg: string) => {} | () => {} |

## 证书

ISC