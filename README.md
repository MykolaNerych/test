https://consolidator.notion.site/TMDB-Movie-Search-React-21bce0074e1c8098b555ede2e833e039

# Installation

npm install

npm run dev

# Project Structure

/pages

Home — the main page, loaded by default. Displays a list of all films.

The number of films updates when filters are changed (excluding the search field).

When text is entered in the "search" field, the select displays films where there is a match by keywords.

Clicking on a film redirects to the /film/:id page.

# API and Caching

The SWR library is used for efficient request management:

If several components on the page use the same API — the request is executed only once, and data is then retrieved from the cache.

A custom fetcher has been created:

It includes the base URL and an authorization token.

All API services are located in the /api directory.

# Component Structure

Components are divided following the Atomic Design approach:

atoms/, molecules/, organisms/.

# Styles

SCSS modules are used for styling.

They are imported like:

import sx from './Component.module.scss';

# Code Quality

Husky is configured:

Pre-commit and pre-push hooks.

Checks are performed using Prettier and ESLint.
