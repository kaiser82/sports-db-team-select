import React from 'react';

// import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import './Player.css'


const Player = ({ player, cart, setCart }) => {
    console.log(cart)
    // console.log(player)
    const { strPlayer, strDescriptionEN, strCutout, strBirthLocation, strNationality, idPlayer } = player;
    const handleAddToCart = () => {
        const info = { strPlayer, strDescriptionEN, strCutout, strBirthLocation, strNationality, idPlayer, Price: 115 };
        setCart(info);


        if (cart && cart.length < 5) {
            const isInCart = cart.find(pa => pa.idPlayer === idPlayer);
            if (!isInCart) {
                const newPlayer = [...cart, info];
                setCart(newPlayer)
                // Toast("Player Added")
                Swal.fire(
                    'Success!',
                    `You have added <strong> ${strPlayer}</strong> to the Cart`,
                    'success'
                )
            }
            else {
                setCart(cart)
                Swal.fire(
                    'Warning!',
                    'Player already exist in the Cart!',
                    'error')
            }
        }
        else {
            setCart(cart)
            Swal.fire(
                'Warning!',
                'You cannot add more than 5 player in the Cart!',
                'error')
        }

        // console.log(newPlayer)
    }
    const handleBookmark = () => {
        const infoForBookmark = { strPlayer, idPlayer, strCutout, Price: 115, bookmark: "true" };
        // console.log(infoForBookmark);
        const prevBookmark = JSON.parse(localStorage.getItem('bookmark'));

        if (prevBookmark) {
            const isExist = prevBookmark.find((p) => p.idPlayer === idPlayer);
            if (!isExist) {
                localStorage.setItem('bookmark', JSON.stringify([...prevBookmark, infoForBookmark]));
                alert("Player added to Bookmark.")
            }
            else (alert('Player already exist in db!'));
            return;

        }
        else {
            localStorage.setItem('bookmark', JSON.stringify([infoForBookmark]));
            alert("Player added to Bookmark.")
        }


    }

    // console.log(cart)
    return (
        <div className='player' data-aos="zoom-in-up">
            <img src={strCutout} alt="" />
            <h3>Player name: {strPlayer}</h3>
            <p>Nationality: {strNationality}</p>
            <p>Birth Location: {strBirthLocation}</p>
            <div className='btn-container'>
                <button className='card-btn'>Details</button>
                <button onClick={handleAddToCart} className='card-btn' id='cart-btn'>Add to cart</button>
                <button onClick={handleBookmark} className='card-btn'>Bookmark</button>
            </div>
        </div>
    );
};

export default Player;