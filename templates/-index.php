<?php include 'header.php';?>

<main class="main">
    <div class="home-slider-container">
        <div class="home-slider owl-carousel">
            <div class="home-slide">
                <div class="slide-bg owl-lazy"  data-src="assets/images/slider/slide-1.jpg"></div><!-- End .slide-bg -->
                <div class="home-slide-content container">
                    <div class="row">
                        <div class="col-md-6 offset-md-6 col-lg-5 offset-lg-7">
                            <h4>Premium</h4>
                            <h1>Headphones</h1>
                            <h3>Only <strong>199 USD</strong></h3>
                            <a href="category.html" class="btn btn-primary">Shop Now</a>
                        </div><!-- End .col-lg-5 -->
                    </div><!-- End .row -->
                </div><!-- End .home-slide-content -->
            </div><!-- End .home-slide -->

            <div class="home-slide">
                <div class="slide-bg owl-lazy"  data-src="assets/images/slider/slide-2.jpg"></div><!-- End .slide-bg -->
                <div class="home-slide-content container">
                    <h4>Amazing</h4>
                    <h1>Micro Drones</h1>
                    <h3>Only <strong>399 USD</strong></h3>
                    <a href="category.html" class="btn btn-primary">Shop Now</a>
                </div><!-- End .home-slide-content -->
            </div><!-- End .home-slide -->
        </div><!-- End .home-slider -->
    </div><!-- End .home-slider-container -->

    <div class="info-boxes-container">
        <div class="container">
            <div class="info-box">
                <i class="icon-shipping"></i>

                <div class="info-box-content">
                    <h4>FREE SHIPPING & RETURN</h4>
                    <p>Free shipping on all orders over $99.</p>
                </div><!-- End .info-box-content -->
            </div><!-- End .info-box -->

            <div class="info-box">
                <i class="icon-us-dollar"></i>

                <div class="info-box-content">
                    <h4>MONEY BACK GUARANTEE</h4>
                    <p>100% money back guarantee</p>
                </div><!-- End .info-box-content -->
            </div><!-- End .info-box -->

            <div class="info-box">
                <i class="icon-support"></i>

                <div class="info-box-content">
                    <h4>ONLINE SUPPORT 24/7</h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div><!-- End .info-box-content -->
            </div><!-- End .info-box -->
        </div><!-- End .container -->
    </div><!-- End .info-boxes-container -->
    
    
    <!-- highest [min avalable count x sold count] -->
    <div class="featured-section bg-white with-border" >
        <div class="container">

            <div class="row">
                <div class="col-12">
                    <h2 class="subHeading">Limited Stock</h2>
                </div>
            </div>                

            <div class="row">
                
                <?php for ($i=0; $i < 5; $i++):?>
                <div class="featured-shopping-product col-12 col-sm-6 col-md-4 col-lg-3 col-xl-5col">
                    <figure>
                        <a href="product.html">
                            <img src="assets/images/products/product-1.jpg">
                        </a>
                        <div class="product-title-overlay">
                            <h2 class="product-title">
                                <a href="product.html">Product Short Name</a>
                            </h2>
                        </div>
                    </figure>
                    <div class="product-details">
                        <div class="ratings-container">
                            <div class="product-ratings">
                                <span class="ratings" style="width:100%"></span>
                            </div>
                        </div>                        
                        <div class="price-box">
                            <span class="product-price">$32.00</span>
                        </div>
                        <div class="product-action">
                            <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal">
                                <i class="icon-cart"></i>ADD TO CART</button> 
                        </div>
                    </div>
                    <a href="#" class="paction add-wishlist" title="Add to Wishlist">
                        <span>Add to Wishlist</span>
                    </a>                  
                </div>
                <?php endfor;?>



                <?php for ($i=0; $i < 0; $i++):?>                   
                <div class="featured-shopping-product col-12 col-sm-6 col-md-4 col-lg-3 col-xl-5col">
                    <figure>
                        <a href="product.html">
                            <img src="assets/images/products/product-1.jpg">
                        </a>
                    </figure>
                    <div class="product-details">
                        <div class="ratings-container">
                            <div class="product-ratings">
                                <span class="ratings" style="width:100%"></span><!-- End .ratings -->
                            </div>
                        </div>
                        <h2 class="product-title">
                            <a href="product.html">Product Short Name</a>
                        </h2>
                        <div class="price-box">
                            <span class="product-price">$32.00</span>
                        </div>
                        <div class="product-action">
                            <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal">
                                <i class="icon-cart"></i>ADD TO CART</button> 
                        </div>
                    </div>
                    <a href="#" class="paction add-wishlist <?php if($i==1) echo 'added';?>" title="Add to Wishlist">
                        <span>Add to Wishlist</span>
                    </a>                  
                </div>
                <?php endfor;?>



                                 
                <!-- 
                <div class="col-12 col-sm-6 col-md-4 offset-md-4 col-lg-3 offset-lg-0 col-xl-5col">
                    <div class="featured-shopping-product">
                        <figure>
                            <a href="product.html">
                                <img src="assets/images/products/product-1.jpg">
                            </a>
                        </figure>
                        <div class="product-details">
                            <div class="ratings-container">
                                <div class="product-ratings">
                                    <span class="ratings" style="width:100%"></span>
                                </div>
                            </div>
                            <h2 class="product-title">
                                <a href="product.html">Product Short Name</a>
                            </h2>
                            <div class="price-box">
                                <span class="product-price">$32.00</span>
                            </div>
                            <div class="product-action">
                                <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal">
                                    <i class="icon-cart"></i>ADD TO CART</button> 
                            </div>
                        </div>
                    </div>
                </div>
                -->

            </div>

        </div>
    </div>

    <!-- min discount x1 + highest discount x1 -->
    <div class="featured-section packages-featured-section">
    <div class="container">

        <div class="row">
            <div class="col-12">
                <h2 class="subHeading text-center">Packages</h2>
            </div>
        </div>

        <div class="row row-sm featured-item-wrapper">

            <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 offset-xl-1 package-item">
                <div class="product-default">
                    <figure>
                        <a href="product.html">
                            <img src="assets/images/products/product-1.jpg">
                        </a>
                    </figure>
                    <div class="product-details">                                
                        <h2 class="">
                            <a href="product.html">Product Short Name</a>
                        </h2>                                
                    </div><!-- End .product-details -->
                </div>
            </div>

            <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 package-item">
                <div class="product-default">
                    <figure>
                        <a href="product.html">
                            <img src="assets/images/products/product-2.jpg">
                        </a>
                    </figure>
                    <div class="product-details">                                
                        <h2 class="_product-title">
                            <a href="product.html">Product Short Name</a>
                        </h2>                                
                    </div><!-- End .product-details -->
                </div>
            </div>

            <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 package-item">
                <div class="product-default">
                    <figure>
                        <a href="product.html">
                            <img src="assets/images/products/product-3.jpg">
                        </a>
                    </figure>
                    <div class="product-details">                                
                        <h2 class="_product-title">
                            <a href="product.html">Product Short Name</a>
                        </h2>
                    </div><!-- End .product-details -->
                </div>
            </div>
                              

        </div>
    </div>
</div>


    
    <!-- (Recently ADD/ LATEST PRODUCTS)  - latest added date & higest [price x maximum avalable count] -->
    <div class="featured-section bg-white with-border">
        <div class="container">

            <div class="row">
                <div class="col-12">
                    <h2 class="subHeading">New Arrivals</h2>
                </div>
            </div>                

            <div class="row">
                <?php for ($i=0; $i < 6; $i++):?>                
                <div class="featured-shopping-product col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <figure>
                        <a href="product.html">
                            <img src="assets/images/products/product-1.jpg">
                            <!-- <img src="https://source.unsplash.com/random/600×600"> -->
                        </a>
                    </figure>
                    <div class="product-details">
                        <div class="ratings-container">
                            <div class="product-ratings">
                                <span class="ratings" style="width:100%"></span><!-- End .ratings -->
                            </div>
                        </div>
                        <h2 class="product-title">
                            <a href="product.html">Product Short Name</a>
                        </h2>
                        <div class="price-box">
                            <span class="product-price">$32.00</span>
                        </div>
                        <div class="product-action">
                            <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal">
                                <i class="icon-cart"></i>ADD TO CART</button> 
                        </div>
                    </div>
                    <a href="#" class="paction add-wishlist <?php if($i==1) echo 'added';?>" title="Add to Wishlist">
                        <span>Add to Wishlist</span>
                    </a>                  
                </div>
                <?php endfor;?>
            </div>

        </div>
    </div>

    <!-- min discount x3 + highest discount x2 -->
    <div class="featured-section" >
        <div class="container">

            <div class="row">
                <div class="col-12">
                    <h2 class="subHeading">Daily Deals</h2>
                </div>
            </div>                

            <div class="row">                            
            <?php for ($i=0; $i < 5; $i++):?>                   
                <div class="featured-shopping-product col-12 col-sm-6 col-md-4 col-lg-3 col-xl-5col">
                    <figure>
                        <a href="product.html">
                            <img src="assets/images/products/product-1.jpg">
                        </a>
                    </figure>
                    <div class="product-details">
                        <div class="ratings-container">
                            <div class="product-ratings">
                                <span class="ratings" style="width:100%"></span><!-- End .ratings -->
                            </div>
                        </div>
                        <h2 class="product-title">
                            <a href="product.html">Product Short Name</a>
                        </h2>
                        <div class="price-box">
                            <span class="product-price">$32.00</span>
                        </div>
                        <div class="product-action">
                            <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal">
                                <i class="icon-cart"></i>ADD TO CART</button> 
                        </div>
                    </div>
                    <div class="label-group">
                        <div class="product-label label-sale">$ 5000 OFF</div>
                    </div>

                    <a href="#" class="paction add-wishlist <?php if($i==1) echo 'added';?>" title="Add to Wishlist">
                        <span>Add to Wishlist</span>
                    </a>                  
                </div>
                <?php endfor;?>
            </div>

        </div>
    </div>

    <!-- aximum sold count & maximum avalable count -->
    <div class="featured-section bg-white with-border" >
        <div class="container">

            <div class="row">
                <div class="col-12">
                    <h2 class="subHeading">Best Buys</h2>
                </div>
            </div>                

            <div class="row">                            
                <?php for ($i=0; $i < 5; $i++):?>                   
                <div class="featured-shopping-product col-12 col-sm-6 col-md-4 col-lg-3 col-xl-5col">
                    <figure>
                        <a href="product.html">
                            <img src="assets/images/products/product-1.jpg">
                        </a>
                    </figure>
                    <div class="product-details">
                        <div class="ratings-container">
                            <div class="product-ratings">
                                <span class="ratings" style="width:100%"></span><!-- End .ratings -->
                            </div>
                        </div>
                        <h2 class="product-title">
                            <a href="product.html">Product Short Name</a>
                        </h2>
                        <div class="price-box">
                            <span class="product-price">$32.00</span>
                        </div>
                        <div class="product-action">
                            <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal">
                                <i class="icon-cart"></i>ADD TO CART</button> 
                        </div>
                    </div>
                    <a href="#" class="paction add-wishlist <?php if($i==1) echo 'added';?>" title="Add to Wishlist">
                        <span>Add to Wishlist</span>
                    </a>                  
                </div>
                <?php endfor;?>
            </div>

        </div>
    </div>

    <!-- Random -->
    <!--
    <div class="featured-section">
        <div class="container">

            <div class="row">
                <div class="col-12">
                    <h2 class="subHeading text-center">Categories</h2>
                </div>
            </div>

            <div class="row row-sm">

                <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 offset-xl-1">
                    <div class="product-default">
                        <figure>
                            <a href="product.html">
                                <img src="assets/images/products/product-1.jpg">
                            </a>
                        </figure>
                        <div class="product-details">                                
                            <h2 class="">
                                <a href="product.html">Product Short Name</a>
                            </h2>                                
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="product-default">
                        <figure>
                            <a href="product.html">
                                <img src="assets/images/products/product-2.jpg">
                            </a>
                        </figure>
                        <div class="product-details">                                
                            <h2 class="_product-title">
                                <a href="product.html">Product Short Name</a>
                            </h2>                                
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="product-default">
                        <figure>
                            <a href="product.html">
                                <img src="assets/images/products/product-3.jpg">
                            </a>
                        </figure>
                        <div class="product-details">                                
                            <h2 class="_product-title">
                                <a href="product.html">Product Short Name</a>
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="product-default">
                        <figure>
                            <a href="product.html">
                                <img src="assets/images/products/product-4.jpg">
                            </a>
                        </figure>
                        <div class="product-details">                                
                            <h2 class="_product-title">
                                <a href="product.html">Product Short Name</a>
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="product-default">
                        <figure>
                            <a href="product.html">
                                <img src="assets/images/products/product-5.jpg">
                            </a>
                        </figure>
                        <div class="product-details">                                
                            <h2 class="_product-title">
                                <a href="product.html">Product Short Name</a>
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 offset-xl-3">
                    <div class="product-default">
                        <figure>
                            <a href="product.html">
                                <img src="assets/images/products/product-6.jpg">
                            </a>
                        </figure>
                        <div class="product-details">                                
                            <h2 class="_product-title">
                                <a href="product.html">Product Short Name</a>
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 offset-md-2 offset-lg-0">
                    <div class="product-default">
                        <figure>
                            <a href="product.html">
                                <img src="assets/images/products/product-7.jpg">
                            </a>
                        </figure>
                        <div class="product-details">                                
                            <h2 class="_product-title">
                                <a href="product.html">Product Short Name</a>
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="product-default">
                        <figure>
                            <a href="product.html">
                                <img src="assets/images/products/product-8.jpg">
                            </a>
                        </figure>
                        <div class="product-details">                                
                            <h2 class="_product-title">
                                <a href="product.html">Product Short Name</a>
                            </h2>                                
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    -->



    <div class="featured-section">
        <div class="container">

            <div class="row">
                <div class="col-12">
                    <h2 class="subHeading text-center">Categories</h2>
                </div>
            </div>

            <div class="row row-sm featured-grid">
                
                <?php for ($i=0; $i < 12; $i++):?>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="featured-grid-item">
                        <figure>
                            <a href="product.html">
                                <img src="assets/images/products/product-1.jpg">
                            </a>
                        </figure>
                        <div class="grid-item-details">                                
                            <h2 class="grid-item-title">
                                <a href="product.html">Product Short Name</a>
                            </h2>                                
                        </div>
                    </div>
                </div>
                <?php endfor;?>                

            </div>
        </div>
    </div>

    
    





    <div class="container pt-5">
        <div class="row">
            <div class="col-md-4">
                <div class="feature-box">
                    <i class="icon-star"></i>

                    <div class="feature-box-content">
                        <h3>Dedicated Service</h3>
                        <p>Consult our specialists for help with an order, customization, or design advice</p>
                        <a href="#" class="btn btn-sm btn-outline-dark">Get in touch</a>
                    </div><!-- End .feature-box-content -->
                </div><!-- End .feature-box -->
            </div><!-- End .col-md-4 -->

            <div class="col-md-4">
                <div class="feature-box">
                    <i class="icon-reply"></i>

                    <div class="feature-box-content">
                        <h3>Free returns</h3>
                        <p>We stand behind our goods and services and want you to be satisfied with them.</p>
                        <a href="#" class="btn btn-sm btn-outline-dark">Return Policy</a>
                    </div><!-- End .feature-box-content -->
                </div><!-- End .feature-box -->
            </div><!-- End .col-md-4 -->

            <div class="col-md-4">
                <div class="feature-box">
                    <i class="icon-paper-plane"></i>

                    <div class="feature-box-content">
                        <h3>international shipping</h3>
                        <p>Currently over 50 countries qualify for express international shipping.</p>
                        <a href="#" class="btn btn-sm btn-outline-dark">Learn More</a>
                    </div><!-- End .feature-box-content -->
                </div><!-- End .feature-box -->
            </div><!-- End .col-md-4 -->
        </div><!-- End .row -->
    </div>

    <div class="mb-1"></div><!-- margin -->

    <div class="promo-section" style="background-image: url(assets/images/promo-bg.jpg)">
        <div class="container">
            <h3>the perfect gift</h3>
            <h4>Check off your list with our best gifts</h4>
            <a href="#" class="btn btn-primary">Shop Now</a>
        </div>
    </div>

    
    <!--        
        Random x2 +  
        brands that have higest [price x maximum avalable count] x2 + 
        brands that have highest sold count x2
        brands that have highest rating x2 
    -->
    <div class="featured-section featured-section bg-white">
        <div class="container">

            <div class="row">
                <div class="col-12">
                    <h2 class="subHeading text-center">SHOP BY BRAND</h2>
                </div>
            </div>

            <div class="row row-sm featured-grid">                
                <?php for ($i=0; $i < 8; $i++):?>
                <div class="col-12 col-sm-6 col-md-3">
                    <div class="featured-grid-item">
                        <figure>
                            <a href="product.html">
                                <img src="assets/images/products/product-1.jpg">
                            </a>
                        </figure>                        
                    </div>
                </div>
                <?php endfor;?>              
            </div>
        </div>
    </div>







    <!-- <div class="mb-6"></div>margin -->

</main>

<?php include 'footer.php';?>