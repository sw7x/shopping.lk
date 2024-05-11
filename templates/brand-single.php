<?php include 'header.php';?>
    
        <main class="main">
            <div class="page-header page-header-bg">
                <div class="container">
                    <h1>Brand Single</h1>
                </div>
            </div>

            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                        <li class="breadcrumb-item"><a href="#">Brands</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Brands single</li>
                    </ol>
                </div><!-- End .container -->
            </nav>

            <div class="container">
                <div class="row brand-page-single-row">
                    <div class="col-md-12">
                        
                        <div class="row">                        
                            <div class="col-md-4">
                                <img src="assets/images/products/single/extended/bg-3.jpg" alt="">
                            </div>
                            <div class="col-md-8">
                                <p class="">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonxcepteur sint occaecat cupidatat non. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.</p>
                                <ul>
                                    <li><i class="icon-ok"></i>Any Product types that You want - Simple, Configurable</li>
                                    <li><i class="icon-ok"></i>Downloadable/Digital Products, Virtual Products</li>
                                    <li><i class="icon-ok"></i>Inventory Management with Backordered items</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>                    
            </div>
           
            <div class="mb-5 mb-lg-6 mb-xl-7"></div><!-- margin -->
            
            <div class="product-single-container product-single-extended">
                <div class="container">
                    <div class="product-single-details">
                        
                        <div class="product-desc">
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonxcepteur sint occaecat cupidatat non. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non... <a href="#" class="view-more">(View More)</a></p>
                        </div><!-- End .product-desc -->
                        
                        <div class="product-desc-content">    
                            <ul>
                                <li><i class="icon-ok"></i>Any Product types that You want - Simple, Configurable</li>
                                <li><i class="icon-ok"></i>Downloadable/Digital Products, Virtual Products</li>
                                <li><i class="icon-ok"></i>Inventory Management with Backordered items</li>
                            </ul>
                        </div>

                        <div class="product-desc">
                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                        
                    </div><!-- End .product-single-details -->
                </div><!-- End .container -->
            </div><!-- End .product-single-container -->







            <div class="featured-section">
                <div class="container">

                    <div class="row">
                        <div class="col-12">
                            <h2 class="subHeading">Featured Products</h2>
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



            

            
        </main><!-- End .main -->

<?php include 'footer.php';?>        