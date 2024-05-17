import {Login,Home} from './Pages'
import Main from './Pages/Main'
export const config = [
    {
        path: '/',
        element: <Login />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path:'/main',
      element:<Main />,
      // element:<AuthGuard component={<Main />}></AuthGuard>,
      children: [
        {
          path: '/main/home',
          element: <Home />,
        },
      ]
    }
]
