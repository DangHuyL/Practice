import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useState, useEffect } from 'react';

import images from '~/assets/images';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/Combonent/Popper';
import AccountItem from '~/Combonent/AccountItem';

const cx = classNames.bind(styles);

function Header() {
    const [SearchShow, setSearchShow] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchShow([1, 2, 3]);
        }, 0);
    }, []);
    return (
        <div className={cx('Wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="titok" />
                </div>
                <Tippy
                    interactive
                    visible={SearchShow.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx('Search-result')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <div className={cx('Search-title')}>
                                    Accounts
                                </div>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('Search')}>
                        <input placeholder="Search accounts and videos" />
                        <button className={cx('close')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon
                            className={cx('Loading')}
                            icon={faSpinner}
                        />
                        <button className={cx('Search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('active')}></div>
            </div>
        </div>
    );
}

export default Header;
