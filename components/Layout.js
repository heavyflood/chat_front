import Header from './Header';
import classNames from 'classnames';

const Layout = ({children}) => (
    <div className={classNames(['cover-container', 'd-flex', 'w-100', 'h-100', 'p-3', 'mx-auto', 'flex-column'])}>
        <header className="mb-auto">
            <Header/>
        </header>
        <main className="px-3">           
            {children}
        </main>
    </div>
);

export default Layout;