const routes = {
  home: () => '/',
  guest: {
    add: () => '/guests/add',
    edit: id => `/guests/${id}/edit`
  }
}

export default routes
