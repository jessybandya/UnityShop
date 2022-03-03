FRONTEND LOGIC
First page is the login/registration page.

For admins, next page is the management page. Where sales, users, sellers, products, etc qre found.

For users, the next page is the list page.
After that, users see a product card with a price, images, title, comments, a rating, an add to cart button and a checkout button.
After that, users see a purchase button and a notification about the delivery progress.


BACKEND LOGIC
A mongoDB connection to nodeJS is first established. Node then executes CRUD commands using MongooseJS and verification protocols using PassportJS and JSON Web Tokens(JWT).

Admins can manage types of user accounts. That can mean turning them into admins or vendors. They can also add or remove brands. They can also send emails to users.

Users can view all products on the site. They can also search, modify their carts and checkout. At checkout, they can send vendors or admins messages notifying them to deliver their products.

Vendors can add or remove products and modify prices and stocks.

PassportJS handles authentication.