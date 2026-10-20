export default defineNuxtRouteMiddleware((to) => {
  const loggedIn = useState<boolean>('loggedIn');
  if (loggedIn.value) {
    console.log('User is logged in within middleware.')
  }
  console.log('Heading to', to.path, 'but I think we should go somewhere else...')
  return '/account'
})