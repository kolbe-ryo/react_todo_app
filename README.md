## プロジェクト概要
### App 説明
このプロジェクトは、Supabaseをバックエンドとして使用するReact Todoアプリケーションです。  
ユーザー登録してアプリにログインしてください。  
ユーザーはTODOタスクを作成、更新、削除することができます。  

URL：https://todo.kolbe-app.site/

### 機能
// TODO: スクショ
| Page | Authentiaction | TopPage |
|--------|--------|--------|
| View | <img width="300" alt="Auth" src="https://github.com/user-attachments/assets/2caf145b-e512-4bd0-9fd6-8e6c01bf8473"> | <img width="300" alt="TopPage" src="https://github.com/user-attachments/assets/8f8b4a81-f606-47bd-8f41-83230bb861c9"> |
| Description | ログイン・サインアップを行う画面 | TODOアプリを提供する画面 |

#### Authentication
- Email認証

#### TopPage
- 取得：TODO一覧を取得・表示できます
- 追加：タイトルと説明を入力し、TODOタスクを追加できます
- 削除：不要になったTODOタスクを削除できます
- 更新：TODOタスクの内容を変更できます

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
```
.
├── README.md
├── build
├── node_modules
├── buildspec.yml
├── eslint.config.mjs
├── package-lock.json
├── package.json
├── project-tree.txt
├── public
├── src
│   ├── App.module.css
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── application
│   │   ├── state
│   │   │   ├── auth-state.ts
│   │   │   └── todo-state.ts
│   │   └── usecase
│   │       └── todo
│   │           └── todo-usecase.ts
│   ├── asset
│   │   └── animations
│   │       └── 404.json
│   ├── domain
│   │   ├── authentication
│   │   │   └── user-auth.ts
│   │   ├── exception
│   │   └── todo
│   │       ├── todo-repository.ts
│   │       └── todo.ts
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
│   │   │   ├── todo-card
│   │   │   │   ├── todo-card.module.css
│   │   │   │   └── todo-card.tsx
│   │   │   └── todo-modal
│   │   │       ├── todo-modal.module.css
│   │   │       └── todo-modal.tsx
│   │   └── pages
│   │       ├── authentication
│   │       │   ├── login
│   │       │   │   ├── login.module.css
│   │       │   │   └── login.tsx
│   │       │   └── signup
│   │       │       ├── signup.module.css
│   │       │       └── signup.tsx
│   │       ├── not-found
│   │       │   ├── not-found-page.module.css
│   │       │   └── not-found-page.tsx
│   │       └── todo-list-page
│   │           ├── body
│   │           │   ├── grid-view-list.module.css
│   │           │   ├── grid-view-list.tsx
│   │           │   ├── todo-add-form.module.css
│   │           │   └── todo-add-form.tsx
│   │           ├── header
│   │           │   ├── todo-list-header.module.css
│   │           │   └── todo-list-header.tsx
│   │           ├── todo-list-page.module.css
│   │           └── todo-list-page.tsx
│   ├── react-app-env.d.ts
│   ├── redux
│   │   └── store.ts
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
│   └── utils
│       └── time-format.tsx
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