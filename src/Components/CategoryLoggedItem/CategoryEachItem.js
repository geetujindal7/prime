/* eslint-disable react/jsx-key */
import React from 'react'
import items from '../Common/constant'
import Product from './Product'

function CategoryEachItem() {

    const titles = ['Drama', 'Action', 'Comedy', 'Horror', 'Crime', 'Romance', 'Thriller']
    
  return (
    <div style={{marginTop: "20px"}}>
        <div>
        {
            titles.map((e) => 
            <Product title={e}/>
            )
        }   
        </div>
    </div>
  )
}

export default CategoryEachItem