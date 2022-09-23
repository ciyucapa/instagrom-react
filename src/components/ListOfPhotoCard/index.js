import React from "react";
import PhotoCard from "../PhotoCard";

const ListOfPhotoCard = () => {
    return (
        <>
            {
                [1, 2, 3].map((item) => (
                    <div key={item}>
                        <PhotoCard/>
                    </div>
                ))
            }
        </>
    )
}

export default ListOfPhotoCard;