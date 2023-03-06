// Always change Tag before use
import{useState, useEffect} from 'react';
import { projectStorage, projectFirestore, timestamp } 
                from '../firebase/config';

let tag_name = "Keyboard";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);


    useEffect( () => {
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('project-images');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const name = file.name;
            const createdAt = timestamp();
            const tag = tag_name;
            await collectionRef.add({name, url, createdAt, tag});
            setUrl(url);
        });
    }, [file]);

    return {progress, url, error,};
};



export default useStorage;