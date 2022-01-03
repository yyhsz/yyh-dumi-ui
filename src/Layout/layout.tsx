import React, { ReactElement } from 'react';
import { classNameGenerator } from '../tools';
import Sider from './sider';

import './index.less';

const sc = classNameGenerator('layout');

type BasicProps = React.HTMLAttributes<HTMLDivElement>;

interface generatorProps {
  tagName: 'header' | 'footer' | 'main' | 'section';
  suffixCls: string;
}
const generator = ({ tagName, suffixCls }: generatorProps) => {
  return (props: BasicProps) => {
    const { className = '', children, ...rest } = props;
    const arrChildren = children as Array<ReactElement>;
    //if  children has sider, className add: -has-sider
    const clsStr = `${sc(tagName === 'section' ? '' : suffixCls)} ${className} ${
      tagName === 'section' &&
      arrChildren?.length > 0 &&
      arrChildren?.find((ele) => ele.type === Sider)
        ? sc('has-sider')
        : ''
    }`;

    return React.createElement(
      tagName,
      {
        className: clsStr,
        ...rest,
      },
      children,
    );
  };
};
const Header = generator({ tagName: 'header', suffixCls: 'header' });
const Content = generator({ tagName: 'main', suffixCls: 'content' });
const Footer = generator({ tagName: 'footer', suffixCls: 'footer' });
const Layout = generator({ tagName: 'section', suffixCls: 'layout' });

export { Header, Footer, Content };

export default Layout;
