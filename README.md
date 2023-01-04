## Deployed URL
Frontend is deployed on vercel

Backend is deployed on render

https://documentor-openai.vercel.app/

## Local Installation

## Frontend

```bash
cd client
npm install
npm run dev
```

## Backend

```bash
cd server
npm install
npm run server
```



## Tech Stack

### Frontend

- **React, Vite, TailwindCSS, flowbite**
- Use **React-router-dom** for routing through different pages
- Use **React Context** to manage and update the documents data, avoiding multiple requests to backend. Only one request is required for fetching all documents needed
- Use **React Context** to manage the authentication status 
- Use **Tailwind CSS** build responsive and dark mode supported application
- Use **Vite** for deployment
- UI design is based on **FlowBite**

### Backend

- **Express, JWT, PostgreSQL, Open AI**
- Use **Express** to implement the controllors which provides backend **RESTful APIs**
- Use **JWT** to implemnet an **authorization middleware** which protects backend APIs
- Use **PostgreSQL** to save data securely and presistently
- Configure and Consume **Open AI** APIs to implement the **Services** for controller to consume **Open AI** APIs

## Functionalities

Based on Open AI APIs

Input the Documents to the left text area, and wait the result appears in right text area.

Click **Clear** Button to clear all text areas.

Click **Copy Output** to copy the results to your clipboard

Click **Save Output** to save the output as document, access it later in Documents Section



### Summarize the document

![image-20230104213147090](../../Library/Application Support/typora-user-images/image-20230104213147090.png)





### Extract the keywords from the document



![image-20230104213205643](../../Library/Application Support/typora-user-images/image-20230104213205643.png)



### Correct grammar automatically



![image-20230104213220756](../../Library/Application Support/typora-user-images/image-20230104213220756.png)



### Essay Outline Generator

![image-20230104213241840](../../Library/Application Support/typora-user-images/image-20230104213241840.png)





## Account and Documents

Since this website consumes Open AI APIs, an account is required for accessing functionalities.

### Login Page

![image-20230104214213422](../../Library/Application Support/typora-user-images/image-20230104214213422.png)



### Register Page

![image-20230104214238274](../../Library/Application Support/typora-user-images/image-20230104214238274.png)

### Documents Page

![image-20230104214316202](../../Library/Application Support/typora-user-images/image-20230104214316202.png)



## Appearence

### Dark Mode

Click the Sun Icon to switch to dark mode

![](../../Library/Application Support/typora-user-images/image-20230104215446971.png)

### Moblie Supported

![image-20230104215552152](../../Library/Application Support/typora-user-images/image-20230104215552152.png)

![image-20230104215611220](../../Library/Application Support/typora-user-images/image-20230104215611220.png)

![image-20230104215630951](../../Library/Application Support/typora-user-images/image-20230104215630951.png)

![image-20230104215652639](../../Library/Application Support/typora-user-images/image-20230104215652639.png)
