# 1Room マンション査定

## ローカル起動方法

1. データベース作成

SQL Shell で以下のコマンドを実行

```sql
create database one_room;
```

2. 環境変数作成

.env ファイルを作成

```env
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
NEXT_PUBLIC_APP_URL=
EMAIL=
EMAIL_PASSWORD=
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_FOLDER=
NEXT_PUBLIC_MICROCMS_API_URL=
NEXT_PUBLIC_MICROCMS_API_KEY=
```

3. ライブラリインストール

```bash
npm install
```

4. データベースマイグレーション

```bash
npx prisma generate
npx prisma migrate deploy
```

5. ローカル起動

```bash
npm run dev
```

6. ビルド確認

```bash
npm run build
npm run start
```
