import React, { useState } from 'react';
import { Modal, Button } from 'yyhreact-ui2';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        click me！
      </Button>
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
