import {Link} from '@mui/material'

import routes from '../../../app/routes.js'

import styles from './navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.content}>
        <h1>Calculadora de gastos</h1>
        <div className="navbar-links">
          <Link href={routes.upload()} color="secondary">
            Subir recibo
          </Link>
        </div>
      </div>
    </nav>
  )
}
