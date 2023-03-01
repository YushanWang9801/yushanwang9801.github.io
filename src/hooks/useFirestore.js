import{useState, useEffect} from 'react';
import { projectFirestore, doc, deleteDoc} from '../firebase/config';

const useFirestore = (collection, category) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
                        .orderBy('createdAt', 'desc')
                        .onSnapshot(snap => {
                            let documents = [];
                            snap.forEach(doc => {
                                documents.push({...doc.data(), id: doc.id});
                            });

                            const uniqueNames = [];
                            documents = documents.filter(element => {
                                const isDuplicate = uniqueNames.includes(element.name);
                                if (!isDuplicate) {
                                    uniqueNames.push(element.name);
                                    return true;
                                } else {
                                    deleteDoc(doc(projectFirestore, collection, element.id));
                                }
                                return false;
                            })
                            
                            if(category !== "All"){
                                documents = documents.filter(element => element.tag === category);
                            }
                            setDocs(documents);
                        });
        return () => unsub();
    }, [collection, category]);

    return {docs};
};

export default useFirestore;