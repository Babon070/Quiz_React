import React from 'react'
import './Header.scss'
import Container from '../../util/Container'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__wrap">
          <Link to='/' className="header__wrap-title">Quiz</Link>
        </div>
      </Container>
    </header>
  )
}

export default Header
