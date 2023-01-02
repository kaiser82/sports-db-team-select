import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Players from '../Players/Players';
import './Home.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

const Home = () => {
    const [players, setPlayers] = useState([]);
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState([]);
    // console.log(players)
    // console.log(cart)

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
            .then(res => res.json())
            .then(data => setPlayers(data.player));
    }, [search]);

    const handleDelete = (id) => {
        // console.log(id)
        const newCart = cart.filter((pd) => pd.idPlayer !== id);
        console.log(newCart)
        setCart(newCart)
        toast("Player Deleted from the Cart!");
        Swal.fire(
            'Deleted!',
            `You have deleted a player from your cart!`,
            'error'
        )

    }
    return (
        <div>

            <div className="home-container">
                <div className="left-side">
                    <div className="search-area">
                        <input onChange={(e) => setSearch(e.target.value)} type="text" className='search-input' placeholder='search your player...' />
                        <button className='search-btn'>Search</button>
                    </div>
                    <div className="players-container">
                        <Players players={players} cart={cart} setCart={setCart}></Players>
                    </div>
                </div>
                <div className="right-side">
                    <div className="cart" >
                        <h3>Player Cart</h3>
                        <h4>Player Added {cart.length} of 5</h4>
                        {
                            cart?.map(info => <Cart info={info} handleDelete={handleDelete}></Cart>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;