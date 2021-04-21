import ajax from './ajax';

export const reqLogin = (username, password) => ajax('/login', {username, password}, 'POST');

//pass in user object
export const reqAddUser = (user) => ajax('/manage/user/add', user, 'POST');