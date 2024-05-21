<?php include 'header.php';?>

        <main class="main">
            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                        <li class="breadcrumb-item active" aria-current="page">Wishlist</li>
                    </ol>
                </div><!-- End .container -->
            </nav>

            <div class="container">
                <div class="row">
                    
                    <aside class="sidebar col-lg-3">
                        <?php include 'user-menu-links.php';?>
                    </aside>
                    
                    <div class="col-lg-9 dashboard-content">
                        <h2  class="step-title mb-2">My Wishlist (7)</h2>
                        
                        <div class="d-flex justify-content-between">
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
                                        </div>
                                        <a href="#" class="sorter-btn" title="Set Ascending Direction"><span class="sr-only">Set Ascending Direction</span></a>
                                    </div>
                                </div>
                            </nav>
                            <div>
                                <h3 class="subtitle">Total - $123.00</h3>
                            </div>
                        </div>

                        

                        <div class="product-intro row row-sm">
                            
                            <!-- 
                            <div class="entry">
                                <div class="entry-body pb-1">
                                    
                                    <div class="entry-date">
                                        <span class="day">29</span>
                                        <span class="month">Jun</span>
                                        <span class="year">2024</span>
                                    </div>
                                    
                                    <div class="entry-content product-default left-details product-list">
                                        <div class="row">
                                            
                                            <div class="col-12 col-sm-12 featured-horizontal-shopping-product mb-4">
                                                <figure>
                                                    <a href="product.html">
                                                        <img src="assets/images/products/product-1.jpg">
                                                    </a>
                                                    <a href="#" class="paction add-wishlist added" title="Add to Wishlist">
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

                                        </div>
                                    </div>

                                </div>
                            </div> 
                            -->
                            
                            <?php for ($i=0; $i < 10; $i++):?>
                            <div class="wishlist-item col-12">
                                <div class="wishlist-item-body pb-1">

                                    <div class="wishlist-item-date">
                                        <span class="day">29</span>
                                        <span class="month">Jun</span>
                                        <span class="year">2024</span>
                                    </div>
                                    
                                    <div class="wishlist-item-content left-details">
                                        <div class="row">

                                            <div class="col-12 col-sm-6 col-md-4 col-xl-3">
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-1.jpg">
                                                </a>    
                                            </div>

                                            <div class="col-12 col-sm-6 col-md-8 col-xl-9 product-details">
                                                <div class="category-list">
                                                    <a href="category.html" class="product-category">category</a>
                                                </div>
                                                <h2 class="product-title">
                                                    <a href="product.html">Product Short Name</a>
                                                </h2>
                                                <p class="product-description">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                                <div class="price-box">
                                                    <div class="old-price">$15.00</div>
                                                    <div class="product-price">$10.00</div>
                                                </div>


                                                <div class="product-action">
                                                    <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i class="icon-cart"></i>ADD TO CART</button>
                                                    <a href="ajax/product-quick-view.html" class="wishlist-item-remove" title="Quick View"><i class="icon-cancel text-3xl"></i></a> 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="label-group">
                                            <div class="product-label label-sale">$5000 OFF</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <?php endfor;?>
                            

                            <div class="entry">
                                <div class="entry-body pb-1">

                                    <div class="entry-date">
                                        <span class="day">29</span>
                                        <span class="month">Jun</span>
                                        <span class="year">2024</span>
                                    </div>
                                    
                                    <div class="entry-content product-default left-details product-list">
                                        <div class="row">

                                            <div class="col-3">
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-1.jpg">
                                                </a>    
                                            </div>

                                            <div class="col-9 product-details">
                                                <div class="category-list">
                                                    <a href="category.html" class="product-category">category</a>
                                                </div>
                                                <h2 class="product-title">
                                                    <a href="product.html">Product Short Name</a>
                                                </h2>
                                                <p class="product-description">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                                <div class="price-box">
                                                    <span class="ml-2 product-price">$15.00</span>
                                                </div>
                                                <div class="product-action">
                                                    <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i class="icon-bag"></i>ADD TO CART</button>
                                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View"><i class="icon-cancel text-3xl"></i></a> 
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

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
                                    <p class="product-description">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                    <div class="price-box">
                                        <span class="ml-2 product-price">$15.00</span>
                                    </div>
                                    <div class="product-action">
                                        <button class="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i class="icon-bag"></i>ADD TO CART</button>
                                        <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View"><i class="icon-cancel text-3xl"></i></a> 
                                    </div>
                                </div>
                            </div>                    
                            
                        </div>


                        <nav class="toolbox toolbox-pagination">
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