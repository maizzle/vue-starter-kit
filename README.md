# Laravel + Vue + Maizzle Starter Kit

## About

The official [Laravel Vue starter kit](https://laravel.com/docs/starter-kits) with Maizzle 6 for HTML emails.

## Maizzle

[Maizzle](https://maizzle.com) is a framework that helps you quickly build HTML emails with Tailwind CSS.

This starter kit uses Maizzle 6 as a Vite plugin, which is currently in beta.

## Usage

```sh
# Install dependencies
composer install 
npm install

# Start the development server
composer dev

# Build assets for production
npm run build
```

Building for production will generate the HTML emails in `resources/views/emails`.

You may configure Maizzle in `vite.config.ts`.
