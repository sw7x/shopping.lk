<?php include 'header.php';?>
 
        <main class="main">
            <nav aria-label="breadcrumb" class="breadcrumb-nav mb-0">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                        <li class="breadcrumb-item"><a href="#">Men</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Accessories</li>
                    </ol>
                </div><!-- End .container -->
            </nav>

            <div class="container">
                <div class="row">
                    <div class="col-lg-9">
                        <div class="banner banner-cat mb-3" style="background-image: url('assets/images/banners/banner-fashion.jpg');">
                            <div class="banner-content container offset-1">
                                <h2 class="banner-subtitle">check out over <span>200+</span></h2>
                                <h1 class="banner-title">
                                    Coasts & Jackets For Woman
                                </h1>
                                <a href="#" class="btn btn-primary">Shop Now</a>
                            </div><!-- End .banner-content -->
                        </div><!-- End .banner -->

                        <nav class="toolbox">
                            <div class="toolbox-left">
                                <div class="toolbox-item toolbox-sort">
                                    <label>Sort By:</label>

                                    <div class="select-custom">
                                        <select name="orderby" class="form-control">
                                            <option value="menu_order" selected="selected">Default sorting</option>
                                            <option value="popularity">Sort by popularity</option>
                                            <option value="rating">Sort by average rating</option>
                                            <option value="date">Sort by newness</option>
                                            <option value="price">Sort by price: low to high</option>
                                            <option value="price-desc">Sort by price: high to low</option>
                                        </select>
                                    </div><!-- End .select-custom -->

                                    <a href="#" class="sorter-btn" title="Set Ascending Direction"><span class="sr-only">Set Ascending Direction</span></a>
                                </div><!-- End .toolbox-item -->
                            </div><!-- End .toolbox-left -->

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

                            <div class="layout-modes">
                                <a href="category.html" class="layout-btn btn-grid active" title="Grid">
                                    <i class="icon-mode-grid"></i>
                                </a>
                                <a href="category-list.html" class="layout-btn btn-list" title="List">
                                    <i class="icon-mode-list"></i>
                                </a>
                            </div><!-- End .layout-modes -->
                        </nav>
                        
                        <div class="row row-sm">                            
    
                            
                                <?php for ($i=0; $i < 10; $i++):?>                   
                                <div class="featured-shopping-product col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
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
                           




                            <!-- <div class="col-6 col-md-4 col-xl-3">
                                <div class="product-default">
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
                                            <a href="#" class="btn-icon-wish"><i class="icon-heart"></i></a>
                                            <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i class="icon-bag"></i>ADD TO CART</button>
                                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View"><i class="fas fa-external-link-alt"></i></a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            -->

                            
                        </div>


                        






                        <div class="product-intro row row-sm">
                            
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
                                        <a href="product.html">Product Short Name1</a>
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
                                <?php if($i==0):?>
                                <div class="label-group">
                                    <div class="product-label label-sale">$5000 OFF</div>
                                </div>
                                <?php endif;?>                    
                            </div>
                            <?php endfor;?>



                            <!-- 
                            <div class="col-6 col-sm-12 product-default left-details product-list mb-4">
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
                                            <span class="tooltiptext tooltip-top"></span>
                                        </div>
                                    </div>
                                    <p class="product-description">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                    <div class="price-box">
                                        <span class="product-price">$15.00</span>
                                    </div>
                                    <div class="product-action">
                                        <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i class="icon-bag"></i>ADD TO CART</button>
                                        <a href="#" class="btn-icon-wish"><i class="icon-heart"></i></a>
                                        <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View"><i class="fas fa-external-link-alt"></i></a> 
                                    </div>
                                </div>
                            </div>
                            -->
                            
                        </div>



















                        <nav class="toolbox toolbox-pagination">
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
                    </div><!-- End .col-lg-9 -->

                    <aside class="sidebar-shop col-lg-3 order-lg-first">
                        <div class="sidebar-wrapper">
                            <div class="widget">
                                <h3 class="widget-title">
                                    <a data-toggle="collapse" href="#widget-body-1" role="button" aria-expanded="true" aria-controls="widget-body-1">Fashion</a>
                                </h3>

                                <div class="collapse show" id="widget-body-1">
                                    <div class="widget-body">
                                        <ul class="cat-list">
                                            <li><a href="#">Women</a></li>
                                            <li><a href="#">Men</a></li>
                                        </ul>
                                    </div><!-- End .widget-body -->
                                </div><!-- End .collapse -->
                            </div><!-- End .widget -->

                            <div class="widget">
                                <h3 class="widget-title">
                                    <a data-toggle="collapse" href="#widget-body-2" role="button" aria-expanded="true" aria-controls="widget-body-2">Price</a>
                                </h3>

                                <div class="collapse show" id="widget-body-2">
                                    <div class="widget-body">
                                        <form action="#">
                                            <div class="price-slider-wrapper">
                                                <div id="price-slider"></div>
                                                <span style="color:red;">todo - add slider</span>
                                                <!-- End #price-slider -->
                                            </div><!-- End .price-slider-wrapper -->

                                            <div class="filter-price-action">
                                                <button type="submit" class="btn btn-dark">Filter</button>

                                                <div class="filter-price-text">
                                                    <span id="filter-price-range"></span>
                                                </div><!-- End .filter-price-text -->
                                            </div><!-- End .filter-price-action -->
                                        </form>
                                    </div><!-- End .widget-body -->
                                </div><!-- End .collapse -->
                            </div><!-- End .widget -->

                            <div class="widget">
                                <h3 class="widget-title">
                                    <a data-toggle="collapse" href="#widget-body-3" role="button" aria-expanded="true" aria-controls="widget-body-3">Size</a>
                                </h3>

                                <div class="collapse show" id="widget-body-3">
                                    <div class="widget-body">
                                        <ul class="config-size-list">
                                            <li class="active"><a href="#">S</a></li>
                                            <li><a href="#">M</a></li>
                                            <li><a href="#">L</a></li>
                                            <li><a href="#">XL</a></li>
                                            <li><a href="#">2XL</a></li>
                                            <li><a href="#">3XL</a></li>
                                        </ul>
                                    </div><!-- End .widget-body -->
                                </div><!-- End .collapse -->
                            </div><!-- End .widget -->

                            <div class="widget">
                                <h3 class="widget-title">
                                    <a data-toggle="collapse" href="#widget-body-4" role="button" aria-expanded="true" aria-controls="widget-body-4">Brand</a>
                                </h3>

                                <div class="collapse show" id="widget-body-4">
                                    <div class="widget-body">
                                        <ul class="cat-list">
                                            <li><a href="#">Adidas <span>18</span></a></li>
                                            <li><a href="#">Camel <span>22</span></a></li>
                                        </ul>
                                    </div><!-- End .widget-body -->
                                </div><!-- End .collapse -->
                            </div><!-- End .widget -->

                            <div class="widget">
                                <h3 class="widget-title">
                                    <a data-toggle="collapse" href="#widget-body-6" role="button" aria-expanded="true" aria-controls="widget-body-6">Color</a>
                                </h3>

                                <div class="collapse show" id="widget-body-6">
                                    <div class="widget-body">
                                        <ul class="config-swatch-list">
                                            <li>
                                                <a href="#" style="background-color: #4090d5;"></a>
                                            </li>
                                            <li class="active">
                                                <a href="#" style="background-color: #f5494a;"></a>
                                            </li>
                                            <li>
                                                <a href="#" style="background-color: #fca309;"></a>
                                            </li>
                                            <li>
                                                <a href="#" style="background-color: #11426b;"></a>
                                            </li>
                                            <li>
                                                <a href="#" style="background-color: #f0f0f0;"></a>
                                            </li>
                                            <li>
                                                <a href="#" style="background-color: #3fd5c9;"></a>
                                            </li>
                                            <li>
                                                <a href="#" style="background-color: #979c1c;"></a>
                                            </li>
                                            <li>
                                                <a href="#" style="background-color: #7d5a3c;"></a>
                                            </li>
                                        </ul>
                                    </div><!-- End .widget-body -->
                                </div><!-- End .collapse -->
                            </div><!-- End .widget -->

                            <div class="widget widget-featured">
                                <h3 class="widget-title">Featured Proucts</h3>
                                
                                <div class="widget-body">
                                    <div class="owl-carousel widget-featured-products">
                                        <div class="featured-col">
                                            <div class="product-default left-details product-widget">
                                                <figure>
                                                    <a href="product.html">
                                                        <img src="assets/images/products/small/product-1.jpg">
                                                    </a>
                                                </figure>
                                                <div class="product-details">
                                                    <h2 class="product-title">
                                                        <a href="product.html">Product Short Name</a>
                                                    </h2>
                                                    <div class="ratings-container">
                                                        <div class="product-ratings">
                                                            <span class="ratings" style="width:100%"></span><!-- End .ratings -->
                                                            <span class="tooltiptext tooltip-top"></span>
                                                        </div><!-- End .product-ratings -->
                                                    </div><!-- End .product-container -->
                                                    <div class="price-box">
                                                        <span class="product-price">$49.00</span>
                                                    </div><!-- End .price-box -->
                                                </div><!-- End .product-details -->
                                            </div>
                                            <div class="product-default left-details product-widget">
                                                <figure>
                                                    <a href="product.html">
                                                        <img src="assets/images/products/small/product-2.jpg">
                                                    </a>
                                                </figure>
                                                <div class="product-details">
                                                    <h2 class="product-title">
                                                        <a href="product.html">Product Short Name</a>
                                                    </h2>
                                                    <div class="ratings-container">
                                                        <div class="product-ratings">
                                                            <span class="ratings" style="width:100%"></span><!-- End .ratings -->
                                                            <span class="tooltiptext tooltip-top"></span>
                                                        </div><!-- End .product-ratings -->
                                                    </div><!-- End .product-container -->
                                                    <div class="price-box">
                                                        <span class="product-price">$49.00</span>
                                                    </div><!-- End .price-box -->
                                                </div><!-- End .product-details -->
                                            </div>
                                            <div class="product-default left-details product-widget">
                                                <figure>
                                                    <a href="product.html">
                                                        <img src="assets/images/products/small/product-3.jpg">
                                                    </a>
                                                </figure>
                                                <div class="product-details">
                                                    <h2 class="product-title">
                                                        <a href="product.html">Product Short Name</a>
                                                    </h2>
                                                    <div class="ratings-container">
                                                        <div class="product-ratings">
                                                            <span class="ratings" style="width:100%"></span><!-- End .ratings -->
                                                            <span class="tooltiptext tooltip-top"></span>
                                                        </div><!-- End .product-ratings -->
                                                    </div><!-- End .product-container -->
                                                    <div class="price-box">
                                                        <span class="product-price">$49.00</span>
                                                    </div><!-- End .price-box -->
                                                </div><!-- End .product-details -->
                                            </div>
                                        </div><!-- End .featured-col -->

                                        <div class="featured-col">
                                            <div class="product-default left-details product-widget">
                                                <figure>
                                                    <a href="product.html">
                                                        <img src="assets/images/products/small/product-4.jpg">
                                                    </a>
                                                </figure>
                                                <div class="product-details">
                                                    <h2 class="product-title">
                                                        <a href="product.html">Product Short Name</a>
                                                    </h2>
                                                    <div class="ratings-container">
                                                        <div class="product-ratings">
                                                            <span class="ratings" style="width:100%"></span><!-- End .ratings -->
                                                            <span class="tooltiptext tooltip-top"></span>
                                                        </div><!-- End .product-ratings -->
                                                    </div><!-- End .product-container -->
                                                    <div class="price-box">
                                                        <span class="product-price">$49.00</span>
                                                    </div><!-- End .price-box -->
                                                </div><!-- End .product-details -->
                                            </div>
                                            <div class="product-default left-details product-widget">
                                                <figure>
                                                    <a href="product.html">
                                                        <img src="assets/images/products/small/product-5.jpg">
                                                    </a>
                                                </figure>
                                                <div class="product-details">
                                                    <h2 class="product-title">
                                                        <a href="product.html">Product Short Name</a>
                                                    </h2>
                                                    <div class="ratings-container">
                                                        <div class="product-ratings">
                                                            <span class="ratings" style="width:100%"></span><!-- End .ratings -->
                                                            <span class="tooltiptext tooltip-top"></span>
                                                        </div><!-- End .product-ratings -->
                                                    </div><!-- End .product-container -->
                                                    <div class="price-box">
                                                        <span class="product-price">$49.00</span>
                                                    </div><!-- End .price-box -->
                                                </div><!-- End .product-details -->
                                            </div>
                                            <div class="product-default left-details product-widget">
                                                <figure>
                                                    <a href="product.html">
                                                        <img src="assets/images/products/small/product-6.jpg">
                                                    </a>
                                                </figure>
                                                <div class="product-details">
                                                    <h2 class="product-title">
                                                        <a href="product.html">Product Short Name</a>
                                                    </h2>
                                                    <div class="ratings-container">
                                                        <div class="product-ratings">
                                                            <span class="ratings" style="width:100%"></span><!-- End .ratings -->
                                                            <span class="tooltiptext tooltip-top"></span>
                                                        </div><!-- End .product-ratings -->
                                                    </div><!-- End .product-container -->
                                                    <div class="price-box">
                                                        <span class="product-price">$49.00</span>
                                                    </div><!-- End .price-box -->
                                                </div><!-- End .product-details -->
                                            </div>
                                        </div><!-- End .featured-col -->
                                    </div><!-- End .widget-featured-slider -->
                                </div><!-- End .widget-body -->
                            </div><!-- End .widget -->

                            <div class="widget widget-block">
                                <h3 class="widget-title">Custom HTML Block</h3>
                                <h5>This is a custom sub-title.</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mi. </p>
                            </div><!-- End .widget -->
                        </div><!-- End .sidebar-wrapper -->
                    </aside><!-- End .col-lg-3 -->
                </div><!-- End .row -->
            </div><!-- End .container -->

            <div class="mb-5"></div><!-- margin -->
        </main><!-- End .main -->

<?php include 'footer.php';?> 



<!-- 
    <script src="assets/js/nouislider.min.js"></script>
-->