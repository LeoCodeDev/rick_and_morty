import React from 'react'
import { SearchBar } from '../SearchBar/SearchBar'

const NavBar = ({onSearch}) => {
  return (
    <SearchBar onSearch={onSearch}/>
  )
}

export {NavBar}