<?php include 'header.php';?>
    
        <main class="main">
            <div class="page-header page-header-bg">
                <div class="container">
                    <h1>Package single</h1>
                </div>
            </div>

            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                        <li class="breadcrumb-item"><a href="#">Packages</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Package single</li>
                    </ol>
                </div><!-- End .container -->
            </nav>

            
            <!-- TODO -height unset-->
            <div class="container">
                <div class="package-single-row" style="height:unset;">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="assets/images/products/product-1.jpg">
                            <div class="label-group">
                                <div class="product-label label-sale">$ 5000 OFF</div>
                            </div>
                        </div>
                        
                        <div class="col-md-8">
                            <div class="package-desc-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                                <ul class="mt-2">
                                    <li><i class="icon-ok"></i>Any Product types that You want - Simple, Configurable</li>
                                    <li><i class="icon-ok"></i>Downloadable/Digital Products, Virtual Products</li>
                                    <li><i class="icon-ok"></i>Inventory Management with Backordered items</li>
                                </ul>                                    
                            </div>                            
                            
                            <div class="mt-2 package-price-content">
                                <div class="text-3xl font-semibold mb-1">Package Price : <span class="line-through">$15.00</span></div>
                                <div class="text-3xl font-semibold mb-1">Discounted Price : $10.00</div>
                                <div class="text-3xl font-semibold">Discount : $5.00</div>
                            </div>

                            <div class="product-single-container product-single-extended mt-2 mb-2">                                                                          
                                <div class="">
                                    <a href="cart.html" class="ml-0 paction add-cart" title="Add to Cart">
                                        <span>Add to Cart</span>
                                    </a>
                                </div>     
                            </div>

                        </div><!-- End .col-xl-5 -->
                    </div><!-- End .row -->
                </div><!-- End .product-single-row -->
            </div>
            


            <div class="mb-5 mb-lg-6 mb-xl-7"></div><!-- margin -->

            
            


            <div class="container package-items">
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="step-title mb-2">Package Items</h3>
                        
                        <div class="package-product-list row row-sm">
                            
                            
                            <?php for ($i=0; $i < 7; $i++):?>
                            <div class="col-12 col-sm-12 featured-horizontal-shopping-product mb-1">
                                <figure>
                                    <a href="product.html">
                                        <img src="assets/images/products/product-1.jpg">
                                    </a>
                                </figure>
                                <div class="product-details">
                                    <div class="category-list">
                                        <a href="category.html" class="product-category">category</a>
                                    </div>
                                    <h2 class="product-title">
                                        <a href="product.html">Product Short Name</a>
                                    </h2>
                                    <div class="ratings-container">
                                        <div class="product-ratings">
                                            <span class="ratings" style="width:100%"></span>
                                        </div>
                                    </div>
                                    <p class="product-description">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                    <div class="price-box">
                                        <div class="product-price">Item Price : $15.00</div>
                                        <div class="mt-1 product-price">QTY : 22</div>
                                    </div>
                                </div>
                            </div>
                            <?php endfor;?>





                            <?php for ($i=0; $i < 0; $i++):?>
                            <div class="col-6 col-sm-12 package-list-item mb-4">
                                <figure>
                                    <a href="product.html">
                                        <img src="assets/images/products/product-1.jpg">
                                    </a>
                                </figure>
                                <div class="package-details">
                                    <div class="category-list">
                                        <a href="category.html" class="product-category">Sunglasses</a>
                                    </div>
                                    <h2 class="package-title"> 
                                        <a href="product.html">Aviator D131</a>
                                    </h2>
                                    <p class="package-description">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                    <div class="">
                                        <div class="text-2xl font-bold">Item Price : $15.00</div>
                                        <div class="text-2xl font-bold">QTY : 22</div>
                                    </div>
                                </div>
                            </div>
                            <?php endfor;?>
                            





                        </div>
                    </div>
                </div>
            </div>



            

            
        </main><!-- End .main -->

<?php include 'footer.php';?>        