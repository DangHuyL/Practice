import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '~/Combonent/Layouts/Combonents';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('Wrapper')}>
            <Header />
            <div className={cx('Container')}>
                <Sidebar />
                <div className={cx('Content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
