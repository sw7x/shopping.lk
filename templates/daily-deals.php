<?php include 'header.php';?>
    
        <main class="main">
            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                        <li class="breadcrumb-item active" aria-current="page">Daily Deals</li>
                    </ol>
                </div><!-- End .container -->
            </nav>

            
            
            <div class="container">
                <div class="banner banner-cat mb-3" style="background-image: url('assets/images/banners/banner-fashion.jpg');">
                    <div class="banner-content container offset-1">
                        <h2 class="banner-subtitle">check out over <span>200+</span></h2>
                        <h1 class="banner-title">Coasts & Jackets For Woman</h1>
                    </div><!-- End .banner-content -->
                </div><!-- End .banner -->
            </div>






            <div class="mb-5 mb-lg-6 mb-xl-7"></div><!-- margin -->

            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="daily-deal-intro row row-sm">
                            
                            <?php for ($i=0; $i < 6; $i++):?>
                            <div class="col-12 col-sm-12 featured-horizontal-shopping-product mb-4">
                                <figure>
                                    <a href="product.html">
                                        <img src="assets/images/products/product-1.jpg">
                                    </a>
                                    <a href="#" class="paction add-wishlist <?php if($i==1) echo 'added';?>" title="Add to Wishlist">
                                        <span>Add to Wishlist</span>
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
                                        <div class="old-price">$15.00</div>
                                        <div class="product-price">$15.00</div>
                                    </div>
                                    <div class="product-action">
                                        <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal">
                                            <i class="icon-cart"></i>ADD TO CART</button>
                                    </div>
                                </div>
                                <div class="label-group">
                                    <div class="product-label label-sale">$5000 OFF</div>
                                </div>                            
                            </div>
                            <?php endfor;?>

                        </div>
                    </div>
                </div>
            </div>
            



            

            
        </main><!-- End .main -->

<?php include 'footer.php';?>        