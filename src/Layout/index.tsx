import React from 'react';
import { classNameGenerator } from '../tools';

import './index.less';

interface Props {
  className?: string;
}

const sc = classNameGenerator('layout');

const Layout: React.FC<Props> = (props) => {
  const { className = '' } = props;

  return <div className={`${sc()} ${className}`}></div>;
};

export default Layout;
