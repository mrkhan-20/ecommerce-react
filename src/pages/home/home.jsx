import Navbar from '../../components/Navbar/navbar';
import Cards from '../../components/cards/cards';
import Footer from '../../components/footer/footer';
import Crousal from '../../components/Crousal/crousal';
import About from '../../components/about us/about';


export default  function Home({logout,user}){
    console.log(user)
    return(
        <>
          <>
            <Navbar logout={logout}/>
            <Crousal/>
            <Cards user={user} itemsPerPage={5}/>
            <About/>
            <Footer/>
            </>
        </>
    )
}
