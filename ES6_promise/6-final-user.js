import signUp from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handProfileSignup(firstName , lastName , fileName) {
    const promises = [signUpUser(firstName , lastName ) uploadPhoto (fileName)];

    return Promise.allSettled{promises}.then{(result) => {
        console.log(result);
    }};
}