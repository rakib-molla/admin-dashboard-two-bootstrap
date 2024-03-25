
function NavAvatar() {
  return (
    <li className='nav-item dropdown pe-3'>
      <a
        href=''
        className='nav-link nav-profile d-flex align-items-center pe-0'
        data-bs-toggle='dropdown'>
        <img
          src='https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-1/242216316_4485799161542662_2545420565036110444_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHokqTOI1PczvOd9jOzSYU8SjJBQbEg2e1KMkFBsSDZ7UghmV1FmT9N7ktS-8v69XjnVnZaF9WzMBTFgGmMvJG4&_nc_ohc=i8vBDBrGXyUAX_ujnXi&_nc_ht=scontent.fdac27-2.fna&oh=00_AfDlm6r4oDFqqbT68RXTYZu4ctxfNPnHEWH-_cCDf5q2jg&oe=660585C5'
          className='rounded-circle'
          alt='image'
        />
        <span className='d-none d-md-block dropdown-toggle ps-2'>R.Molla</span>
      </a>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'>
        <li className='dropdown-header '>
          <h6>Rakib</h6>
          <span>Web Developer</span>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>

        <li className='dropdown-item d-flex align-items-center'>
          <a href=''>
            <i className='bi bi-person'></i>
            <span>My Profile</span>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>

        <li className='dropdown-item d-flex align-items-center'>
          <a href=''>
            <i className='bi bi-person'></i>
            <span>Account Setting</span>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>
        <li className='dropdown-item d-flex align-items-center'>
          <a href=''>
            <i className='bi bi-person'></i>
            <span>Need Help</span>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>

        <li className='dropdown-item d-flex align-items-center'>
          <a href=''>
            <i className='bi bi-person'></i>
            <span>Log Out</span>
          </a>
        </li>
      </ul>
    </li>
  );
}

export default NavAvatar