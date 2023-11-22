import { firestore } from './config';
import { collection, getDoc, doc, arrayUnion, setDoc } from '@firebase/firestore';
import './config';

export const createUser = async (userIP) => {
    const userRef = doc(firestore, "users", userIP);

    try {
        const docSnap = await getDoc(userRef);
        if (!docSnap.exists()) {
            await setDoc(userRef, {
                favorites: [],
            });
        }
        console.log('User document created successfully');
      } catch (error) {
        console.error('Error creating user document:', error);
      }
}

export const getFavoriteList = async (userId) => {
    const usersRef = collection(firestore, 'users');
    const userDocRef = doc(usersRef, userId);
    const user = await getDoc(userDocRef)
    console.log(user)
    if (user.data()) {
      const array = user.data().favorites
      return array
    }
}

export const addFavorite = async (userId, favorite) => {
    const usersRef = collection(firestore, 'users');
    const userDocRef = doc(usersRef, userId);
    const user = await getDoc(userDocRef)
    if (user.data()) {
      const array = user.data().favorites
      array.push(favorite)
      console.log(array)
      await setDoc(userDocRef, {favorites: arrayUnion(favorite)}, {merge: true})
    }
}

export const removeFavorite = async (userId, favorite) => {
    const usersRef = collection(firestore, 'users');
    const userDocRef = doc(usersRef, userId);
    const user = await getDoc(userDocRef)
    if (user.data()) {
      const array = user.data().favorites
      const index = array.findIndex(fav => fav.id === favorite.id)
      array.splice(index, 1)
      console.log(array)
      await setDoc(userDocRef, {favorites: array}, {merge: true})
    }
}