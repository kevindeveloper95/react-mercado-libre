import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import Publicity from './components/publicity';
import Ofertas from './components/ofertas';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Historial from './components/historial';
import Supermercado from './components/supermercado';
import Moda from './components/moda';
import CrearCuenta from './components/CrearCuenta';
import Ingresa from './components/ingresa';
import RelogXiaomi from './components/all-products/RelogXiaomi';
import ComputadoraHp from './components/all-products/ComputadoraHp';
import PlayeraPolo from './components/all-products/PlayeraPolo';
import TenisJordan from './components/all-products/TenisJordan';
import AudifonosXiaomi from './components/all-products/AudifonosXiaomi';
import HeaderRegistrado from './components/Props/HeaderRegistrado';

function App() {
  return (
    <Router>
      {/* NAVBAR */}
      <Switch>
         <Route path='/' exact>
         <Header/>
         <Publicity/>
         <Content/>
         <Footer/>  
         </Route>  
         <Route path='/ofertas'>
         <Header/>  
         <Ofertas/>
         <Footer/>  
         </Route>   
         <Route path='/historial'>
         <Header/>  
         <Historial/>
         <Footer/>  
         </Route> 
         <Route path='/supermercado'>
         <Header/> 
         <Supermercado/> 
         <Footer/>  
         </Route> 
         <Route path='/moda'>
         <Header/>  
         <Moda/>
         <Footer/>  
         </Route> 
         <Route path='/vender'>
         <Header/>  
         <Footer/>  
         </Route> 
         <Route path='/ayuda'>
         <Header/>  
         <Footer/>  
         </Route> 
         <Route path='/crear-cuenta'>
         <Header/>  
         <CrearCuenta/>
         <Footer/>  
         </Route>
         <Route path='/ingresa'>
         <Header/>  
         <Ingresa/>
         <Footer/>  
         </Route>
         <Route path='/mis-compras'>
         <Header/>  
         <Footer/>  
         </Route>
         <Route path='/crear-cuenta'>
         <Header/>  
         <Footer/>  
         </Route>
         {/* PRODUCTOS A LA VENTA */}
         <Route path='/reloj-xiaomi'>
         <Header/>  
         <RelogXiaomi/>
         <Footer/>  
         </Route>
         <Route path='/computadora-hp'>
         <Header/>  
           <ComputadoraHp/>
         <Footer/>  
         </Route>
         <Route path='/playera-polo'>
         <Header/>  
           <PlayeraPolo/>
         <Footer/>  
         </Route>
         <Route path='/tenis-jordan'>
         <Header/>  
           <TenisJordan/>
         <Footer/>  
         </Route>
         <Route path='/audifonos-redmi'>
         <Header/>  
           <AudifonosXiaomi/>
         <Footer/>  
         </Route>
         <Route path='/usuario-registrado'>
         <HeaderRegistrado/>  
           <Content/>
         <Footer/>  
         </Route>
      </Switch>
       
       
       </Router>
  );
}

export default App;
