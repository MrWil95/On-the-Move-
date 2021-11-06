import NavBar from '../Nav/NavBar'

export default function Layout(props) {
  const { children, currentUser, handleLogout } = props
  return (
    <div>
      <NavBar 
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      <div className='layout-children'>
        {children}
      </div>
    </div>
  )
}