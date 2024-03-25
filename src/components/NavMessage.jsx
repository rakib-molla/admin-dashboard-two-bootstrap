

function NavMessage() {
  return (
    <li className='nav-item dropdown'>
      <a
        href=''
        className='nav-link nav-icon'
        data-bs-toggle='dropdown'>
        <i className='bi bi-chat-left-text'></i>
        <span className='badge bg-success badge-number'>3</span>
      </a>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>
        <li className='dropdown-header'>
          You Have 4 new notifications
          <a href=''>
            <span className='badge rounded-pill bg-primary p-2 ms-2'>
              View All
            </span>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>

        <li className='notification-item'>
          <i className='bi bi-exclamation-circle text-warning'></i>
          <div>
            <h4>Rakib Molla</h4>
            <p>quae dolorem earum veritatis oditseno</p>
            <p>30 min. ago</p>
          </div>
        </li>

        <li>
          <hr className='dropdown-divider' />
        </li>

        <li className='notification-item'>
          <i className='bi bi-exclamation-circle text-warning'></i>
          <div>
            <h4>Rakib Molla</h4>
            <p>quae dolorem earum veritatis oditseno</p>
            <p>1 hr. ago</p>
          </div>
        </li>

        <li>
          <hr className='dropdown-divider' />
        </li>

        <li className='notification-item'>
          <i className='bi bi-exclamation-circle text-warning'></i>
          <div>
            <h4>Rakib Molla</h4>
            <p>quae dolorem earum veritatis oditseno</p>
            <p>2 hr. ago</p>
          </div>
        </li>

        <li>
          <hr className='dropdown-divider' />
        </li>

        <li className='notification-item'>
          <i className='bi bi-exclamation-circle text-warning'></i>
          <div>
            <h4>Rakib Molla</h4>
            <p>quae dolorem earum veritatis oditseno</p>
            <p>3 hr. ago</p>
          </div>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>
        <li>
          <a
            href=''
            className='d-flex align-items-center justify-content-center'>
            Show all notifications
          </a>
        </li>
      </ul>
    </li>
  );
}

export default NavMessage