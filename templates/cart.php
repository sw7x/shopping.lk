<?php include 'header.php';?>

        <main class="main">
            <nav aria-label="breadcrumb" class="breadcrumb-nav mb-1">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                        <li class="breadcrumb-item active" aria-current="page">Shopping Cart</li>
                    </ol>
                </div><!-- End .container -->
            </nav>


            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        
                        <h2 class="step-title mb-2">Cart</h2>

                        <div class="clearfix mb-1">
                            <div class="float-right">
                                <a href="#" class="btn btn-sm btn-danger btn-clear-cart mr-3">Clear Cart</a>
                                <a href="#" class="btn btn-sm btn-primary btn-update-cart">Update Cart</a>
                            </div>
                        </div>
                       



                        <div class="cart-table-container">
                            
                            <table class="table table-cart">
                                <thead>
                                    <tr>
                                        <th class="product-col">Product</th>
                                        <th class="price-col">Price</th>
                                        <th class="qty-col">Qty</th>
                                        <th>Shipping Cost</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="product-row">
                                        <td class="product-col">                                            
                                            <figure class="product-image-container">
                                                <a href="product.html" class="product-image">
                                                    <img src="assets/images/products/product-4.jpg" alt="product">
                                                </a>
                                            </figure>
                                            <div class="product-name">
                                                <h2 class="product-title text-xl">
                                                    <a href="product.html">Phillips</a>
                                                </h2>
                                            </div>                                           
                                        </td>
                                        <td>
                                            <div>
                                                <div class="old-price">$15.00</div>
                                                <div class="">$10.00</div>
                                            </div>
                                        </td>
                                        <td>
                                            <input class="vertical-quantity form-control" type="text">aaa
                                        </td>
                                        <td>$1.00</td>
                                        <td>$17.90</td>
                                    </tr>
                                    <tr class="product-action-row">
                                        <td colspan="5" class="pb-2 clearfix">
                                            <div class="float-right">
                                                <a href="#" title="Move to wishlist" class="btn-icon-wish"><span class="sr-only">Wishlist</span><i class="icon-heart"></i></a>
                                                <a href="#" title="Edit product" class="btn-edit"><span class="sr-only">Edit</span><i class="icon-pencil"></i></a>
                                                <a href="#" title="Remove product" class="btn-remove"><span class="sr-only">Remove</span></a>
                                            </div><!-- End .float-right -->
                                        </td>
                                    </tr>

                                    <tr class="product-row">
                                        <td class="product-col">
                                            <figure class="product-image-container">
                                                <a href="product.html" class="product-image">
                                                    <img src="assets/images/products/product-3.jpg" alt="product">
                                                </a>
                                            </figure>
                                            <div class="product-name">
                                                <h2 class="product-title text-xl">
                                                    <a href="product.html">Optical Mouse</a>
                                                </h2>
                                            </div>
                                        </td>
                                        <td>$8.90</td>
                                        <td>
                                            <input class="vertical-quantity form-control" type="text">
                                        </td>
                                        <td>$1.90</td>
                                        <td>$8.90</td>
                                    </tr>
                                    <tr class="product-action-row">
                                        <td colspan="5" class="pb-2 clearfix">
                                            <div class="float-right">
                                                <a href="#" title="Move to wishlist" class="btn-icon-wish"><span class="sr-only">Wishlist</span><i class="icon-heart"></i></a>
                                                <a href="#" title="Edit product" class="btn-edit"><span class="sr-only">Edit</span><i class="icon-pencil"></i></a>
                                                <a href="#" title="Remove product" class="btn-remove"><span class="sr-only">Remove</span></a>
                                            </div><!-- End .float-right -->
                                        </td>
                                    </tr>
                                </tbody>

                                <tfoot>
                                    <tr>
                                        <td colspan="5" class="clearfix">
                                            <div class="clearfix w-100">
                                                <div class="float-left py-2 d-block">
                                                    <h3 class="subtitle">Used Discount Code</h3>
                                                </div>
                                                <div class="float-right">
                                                    <button type="button" class="btn btn-secondary cursor-default" disabled>ABFF24</button>
                                                </div>
                                            </div>
                                            
                                            <div class="clearfix mt-0 w-100">
                                                <div class="float-right col-9 col-sm-6 px-0">
                                                    <form action="#" class="mb-0">
                                                    <div class="input-group">
                                                        <input type="text" class="form-control form-control-sm" placeholder="Enter discount code"  required>
                                                        <div class="input-group-append">
                                                            <button class="btn btn-sm btn-primary apply-cc-btn" type="submit">Apply Discount</button>
                                                        </div>
                                                    </div><!-- End .input-group -->
                                                </form>
                                                </div>
                                            </div>
                                        </td>
                                    </tr> 
                                    
                                    

                                    <!-- <tr>
                                        <td colspan="4" class="clearfix">
                                            <div class="float-left">
                                                <a href="category.html" class="btn btn-outline-secondary">Continue Shopping</a>
                                            </div>

                                            <div class="float-right">
                                                <a href="#" class="btn btn-outline-secondary btn-clear-cart">Clear Shopping Cart</a>
                                                <a href="#" class="btn btn-outline-secondary btn-update-cart">Update Shopping Cart</a>
                                            </div>
                                        </td>
                                    </tr> -->




                                </tfoot>
                            </table>
                        
                            

                            <div>
                                <h2 class="subtitle mb-2">Discount Information</h2>                            
                                <table class="table-striped _table-sm table">
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <td>Discounted rate</td>
                                            <td>40%</td>                                                                
                                        </tr>
                                        <tr>
                                            <td>Coupon applied item</td>
                                            <td>Optical Mouse VX1234</td>                                                                
                                        </tr>
                                        <tr>
                                            <td>Coupon applied item count</td>
                                            <td>1</td>                                                                
                                        </tr>                                    
                                        <tr>
                                            <td>Old price</td>
                                            <td>$107.00 x 1 = $107.00</td>                                                                
                                        </tr>                                    
                                        <tr>
                                            <td>New price</td>
                                            <td>1 x [$107.00 - ($107.00 x 40%)] = $100.00</td>                                                                
                                        </tr>
                                                                                                    
                                    </tbody>
                                </table>
                            </div>

                        </div>

                        <hr>
                        <div class="mt-3 mb-2">
                            <div class="clearfix">
                                <div class="float-left">
                                    <a href="category.html" class="btn btn-sm btn-outline-secondary">Continue Shopping</a>
                                </div>

                                <div class="float-right">
                                    <a href="#" class="btn btn-primary btn-sm __btn-outline-secondary btn-update-cart">Go to Checkout</a>
                                </div>
                            </div>
                        </div>


                       <!-- 
                       <div class="mt-3">
                            <div class="clearfix">
                                <div class="float-left">
                                    <a href="category.html" class="btn btn-outline-secondary">Continue Shopping</a>
                                </div>

                                <div class="float-right">
                                    <a href="#" class="btn btn-danger btn-clear-cart mr-3">Clear Shopping Cart</a>
                                    <a href="#" class="btn btn-primary __btn-outline-secondary btn-update-cart">Update Shopping Cart</a>
                                </div>
                            </div>
                        </div>
                        -->







                        
                    </div>

                    <div class="col-lg-4">
                        <div class="cart-summary">
                            <h3>Summary</h3>

                            <table class="table table-totals">
                                <tbody>
                                    <tr>
                                        <td>Subtotal</td>
                                        <td>+ $1700.90</td>
                                    </tr>
                                    <tr>
                                        <td>Discount</td>
                                        <td> - $10.90</td>
                                    </tr>
                                    <tr>
                                        <td>Total Shipping Cost</td>
                                        <td>+ $0.00</td>
                                    </tr>                             
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td>Order Total</td>
                                        <td>$1690.00</td>
                                    </tr>
                                </tfoot>
                            </table>

                            <!-- 
                            <div class="checkout-methods">
                                <a href="checkout-shipping.html" class="btn btn-block btn-sm btn-primary">Go to Checkout</a>
                            </div> 
                            -->

                        </div><!-- End .cart-summary -->
                    </div><!-- End .col-lg-4 -->
                </div><!-- End .row -->
            </div><!-- End .container -->

            <div class="mb-6"></div><!-- margin -->
        </main><!-- End .main -->

<?php include 'footer.php';?>       




