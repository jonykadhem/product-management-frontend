import { Link } from "react-router"

const Nav = (props) => {
    return(

        <nav>

            <Link to={'/'}>Home</Link>{' | '}
            <Link to={'/products'}>Products</Link>{' | '}
            <Link to={'/products/new'}>Add Products</Link>
        </nav>

    )
}

export default Nav