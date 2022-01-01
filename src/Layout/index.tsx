import React from 'react';
import { classNameGenerator } from '../tools';

import './index.less';

interface BasicProps extends React.HTMLAttributes<HTMLDivElement> {
  // prefixCls?: string;
  hasSider?: boolean;
}

const sc = classNameGenerator('layout');

const Layout: React.FC<BasicProps> = (props) => {
  const { className = '' } = props;

  return <section className={`${sc()} ${className}`}></section>;
};

export default Layout;
