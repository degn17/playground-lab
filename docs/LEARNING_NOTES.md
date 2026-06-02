# Learning Notes

Use this file to record what you learn while building Playground Lab.

## Note Template

### Date

YYYY-MM-DD

### Topic

What did you learn about?

### What I tried

Describe the experiment or task.

### What happened

Describe the result, including anything confusing or surprising.

### What I learned

Write the main takeaway in your own words.

### Next question

What do you want to learn next?

## 2026-06-01 - Experiment status filters

This status filter update is named V0.2. It practices basic JavaScript filtering and re-rendering. The page keeps the experiment card data in an array, filters that array by status when a button is clicked, and re-renders the card grid so the visible cards match the selected All, Todo, or Done filter.


## 2026-06-02 - LocalStorage Todo

The LocalStorage Todo experiment practices saving small pieces of data directly in the browser. `localStorage` is a browser feature that stores string data under named keys, and that data can still be available after the page is refreshed or reopened in the same browser.

This is useful for small browser-only experiments because it does not require a backend, database, login, or API. A simple static page can remember lightweight state like todo items, theme choices, or draft settings.

The main limitation is that the saved data belongs only to the current browser and device. A todo item saved on one phone or browser will not automatically appear on another device.
