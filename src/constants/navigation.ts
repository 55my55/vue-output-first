import { REPOSITORY_NAME } from '../config/config'

/**
 * 本番環境では GitHub Pages 用の BASE_PATH を付与
 */
export const BASE_PATH: string =
  process.env.NODE_ENV === 'production' ? `/${REPOSITORY_NAME}` : ''

/**
 * 各ページへのリンク形式の一覧（ルーティング定義などに使用）
 */
export const NAVIGATION_LIST: {
  TOP: string
  DETAIL: string
  CREATE: string
  EDIT: string
} = {
  TOP: `${BASE_PATH}/`,
  DETAIL: `${BASE_PATH}/detail/:id`,
  CREATE: `${BASE_PATH}/create`,
  EDIT: `${BASE_PATH}/edit/:id`,
}

/**
 * 各画面へのパス（router.push() 等での遷移に使用）
 */
export const NAVIGATION_PATH: {
  TOP: string
  DETAIL: string
  CREATE: string
  EDIT: string
} = {
  TOP: `${BASE_PATH}/`,
  DETAIL: `${BASE_PATH}/detail/`,
  CREATE: `${BASE_PATH}/create`,
  EDIT: `${BASE_PATH}/edit/`,
}
