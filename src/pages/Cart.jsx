import Footer from "../components/Footer";
import Header from "../components/Header";

import {CartList} from "../components/Cart";

function Cart() {   
    return <>
        <div style={{ background: 'rgb(217, 219, 222)'}}>
        <Header />
        <CartList/>
        <Footer />
        </div>
    </>
}

export default Cart;