# Film Base Kinopoisk

Вот само приложение на потыкать - https://filmbasekinopoisk.vercel.app/

Проект состоит из трёх частей:

- `parser/` — парсер Кинопоиска (заполняет БД PostgreSQL фильмами, участниками, похожими фильмами, кадрами).
- `backend/` — FastAPI API (авторизация, фильмы, участники, закладки, комментарии, оценки, админка).
- `frontend/` — Next.js интерфейс к API.

> Ветка: `stable_version`.

---

## Архитектура и поток данных

1. Поднимаем PostgreSQL (и MailDev для писем) через `backend/docker-compose.yml`.
2. Запускаем `parser/` — он:
   - берёт фильмы (в т.ч. из Top-250),
   - парсит детали фильма,
   - парсит участников (actors/directors/writers/…),
   - парсит похожие фильмы,
   - парсит кадры (stills/wall/shooting/screenshots),
   - сохраняет всё в PostgreSQL.
3. Запускаем `backend/` — он читает данные из PostgreSQL и выдаёт REST API + авторизацию.
4. Запускаем `frontend/` — UI, который ходит в backend API.

---

## Требования

- Docker + Docker Compose (для PostgreSQL и MailDev).
- Python (в проекте указано `>= 3.14`).
- Node.js (для frontend).

---

