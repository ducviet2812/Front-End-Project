import Header from '../components/Header'
import Sliderbar from '../components/Sliderbar'

function DefaultLayout({children}) {

    
    return (
        <div className="wrapper">
            <Header/>
            <div className="container">
                <Sliderbar/>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;