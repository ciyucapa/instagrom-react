import React from "react";
import {Button, Image, WrapperImage} from './style'
import {MdOutlineVolunteerActivism} from 'react-icons/md'

const DEFAULT_IMAGE = "https://ih1.redbubble.net/image.1716817568.3287/st,small,507x507-pad,600x600,f8f8f8.jpg"

const PhotoCard = ({likes= 0, src= DEFAULT_IMAGE, alt, id}) => {
    return (
        <article>
            <a href={`/detail/${id}`} >
                <WrapperImage>
                    <Image src={src} alt={alt} />
                </WrapperImage>
            </a>
            <Button>
                <MdOutlineVolunteerActivism size={'32px'}/> {likes} likes!
            </Button>
        </article>
    )
}

export default PhotoCard;