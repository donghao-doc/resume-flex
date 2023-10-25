import './style/base.scss'
import './style/index.scss'

// 引入 images 目录下的所有图片
importAll(require.context('./images/', true, /\.(png|jpe?g|gif|webp)$/))

function importAll(r) {
  r.keys().forEach(r)
}
