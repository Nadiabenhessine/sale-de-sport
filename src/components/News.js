import React from 'react';
import { listNews } from "../datas/listNews"
import New from "./New"
import '../styles/news.css'


function News() {
    return (
        <div>
            <ul className='enteteNews'>
                <h1> Nos dernières news </h1>
            </ul>
            <ul>
                {listNews.map(({ image, titre }) => (
                    <New
                        image={image}
                        titre={titre}
                    />
                ))}
            </ul>
        </div>
     );
}

export default News