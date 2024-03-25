
import Card from './Card';
import './Dashboard.css';

const data =[
        {
        "id":1,
        "name":"Sales",
        "icon":"bi bi-cart",
        "amount": 145,
        "percentage": 0.12,
        "active": true
        },
        {
        "id":2,
        "name":"Revenue",
        "icon":"bi bi-currency-dollar",
        "amount": 3246,
        "percentage": 0.08,
        "active": false
        },
        {
        "id":3,
        "name":"Customer",
        "icon":"bi bi-people",
        "amount": 1244,
        "percentage": -0.11,
        "active": false
        }
    ]

function Dashboard() {
    console.log(data)
  return (
    <section className="dashboard section border">
       <div className="row">
        <div className="col-lg-8">
            <div className="row">
                {
                    data && data.length > 0 && data.map((card)=>(
                        <Card key={card.id} card={card}/>
                    ))
                }
            </div>
        </div>
        <div className="col-lg-8"></div>
       </div>
    </section>
  )
}

export default Dashboard