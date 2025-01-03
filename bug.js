```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause a runtime error in Next.js 15
  // if a non-serializable object is used. 
  const myObject = {date: new Date(), message: 'hello'};
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