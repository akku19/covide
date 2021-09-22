import React ,{useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Covide = () => {
    const [data, setdata] = useState([]);
    const Covide = async ()=>{
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setdata(actualData.statewise[0]);
        } catch (error) {
            console.log(error);
        }
       
    }
    useEffect(() => {
        Covide();
    }, [])
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                        <h1>Live </h1>
                      <h2>State vise covid19 india </h2>                      
                </div>
             
            
            <div className="col-md-4">
                <div className="card">                    
                <div className="card-body">
                        <h5 className="card-title">india</h5>
                        <p className="card-text">covide update </p>                        
                    </div>
                    </div>
                    
                </div>
                <div className="col-md-4">
                <div className="card">                    
                <div className="card-body">
                        <h5 className="card-title">Recovered</h5>
                        <p className="card-text">{data.recovered} </p>                        
                    </div>
                    </div>
                    
                </div>
                <div className="col-md-4">
                <div className="card">                    
                <div className="card-body">
                        <h5 className="card-title">Death</h5>
                        <p className="card-text">{data.deaths} </p>                        
                    </div>
                    </div>
                    
                </div>
                <div className="col-md-4">
                <div className="card">                    
                <div className="card-body">
                        <h5 className="card-title">Active</h5>
                        <p className="card-text">{data.active} </p>                        
                    </div>
                    </div>
                    
                </div>
                <div className="col-md-4">
                <div className="card">                    
                <div className="card-body">
                        <h5 className="card-title">Date Time</h5>
                        <p className="card-text">{data.lastupdatedtime} </p>                        
                    </div>
                    </div>
                    
                </div>
        </div>
        </div>
        </>
    )
}

export default Covide
