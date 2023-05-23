import { createContext, useContext, useState } from "react";

const UseContext = createContext({});

function ContextProvider({ children }) {

    // const [ selectedState, setSelectedState] = useState("SP");
    // const [ dataInfosStore, setDataInfosStore ] = useState()
    // const [ modalIsOpen, setModalIsOpen ] = useState(true);
    // const [ modalContent, setModalContent ] = useState("modal1")
    // const [ isOpenTopBar, setIsOpenTopBar ] = useState(true)
    // const [ noRegionalization, setNoRegionalization ] = useState(true)
    // const [ productsCart, setProductsCart ] = useState([])
    // const [ miniCartIsOpen, setMiniCartIsOpen ] = useState(false)

    return(
        <UseContext.Provider
            value={{
                // selectedState,
                // setSelectedState,
                // dataInfosStore,
                // setDataInfosStore,
                // modalIsOpen, 
                // setModalIsOpen,
                // modalContent,
                // setModalContent,
                // isOpenTopBar,
                // setIsOpenTopBar,
                // noRegionalization,
                // setNoRegionalization,
                // productsCart,
                // setProductsCart,
                // miniCartIsOpen,
                // setMiniCartIsOpen
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