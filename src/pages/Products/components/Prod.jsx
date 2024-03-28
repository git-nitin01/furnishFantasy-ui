import React from 'react'
import { useState } from 'react'
import ProdModal from './ProdModal' 

function Prod({name, category, price, desc}) {

    const [prodModal, setProdModal] = useState(false)

    const handleProdModal = () => {
        setProdModal(!prodModal)
    }

    return (
        <div>
            <div id="product_card" className="cursor-pointer flex flex-col w-60 h-[18.5em] shadow-2xl mb-11 mr-11 rounded-xl overflow-hidden">
                <div onClick={handleProdModal} className="flex justify-center">
                    <img src="src/assets/image.png" alt="product" />
                </div>

                <div id="prod_details" className='flex flex-col pt-2'>
                    <div className="flex justify-center">
                        <h2>{name}</h2>
                    </div>
                    <div className="flex justify-center">
                        <p>{`$${price}`}</p>
                    </div>
                    <div className="text-center">
                        <button className='bg-black bg-opacity-[0.7] p-2 rounded-xl text-white hover:bg-opacity-[1] hover:transition duration-500 ease-in-out'>Add to Cart</button>
                    </div>
                </div>
            </div>

            {prodModal && (
                <ProdModal name={name} category={category} price={price} modal={prodModal} description={desc}/>
            )}
        </div>
    )
}

export default Prod