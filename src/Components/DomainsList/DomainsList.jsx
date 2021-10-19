import React from 'react'
import './domainslist.scss'
import Domain from '../Domain/Domain'

const DomainsList = (props) => {

    return (
        <div className='domain--list'>
            {props.filteredDomainsList.map((item)=> (
                <React.Fragment key={item.domainName}>
                    <Domain
                        price={item.price}
                        domainName={item.domainName}
                        nameSuffix={item.domainExtension}
                        onClickBuy={props.onClickBuy}
                        cart={props.cart}
                        onClickCart={props.setCart}
                        item={item}
                    />
                </React.Fragment>
            ))}
        </div>
    )
}

export default DomainsList
