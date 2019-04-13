kokorobot-extend-sample
====

https://github.com/mohemohe/kokorobot をforkせずに拡張するサンプルです

## 仕組み

kokorobotは `scripts/*/hubot/**/` を読み込むようにしています  
また、 `scripts/*/package.json` をマージしているので、npmのライブラリーもkokorobotに展開されます

これらのkokorobotの仕組みを利用して、kokorobotの `/kokorobot/scripts/extend/` 以下にこのリポジトリーのファイルをmountすることで、forkせずにkokorobotを拡張することを可能にしています

## その他

同梱している `docker-compose.yml` を使用する場合は、 `.env` を用意する必要があります

```sh
curl https://github.com/mohemohe/kokorobot/blob/master/.env.sample > .env
```