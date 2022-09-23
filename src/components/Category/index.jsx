import React from "react";
import PropTypes from 'prop-types';

const Category = ({src, alt, href}) => (
    <a href={href} >
        <img src={src} alt={alt} />
    </a>
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