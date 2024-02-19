# Aplikacja Posts

## Użyte Technologie

Oto technologie użyte w tym projekcie:

1. **React.js**: Biblioteka JavaScript do budowania interfejsów użytkownika.
2. **Next.js**: Framework React do budowania aplikacji JavaScript.
3. **TypeScript**: Typowany nadzbiór JavaScript, który dodaje statyczne typy.
4. **Prisma**: Otwarte narzędzie do bazy danych.
5. **Tailwind CSS**: Framework CSS, który pozwala szybko tworzyć niestandardowe projekty.
6. **MongoDB**: Baza oparta o kolekcje oraz dokumenty.

## Instalacja

Aby zainstalować projekt, postępuj zgodnie z poniższymi krokami:

1. Sklonuj repozytorium: `git clone https://github.com/112frosta/nazwa_repozytorium.git`
2. Przejdź do katalogu projektu: `nextjs-post-app`
3. Zainstaluj zależności: `npm install`
4. Uruchom serwer deweloperski: `npm run dev`
5. (Możebyć wymagane) Przed uruchomieniem serwera uruchom npx prisma generate

## Zmienne środowiskowe

Wymagane jest utworzenie .env.local URL do bazy danych pod nazwą ```DATABASE_URL=YOUR_DB_LINK``` 

## Użycie

### Vercel (Hosting)

[Strona aplikacji](https://nextjs-post-app.vercel.app/)

### Uruchomienie lokalne

Aby korzystać z aplikacji, otwórz przeglądarkę i przejdź do `http://localhost:3000`.

## Działanie

![Schemat Działania](https://github.com/112frosta/nextjs-post-app/assets/77699754/073ee6e0-503c-484b-9250-f11785816ee7)

## Schematy

Zawarte są w pliku prisma/prisma.schema

## Server Actions

Zawarte są w pliku src/app/actions.ts



## Uwaga

Interfejsy dla Postów oraz indexów w Map() postów nie sa wymagane, prisma zapewnia type-safe E2E. Ze wzlędu na bład hostingu zostały zawarte.

