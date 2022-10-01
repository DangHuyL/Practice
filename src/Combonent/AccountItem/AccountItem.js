import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('Wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fdad1-3.fna.fbcdn.net/v/t1.15752-9/309073835_605672617924571_4901306354283127960_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=tbaU4UoP-oAAX9b-nM6&_nc_ht=scontent.fdad1-3.fna&oh=03_AVICuytrUKG6SuAOPu-jd-M6STl45HJYr1RvhIFbT9zf_g&oe=635C9328"
                alt="Avatar"
            />
            <div className={cx('infor')}>
                <p className={cx('name')}>
                    <span>Dao Thi Kim Lien</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCircleCheck}
                    />
                </p>
                <p className={cx('nick-name')}>Dlien</p>
            </div>
        </div>
    );
}

export default AccountItem;
