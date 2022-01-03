import InternalLayout, { Header, Content, Footer } from './layout';
import Sider from './sider';
// extends React.FC<React.HTMLAttributes<HTMLDivElement>>
interface LayoutType {
  Header: typeof Header;
  Footer: typeof Footer;
  Content: typeof Content;
  Sider: typeof Sider;
}

const Layout = InternalLayout as typeof InternalLayout & LayoutType;

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
Layout.Sider = Sider;

export default Layout;
