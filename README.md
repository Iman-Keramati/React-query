# React-query-custom-hook

The main purpose of this repo is to have a custom react hook for React query library that works for all React and Next.js. This hook simplifies your react-query experience when you are using it in big projects.

### _This repository provides two custom hooks for query and mutation using React-query_

- useGetQuery
- usePostMutation

### _Features_

- Simplifizes queries and mutations with only one line of code
- Provide a component for loading and error state UI
- Configurable options for any possible cases

### Installation

1.Clone the repository:
Inline code: `git clone https://github.com/Iman-Keramati/React-query.git`
2.Navigate to the project directory:
Inline code: `cd React-query`
3.Install dependencies:
Inline code: `pnpm install`
4.Run the application: `pnpm start`

## **useGetQuery**

### Usage

Wrap your entire application in the <ReactQueryProvider> in your layout.tsx file

Code block:

```javascript
import ReactQueryProvider from "./Providers/ReactQueryProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <main>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
```

### Example

basic example of useGetQuery hook
Code block:

```javascript
"use client";
import LoadingAndError from "./components/LoadingAndError";
import useGetQuery from "./Hook/useGetQuery";

export default function Home() {
  // FAKE API FOR A FAKE PRODUCT
  const fakeApi: string = "https://FAKEAPI.com/products";
  const key: string = "products";

  const { data, isLoading, isError } = useGetQuery(fakeApi, key);

  return (
    <LoadingAndError isError={isError} isLoading={isLoading}>
      <ul>
        {data &&
          data.map((i: { title: string }, idx: number) => (
            <li key={idx}>{i.title}</li>
          ))}
      </ul>
    </LoadingAndError>
  );
}
```

### Configuration

Configuring the options
Code block:

```javascript
const { data, isLoading, isError } = useGetQuery(fakeApi, key, {
  retry: 1,
  refetchOnWindowFocus: false,
});
// It supports nearly all of the features
```

## **usePostMutation**

basic usage example

Code block:

```javascript
"use client";
import LoadingAndError from "./components/LoadingAndError";
import usePostMutation from "./Hook/usePostMutation";

export default function Home() {
  const fakeApi: string = "https://fakestoreapi.com/products";
  const key: string = "products";

  const mutation = usePostMutation(fakeApi, key);

  if (mutation.isSuccess) {
    // JUST LOGGING THE RESULT TO THE CONSOLE
    console.log(mutation.variables);
  }

  return (
    <LoadingAndError isError={mutation.isError} isLoading={mutation.isPending}>
      <button
        onClick={() => {
          mutation.mutate({
            id: Math.random(),
            title: "New Product" + Math.random(),
          });
        }}
      >
        Add a product
      </button>
    </LoadingAndError>
  );
}
```

### Configuration

You can configure both API call method and mutation options
Code block:(the default method is POST)

```javascript
const mutation = usePostMutation(fakeApi, key, "PUT", {
  retryDelay: 5000,
  onMutate: () => {
    // Run any code ...
  },
});
```

_A complete usage of both useGetQuery and usePostMutation_
Code block:

```javascript
"use client";
import LoadingAndError from "./components/LoadingAndError";
import useGetQuery from "./Hook/useGetQuery";
import usePostMutation from "./Hook/usePostMutation";

export default function Home() {
  const fakeApi: string = "https://fakestoreapi.com/products";
  const key: string = "products";

  const { data , isError , isLoading } = useGetQuery(fakeApi, key, {
    refetchOnWindowFocus: true,
  });

  const mutation = usePostMutation(fakeApi, key);

  if (mutation.isSuccess) {
    // ADDING MUTATED DATA TO THE EXISTING ONE
    data!.push(mutation.variables);
  }

  return (
    <>
      <LoadingAndError
        isError={isError}
        isLoading={isLoading}
      >
        <ul>
          {data &&
            data.map((i: { title: string }, idx: number) => (
              <li key={idx}>{i.title}</li>
            ))}
        </ul>
      </LoadingAndError>
      <LoadingAndError
        isError={mutation.isError}
        isLoading={mutation.isPending}
      >
      <button
        onClick={() => {
          mutation.mutate({
            id: Math.random(),
            title: "New Product" + Math.random(),
          });
        }}
      >
        Add a product
      </button>
      </LoadingAndError>
    </>
  );
}

```
