import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import Filter from './Filter';
import {motion} from 'framer-motion';
import {useState} from "react";
import "./../../css/ImageGrid.css";

/*
const tags = ["San Francisco", "Music Live", "Goodwood_2022", "London", 
        "Southend", "Santa Monica",
        "Nagoya and Osaka", "798","Music Live", "Goodwood_2019",
        "Chicago", "Silverstone", "Edinburgh", "Gundam",
        "Taiwan", "Johns Hopkins University", "Baltimore", 
        "Atlanta", "All"]; */

const ImageGrid = ({ setSelectedImg }) => {
    const [category, setCategory] = useState("San Francisco");

    const {docs} = useFirestore('images', category);
    
    return (
        <div>
            <Filter  setCategory={setCategory} />
            <div className='img-grid'>
                    {docs && docs.map(doc => (
                        <motion.div className="img-wrap" key={doc.id}
                                layout whitehover={{opacity: 1}}
                                onClick={()=> setSelectedImg(doc.url)}>
                        <motion.img src={doc.url} alt="uploaded pic"
                        initial={{opacity: 0}} animate={{opacity: 1}}
                        transition={{delay:1}}
                        />
                        </motion.div>
                    ))
                    } 
            </div>
        </div>
    )
}

export default ImageGrid;