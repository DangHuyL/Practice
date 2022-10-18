import { useState, forwardRef } from 'react';
import classNames from 'classnames/bind';

import styles from './Image.module.scss';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [fallBack, setFallback] = useState('');
    const handleError = () => {
        setFallback(images.noImage);
    };
    return (
        <img
            src={fallBack || src}
            alt={alt}
            className={classNames(styles.wrapper, className)}
            ref={ref}
            onError={handleError}
            {...props}
        />
    );
});

export default Image;
