import './SearchBar.css';

function SearchBar() {
  return (
    <div className='search-bar'>
        <form action='#' method='POST' className='search-form d-flex align-items-center'>
            <input type="text" name='name' placeholder='Search' title='Enter Search Keyword'/>
            <button type='submit' title='Search'>
                <i className='bi bi-search'></i>
            </button>
        </form>
    </div>
  )
}

export default SearchBar