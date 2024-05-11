<?php include 'header.php';?>
  
        <main class="main">
            <nav aria-label="breadcrumb" class="breadcrumb-nav mb-0">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                        <li class="breadcrumb-item active" aria-current="page">Package list</li>
                    </ol>
                </div><!-- End .container -->
            </nav>

            <div class="container">
                <div class="banner banner-cat mb-3" style="background-image: url('assets/images/banners/banner-fashion.jpg');">
                    <div class="banner-content container offset-1">
                        <h2 class="banner-subtitle">check out over <span>200+</span></h2>
                        <h1 class="banner-title">
                            Coasts & Jackets For Woman
                        </h1>
                        <a href="#" class="btn btn-primary">Shop Now</a>
                    </div><!-- End .banner-content -->
                </div><!-- End .banner -->

                

                <div class="package-list-wrapper">
                    <div class="package-list divide-line up-effect">
                        
                        <?php for ($i=0; $i < 12; $i++):?>                               
                        <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 package-item">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/product-2.jpg">
                                </a>
                                <div class="package-label label-sale">
                                    <div class="_old-price">$5.00 OFF</div>
                                    <!-- <div class="_package-price">$10.00</div> -->
                                </div>

                                <!-- <span class="package-label label-sale">27% OFF</span> -->
                            </figure>
                            <div class="package-details">
                                <h2 class="package-title headline">
                                    <a href="product.html">Product Short Name</a>
                                </h2> 
                                <!-- <p class="lead">6 Electronic Items Sold withing 9 months. Grab it soon or leave it</p>-->                                
                                <div class="price-box">
                                    <!-- <div class="old-price">$15.00</div>-->
                                    <div class="package-price">$10.00</div>
                                </div>
                                <div class="package-action">
                                    <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal">
                                        <i class="icon-cart"></i>
                                        <div>ADD TO CART</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <?php endfor;?>
                        


                        <!-- <div class="col-6 col-md-3 package-item">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/product-2.jpg">
                                </a>
                                <div class="package-label label-sale">
                                    <div class="_old-price">$5.00 OFF</div>
                                </div>
                            </figure>
                            <div class="package-details">
                                <h2 class="package-title headline">
                                    <a href="product.html">Product Short Name</a>
                                </h2> 
                                <div class="price-box">
                                    <div class="package-price">$10.00</div>
                                </div>
                                <div class="package-action">
                                    <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal">
                                        <i class="icon-cart"></i>
                                        <div>ADD TO CART</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-6 col-md-3 package-item">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/product-2.jpg">
                                </a>
                                <div class="package-label label-sale">
                                    <div class="_old-price">$5.00 OFF</div>
                                </div>
                            </figure>
                            <div class="package-details">
                                <h2 class="package-title headline">
                                    <a href="product.html">Product Short Name</a>
                                </h2> 
                                <div class="price-box">
                                    <div class="package-price">$10.00</div>
                                </div>
                                <div class="package-action">
                                    <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal">
                                        <i class="icon-cart"></i>
                                        <div>ADD TO CART</div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 col-md-3 package-item">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/product-2.jpg">
                                </a>
                                <div class="package-label label-sale">
                                    <div class="_old-price">$5.00 OFF</div>
                                </div>
                            </figure>
                            <div class="package-details">
                                <h2 class="package-title headline">
                                    <a href="product.html">Product Short Name</a>
                                </h2> 
                                <div class="price-box">
                                    <div class="package-price">$10.00</div>
                                </div>
                                <div class="package-action">
                                    <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal">
                                        <i class="icon-cart"></i>
                                        <div>ADD TO CART</div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 col-md-3 package-item">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/product-2.jpg">
                                </a>
                                <div class="package-label label-sale">
                                    <div class="_old-price">$5.00 OFF</div>
                                </div>
                            </figure>
                            <div class="package-details">
                                <h2 class="package-title headline">
                                    <a href="product.html">Product Short Name</a>
                                </h2> 
                                <div class="price-box">
                                    <div class="package-price">$10.00</div>
                                </div>
                                <div class="package-action">
                                    <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal">
                                        <i class="icon-cart"></i>
                                        <div>ADD TO CART</div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 col-md-3 package-item">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/product-2.jpg">
                                </a>
                                <div class="package-label label-sale">
                                    <div class="_old-price">$5.00 OFF</div>
                                </div>
                            </figure>
                            <div class="package-details">
                                <h2 class="package-title headline">
                                    <a href="product.html">Product Short Name</a>
                                </h2> 
                                <div class="price-box">
                                    <div class="package-price">$10.00</div>
                                </div>
                                <div class="package-action">
                                    <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal">
                                        <i class="icon-cart"></i>
                                        <div>ADD TO CART</div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 col-md-3 package-item">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/product-2.jpg">
                                </a>
                                <div class="package-label label-sale">
                                    <div class="_old-price">$5.00 OFF</div>
                                </div>
                            </figure>
                            <div class="package-details">
                                <h2 class="package-title headline">
                                    <a href="product.html">Product Short Name</a>
                                </h2> 
                                <div class="price-box">
                                    <div class="package-price">$10.00</div>
                                </div>
                                <div class="package-action">
                                    <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal">
                                        <i class="icon-cart"></i>
                                        <div>ADD TO CART</div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 col-md-3 package-item">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/product-2.jpg">
                                </a>
                                <div class="package-label label-sale">
                                    <div class="_old-price">$5.00 OFF</div>
                                </div>
                            </figure>
                            <div class="package-details">
                                <h2 class="package-title headline">
                                    <a href="product.html">Product Short Name</a>
                                </h2> 
                                <div class="price-box">
                                    <div class="package-price">$10.00</div>
                                </div>
                                <div class="package-action">
                                    <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal">
                                        <i class="icon-cart"></i>
                                        <div>ADD TO CART</div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 col-md-3 package-item">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/product-2.jpg">
                                </a>
                                <div class="package-label label-sale">
                                    <div class="_old-price">$5.00 OFF</div>
                                </div>
                            </figure>
                            <div class="package-details">
                                <h2 class="package-title headline">
                                    <a href="product.html">Product Short Name</a>
                                </h2> 
                                <div class="price-box">
                                    <div class="package-price">$10.00</div>
                                </div>
                                <div class="package-action">
                                    <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal">
                                        <i class="icon-cart"></i>
                                        <div>ADD TO CART</div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 col-md-3 package-item">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/product-2.jpg">
                                </a>
                                <div class="package-label label-sale">
                                    <div class="_old-price">$5.00 OFF</div>
                                </div>
                            </figure>
                            <div class="package-details">
                                <h2 class="package-title headline">
                                    <a href="product.html">Product Short Name</a>
                                </h2> 
                                <div class="price-box">
                                    <div class="package-price">$10.00</div>
                                </div>
                                <div class="package-action">
                                    <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal">
                                        <i class="icon-cart"></i>
                                        <div>ADD TO CART</div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 col-md-3 package-item">
                            <figure>
                                <a href="product.html">
                                    <img src="assets/images/products/product-2.jpg">
                                </a>
                                <div class="package-label label-sale">
                                    <div class="_old-price">$5.00 OFF</div>
                                </div>
                            </figure>
                            <div class="package-details">
                                <h2 class="package-title headline">
                                    <a href="product.html">Product Short Name</a>
                                </h2> 
                                <div class="price-box">
                                    <div class="package-price">$10.00</div>
                                </div>
                                <div class="package-action">
                                    <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal">
                                        <i class="icon-cart"></i>
                                        <div>ADD TO CART</div>
                                    </button>
                                </div>
                            </div>
                        </div> -->
                    
                    </div>
                    
                    <nav class="toolbox toolbox-pagination mt-5">
                        <div class="toolbox-item toolbox-show">
                            <label>Show:</label>

                            <div class="select-custom">
                                <select name="count" class="form-control">
                                    <option value="9">9 Products</option>
                                    <option value="18">18 Products</option>
                                    <option value="27">27 Products</option>
                                </select>
                            </div><!-- End .select-custom -->
                        </div><!-- End .toolbox-item -->

                        <ul class="pagination">
                            <li class="page-item disabled">
                                <a class="page-link page-link-btn" href="#"><i class="icon-angle-left"></i></a>
                            </li>
                            <li class="page-item active">
                                <a class="page-link" href="#">1 <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">4</a></li>
                            <li class="page-item"><a class="page-link" href="#">5</a></li>
                            <li class="page-item"><span class="page-link">...</span></li>
                            <li class="page-item">
                                <a class="page-link page-link-btn" href="#"><i class="icon-angle-right"></i></a>
                            </li>
                        </ul>
                    </nav>
                    
                </div>

               
            </div><!-- End .container -->

            <div class="mb-5"></div><!-- margin -->
        </main><!-- End .main -->

<?php include 'footer.php';?>        