import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '~/Combonent/Button';
const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <Button
            to={data.to}
            className={cx('menu-item', {
                separate: data.separate,
            })}
            leftIcon={data.icon}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;
