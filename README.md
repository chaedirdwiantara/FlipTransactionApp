# Flip Transaction App

**Download .apk here**: https://drive.google.com/file/d/1_UAqINxtW-wtm4nIV1yyesCz7HfEmcZl/view?usp=sharing <br />
**Watch Demo Video here (please increase your volume speaker)**: https://drive.google.com/file/d/15wGbLAVB5GwvZItUURgjUc1tBgd9mIwh/view?usp=sharing <br />

## Transaction List Page
- [x] it has list of transactions <br />
      ![Screenshot 2024-12-08 at 20 10 26](https://github.com/user-attachments/assets/155a94aa-264a-4986-8e36-d63f72bd4664)
      
- [x] it can be searched or filtered by name, sender bank, beneficiary bank, transaction's amount <br />
      ![Screenshot 2024-12-08 at 20 15 00](https://github.com/user-attachments/assets/f6617a0e-77ed-46ee-9d4e-581a36e8d26d) <br />
      ![Screenshot 2024-12-08 at 20 17 02](https://github.com/user-attachments/assets/76907d3a-f910-42d8-b2f0-444c9ff12493) <br />
      ![Screenshot 2024-12-08 at 20 18 05](https://github.com/user-attachments/assets/6008ffcf-9674-4c4b-8a1a-37de20437c3d) <br />
      ![Screenshot 2024-12-08 at 20 15 35](https://github.com/user-attachments/assets/678a8280-44d7-4887-b87a-b0d8013113cb) <br />

- [x] it can be sorted by name A-Z, name Z-A, date newest, date oldest <br />
      ![Screenshot 2024-12-08 at 20 24 23](https://github.com/user-attachments/assets/83c1c4e5-556b-4d67-8011-12640eaf3a56) <br />
      ![Screenshot 2024-12-08 at 20 25 06](https://github.com/user-attachments/assets/714d0d13-8128-499a-abbb-889afa4f02e9)

## Detail Page
- [x] it has all informations about the selected transaction <br />
      ![Screenshot 2024-12-08 at 20 27 41](https://github.com/user-attachments/assets/f327e78f-0e99-4215-828a-5832dd49d0d2) <br />

- [x] it has back button <br />
      ![Screenshot 2024-12-08 at 20 28 51](https://github.com/user-attachments/assets/2441ab0a-f74a-43da-9bbf-f67d9eed1155) <br />

## Steps to get a better app performance
- **React.memo** <br />
   React.memo is a function used to optimize component performance by preventing unnecessary re-renders. It is particularly useful for components that receive props that rarely change. I implement it on DetailTransactionScreen. <br />
   ![Screenshot 2024-12-08 at 21 01 45](https://github.com/user-attachments/assets/6c0610f3-1b00-485e-b174-3e52b51d668b) <br />

- **useCallback** <br />
  useCallback is used to optimize component performance by preventing the recreation of the same function every time the component re-renders. This is particularly useful when the function is passed as a prop to child components that use React.memo or when the function is included in the dependency array of useEffect. I use this function for navigation to the DetailTransactionScreen <br />
  ![Screenshot 2024-12-08 at 20 48 57](https://github.com/user-attachments/assets/b89af2d1-73a6-45a4-9b50-f72a925f8123) <br />

- **FlatList** <br />
  FlatList employs virtualization, rendering only the items currently visible on the screen. This approach reduces memory usage and enhances performance, especially when dealing with large datasets. <br />
  
- **keyExtractor** <br />
  This helps React Native identify which items have changed, been added, or removed. It is crucial for performance as it allows FlatList to manage list elements more efficiently, avoiding unnecessary re-renders. <br />
  
- **initialNumToRender** <br />
  Reduces initial rendering time by rendering only a specified number of items. This can improve performance when loading long lists by avoiding the need to render all items at once. <br />
  
- **getItemLayout** <br />
  Allows FlatList to calculate scroll positions more efficiently, especially when you have a list with fixed item sizes. This reduces the time needed to calculate the position of each item during scrolling, improving scroll performance. <br />
![Screenshot 2024-12-08 at 21 12 29](https://github.com/user-attachments/assets/91568577-333b-407b-bc3b-94025151c217) <br />

- **Code Splitting**
   Code splitting is a technique used to divide an application's code into smaller parts and only load the necessary parts at a given time. This strategy is highly useful for improving application performance, especially in the context of large web and mobile applications.

- **lazy loading** <br />
  Lazy loading is crucial when dealing with a large amount of data in a list, as it plays a vital role in ensuring the application's performance remains stable. However, in this test, I did not implement it due to limited information about the API parameters and because the data response is minimal. <br />



## Additional Information
- Using Redux and Redux Saga together provides a robust framework for managing state and side effects in a React Native application. Redux offers a structured approach to global state management, while Redux Saga handles side effects in a more organized and testable manner. This combination can enhance the readability, maintainability, and scalability of your application.
- I placed a reusable hook in the hooks folder, named useFilter.ts. It is used to filter transaction data based on the user's selected filter.
- In creating reusable components, I adopted the Atomic Design methodology to simplify management and organization.
- In this project, I also added several additional features, such as a splash screen using Lottie for the animation and the react-native-clipboard library to enable the copy function for the icon on the detail screen. Additionally, I implemented loading and error handling in the ListTransactionScreen.


