import Nav from '../Nav/Nav'

export default function Layout(props) {
  const { children, currentUser, handleLogout } = props
  return (
    <div>
      <Nav 
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      <div className='layout-children'>
        {children}
      </div>
    </div>
  )
}