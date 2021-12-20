/*
 * @Author: your name
 * @Date: 2021-12-20 14:37:22
 * @LastEditTime: 2021-12-20 14:54:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-ui-2\src\Dialog\index.tsx
 */
import React from 'react';
import './index.less';

interface Props {
  visible: boolean;
}

const Modal: React.FC<Props> = ({ visible, children }) => {
  const content = (
    <div className="yyh-modal">
      <div className="yyh-modal-mask">mask</div>
      <div className="yyh-modal-wrap">
        <div className="yyh-modal-content">{children}</div>
      </div>
    </div>
  );

  return visible ? content : null;
};

export default Modal;
