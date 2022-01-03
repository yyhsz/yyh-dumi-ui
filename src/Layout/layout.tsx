import React, { ReactChild, ReactElement, ReactNode } from 'react';
import { classNameGenerator } from '../tools';

import './index.less';

const sc = classNameGenerator('layout');

type BasicProps = React.HTMLAttributes<HTMLDivElement>;

// const Header = (props: any) => {
//   const { className = '', children } = props;
//   // console.log(children.);

//   return <header className={`${sc('header')} ${className}`}>header{children}</header>;
// };
// const Content = (props: any) => {
//   const { className = '', children } = props;

//   return <main className={`${sc('content')} ${className}`}>content{children}</main>;
// };
// const Footer = (props: any) => {
//   const { className = '', children, ...rest } = props;

//   return (
//     <footer className={`${sc('footer')} ${className}`} {...rest}>
//       Footer{children}
//     </footer>
//   );
// };

const Layout = (props: BasicProps) => {
  const { className = '', children } = props;
  const arrChildren = children as Array<ReactElement>;
  console.log(arrChildren[0]?.type === Header);

  return <section className={`${sc()} ${className}`}>{children}</section>;
};

interface generatorProps {
  tagName: string;
}
const generator = ({ tagName }: generatorProps) => {
  return (props: BasicProps) => {
    const { className = '', children, ...rest } = props;
    const arrChildren = children as Array<ReactElement>;
    //if  children has sider, className add: -has-sider
    const clsStr = `${sc(tagName)} ${className} ${
      tagName === 'section' &&
      arrChildren?.length > 0 &&
      arrChildren?.find((ele) => ele === <div />)
        ? sc('-has-sider')
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
const Header = generator({ tagName: 'header' });
const Content = generator({ tagName: 'main' });
const Footer = generator({ tagName: 'footer' });

export { Header, Footer, Content };

export default Layout;
