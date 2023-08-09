export default function BookList() {
   let pageTitle = "Greatest Books";
   let book1 = "https://josipmisko.com/img/books/The-Road-to-React.jpg";
   let book2 = "https://d8it4huxumps7.cloudfront.net/uploads/images/620f4364ec8f5_dummies.jpg";
   let book3 = "https://images-na.ssl-images-amazon.com/images/I/41VkICdTF5L.jpg"
   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="React Book" />
         <img src={book2} alt="Java Book" />
         <img src={book3} alt="Python Book" />
      </div>      
   );
}