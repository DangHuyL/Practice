import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import Headless from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';

import { Wrapper as PopperWrapper } from '~/Combonent/Popper';
import AccountItem from '~/Combonent/AccountItem';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);

function Search() {
    const [SearchValue, setSearchValue] = useState('');
    const [SearchResult, setSearchResult] = useState([]);
    const [ShowResult, setShowResult] = useState(true);
    const inputRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 1, 2]);
        }, 0);
    }, []);
    const handleClose = () => {
        setSearchValue('');
        inputRef.current.focus();
        setShowResult(false);
    };
    const handleClickOutside = () => {
        setShowResult(false);
    };
    return (
        <Headless
            interactive
            visible={ShowResult && SearchResult.length > 0}
            render={(attrs) => (
                <div className={cx('Search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <div className={cx('Search-title')}>Accounts</div>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleClickOutside}
        >
            <div className={cx('Search')}>
                <input
                    ref={inputRef}
                    value={SearchValue}
                    placeholder="Search accounts and videos"
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {SearchValue && (
                    <button className={cx('close')} onClick={handleClose}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {/* <FontAwesomeIcon className={cx('Loading')} icon={faSpinner} /> */}
                <button className={cx('Search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </Headless>
    );
}

export default Search;
