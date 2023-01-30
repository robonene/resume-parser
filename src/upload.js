import { uploadBytes } from 'firebase/storage';
import { db, storage, uploadFile } from './index.js';

const onFileChange = (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage);
    const fileRef = ref(storage, file.name);
    fileRef.put(file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
    });
}

const onSubmit = (e) => {
    e.preventDefault();
};

document.body.style.backgroundColor = "red";
function uploadTest() {
    uploadBytes(ref(storage, 'test.txt'), new Blob(['hello world'], { type: 'text/plain' })).then((snapshot) => {
        console.log('Uploaded a blob or file!');
        alert("It works!");
    });
}

console.log("It Works!")