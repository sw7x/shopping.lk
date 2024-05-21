<?php include 'header.php';?>

        <main class="main">
            <nav aria-label="breadcrumb" class="breadcrumb-nav">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                        <li class="breadcrumb-item active" aria-current="page">My Reviews</li>
                    </ol>
                </div><!-- End .container -->
            </nav>

            <div class="container">
                <div class="row">
                    
                    <aside class="sidebar col-lg-3">
                        <?php include 'user-menu-links.php';?>                                
                    </aside>

                    <div class="col-lg-9 dashboard-content">
                        <h2 class="step-title mb-2">My Reviews (5)</h2>
                        
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

                        <div class="my-reviews row row-sm">
                            
                            <?php for ($i=0; $i < 5; $i++):?>
                            <article class="entry pb-3 col-12">
                                <div class="entry-body">
                                    <div class="entry-date">
                                        <span class="day">29</span>
                                        <span class="month">Jun</span>
                                        <span class="year">2024</span>
                                    </div>

                                    <div class="entry-content">
                                        <div class="row">
                                            <div class="col-12 col-sm-6 col-md-3 col-xl-3">
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-1.jpg">
                                                </a>    
                                            </div>
                                            <div class="col-12 col-sm-6 col-md-9 col-xl-9">
                                                <div class="entry-meta d-flex justify-content-between mb-1">
                                                    <!-- <div><i class="icon-calendar"></i>Date : June 29, 2018</div> -->
                                                    <div><i class="icon-company"></i>Product : <a href="#">Product Short Name</a></div>                                                    
                                                </div>

                                                <p class="font-italic">Euismod atras vulputate iltricies etri Class aptent taciti sociosqu ad litora torquent 
                                                per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue 
                                                sed ligula. elit. nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula.</p>
                                                <div class="ratings-container">
                                                    <div class="product-ratings">
                                                        <span class="ratings" style="width:100%"></span><!-- End .ratings -->
                                                    </div>                                    
                                                </div>
                                                <a href="single.html" class="read-more">Read More <i class="icon-angle-double-right"></i></a>

                                                
                                            </div>
                                        </div>
                                    </div>                                    
                                </div>
                            </article>
                            <?php endfor;?>


                            <!-- 
                            <article class="entry pb-3 col-12">
                                <div class="entry-body">
                                    <div class="entry-date">
                                        <span class="day">29</span>
                                        <span class="month">Jun</span>
                                        <span class="year">2024</span>
                                    </div>

                                    <div class="entry-content">
                                        <div class="row">
                                            <div class="col-2">
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-1.jpg">
                                                </a>    
                                            </div>
                                            <div class="col-10">
                                                <div class="entry-meta d-flex justify-content-between mb-1">
                                                    <div><i class="icon-company"></i>Product : <a href="#">Product Short Name</a></div>                                                    
                                                </div>

                                                <p class="font-italic">Euismod atras vulputate iltricies etri Class aptent taciti sociosqu ad litora torquent 
                                                per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue 
                                                sed ligula. elit. nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula.</p>
                                                <div class="ratings-container">
                                                    <div class="product-ratings">
                                                        <span class="ratings" style="width:100%"></span>
                                                    </div>                                    
                                                </div>
                                                <a href="single.html" class="read-more">Read More <i class="icon-angle-double-right"></i></a>

                                                
                                            </div>
                                        </div>
                                    </div>                                    
                                </div>
                            </article>
                            -->

                            
                                            
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