import React, { useContext } from 'react'
import { ExerciseContext, ExerciseStorage } from './Exercise'

function ProductExercise() {

    const productFetch = useContext(ExerciseContext);

  if(productFetch === null) return null;

  return (
    <div>
      
      <button onClick={() => productFetch.cleanData()}>Clean</button>

        {productFetch.data?.map((item) => {
          return <h3 key={item.id}>{item.id}</h3>
        })}

    </div>
  )
}

export default ProductExercise