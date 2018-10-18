
export default {
  configArr:
    [
      // ========================== company ABC ======================================
      {
        'ABC': {
          routes: [
            {
              "/":
              {
                pageSections: [
                  {
                    component: () => import('components/common/Navigation'),
                    componentData: {
                      backgroundColor: '#ebcbfb;',
                      navigationRoutes: [
                        {
                          title: 'home',
                          route: '/',
                          buttonColor: 'orange'
                        },
                        {
                          title: 'shop',
                          route: '/shop',
                          buttonColor: 'green'
                        },
                        {
                          title: 'checkout',
                          route: '/checkout',
                          buttonColor: 'blue'
                        },
                      ]
                    }
                  },
                  {
                    component: () => import('components/common/Header'),
                    componentData: {
                      backgroundColor: '#edf8bc;',
                      title: 'This is xyz header page',
                      name: 'Header'
                    }
                  },
                  {
                    component: () => import('components/common/NewProducts'),
                    componentData: {
                      backgroundColor: '#97fedc;',
                      title: 'new products',
                      name: 'NewProducts'
                    }
                  },
                  {
                    component: () => import('components/common/Footer'),

                    componentData: {
                      backgroundColor: '#2ef743;',
                      title: 'This is xyz footer page',
                      name: 'Footer'
                    }
                  }
                ]
              }
            },
            {
              "/shop":
              {
                pageSections: [
                  {
                    component: () => import('components/common/Header'),
                    componentData: {
                      backgroundColor: '#edf8bc;',
                      title: 'This is xyz header on shop page',
                      name: 'Header'
                    }
                  },

                  {
                    component: () => import('components/common/Checkout'),
                    componentData: {
                      backgroundColor: '#cb98ae;',
                      title: 'This is abc shop page',
                      name: 'Checkout',
                    }
                  },
                ]
              }
            },
            {
              "/checkout":
              {
                pageSections: [

                  {
                    component: () => import('components/common/Checkout'),
                    componentData: {
                      backgroundColor: '#efefef;',
                      title: 'This is abc checkout page',
                      name: 'Checkout',
                    }
                  },

                ]
              }
            }
          ]
        }
      },
      // ========================== company XYZ ======================================
      {
        'XYZ': {
          routes: [
            {
              "/": {
                pageSections: [
                  {
                    component: () => import('components/common/Header'),
                    componentData: {
                      backgroundColor: '#efefef;',
                      title: 'This is xyz header page',
                      name: 'Header'
                    }
                  },
                  {
                    component: () => import('components/common/Footer'),

                    componentData: {
                      backgroundColor: '#2ef743;',
                      title: 'This is xyz home page',
                      productIDs: [234, 5654, 3243, 9834],
                      name: 'Footer'
                    }
                  }
                ]
              },
              "/about-us": {
                pageSections: [

                  {
                    component: () => import('components/common/Footer'),

                    componentData: {
                      backgroundColor: '#2ef743;',
                      title: 'This is xyz about us page',
                      name: 'Footer'
                    }
                  },

                ]
              },
              "/subscribe": {
                pageSections: [

                  {
                    component: () => import('components/common/Header'),
                    componentData: {
                      backgroundColor: '#df9efd;',
                      title: 'This is xyz subscribe page',
                      name: 'Header'
                    }
                  },

                ]
              },
              "/sign-in": {
                pageSections: [

                  {
                    component: () => import('components/common/Header'),
                    componentData: {
                      backgroundColor: '#fced98;',
                      title: 'This is xyz sign-in page',
                      name: 'Header'
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
}
