import React from 'react'
import styles from './Slide.module.css'

function Slide({slides}) {


    
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            {slides.map(({text, id}) => (
                <div className={styles.item} key={id}>
                    {text}
                </div>
            ))}
        </div>
        <nav className={styles.nav}>
            <button>Previus</button>
            <button>Next</button>
        </nav>
    </section>
  )
}

export default Slide