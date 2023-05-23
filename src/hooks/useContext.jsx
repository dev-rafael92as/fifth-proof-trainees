import { createContext, useContext, useState } from "react";

const UseContext = createContext({});

function ContextProvider({ children }) {

    const [ products, setProducts] = useState();
    const [ dataGuarantee, setDataGuarantee ] = useState()
    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    // const [ modalContent, setModalContent ] = useState("modal1")
    // const [ isOpenTopBar, setIsOpenTopBar ] = useState(true)
    // const [ noRegionalization, setNoRegionalization ] = useState(true)
    // const [ productsCart, setProductsCart ] = useState([])

    return(
        <UseContext.Provider
            value={{
                products,
                setProducts,
                dataGuarantee,
                setDataGuarantee,
                modalIsOpen, 
                setModalIsOpen,
                // modalContent,
                // setModalContent,
                // isOpenTopBar,
                // setIsOpenTopBar,
                // noRegionalization,
                // setNoRegionalization,
                // productsCart,
                // setProductsCart,
            }}
        >
            {children}
        </UseContext.Provider>
    )
}

const useContextCheckout = ( ) => {
    const context = useContext(UseContext)

    return context;
}

export { ContextProvider, useContextCheckout } 