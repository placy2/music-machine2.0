import Home from 'components/home'
import WebpackerReact from 'webpacker-react'
import Turbolinks from 'turbolinks'

Turbolinks.start()

WebpackerReact.setup({Home})