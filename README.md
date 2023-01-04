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

![image](https://user-images.githubusercontent.com/86038626/210541205-8dba07fb-cfcd-4054-b954-d32719f90676.png)






### Extract the keywords from the document



![image](https://user-images.githubusercontent.com/86038626/210541282-39573dbc-0168-4c1a-a56a-420803d57ad7.png)




### Correct grammar automatically



![image](https://user-images.githubusercontent.com/86038626/210541354-e366553c-c687-4cbe-8bb1-26b8302fc9a4.png)




### Essay Outline Generator

![image](https://user-images.githubusercontent.com/86038626/210541438-66d5757b-b394-4d60-a884-d81c24370a3d.png)






## Account and Documents

Since this website consumes Open AI APIs, an account is required for accessing functionalities.

### Login Page

![image](https://user-images.githubusercontent.com/86038626/210541514-bb9b0e7c-ff07-4060-8698-0c3d071ab019.png)




### Register Page

![image](https://user-images.githubusercontent.com/86038626/210541582-a10cc430-c017-4df6-836e-cf139d19492c.png)


### Documents Page

![image](https://user-images.githubusercontent.com/86038626/210541637-318b5725-5fcc-451d-9b31-ea6aaca00c50.png)




## Appearance

### Dark Mode

Click the Sun Icon to switch to dark mode

![image](https://user-images.githubusercontent.com/86038626/210541697-15c8b506-f088-4174-a186-5777f65889b4.png)

### Moblie Supported

![image](https://user-images.githubusercontent.com/86038626/210541797-0ca41ce1-801f-468c-a74f-7c568627e59e.png)
![image](https://user-images.githubusercontent.com/86038626/210541863-616acf2d-c681-4a95-86cc-09f11ec7cf3b.png)
![image](https://user-images.githubusercontent.com/86038626/210541915-07a958aa-1d57-4328-a709-2bf87eb0a0d1.png)


