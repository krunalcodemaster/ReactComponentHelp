import React, {useState} from 'react';
import './AddToLocalStorage.css';



export const AddToLocalStorage = ({StoreToLocalStorage}) => {
    
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");

    StoreToLocalStorage = (e) => {
        e.preventDefault();
        //console.log(name, number,email);
        localStorage.setItem('name', name);
        localStorage.setItem('number', number);
        localStorage.setItem('email', email);
    }

    return (
        <div className="addToLocalStore_blk">
           <form action="" onSubmit={StoreToLocalStorage}>
               <div className="row">
                   <div className="col-md-4">
                       <div className="form-group">
                           <label htmlFor="" className="">Name</label>
                           <input type="text" onChange={e => setName(e.target.value)} name="name" className="form-control"/>
                       </div>
                   </div>
                   <div className="col-md-4">
                       <div className="form-group">
                           <label htmlFor="" className="">Number</label>
                           <input type="number" required="required" onChange={e => setNumber(e.target.value)} name="number" className="form-control"/>
                       </div>
                   </div>
                   <div className="col-md-4">
                       <div className="form-group">
                           <label htmlFor="" className="">Email</label>
                           <input type="email" required="required" onChange={e => setEmail(e.target.value)} name="email" className="form-control"/>
                       </div>
                   </div>
                   
                   <div className="col-md-4">
                       <button className="btn btn-primary" type="submit" >submit</button>
                   </div>
               </div>

           </form>
        </div>
    );
}

