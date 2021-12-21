/*
 * @Author: your name
 * @Date: 2021-12-20 14:57:50
 * @LastEditTime: 2021-12-20 14:59:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-ui-2\src\demo\modal.ts
 */
import React, { useState } from 'react';
import { Modal } from 'yyhreact-ui2';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(true)}>click me！</button>
      <Modal
        visible={visible}
        title="提阿斯蒂芬"
        // maskCloseAble={true}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <div>123</div>
      </Modal>
    </div>
  );
};
