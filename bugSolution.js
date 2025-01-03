```javascript
// pages/about.js

export default function About() {
  const myObject = {
    date: new Date().toISOString(), // Convert Date to ISO string
    message: 'hello'
  };
  console.log(myObject);
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <pre>{JSON.stringify(myObject, null, 2)}</pre>
    </div>
  );
}
```