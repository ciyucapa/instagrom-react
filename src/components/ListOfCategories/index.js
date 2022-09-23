import React from "react";
import Category from "../Category";
import {Item, List} from './style'

const ListOfCategories = () => {
    return (
        <List>
            {
                [1, 2].map((arrayD) => (
                    <Item key={arrayD}>
                        <Category 
                            alt={"imagen prueba"} 
                            href={"hola"} 
                            src={"https://www.fundacion-affinity.org/sites/default/files/los-10-sonidos-principales-del-perro.jpg"}  
                        />
                    </Item>
                ))
            }
        </List>
    )
}

ListOfCategories.propTypes = {
    
};

ListOfCategories.defaultProps = {
    
};

export default ListOfCategories;