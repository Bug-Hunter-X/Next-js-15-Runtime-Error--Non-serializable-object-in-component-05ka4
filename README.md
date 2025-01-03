# Next.js 15 Non-Serializable Object Error

This repository demonstrates a runtime error that can occur in Next.js 15 when attempting to serialize a non-serializable object (such as a `Date` object) within a component's render method.  Next.js 15 enforces stricter serialization to improve performance and security.

## Bug
The `pages/about.js` file contains a component that attempts to serialize a `Date` object. This leads to a runtime error in the browser because `Date` objects are not directly serializable to JSON.

## Solution
The `pages/about.js` file demonstrates a fix by converting the date to a string before serialization, ensuring that only serializable data is passed to the client.