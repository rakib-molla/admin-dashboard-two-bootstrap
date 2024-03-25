import './Sidebar.css';

function Sidebar() {
  return (
    <aside
      id='sidebar'
      className='sidebar'>
      <ul
        className='sidebar-nav'
        id='sidebar-nav'>
        <li className='nav-item'>
          <a
            href=''
            className='nav-link'>
            <i className='bi bi-grid'></i>
            <span>Dashboard</span>
          </a>
        </li>

        {/* nav item one  */}
        <li className='nav-item'>
          <a
            href='#'
            className='nav-link collapsed'
            data-bs-target='#components-nav'
            data-bs-toggle='collapse'>
            <i className='bi bi-menu-button-wide'></i>
            <span>Documents</span>
            <i className='bi bi-chevron-down ms-auto'></i>
          </a>
          <ul
            id='components-nav'
            className='nav-content collapse'
            data-bs-parent='#sidebar-nav'>
            <li>
              <a href=''>
                <i className='bi bi-circle'></i>
                <span>Customers</span>
              </a>
            </li>
            <li>
              <a href=''>
                <i className='bi bi-circle'></i>
                <span>Suppliers</span>
              </a>
            </li>
            <li>
              <a href=''>
                <i className='bi bi-circle'></i>
                <span>Logistics</span>
              </a>
            </li>
          </ul>
        </li>

        {/* nav item two  */}
        <li className='nav-item'>
          <a
            href='#'
            className='nav-link collapsed'
            data-bs-target='#components-nav'
            data-bs-toggle='collapse'>
            <i className='bi bi-journal-text'></i>
            <span>Forms</span>
            <i className='bi bi-chevron-down ms-auto'></i>
          </a>
          <ul
            id='components-nav'
            className='nav-content collapse'
            data-bs-parent='#sidebar-nav'>
            <li>
              <a href=''>
                <i className='bi bi-circle'></i>
                <span>Application Form</span>
              </a>
            </li>
            <li>
              <a href=''>
                <i className='bi bi-circle'></i>
                <span>List Form</span>
              </a>
            </li>
            <li>
              <a href=''>
                <i className='bi bi-circle'></i>
                <span>Release Form</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar