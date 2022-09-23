import React from "react";
import PropTypes from 'prop-types';
import {Anchor, Image} from './style'

const Category = ({src, alt, href}) => (
    <Anchor href={href}>
        <Image src={src} alt={alt} />
    </Anchor>
);

Category.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    href: PropTypes.string
};

Category.defaultProps = {
    src: '',
    alt: '',
    href: ''
};

export default Category;