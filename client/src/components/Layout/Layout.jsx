import NavBar from '../Nav/NavBar'

export default function Layout(props) {
  const { children, currentUser, handleLogout } = props
  return (
    <div className='LayoutContianer'>
      <NavBar 
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      <div className='layoutchildren' style={{position: "absolute", top: "8.5em", zIndex: "-5"}}>
        {children}
      </div>
    </div>
  )
}