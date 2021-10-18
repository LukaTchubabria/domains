import React, { useState } from 'react'
import './domainslist.scss'
import Domain from '../Domain/Domain'

const DomainsList = (props) => {
    let [cart, setCart] = useState([]);

    return (
        <div className='domain--list'>
            {props.filteredDomainsList.map((item)=> (
                <React.Fragment key={item.domainName}>
                    <Domain
                        price={item.price}
                        domainName={item.domainName}
                        nameSuffix={item.domainExtension}
                        onClickBuy={props.onClickBuy}
                        cart={cart}
                        onClickCart={(n) => setCart(n)}
                        item={item}
                    />
                </React.Fragment>
            ))}
        </div>
    )
}

export default DomainsList
