# react-performance

ReactQueryの有無によるパフォーマンス性能の変化を見るためのサンプルです。  
通常のuseState, useEffect, useContext, useReducerを使用した場合は、データ取得用の状態管理とReact内部の状態管理が共存しているため、パフォーマンスに問題がある。  
ReactQueryを使用した場合はデータ取得用の状態管理とReact内部の状態管理が分離しているため、パフォーマンスが良くなる。
しかし、この場合でもuseContextを使用した際は、React内部の状態間で共存している為、別のコンポーネントの影響による再レンダリングが発生してしまう。  
そこでReduxTookitを使用する。この場合は、React内部の状態管理を分離することができるため、再レンダリングが発生しない。


## 環境構築方法
以下、ReactとDjango を用いてアプリを開発する際の説明です。

####　実行には下記コマンドを実行

#### 最初の make build-up 実行時にコメントアウトが必要なもの

<!-- ### 最初の docker-compose up -d --build 実行時にコメントアウトが必要なもの -->

command: sh -c "cd api && python3 manage.py runserver 0.0.0.0:8000"  
command: sh -c "cd frontend && yarn start"

1. make build-up
2. make run-api
3. make run-front
4. make yarn-add
5. ここでコメントアウトをはずす。
6. make build-up
7. package.jsonに以下の内容を追記。  
    "proxy": "http://api:8000",  
   settings.pyに以下2つの内容を追記。   
   ALLOWED_HOSTS = ["api"]  
   CORS_ORIGIN_WHITELIST = [  
   'http://node:3000'  
   ]  
8. make down

<!-- 以下makeが実行できない時
1.  docker-compose up -d --build
2.  docker-compose exec api /bin/bash
3.  mkdir api && cd api
4.  django-admin startproject config . && django-admin startapp todo
5.  exit
6.  docker-compose exec node /bin/bash
7.  npx create-react-app frontend
8.  cd frontend
9.  yarn add axios bootstrap@4.6.0 reactstrap@8.9.0 --legacy-peer-deps
10. exit
11. ここでコメントアウトをはずす。
12. docker-compose up -d --build
13. package.json に"proxy": "http://api:8000",を追記。 settings.py に ALLOWED_HOSTS = ["api"]と CORS_ORIGIN_WHITELIST = [
    'http://node:3000'
    ]を追記。
14. docker-compose down -->
