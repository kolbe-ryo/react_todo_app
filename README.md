## プロジェクト概要

このプロジェクトは、Supabaseをバックエンドとして使用するReact Todoアプリケーションです。ユーザーはタスクを作成、更新、削除することができます。



## 環境構成
![環境構成図 drawio](https://github.com/user-attachments/assets/4ae8181d-3dd2-432a-8704-819652987a2e)

## API仕様
API仕様は以下のディレクトリ内にjson形式で保存されています：
[supabase/api-spec.json](supabase/api-spec.json)

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

3. 環境変数を設定します。`.env`ファイルを作成し、以下の内容を追加します：
    ```env
    REACT_APP_SUPABASE_URL=your-supabase-url
    REACT_APP_SUPABASE_ANON_KEY=your-supabase-anon-key
    ```

4. 開発サーバーを起動します：
    ```sh
    npm start
    ```

## 使用技術
reducerとかdiとか
- React
- TypeScript
- Supabase
- CSS Modules

## アーキテクチャ

layered archtechであることを示す

## ディレクトリ構成

- `src/` - アプリケーションのソースコード
- `public/` - 公開用の静的ファイル
- `supabase/` - Supabaseの設定ファイルとAPI仕様
