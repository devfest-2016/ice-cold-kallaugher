import firebase from '../components/firebase_config'

const db = firebase.database().ref('users')
// get all users

//USER ACTIONS
export function addUser(newUserFromForm) {
  debugger
}



// export function removeUser(userKey) {
//
// }


//DOG ACTIONS
export function addDog(newDogFromForm) {
  db.push(newDogFromForm)
}
