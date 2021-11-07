import NavBar from '../Nav/NavBar'

export default function Layout(props) {
  const { children, currentUser, handleLogout } = props
  return (
    <div className='LayoutContianer'>
      <NavBar 
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      <div className='layoutchildren'>
        {children}
      </div>
    </div>
  )
}