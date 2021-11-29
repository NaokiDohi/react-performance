import { VFC } from 'react'
import { ClassicalFetchA } from './ClassicalFetchA'
import { ClassicalFetchB } from './ClassicalFetchB'
import { ContextA } from './ContextA'
import { ContextB } from './ContextB'

export const MainContext: VFC = () => {
  return (
    <div className="grid grid-cols-2 gap-40">
      <ClassicalFetchA />
      <ClassicalFetchB />
      {/*
        通信後のsetTaskによりTaskが更新された時ContextA及びContextBも再レンダリングされる
        また、ダークモードに切り替え時にはClassicalFetchAとClassicalFetchBも再レンダリングされる
        これを避けるには通信用のStateとsetState用のProviderと
        Reactの状態管理用のStateとsetState用のProviderが必要になり、
        大規模アプリでは開発時の負担が大きくメンテナンス性も低下する
      */}
      <ContextA />
      <ContextB />
    </div>
  )
}
