import React from 'react'
import './notfound.scss'

const NotFoud = () => {
    return (
        <div className="notfound">
            <img src="/Icons/notFound.svg" alt="notfound" />   
            <h3>დომენი ვერ მოიძებნა</h3>
            <p>მითითებული პარამეტრებით დომენების მარკეტში შედეგები ვერ მოიძებნა, შეცვალეთ ძიების პარამეტრები და ცადეთ თავიდან</p>
        </div>
    )
}

export default NotFoud
