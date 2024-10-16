import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from 'react-router-dom'
import Detail from "../components/Detail";

function BookDetail() {
    // React hook
    const { id } = useParams()
   
    return <>
        <Header />
        <Detail id={id}/>
        <Footer />
    </>
}

export default BookDetail;