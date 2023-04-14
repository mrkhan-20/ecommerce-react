import React, { useState,useRef } from 'react';
import Navbar from '../seller/navbar';
import './AddProduct.css'

function Admin({logout}) {
    
    const [details,setDetails]=useState({
      name:"",
      price:"",
      des:"",
      img:"",
    });
    const [index,setIndex]=useState(-1);
    const inputRef = useRef(null);

    const [todo,setTodo]=useState([]);


    function addvalue(e){
      const val=e.target.value;
      const name=e.target.name;

      setDetails((prev)=>{
        if(name=="name"){
          return {
            name:val,
            price:prev.price,
            des:prev.des,
            img:prev.img,
          }
        }
        else if(name=="price"){
          return {
            name:prev.name,
            price:val,
            des:prev.des,
            img:prev.img,
          }
        }
        else if(name=="des"){
          return {
            name:prev.name,
            price:prev.price,
            des:val,
            img:prev.img,
          }
        }
        else if(name=="img"){
          return {
            name:prev.name,
            price:prev.price,
            des:prev.des,
            img:URL.createObjectURL(e.target.files[0]),
          }
        }
      })
     
    }

   
    function addTodo(){
        if(index!=-1){
          todo[index].name=details.name;
          todo[index].des=details.des;
          todo[index].price=details.price;
          todo[index].img=details.img;
          setTodo([...todo])
          
        }
        else{
          setTodo([...todo,details])
        }
      console.log(details)
        setIndex(-1);
        setDetails({
          name:"",
          price:"",
          des:"",
          img:"",
        });
        inputRef.current.value = null;
    }

    function update(i){
        setDetails({
          name:todo[i].name,
          price:todo[i].price,
          des:todo[i].des,
        
        })
        setIndex(i);
    }
    function deleteROw(index){
        setTodo(todo.filter((val,i)=>{
          return i!=index;
        }))
    }
  return (
    <>
    <Navbar logout={logout} />
    <div  className='d-flex flex-column justify-content-center align-items-center mt-4 '>
        <div className="row adminform">
            <div className="col-6">
                <input type="text" value={details.name} className="round" name="name" onChange={addvalue} /><br />
                <input type="text" value={details.price} className="round" name="price" onChange={addvalue} /><br />
                <input type="text" value={details.des} className="round" name="des" onChange={addvalue} />
                <input type="file" ref={inputRef} accept="image/*" name="img" onChange={addvalue} />
            </div>
            <div className="col-6">
                 <label className="form-label" htmlFor="form1Example1">Product Name</label><br />
                 <label className="form-label" htmlFor="form1Example1">Product Price</label><br />
                 <label className="form-label" htmlFor="form1Example1">Product Decription</label>
            </div>
            <div className="row " >
               <button type="submit" className="btn btn-primary btn-block add" onClick={addTodo}>Add Product</button>
            </div>
        </div>
       
      </div>
      <hr />
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 ml-2 mt-4 p-4 w-100 d-flex justify-content-center">
          {
            todo.map((val,index)=>{
              return(
                     <div className="col" key={index}>
                        <div className="card">
                            <img
                            src={val.img}
                            className="card-img-top imgcss"
                            />
                            <div className="card-body">
                            <div className='d-flex justify-content-between md-2'>
                                <h5 className="card-title">{val.name}</h5>
                                <h6>Price : ${val.price} </h6>
                            </div>
                            <p className="card-text">
                                 {val.des}
                            </p>
                            <div className='d-flex justify-content-around'>
                                <button className='btn btn-warning ' onClick={()=>update(index)}>Update</button>
                                <button className='btn btn-danger' onClick={()=>deleteROw(index)}>Delete</button>
                            </div>
                            </div>
                          </div>
                        </div>
              )
            })
          }
        </div>
         
    </>
  );
}

export default Admin;