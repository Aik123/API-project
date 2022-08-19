# API-project

---

**「リポジトリの説明・概要」**

このリポジトリはCode Chrysalisの生徒であるときに作成しました。

自分でデータベース、APIの生成を行うプロジェクトでした。

APIを使ってlocalhostでデータベースの画像やデータを表示することがきます。


---

**「テーマ」**

落とし物って哀愁を感じませんか？

見つけた落とし物を保存するデータベース🌂

データベース名： lost_and_found


---

**「プロジェクトの目的」**

[ ] Express/GraphQL, および Relational database を使用してCRUD APIサービスを作成する
[ ] APIのテストを書く
[ ] 興味のあるデータを使って、データベースをセットアップする
[ ] APIエンドポイントをドキュメント化して、他のデベロッパーが使用できるようにする
[ ] 基本的/シンプルなフロントエンドを作成する

---

**「エンドポイント」**

1. GET /
2. GET /api/lost_items
3. GET /api/lost_items/:id
4. POST /api/lost_items/new
5. PATCH /api/lost_items/edit/👰‍♀:id 
6. DELETE /api/lost_items/delete/:id

---

**「使い方」**
STEP1: ファイルをあなたのローカルリポジトリへクローンしてください.  
STEP2: npm install (yarnでもOK)  
STEP3: .envファイルを作成してlocalhostを設定（設定項目はknexfile.js内を参照)  
STEP3: npm run migrate ・・・migrationファイルの読み込み（テーブル作成）  
STEP4: npm run seed　　・・・seedファイルの読み込み（データをテーブルへ挿入）  
STEP5: npm run dev もしくは npm start  
STEP6: localhostへアクセス  
