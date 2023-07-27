import { createContext, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { Product, ProductContextPropos } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'


export const ProductContext = createContext({} as ProductContextPropos);
const { Provider } = ProductContext;


export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties;
}


export const ProductCard = ({ children, product, className, style }: Props) => {


    const { counter, increaseBy } = useProduct();




    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>

            <div className={`${styles.productCard} ${className} `}
                style={style}
            >

                {children}

                {/* <ProductImage img={product.img} />

            <ProductTitle title={product.title} />

            <ProductButtons
                increaseBy={increaseBy}
                counter={counter}
            /> */}


            </div>
        </Provider>
    )
}




