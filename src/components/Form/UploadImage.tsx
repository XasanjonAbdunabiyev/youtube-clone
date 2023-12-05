import { FC, useState, useEffect } from 'react'
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage"
import { storage } from '@/firebase/config';
import { v4 } from "uuid"
import { Button } from '../ui/Button';

export const UploadImage: FC = () => {
    const [imageUpload, setImageUpload] = useState<any>();
    const [imageList, setImageList] = useState<string[]>([]);

    const imageListRef = ref(storage, "images/");


    const uploadImage = () => {
        if (imageUpload === null) return;
        const imageRef = ref(storage, `images/${imageUpload[0]?.name + v4()}`)

        uploadBytes(imageRef, imageUpload).then(() => {
            alert("image uploaded")
        })
    }


    useEffect(() => {
        listAll(imageListRef).then((response) => {
            response.items?.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList(prev => [...prev, url])
                })
            })
        })
    }, [])

    return (
        <div>
            <input type="file" name='image' onChange={(event: any) => setImageUpload(event.target.files[0])} />
            {imageList?.map((url) => (
                <img src={url} key={url} alt="firebe-image" />
            ))}
            <Button onClick={uploadImage} className='block my-3' variant="dark">Upload Image</Button>
        </div>
    )
}
