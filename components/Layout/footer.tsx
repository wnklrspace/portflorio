import React, { useState } from 'react'
import { Navigation } from '../Navigation'
import styles from './styles.module.scss'


interface Props {
  backgroundColor?: string,
}

export const Footer: React.FunctionComponent<Props> = (props) => {

  const {
    backgroundColor
  } = props

  return (
    <>
      <footer>
        footer goes here
      </footer>
    </>
  )
}
