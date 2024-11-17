## アプリ概要
### App 説明
このアプリは、Supabaseをバックエンドとして使用するReact Todoアプリケーションです。  
ユーザー登録してアプリにログインしてください。  
ユーザーはTODOタスクを作成、更新、削除することができます。  

URL：https://todo.kolbe-app.site/

### 機能
| Page | Authentiaction | TopPage |
|--------|--------|--------|
| View | <img width="300" alt="Auth" src="https://github.com/user-attachments/assets/2caf145b-e512-4bd0-9fd6-8e6c01bf8473"> | <img width="500" alt="TopPage" src="https://github.com/user-attachments/assets/8f8b4a81-f606-47bd-8f41-83230bb861c9"> |
| Description | ログイン・サインアップを行う画面 | TODOアプリを提供する画面 |

#### Authentication
- Email認証  

メール認証によりユーザー登録・認証が可能です

#### TopPage
- 取得：TODO一覧を取得・表示できます
- 追加：タイトルと説明を入力し、TODOタスクを追加できます
- 削除：不要になったTODOタスクを削除できます
- 更新：TODOタスクの内容を変更できます  

Todoカードはステータス別に管理され、ドラッグ&ドロップでステータスを自由に変更することが可能です

## 使用技術
### フロントエンド
- React
- Redux
- DI Context
- CSS Modules

### バックエンド・認証
- Supabase
- GCP（SMTPサーバー）

### インフラ
- AWS（CICD）

## 環境構成
AWS Route53 + CloudFront + S3のアプリケーションを構築する

### 環境構成図
![env drawio](https://github.com/user-attachments/assets/2274aa11-3e88-49d8-b2e6-57c8ae54c93f)

### CICD
1. GithubのmasterブランチへのpushをトリガーにPipelineを開始
2. CodeBuildからアプリケーションのビルドイメージ作成
3. ビルドイメージをS3に保存し、公開する

## API仕様
API仕様は以下のディレクトリ内にjson形式で保存されています：  
[supabase/api-spec.json](supabase/api-spec.json)

## アーキテクチャ
Domain層は独立しどの層にも依存しないよう構成。
また、Inflastructure層の実装はContextによるDIで切り替え可能にしています。
![archtecture drawio](https://github.com/user-attachments/assets/c1acef8e-3d19-42d2-883f-5552fe515b1f)

## ディレクトリ構成
 tree -I 'node_modules'コマンドで出力
 
```
.
├── README.md
├── node_modules
├── build
│   ├── asset-manifest.json
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
│   └── static
│       ├── css
│       │   ├── main.ef0b231d.css
│       │   └── main.ef0b231d.css.map
│       └── js
│           ├── 952.ddfa7b2a.chunk.js
│           ├── 952.ddfa7b2a.chunk.js.map
│           ├── main.146a72b0.js
│           ├── main.146a72b0.js.LICENSE.txt
│           └── main.146a72b0.js.map
├── buildspec.yml
├── cypress
│   ├── downloads
│   ├── e2e
│   │   └── home_page.cy.ts
│   ├── fixtures
│   │   └── example.json
│   └── support
│       ├── commands.ts
│       └── e2e.ts
├── cypress.config.ts
├── eslint.config.mjs
├── package-lock.json
├── package.json
├── project-tree.txt
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.tsx
│   ├── application
│   │   ├── state
│   │   │   ├── auth-state.test.ts
│   │   │   ├── auth-state.ts
│   │   │   ├── todo-state.test.ts
│   │   │   └── todo-state.ts
│   │   └── usecase
│   │       ├── todo-usecase.test.ts
│   │       └── todo-usecase.ts
│   ├── asset
│   │   └── animations
│   │       ├── 404.json
│   │       └── loading.json
│   ├── domain
│   │   └── todo
│   │       ├── error
│   │       ├── todo-repository.ts
│   │       ├── todo.test.ts
│   │       ├── todo.ts
│   │       └── value-object
│   │           ├── status.test.ts
│   │           └── status.ts
│   ├── index.tsx
│   ├── infrastructure
│   │   ├── di.ts
│   │   ├── mock
│   │   │   └── mock-todo-repository.ts
│   │   └── remote
│   │       ├── client.ts
│   │       ├── database.types.ts
│   │       └── supabase-todo-repository.ts
│   ├── presentation
│   │   ├── components
│   │   │   ├── draggable
│   │   │   │   ├── draggable.test.tsx
│   │   │   │   └── draggable.tsx
│   │   │   ├── droppable
│   │   │   │   ├── droppable.test.tsx
│   │   │   │   └── droppable.tsx
│   │   │   ├── loading
│   │   │   │   ├── loading.module.css
│   │   │   │   ├── loading.test.tsx
│   │   │   │   └── loading.tsx
│   │   │   ├── status-icon
│   │   │   │   ├── status-icon.test.tsx
│   │   │   │   └── status-icon.tsx
│   │   │   ├── todo-card
│   │   │   │   ├── status-card
│   │   │   │   │   └── status-card.tsx
│   │   │   │   ├── todo-card.module.css
│   │   │   │   └── todo-card.tsx
│   │   │   └── todo-modal
│   │   │       ├── todo-modal.module.css
│   │   │       └── todo-modal.tsx
│   │   └── pages
│   │       ├── authentication
│   │       │   ├── auth.module.css
│   │       │   ├── auth.tsx
│   │       │   ├── login
│   │       │   │   ├── login.module.css
│   │       │   │   └── login.tsx
│   │       │   └── signup
│   │       │       ├── signup.module.css
│   │       │       └── signup.tsx
│   │       ├── error
│   │       │   ├── error-page.module.css
│   │       │   └── error-page.tsx
│   │       ├── not-found
│   │       │   ├── not-found-page.module.css
│   │       │   ├── not-found-page.test.tsx
│   │       │   └── not-found-page.tsx
│   │       └── todo-list-page
│   │           ├── body
│   │           │   ├── list-view
│   │           │   │   └── list-view.tsx
│   │           │   ├── status-area
│   │           │   │   ├── status-area.module.css
│   │           │   │   └── status-area.tsx
│   │           │   └── todo-add-form
│   │           │       ├── todo-add-form.module.css
│   │           │       └── todo-add-form.tsx
│   │           ├── header
│   │           │   ├── todo-list-header.module.css
│   │           │   └── todo-list-header.tsx
│   │           └── todo-list-page.tsx
│   ├── react-app-env.d.ts
│   ├── redux
│   │   └── store.ts
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
│   └── utils
│       ├── time-format.test.ts
│       └── time-format.ts
├── supabase
│   ├── api-spec.json
│   └── config.toml
├── tsconfig.json
└── yarn.lock
```

## ローカルセットアップ手順

1. リポジトリをクローンします：
    ```sh
    git clone https://github.com/your-repo/react-todo-app.git
    cd react-todo-app
    ```

2. 必要な依存関係をインストールします：
    ```sh
    npm install
    ```

3. 環境変数を設定します。ルートディレクトリに`.env`ファイルを作成し、以下の内容を追加します：
    ```env
    REACT_APP_SUPABASE_URL=your-supabase-url
    REACT_APP_SUPABASE_ANON_KEY=your-supabase-anon-key
    ```

4. 開発サーバーを起動します：
    ```sh
    npm start
    ```

## 執筆記事
1. https://zenn.dev/kolbe/articles/d770116513c113
2. https://zenn.dev/kolbe/articles/0112e8bf74791
3. https://zenn.dev/kolbe/articles/9db63379b33f19