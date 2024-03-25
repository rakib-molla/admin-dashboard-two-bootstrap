import Dashboard from './Dashboard';
import './Main.css';
import PageTitle from './PageTitle';
function Main() {
  return (
    <main
      id='main'
      className='main'>
        <PageTitle page="Dashboard"/>
        <Dashboard/>
      </main>
  );
}

export default Main;
