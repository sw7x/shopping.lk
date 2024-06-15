<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Shopping.lk - Shop Smart, Shop Online</title>

    <meta name="keywords" content="HTML5 Template" />
    <meta name="description" content="shopping.lk - Sri Lanka's Online Shopping Store">
    <meta name="author" content="SW-THEMES">
        
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="assets/images/icons/favicon.ico">
    
    <script type="text/javascript">
        WebFontConfig = {
            google: { families: [ 'Open+Sans:300,400,600,700,800','Poppins:300,400,500,600,700','Segoe Script:300,400,500,600,700' ] }
        };
        (function(d) {
            var wf = d.createElement('script'), s = d.scripts[0];
            wf.src = 'assets/js/webfont.js';
            wf.async = true;
            s.parentNode.insertBefore(wf, s);
        })(document);
    </script>
    
    <!-- Plugins CSS File -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="assets/fonts/fontawesome-free/css/all.min.css">
    
    
    
    
    <!-- <link href="assets/css/tailwind.css" type="text/css" rel="stylesheet"> -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Main CSS File -->
    <link rel="stylesheet" href="assets/css/style.css">

    <link rel="stylesheet" type="text/css" href="assets/css/custom-styles.css">
    <link rel="stylesheet" type="text/css" href="assets/css/custom-responsive-styles.css">

</head>
<body class="loaded">
    <div class="page-wrapper">

        <header class="header">
            <div class="header-top">
                <div class="container">
                    <div class="header-left header-dropdowns">
                        <div class="header-dropdown">
                            <a href="#">USD</a>
                            <div class="header-menu">
                                <ul>
                                    <li><a href="#">LKR</a></li>
                                    <li><a href="#">USD</a></li>
                                </ul>
                            </div><!-- End .header-menu -->
                        </div><!-- End .header-dropown -->

                        <div class="header-dropdown">
                            <a href="#"><img src="assets/images/flags/en.png" alt="England flag">ENGLISH</a>
                            <div class="header-menu">
                                <ul>
                                    <li><a href="#"><img src="assets/images/flags/en.png" alt="England flag">ENGLISH</a></li>
                                    <li><a href="#"><img src="assets/images/flags/fr.png" alt="France flag">FRENCH</a></li>
                                </ul>
                            </div><!-- End .header-menu -->
                        </div><!-- End .header-dropown -->                        
                    </div><!-- End .header-left -->

                    <div class="header-right">
                        <?php  $rand = rand(0,10);?>

                        <?php 
                        if($rand % 2  != 0){
                            echo '<p class="welcome-msg">Welcome User123</p>';    
                        }
                        ?>
                        
                        <div class="header-dropdown dropdown-expanded">
                            <a href="#">Links</a>
                            <div class="header-menu">
                                <ul>
                                    <?php 
                                        //echo $rand;
                                        if($rand % 2  == 0){
                                            echo '<li><a href="#">Contact Us</a></li>';
                                            echo '<li><a href="register.php">Register</a></li>';
                                            echo '<li><a href="login.php" class="login-link">LOG IN</a></li>';
                                        }else{
                                            //echo '<li><a href="my-account.html">MY ACCOUNT</a></li>';
                                            echo '<li><a href="#">Contact Us</a></li>';
                                            echo '<li><a href="login.php" class="login-link">LOG OUT</a></li>';
                                        }
                                    ?>



                                    
                                </ul>
                            </div><!-- End .header-menu -->
                        </div><!-- End .header-dropown -->
                    </div><!-- End .header-right -->
                </div><!-- End .container -->
            </div><!-- End .header-top -->

            
            <div class="mobile-menu-btn-section">
                <div class="container flex-wrap justify-content-end">                    
                    <div class="mobile-menu-btn-wrapper">
                        <button class="mobile-menu-toggler" type="button">
                            <i class="icon-menu"></i>
                        </button>
                    </div>
                </div>
            </div>



            <div class="header-middle">
                <div class="container flex-wrap">
                    

                    <div class="header-left">
                        <a href="index.php" class="logo">
                            <img src="assets/images/logo.png" alt="shopping.lk Logo" class="">
                        </a>
                    </div><!-- End .headeer-center -->
                    

                    <div class="header-center">
                        <div class="header-search">
                            <!-- <a href="#" class="search-toggle" role="button"><i class="icon-magnifier"></i></a> -->
                            <form action="#" method="get">
                                <div class="header-search-wrapper">
                                    <input type="search" class="form-control" name="q" id="q" placeholder="Search..." required>
                                    <div class="select-custom">
                                        <select id="cat" name="cat">
                                            <option value="">All Categories</option>
                                            <option value="4">Fashion</option>
                                            <option value="12">- Women</option>
                                            <option value="13">- Men</option>
                                            <option value="66">- Jewellery</option>
                                            <option value="67">- Kids Fashion</option>
                                            <option value="5">Electronics</option>
                                            <option value="21">- Smart TVs</option>
                                            <option value="22">- Cameras</option>
                                            <option value="63">- Games</option>
                                            <option value="7">Home &amp; Garden</option>
                                            <option value="11">Motors</option>
                                            <option value="31">- Cars and Trucks</option>
                                            <option value="32">- Motorcycles &amp; Powersports</option>
                                            <option value="33">- Parts &amp; Accessories</option>
                                            <option value="34">- Boats</option>
                                            <option value="57">- Auto Tools &amp; Supplies</option>
                                        </select>
                                    </div><!-- End .select-custom -->
                                    <button class="btn" type="submit"><i class="icon-magnifier"></i></button>
                                </div><!-- End .header-search-wrapper -->
                            </form>
                        </div>                        
                    </div>
                    
                    <div class="header-right">
                        


                        <div class="my-wishlist-icon">
                            <a href="" class="text-4xl" title="Wishlist"><i class="icon-wishlist text-green-600" aria-hidden="true"></i></a>
                            <span class="wishlist-count">2</span>
                        </div>






                        <!-- <div class="dropdown cart-dropdown">
                            <a href="#" class="dropdown-toggle">
                                <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                            </a>
                        </div> -->    



                        <div class="dropdown cart-dropdown">
                            <a href="#" title="Cart" class="dropdown-toggle text-green-600">
                                <span class="cart-count">21</span>
                            </a>

                            <div class="dropdown-menu" >
                                <div class="dropdownmenu-wrapper">
                                    <div class="dropdown-cart-header">
                                        <span>2 Items</span>

                                        <a href="cart.php">View Cart</a>
                                    </div><!-- End .dropdown-cart-header -->
                                    <div class="dropdown-cart-products">
                                        <div class="product">
                                            <div class="product-details">
                                                <h4 class="product-title">
                                                    <a href="product.php">Woman Ring</a>
                                                </h4>

                                                <span class="cart-product-info">
                                                    <span class="cart-product-qty">1</span>
                                                    x $99.00
                                                </span>
                                            </div><!-- End .product-details -->

                                            <figure class="product-image-container">
                                                <a href="product.php" class="product-image">
                                                    <img src="assets/images/products/cart/product-1.jpg" alt="product">
                                                </a>
                                                <a href="#" class="btn-remove" title="Remove Product"><i class="icon-cancel"></i></a>
                                            </figure>
                                        </div><!-- End .product -->

                                        <div class="product">
                                            <div class="product-details">
                                                <h4 class="product-title">
                                                    <a href="product.php">Woman Necklace</a>
                                                </h4>

                                                <span class="cart-product-info">
                                                    <span class="cart-product-qty">1</span>
                                                    x $35.00
                                                </span>
                                            </div><!-- End .product-details -->

                                            <figure class="product-image-container">
                                                <a href="product.php" class="product-image">
                                                    <img src="assets/images/products/cart/product-2.jpg" alt="product">
                                                </a>
                                                <a href="#" class="btn-remove" title="Remove Product"><i class="icon-cancel"></i></a>
                                            </figure>
                                        </div><!-- End .product -->
                                    </div><!-- End .cart-product -->

                                    <div class="dropdown-cart-total">
                                        <span>Total</span>

                                        <span class="cart-total-price">$134.00</span>
                                    </div><!-- End .dropdown-cart-total -->

                                    <div class="dropdown-cart-action">
                                        <a href="cart.php" class="btn btn-primary btn-block">Go to Checkout</a>
                                    </div><!-- End .dropdown-cart-total -->
                                </div><!-- End .dropdownmenu-wrapper -->
                            </div>
                        </div>

                        <div class="my-account-icon dropdown">
                            <a href="#" title="My Account" class="dropdown-toggle">
                                <i class="fa fa-user-alt text-green-600" aria-hidden="true"></i>
                            </a>

                            <div class="dropdown-menu" >
                                <div class="dropdownmenu-wrapper">
                                    <ul class="my-account-links">
                                        <li><a href="my-account.html">MY ACCOUNT</a></li>
                                        <li><a href="#">MY WISHLIST</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="login.php" class="login-link">LOG OUT</a></li>                                    
                                    </ul>
                                </div>
                            </div>


                            <!-- <div class="my-account-dropdown-menu">                                
                                <div class="my-account-dropdown-wrapper"></div>

                                <ul class="my-account-links">
                                    <li><a href="my-account.html">MY ACCOUNT</a></li>
                                    <li><a href="#">MY WISHLIST</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="login.php" class="login-link">LOG OUT</a></li>                                    
                                </ul>
                            </div> -->





                        </div>


                    </div><!-- End .header-right -->
                </div><!-- End .container -->
            </div><!-- End .header-middle -->

            <div class="header-bottom _sticky-header" id="header-bottom">
                <div class="container">
                    
                    <nav class="main-nav">
                        <ul class="menu sf-arrows">
                            <li class="active"><a href="index.php">Home</a></li>
                            
                            <li class="float-right">
                                <a href="category-single.php" class="sf-with-ul">Categories</a>
                                <ul>
                                    <li><a href="category-single.php">Category single</a></li>
                                    <li><a href="category-single.php">Category single</a></li>
                                    <li><a href="category-single.php">Category single</a></li>
                                    <li><a href="category-single.php">Category single</a></li>
                                </ul>
                            </li>                            

                            <li><a href="#" class="sf-with-ul">HELP & SUPPORT</a>
                                <ul>
                                    <li><a href="about.php">About Us</a></li>
                                    <li><a href="privacy-policy.php">Contact Us</a></li>
                                    <li><a href="contact.php">Terms & Services</a></li>
                                    <li><a href="faq.php">Privacy Policy</a></li>
                                    <li><a href="terms-and-services.php">FAQ</a></li>
                                </ul>
                            </li>

                            
                            
                            <li class="float-right"><a href="daily-deals.php">Daily Deals</a></li>
                            
                            <li class="float-right">
                                <a href="package-list.php" class="sf-with-ul">Packages</a>
                                <ul>
                                    <li><a href="package-single.php">Package Single</a></li>
                                    <li><a href="package-single.php">Package Single</a></li>
                                    <li><a href="package-single.php">Package Single</a></li>
                                    <li><a href="package-single.php">Package Single</a></li>
                                </ul>
                            </li>
                            
                            <li>
                                <a href="#" class="sf-with-ul">Pages</a>
                                <ul>
                                    <li>
                                        <a href="cart.php">Shopping Cart</a>
                                    </li>
                                    <li>
                                        <a href="#">Checkout</a>
                                        <ul>
                                            <li><a href="checkout-1-shiiping-form.php">Checkout-1 Shiiping</a></li>
                                            <li><a href="checkout-2-billing-form.php">Checkout-2 Billing</a></li>
                                            <li><a href="checkout-3-pay-with-credit-card.php">Checkout-3 Pay</a></li>
                                            <li><a href="checkout-failed.php">Checkout Failed</a></li>
                                            <li><a href="checkout-success.php">Checkout Success</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">AUTH(GUEST)</a>
                                        <ul>
                                            <li><a href="login.php" class="login-link">Login</a></li>
                                            <li><a href="register.php">Register</a></li>
                                            <li><a href="forgot-password.php">Forgot Password</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">AUTH(USER)</a>
                                        <ul>
                                            <li><a href="change-password.php">Change Password</a></li>                                    
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">ACCOUNT(USER)</a>
                                        <ul>
                                            <li><a href="dashboard.php">Dashboard</a></li>
                                            
                                            <li><a href="account-view.php">My Account</a></li>
                                            <li><a href="account-edit.php">My Account Edit</a></li>

                                            <li><a href="previously-buy.php">Previously Buy</a></li>
                                            <li><a href="my-reviews.php ">My Reviews</a></li>
                                            <li><a href="wishlist.php">My Wishlist</a></li>
                                            
                                            <li><a href="my-orders-list.php">My Orders Llist</a></li>
                                            <li><a href="my-orders-single.php">My Orders single</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="brand-list.php" class="sf-with-ul">Brands</a>
                                        <ul>
                                            <li><a href="brand-single.php">Brand single</a></li>
                                            <li><a href="brand-single.php">Brand single</a></li>
                                            <li><a href="brand-single.php">Brand single</a></li>
                                            <li><a href="brand-single.php">Brand single</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about.php">About Us</a></li>
                                    <li><a href="contact.php">Contact Us</a></li>
                                    <li><a href="product.php">Product</a></li>
                                    <li><a href="search.php">Search</a></li>
                                    <li><a href="test.php">Test</a></li>
                                </ul>
                            </li>

                            <li class="float-right">
                                <a href="#" class="sf-with-ul">ACCOUNT(USER)</a>
                                <ul>
                                    <li><a href="dashboard.php">Dashboard</a></li>
                                    
                                    <li><a href="account-view.php">My Account</a></li>
                                    <li><a href="account-edit.php">My Account Edit</a></li>

                                    <li><a href="previously-buy.php">Previously Buy</a></li>
                                    <li><a href="my-reviews.php ">My Reviews</a></li>
                                    <li><a href="wishlist.php">My Wishlist</a></li>
                                    
                                    <li><a href="my-orders-list.php">My Orders Llist</a></li>
                                    <li><a href="my-orders-single.php">My Orders single</a></li>
                                    <li><a href="change-password.php">Change Password</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    
                    <div class="header-right-quick-view" id="header-right-quick-view">
                        

                        <div class="my-wishlist-icon">
                            <a href="" class="text-4xl" title="Wishlist"><i class="icon-wishlist text-green-600" aria-hidden="true"></i></a>
                            <span class="wishlist-count">2</span>
                        </div>

                        <div class="cart-dropdown">
                            <a href="#" title="Cart" class="dropdown-toggle text-green-600" role="button">
                                <span class="cart-count">21</span>
                            </a>                            
                        </div>

                        <div class="my-account-icon">
                            <a href="" class="text-4xl" title="My Account">
                                <i class="fa fa-user-alt text-green-600" aria-hidden="true"></i>
                            </a>
                        </div>

                    </div>

                </div>
            </div>

        </header>