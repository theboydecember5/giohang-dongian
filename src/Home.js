import React from 'react'
import Itemcard from './Itemcard'
import data from './data'

const Home = () => {
    return (
        <>
            <h1 className='text-center mt-3'>All Items</h1>
            <section className='py-4 container'>
                <div className='row justìy-content-center'>
                    {data.productData.map((item, index) => {
                        return (
                            <Itemcard
                                item={item}
                                key={index}
                                price={item.price}
                                desc={item.desc}
                                title={item.title}
                                img={item.img} />
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Home

