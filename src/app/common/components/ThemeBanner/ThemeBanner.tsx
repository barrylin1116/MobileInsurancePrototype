import React from 'react';
import { ThemeBannerProps } from './types';

const ThemeBanner: React.FC<ThemeBannerProps> = (props) => props.visible
  ? (
    <div className="theme-banner theme-banner--grayscale">
      <div className="theme-banner__container">
        {props.children}
      </div>
    </div>
    )
  : null;

export default ThemeBanner;
