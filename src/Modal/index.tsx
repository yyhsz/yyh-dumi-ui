/*
 * @Author: your name
 * @Date: 2021-12-20 14:37:22
 * @LastEditTime: 2021-12-20 14:54:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-ui-2\src\Dialog\index.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { classNameGenerator } from '../tools';

import './index.less';

const sc = classNameGenerator('modal');

interface Props {
  visible: boolean;
}

const Modal: React.FC<Props> = ({ visible, children }) => {
  const content = (
    <div className={sc()}>
      <div className={sc('mask')}></div>
      <div className={sc('content')}>
        <div className="icon">
          <svg className="yyh-icon" aria-hidden="true">
            <use xlinkHref="#icon-close"></use>
          </svg>
        </div>
        <header>提示</header>
        <main>123</main>
        <footer>
          <button>确认</button>
          <button>取消 </button>
        </footer>
      </div>
    </div>
  );

  return visible ? ReactDOM.createPortal(content, document.body) : null;
};

export default Modal;
