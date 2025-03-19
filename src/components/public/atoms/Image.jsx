import styled from "styled-components";
import PropTypes from "prop-types";

const ImageStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    img {
        width: 100%;
    }

    @media (min-width: 768px) { 
        width: 40%;
    }

    @media (min-width: 1024px) {
        width: 35%;
    }
`;

const Image = ({ img, alt = "Imagen", className, children }) => {
    return (
        <ImageStyle className={className}>
            {children}
            <img src={img} alt={alt} />
        </ImageStyle>
    );
};

Image.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
};

export default Image;
