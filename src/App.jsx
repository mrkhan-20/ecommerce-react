import {
    BrowserRouter,
    Routes,Route,useSearchParams ,Navigate, useNavigate
  } from "react-router-dom";
import Home from './pages/home/home'
import Signup from './pages/signup/SignUp'
import Login from './pages/login/login'
import AddProduct from './pages/AddProduct/AddProduct'
import Seller from './pages/seller/seller'

import Order from './pages/orders/order'
import Cart from './pages/carts/cart'
import {useEffect,useState} from 'react'
import axios from "axios";


function VerifyMail({setLogin,setSeller}){
    const [queryParameters] = useSearchParams()
    const id=queryParameters.get("id")
    try{
        const token={token: id}
        axios.post('http://localhost:3000/verifyMail',token)
        .then((res) => {
           if (res.status==200) {
            let username=res.data[0].username;
            localStorage.setItem('token', JSON.stringify({token:id,username}));
            setLogin();
           }
         });
      
   }catch(err){

       console.error(err);
   }

   return (
    <>
      
        <div>verified</div>
       
    </>
    )
}
function Temp(){
    return <div>please verify first</div>
}
function Check(){
    return <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}><h1>Loading...</h1></div>

}

export default  function App(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [seller, setIsSeller] = useState(false);

    const [check,setCheck]=useState(false)
    
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'));
        if(token){
            const val={token: token.token}
            try{
                setCheck(true)

                 axios.post('http://localhost:3000/home',val)
                 .then((res) => {
                    if (res.status==200) {
                      setIsLoggedIn(true);
                       const u = JSON.parse(localStorage.getItem('token'));
                        setUser(u.username)
                        setCheck(false)
                    }
                    else{
                        setCheck(false)

                    }
                  });
               
            }catch(err){
                console.error(err);
                setCheck(false)

            }
        }

    })

    function setLogin(){
        setIsLoggedIn(true);
    }
    function setSeller(){
        setIsSeller(true);
    }
    function logout(){
        setIsLoggedIn(false);
    }

    
    return(
        <>
         <BrowserRouter>
          <Routes>
          {
            isLoggedIn ? seller ? <>
                <Route exact path="/" element={<Seller logout={logout} user={user}/>}/>
                <Route path='*' element={<Navigate to='/' />} />
                 <Route exact path="/addproduct" element={<AddProduct logout={logout} user={user}/>}/>
            </>
            :
            <>
             <Route exact path="/" element={<Home logout={logout} user={user}/>} />
             <Route exact path="/cart" element={<Cart logout={logout} user={user}/>}/>
             <Route exact path="/order" element={<Order logout={logout} user={user}/>}/>
             <Route path='*' element={<Navigate to='/' />} />
             </>
            :check ? <Route path='*' element={<Check/>} />:
            <>
            <Route exact path="/signup" element={<Signup/>}/>
            <Route exact path="/temp" element={<Temp/>} />
            <Route exact path="/verifyMail" element={<VerifyMail setLogin={setLogin} setSeller={setSeller} />} />
             <Route path="/" element={<Login setLogin={setLogin} setSeller={setSeller}/>}/>
             <Route path="*" element={<Login setLogin={setLogin} setSeller={setSeller}/>}/>
            </>

            }
          </Routes>
         </BrowserRouter>
        </>
    )
}
