import { Link } from 'react-router-dom'

function AppLogo() {
  return (
    <Link to={'/'}>
      <img src={'/assets/AFRIQOM.png'} className="w-40" alt="" />
    </Link>
  )
}

export default AppLogo
