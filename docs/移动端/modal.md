<!--
 * @Author: your name
 * @Date: 2021-12-20 14:42:29
 * @LastEditTime: 2021-12-20 15:15:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-ui-2\docs\移动端\modal.md
-->

# Modal 对话框

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。

另外当需要一个简洁的确认框询问用户时，可以使用 `Modal.confirm()`等语法糖方法。

## 代码演示

<code src="@demo/modal.tsx" ></code>

```tsx
import React, { useState } from 'react';
import { Modal, Button } from 'yyhreact-ui2';

export default () => {
  // const [visible, setVisible] = useState(false);
  const showConfirm = () => {
    Modal.confirm({
      title: 'Do you Want to delete these items?',
      content: 'Some descriptions',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  const showDeleteConfirm = () => {
    Modal.confirm({
      title: 'Are you sure delete this task?',
      content: 'Some descriptions',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
      okText: 'Yes',
      cancelText: 'No',
    });
  };
  const showPropsConfirm = () => {
    Modal.confirm({
      title: 'Are you sure delete this task?',
      content: 'Some descriptions',
      mask: false,
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
      okText: 'Yes',
      cancelText: 'No',
    });
  };

  return (
    <div>
      <Button onClick={showConfirm}>Confirm</Button>
      <Button onClick={showDeleteConfirm}>Delete</Button>
      <Button onClick={showPropsConfirm}>With extra props</Button>
    </div>
  );
};
```
