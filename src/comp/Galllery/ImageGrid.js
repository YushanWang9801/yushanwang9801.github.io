import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import Filter from './Filter';
import {motion} from 'framer-motion';
import {useState} from "react";
import "./../../css/ImageGrid.css";

/*const num_to_month = [{name: 'January', num: 1}, {num:2, name: 'February'}, 
                    {num:3, name: 'March'}, {num:4, name:'April'}, 
            {num:5, name: 'May'}, {num:6, name: 'June'}, {num: 7, name: 'July'}, 
            {num:8, name:'August'}, {num:9, name: 'September'}, 
            {num:10 , name: 'October'}, {num:11, name:'November'}, 
            {num:12, name:'December'}];
*/

const ImageGrid = ({ setSelectedImg }) => {
    const [category, setCategory] = useState("All");

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