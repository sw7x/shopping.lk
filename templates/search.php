<?php include 'header.php';?>
        
        <main class="main">
            <nav aria-label="breadcrumb" class="breadcrumb-nav mb-0">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                        <li class="breadcrumb-item active" aria-current="page">Search</li>
                    </ol>
                </div><!-- End .container -->
            </nav>

            <div class="container">
                <div class="row">
                    
                    <aside class="sidebar-shop col-lg-3 order-lg-first">
                        <?php include 'product-filter-sidebar.php';?>
                    </aside>

                    <div class="col-lg-9">
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
                        </nav>

                        <div class="product-intro row row-sm">
                            
                            <?php for ($i=0; $i < 2; $i++):?>
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
                                        <div class="product-price">$15.00</div>
                                    </div>
                                    <div class="product-action">
                                        <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal">
                                            <i class="icon-cart"></i>ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <?php endfor;?>
                                                    
                            <?php for ($i=0; $i < 2; $i++):?>
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
                    </div>


                </div><!-- End .row -->
            </div><!-- End .container -->

            <div class="mb-5"></div><!-- margin -->
        </main><!-- End .main -->

<?php include 'footer.php';?>       