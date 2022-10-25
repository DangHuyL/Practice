import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Headless from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';

import { Wrapper as PopperWrapper } from '~/Combonent/Popper';
import AccountItem from '~/Combonent/AccountItem';
import styles from './Search.module.scss';
import * as SearchService from '~/Services/SearchService';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [SearchValue, setSearchValue] = useState('');
    const [SearchResult, setSearchResult] = useState([]);
    const [ShowResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    const debounce = useDebounce(SearchValue, 700);
    useEffect(() => {
        if (!debounce.trim()) {
            return;
        }
        setLoading(true);
        const fetchApi = async () => {
            const result = await SearchService.Search(debounce);
            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();
    }, [debounce]);

    const handleClose = () => {
        setSearchValue('');
        inputRef.current.focus();
        setShowResult(false);
    };
    const handleClickOutside = () => {
        setShowResult(false);
    };
    const handleOnchange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    return (
        <div>
            <Headless
                interactive
                visible={ShowResult && SearchResult.length > 0}
                render={(attrs) => (
                    <div
                        className={cx('Search-result')}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            <div className={cx('Search-title')}>Accounts</div>
                            {SearchResult.map((result) => (
                                <AccountItem
                                    key={result.id}
                                    data={result}
                                    onClick={handleClickOutside}
                                />
                            ))}
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
                        onChange={handleOnchange}
                        onFocus={() => setShowResult(true)}
                    />
                    {SearchValue && !loading && (
                        <button className={cx('close')} onClick={handleClose}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && (
                        <FontAwesomeIcon
                            className={cx('Loading')}
                            icon={faSpinner}
                        />
                    )}
                    <button
                        className={cx('Search-btn')}
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Headless>
        </div>
    );
}

export default Search;
