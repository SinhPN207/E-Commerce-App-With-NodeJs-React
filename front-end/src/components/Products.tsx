import React from "react";
import styled from "styled-components";
import {IPopularProductItem, popularProducts} from "../data";
import ProductItem from "./ProductItem";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
    return (
        <Container>
            {popularProducts.map((item: IPopularProductItem) => (
                <ProductItem item={item} key={item.id} />
            ))}
        </Container>
    );
};

export default Products;