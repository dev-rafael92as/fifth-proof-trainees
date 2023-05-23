import { gql } from "@apollo/client";

export const ORDERFORM = gql`
    query OrderForm($input: OrderFormInput!){
        orderForm(input:$input) {
            id
            items {
                id
                image
                name
                listPrice
                price
                shipping {
                    delivery {
                        days
                        value
                    }
                    pickup
                }
            }
        }
    }
`