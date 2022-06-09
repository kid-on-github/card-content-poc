import React from "react"
import { useState } from "react"

const CardWrapper = ({children}) => {
    const numberOfChildren = children.length
    const [currentPage, setCurrentPage] = useState(0)

    return (
        <div className="CardWrapper">
            {children.map((child, i) => {
                const pageNumber = numberOfChildren - 1 - i
                const numberOfPages = children.length-1

                const left = pageNumber >= currentPage 
                    ? `-${(pageNumber - currentPage)*30}px`
                    : `calc( 100vw + ${pageNumber*30}px)`

                const cursor = pageNumber > currentPage ? 'pointer' : 'default'
                    
                return React.cloneElement(child, {
                    pageNumber,
                    numberOfPages,
                    currentPage,
                    setCurrentPage,
                    style: {left, cursor},
                    key: i
                })
            })}
        </div>
    )
}

export default CardWrapper