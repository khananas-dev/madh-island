
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  user-select: none;
  display:inline-block;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    z-index: 1;
  }
  svg{
    width: 32px;
  height: 32px;
  }
  span{
    position: absolute;
    font-size:12px;
    top:0;
    font-weight:700;
  }
`;


const Marker = ({ text }: any) => (
  <Wrapper title={text}>
    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 0.0090332C2.238 0.0090332 0 2.23803 0 4.99903C0 9.77303 5 15.999 5 15.999C5 15.999 10 9.77203 10 4.99903C10 2.23903 7.762 0.0090332 5 0.0090332V0.0090332ZM5 7.76003C4.28392 7.76003 3.59716 7.47557 3.09081 6.96922C2.58446 6.46287 2.3 5.77612 2.3 5.06003C2.3 4.34395 2.58446 3.65719 3.09081 3.15084C3.59716 2.6445 4.28392 2.36003 5 2.36003C5.71608 2.36003 6.40284 2.6445 6.90919 3.15084C7.41554 3.65719 7.7 4.34395 7.7 5.06003C7.7 5.77612 7.41554 6.46287 6.90919 6.96922C6.40284 7.47557 5.71608 7.76003 5 7.76003Z" fill="#FF0000" />
    </svg>
    <span>{text}</span>
  </Wrapper>
);

// Marker.defaultProps = {
//   onClick: null,
// };

// Marker.propTypes = {
//   onClick: PropTypes.func,
//   text: PropTypes.string.isRequired,
// };

export default Marker;