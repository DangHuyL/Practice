import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './AccountItem.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem({ data, onClick }) {
    return (
        <Link
            to={`@${data.nickname}`}
            className={cx('Wrapper')}
            onClick={onClick}
        >
            <Image className={cx('avatar')} src={data.avatar} alt="Avatar" />
            <div className={cx('infor')}>
                <p className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && (
                        <FontAwesomeIcon
                            className={cx('check')}
                            icon={faCircleCheck}
                        />
                    )}
                </p>
                <p className={cx('nick-name')}>{data.last_name}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
