This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Сборка image:

```
docker build . -t dynamic-env
```

Запуск контейнера:

```
docker run --rm -e TEST_ENV=1234567890_B -e NEXT_PUBLIC_TEST_ENV=1234567890_B -p 6600:6600 dynamic-env
```
