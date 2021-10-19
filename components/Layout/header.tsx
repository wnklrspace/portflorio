import React, { useState } from 'react'
import { Navigation } from '../Navigation/'
import styles from './styles.module.scss'


interface Props {
  backgroundColor?: string,
}

export const Header: React.FunctionComponent<Props> = (props) => {

  const {
    backgroundColor
  } = props

  return (
    <>
      <header className={ styles.header }>
        <Navigation />
      </header>
    </>
  )
}
