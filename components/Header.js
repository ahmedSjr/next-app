import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Ahmed</span> Sirag
      </h1>
      <p className={headerStyles.description}>
        Simple next app with tiny local api 
      </p>
    </div>
  )
}

export default Header
