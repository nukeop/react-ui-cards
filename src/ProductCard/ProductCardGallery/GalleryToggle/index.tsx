import React from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

export type GalleryToggleProps = {
  icon: string;
  action: React.MouseEventHandler;
  left?: boolean;
  right?: boolean;
};

const GalleryToggle: React.FC<GalleryToggleProps> = ({
  icon,
  action,
  left=false,
  right=false
}) => (
  <div
    className={cx(
      styles['gallery-toggle'],
      {
        [styles['left']]: left,
        [styles['right']]: right
      }
    )}
    onClick={action}
  >
    {icon}
  </div>
)

export default GalleryToggle;
