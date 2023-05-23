import { gql } from "@apollo/client";

export const EXTENDED_WARRANTY = gql`
    query extendedWarranty{
        extendedWarranty {
            methods {
                months
                value
            }
        }
    }
`