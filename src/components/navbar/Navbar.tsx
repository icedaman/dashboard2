import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>StoreAdmin</span>
      </div>
      <div className="links">
        <img src="/search.svg" alt="" />
        <img src="/app.svg" alt="" />
        <img src="/expand.svg" alt="" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://joaoalegria.com/jp.jpg" alt="" style={{padding: 0}}/>
          <span>João</span>
        </div>
        <img src="/settings.svg" alt="" />
      </div>
    </div>
  )
}

export default Navbar