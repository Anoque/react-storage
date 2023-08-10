export function saveUser(user: string, token: string) {
  localStorage.setItem('token', token)
  localStorage.setItem('user', user)
}

export function logOut() {
  localStorage.clear()
}

export function getUser() {
  return {
    token: localStorage.getItem('token'),
    user: localStorage.getItem('user'),
  }
}
