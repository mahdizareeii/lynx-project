import { root } from '@lynx-js/react'
// import { App } from './App.jsx'
import PostsScreen from './presentation/ui/PostsScreen.jsx'
import { App2 } from './App2.jsx'

root.render(<PostsScreen />)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
