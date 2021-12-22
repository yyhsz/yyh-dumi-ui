<!--
 * @Author: your name
 * @Date: 2021-12-20 13:09:38
 * @LastEditTime: 2021-12-20 14:15:15
 * @LastEditors: Please set LastEditors
 * @Description: Button组件文档页
 * @FilePath: \react-ui-2\docs\移动端\button.md
-->

# Button 按钮

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

在 Ant Design 中我们提供了三种按钮。

主按钮：用于主行动点，一个操作区域只能有一个主按钮。

默认按钮：用于没有主次之分的一组行动点。

文本按钮：用于最次级的行动点。

链接按钮：一般用于链接，即导航至某位置。

以及四种状态属性与上面配合使用。

危险：删除/移动/修改权限等危险操作，一般需要二次确认。

幽灵：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。

禁用：行动点不可用的时候，一般需要文案解释。

<!-- 加载中：用于异步操作等待反馈的时候，也可以避免多次提交。 -->

## 代码演示

<code src="@demo/button.tsx" ></code>

```tsx
import React, { useState } from 'react';
import { Button } from 'yyhreact-ui2';

export default () => {
  const [size, setSize] = useState('default');

  return (
    <div>
      <div>
        <Button style={{ margin: 0 }} onClick={() => setSize('large')}>
          Large
        </Button>
        <Button style={{ margin: 0 }} onClick={() => setSize('default')}>
          Default
        </Button>
        <Button onClick={() => setSize('small')}>Small</Button>
      </div>
      <Button type="primary" size={size}>
        Primary Button
      </Button>
      <Button size={size}>Default Button</Button>
      <Button type="link" size={size}>
        Link
      </Button>
      <Button type="text" size={size}>
        Text
      </Button>
    </div>
  );
};
```
