import React, { memo } from 'react';

const Image = memo(function Image(props) {
  const { image, name, size, title, tabIndex, onClick } = props;

  const alt = title || image;
  const src = `${process.env.PUBLIC_URL}/images/${image}.png`;

  if (onClick) {
    return (
      <input
        alt={alt}
        className={size}
        name={name}
        src={src}
        type="image"
        title={title}
        tabIndex={tabIndex}
        onClick={onClick}
      />
    );
  }

  return <img alt={alt} className={size} src={src} title={title} />;
});

export default Image;