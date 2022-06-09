const Card = ({children, style, pageNumber, numberOfPages, currentPage, setCurrentPage}) => {

    const handleClick = () => {
        if (pageNumber > currentPage){
            setCurrentPage(pageNumber)
        } 
    }

    return (
        <div className="Card" style={style} onClick={()=>handleClick()}>
            {children}

            <div className="buttonWrapper">
                <button 
                    disabled={pageNumber === 0} 
                    onClick={() => setCurrentPage(pageNumber-1)}
                >
                    Previous
                </button>
                
                <button 
                    disabled={pageNumber === numberOfPages}
                    onClick={() => setCurrentPage(pageNumber+1)}
                >
                    Next
                </button>
            </div>
        </div>
    )
}



export default Card