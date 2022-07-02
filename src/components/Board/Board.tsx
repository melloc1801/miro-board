import React from 'react'
import styles from './Board.module.scss';

export const Board: React.FC = () => {
  return (
    <canvas className={styles.board}></canvas>
  )
}
