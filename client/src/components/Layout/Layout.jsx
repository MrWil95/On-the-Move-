import Nav from '../Nav/Nav'

export default function Layout(props) {
  return (
    <div>
      <Nav />
      <div className='layout-children'>
        {props.children}
      </div>
    </div>
  )
}