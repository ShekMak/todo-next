import firebase from './firebase';
import {addDoc, collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, startAfter, startAt, updateDoc, where} from 'firebase/firestore';

const firestore = getFirestore(firebase);

export const getCollectionWithLimit = async <T>(collectionName: string, orderByElement: any, state: boolean, uidUser: string) => {
    let datas: any[] = [];
    const docs = await getDocs(query(collection(firestore, collectionName), where('complete', '==', state), where('uidUser', '==', uidUser), orderBy(orderByElement), limit(10)));
    docs.forEach(
        doc => {
            const id = doc.id;
            const data = doc.data();
            datas.push({ 
                id,
                ...data,
                createdAt: new Date(data?.createdAt?.seconds * 1000) || null,
                dueAt: new Date(data.dueAt?.seconds * 1000) || null,
                updatedAt: new Date(data?.updatedAt?.seconds * 1000) || null
            })
        }
    );
    return datas as T[];
}

export const getCollectionAt = async <T>(collectionName: string, orderByElement: any, lastElement: any, state: boolean, uidUser: string) => {
    let datas: any[] = [];
    const lastDocSnap = await getDoc(doc(firestore, lastElement));
    const docs = await getDocs(query(collection(firestore, collectionName), where('complete', '==', state), where('uidUser', '==', uidUser), orderBy(orderByElement), limit(10), startAfter(lastDocSnap)));

    docs.forEach(
        doc => {
            const id = doc.id;
            const data = doc.data();
            datas.push({ 
                id,
                ...data,
                createdAt: new Date(data?.createdAt?.seconds * 1000) || null,
                dueAt: new Date(data.dueAt?.seconds * 1000) || null,
                updatedAt: new Date(data?.updatedAt?.seconds * 1000) || null
            })
        }
    );
    return datas as T[];
}

export const getDocument = async <T>(collectionName: string) => {
    const document = getDoc(doc(firestore, collectionName));
    return document.then(
        doc => {
            const id = doc.id;
            const data = doc.data();

            return { 
                id,
                ...data,
                createdAt: new Date(data?.createdAt?.seconds * 1000) || null,
                dueAt: new Date(data?.dueAt?.seconds * 1000) || null,
                updatedAt: new Date(data?.updatedAt?.seconds * 1000) || null
            };
        }
    )
}

export const addDocument = async <T>(collectionName: string, data: T) => {
    return await addDoc(collection(firestore, collectionName), data);
}

export const updateDocument = async <T>(collectionName: string, data: T) => {
    return await updateDoc(doc(firestore, collectionName), {
        ...data
    })
}