import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/productList/productList";

function Home(){
    return(
        <div>
            <NavBar>
                <ProductList></ProductList>
                </NavBar>

        </div>

    );

}

export default Home;